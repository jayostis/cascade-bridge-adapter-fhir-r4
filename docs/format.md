# FHIR R4 JSON, as the adapter sees it

Everything below was read from `hl7.org/fhir/R4/` on 2026-09-27 unless a line
says otherwise: the syntax from
[JSON Representation of Resources](https://hl7.org/fhir/R4/json.html), the
envelope from [Bundle](https://hl7.org/fhir/R4/bundle.html) and local
references from [Resource References](https://hl7.org/fhir/R4/references.html).
The FHIR specification is HL7's, published under CC0.

## What a record is

A record is one **resource**: a JSON object whose `resourceType` member names
its type. This release maps `AllergyIntolerance`, `Condition`, `Immunization`,
`Procedure`, `Patient`, `MedicationRequest`, `MedicationStatement`, and an
`Observation` that is a laboratory result, a genomic variant or a diagnostic
implication; a resource of any other type, and any other `Observation`, yields
a finding and no record. A `Medication` is read
through the medication that references it, and is no record of its own.

An `Observation`'s `category` says what kind it is, from
[observation-category](https://hl7.org/fhir/R4/codesystem-observation-category.html):
`laboratory`, `vital-signs`, `social-history` and others. It is optional, so a
code alone may have to tell a lab result from a vital sign: the
[vital signs profile](https://hl7.org/fhir/R4/observation-vitalsigns.html),
read on 2026-10-06, fixes the LOINC code of each vital sign. An `Observation`
with `hasMember` groups others, as a panel does.

A medication names its drug in `medicationCodeableConcept`, or by
`medicationReference` to a `Medication` resource: contained in it, another
entry of its Bundle, or a resource the document does not hold. An Apple Health
export holds one resource per file, so a reference there points outside it.
Every RxNorm and NDC coding of the drug is carried, and the first of them
`medicationCodeableConcept` marks `userSelected` is the medication's selected
code. A `userSelected` on a referenced `Medication`'s coding is not read.

A resource's `id` is the server's logical id, unique for its type on that
server. It is optional: a resource written by a client, or assembled into an
export, may carry none. `meta.versionId`, `meta.lastUpdated` and `meta.source`
are the server's version metadata, and change on a re-fetch of an unchanged
resource.

`resourceType` is not only at a record's root. It names the type of every
resource nested in another, and a contained resource is a resource.

## Variants and interpretations

Two profiles of the
[Genomics Reporting IG](https://hl7.org/fhir/uv/genomics-reporting/STU3/),
read on 2026-10-13, are records. Each is told by its code and never by
`meta.profile`, which senders omit, or by its category, which both profiles
require as `laboratory`. The profiles of a haplotype, a genotype, a therapeutic
implication and a molecular biomarker are not mapped, and stay what their
category makes them.

- **A variant** is an `Observation` coded LOINC 69548-6, a `genomics:Variant`.
  Its value is one of Present, Absent, No call and Indeterminate (LL1971-2), or
  none. Present, or none, makes the record. Any other value makes neither a
  record nor a lab result, and a finding: a variant record says the person has
  the variant, and the vocabulary has no term for its absence.
- **A diagnostic implication** is an `Observation` coded `diagnostic-implication`
  in the IG's `tbd-codes-cs`, a `genomics:VariantInterpretation`. Its
  classification is component 53037-8, a LOINC answer
  [mapped to the five ACMG/AMP classifications](../vocab/fhir-acmg-classifications.ttl):
  any other answer, text alone, or two different answers state none. Its date is
  the day of `issued`, else of `effective[x]`, as the source wrote it in its own
  offset, so `2024-03-21T23:30:00-07:00` is 2024-03-21; a time with less than a
  day's precision is none.
- **Its variant** is the one `Observation` its `derivedFrom` names, by a
  `urn:uuid:` fullUrl, by `Observation/<id>` on a known server or by an absolute
  URL. The interpretation points to that variant's record, named as `rec:patient`
  names a patient, so a record outside the document can be named. A reference to
  a record of the document must be to a variant. With no such reference (a
  `derivedFrom` with an identifier or a display and no reference is none), two,
  or another beside one, the interpretation is a record without the link, and a
  finding. A reference to a contained resource, or to a resource that is not an
  `Observation`, is not read, and leaves a link to one variant intact.

The three elements of a variant are read from its components, by the code of the
component, and each is carried only where the variant states it once; two
different values state none, and a finding.

| component | carried as | rule |
|---|---|---|
| 48004-6, c.HGVS | `genomics:hgvsCDot` | the `code` of a coding under `http://varnomen.hgvs.org`, in the normal form below |
| 81252-9, discrete variant | `genomics:clinvarVariationId` | the digits, with no leading zero, of a code under `http://www.ncbi.nlm.nih.gov/clinvar`: `VCV000090011` is 90011; an RCV or SCV accession is no variation's ID; a code of another system (dbSNP) is not carried |
| 48018-6, gene studied | `genomics:geneSymbol` | the `display` of a coding under `http://www.genenames.org/geneId`, the IG's system, or `http://www.genenames.org`, which the IG's examples write; a display with no code is the symbol, a code with no display is not |

An HGVS expression is written in more than one form, and the vocabulary's shape
takes one: the reference sequence with its version, a colon and `c.`, then the
change. It is read only from the c.HGVS component, and is never composed from
the transcript component (51958-7) beside a bare change.

| written | carried | finding |
|---|---|---|
| `NM_000249.4:c.2042C>T` | `NM_000249.4:c.2042C>T` | none |
| `NM_000249.3(MLH1):c.2042C>T` | `NM_000249.3:c.2042C>T` | the gene is not carried |
| `NM_000249.4(MLH1):c.2042C>T (p.Ala681Val)` | `NM_000249.4:c.2042C>T` | the gene and the protein change are not carried |
| `NM_000249.4(MLH1):c.2042C>T(p.Ala681Val)`, no space before the protein change | `NM_000249.4:c.2042C>T` | the gene and the protein change are not carried |
| `c.769G>A`, the transcript only in 51958-7 | none | no reference sequence |
| `NM_000249:c.2042C>T`, no version | none | no reference sequence |
| `NC_000003.12:g.37048956C>T` | none | not a coding expression |
| two expressions that differ after the gene and the protein change are left out | none | more than one expression |

## The two envelopes

A resource arrives either alone, as the whole document, or as an entry of a
**Bundle**, a resource whose `entry` array holds one object per resource.
Each entry carries the resource under `resource` and, usually, its
`fullUrl`: an absolute URL on the server, or a `urn:uuid:` when the resource
has no server address yet. A reference elsewhere in the Bundle may name an
entry by that `urn:uuid:`. The record is the entry, not the resource inside
it, so the `fullUrl` stays with the resource it names.

## JSON as FHIR writes it

- **A primitive's id and extensions sit beside it** in a member named with a
  leading underscore: `birthDate` and `_birthDate`. In an array, `given` and
  `_given` line up by position, and `null` pads whichever of the two has
  nothing at a position.
- **Objects and arrays are never empty.** An element with no content is
  absent.
- **A contained resource** is in the containing resource's `contained` array,
  has an `id` local to that resource, and is referenced from it as `#` and that
  id.
- **Decimals keep their precision.** `2.00` and `2` are different values of a
  FHIR `decimal`, so the number's text is the value.
- The media type is `application/fhir+json`.

## Codes

A `Coding.system` is not the namespace of its codes' IRIs: FHIR R5 says "there
is no simple formula for determining the correct IRI stem from a
Coding.system" ([RDF](https://hl7.org/fhir/R5/rdf.html#iri-stem), read on
2026-10-10). A code's IRI is the stem
[`vocab/fhir-code-systems.ttl`](../vocab/fhir-code-systems.ttl) gives its
`Coding.system`, then the code percent-encoded. The stem is
cascade-vocabulary's `void:uriSpace`, and HL7 Terminology's where it registers
one, and is never the `Coding.system` URI: SNOMED CT's `http://snomed.info/sct`
names the code system, and its concepts are under `http://snomed.info/id/`.

An NDC is the exception to "then the code": FHIR's NDC code is "the 10 digit NDC
code, with `-` included" ([NDC](https://hl7.org/fhir/R4/ndc.html)), and Cascade's
is 11 digits, so a code is normalised into the stem
`https://ns.cascadeprotocol.org/codes/ndc11/`. It is never FHIR's system URI
with the 10-digit code. Five forms are carried: 11 digits as written; 5-4-2
with its hyphens removed; 4-4-2, 5-3-2 and 5-4-1 with a `0` added to the
segment short of a digit (the labeler, the product, the package). Ten digits
with no hyphens cannot be told apart, and neither can any other value: it is
no code, and a finding.

## The schema

HL7 publishes one JSON Schema for R4, `fhir.schema.json`, pinned byte for byte
at `schema/fhir.schema.json`. It is draft-06, a `oneOf` over every resource
type discriminated by `resourceType`, and its `id` is
`http://hl7.org/fhir/json-schema/4.0`. HL7 serves the same bytes zipped at
`fhir.schema.json.zip`, and publishes no digest beside either. The schema
checks structure and cardinality; FHIR's invariants are FHIRPath, not JSON
Schema, and it checks none of them.

## Versions

R4 is 4.0.1. **DSTU2 (1.0.2) is out of scope**, as is every other version.
A FHIR JSON resource does not state its version. A container may: Apple
Health's `export.xml` gives each FHIR file a `<ClinicalRecord>` with
`fhirVersion="1.0.2"` or `"4.0.1"`, beside `sourceName`, `sourceURL` (the
resource's full URL on its server), `receivedDate` and `resourceFilePath`; its
clinical records include no Patient resource. A document stated to be of
another version yields a finding and no record. The Apple Health facts were
read from cascade-cli's reader and its test fixture, not from a real export,
on 2026-09-26.

## The committed inputs, and what is known about them

The copied inputs are the conformance corpus's general clinical FHIR fixtures,
written by hand for it, not captured from a server: bare resources, each
referencing a patient as `Patient/pat-conformance-1`. What each is for is
their `INVENTORY.md` there, at the commit the crate names.

Three more are example Bundles the Genomics Reporting IG publishes, in that
corpus's `fixtures/genomics/fhir-genomics-ig/`: whole transaction or collection
Bundles, with the ids and fullUrls the IG's authors gave them. The resources in
them that this release does not map (a DiagnosticReport, a Specimen, a Task)
yield findings and no record. The authored Bundles of variants and
interpretations are for the rules above, and the two named for Martin Okafor
are for a story of cascade-vocabulary, jayostis/cascade-vocabulary#138: the
variants and ClinVar's data are real, and the person, the lab, the hospital, the
dates and the identifiers are invented.

The two narrative-only Conditions, `condition-no-id-narrative-diabetes` and
`condition-no-id-narrative-breast-cancer`, and the two id-less
MedicationStatements, `medication-no-id-bare` and `medication-no-id-note-only`,
carry no `subject`, which FHIR R4's schema requires of both types, so the four
fail the schema. Every other input, copied or authored, validates against it.
