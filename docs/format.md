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

An `Organization` is a record where a document names it: the `custodian` or
an `author` of the document's `Composition` references it, as a contained
resource or another entry of its Bundle, and that reference resolves as a
medication's does. The document's `Composition` is one standing alone or the
first entry of a Bundle, which FHIR requires of a document Bundle
([bdl-11](https://hl7.org/fhir/R4/bundle.html#invs)); a Bundle's own `type` is
in no record's dataset, since each entry is lifted alone, so a Bundle of
another type whose first entry is a `Composition` reads as a document too. A
`DocumentReference`'s custodian and authors are those of the document it
describes, not of the file read, so they name no organization. It is named by
the vocabulary's `OrganizationNamingRule` from one `identifier`, as the
vocabulary's `decisions/naming.md` maps and picks it, never by its `id`, which
only its document gives it: a `system` `urn:oid:2.16.840.1.113883.4.6` is the
NPI's URI, `http://hl7.org/fhir/sid/us-npi`, as FHIR's
[identifier registry](https://hl7.org/fhir/R4/identifier-registry.html) gives
it; of the identifiers that are an NPI, or whose `system` is an OID or a UUID
(`urn:oid:`, `urn:uuid:`), or `urn:ietf:rfc:3986` with such a value, the NPI,
else the least by code point of system, then value, whatever order they are
listed in, so the C-CDA adapter names one NPI's organization alike. One with
none is no record, and a document with no custodian names no organization in
its place. Two `Organization`s of one document naming one record give it one
version, from the one the custodian names, else the first in the document, and
the document names the record once in each role; each other is a finding,
`fhirr4:duplicateOrganizationNotCarried`, since its content reaches no
version. Its version carries its `name`, each identifier, typed by its system
where it has one, the NPI's OID as its URI, and each address, its `text` or
else its first four `line`s, city, state, postal code and country, one to a
line. The document names it in
`cascade:CustodianRole` or `cascade:AuthorRole`. The `Composition` and the
`DocumentReference` are no records. An `Organization` a diagnostic
implication's `performer` references, resolved and named alike, is a record
too, and the document names it in no role.

An `Organization` from a server, one an entry of a document whose server is
known holds at its top, with an `id` and a `fullUrl` that is no `urn:uuid:`, as
a record from a server is told apart (see Names), is a record whatever names it,
as a pull holds one: named by the vocabulary's `OrganizationNamingRule` from the
server and its `id`, its version carrying what any organization's does, its
arrival its `meta.versionId` and `meta.lastUpdated`, and it states its
`cascade:sourceUrl` and `cascade:sourceRecordId` as any record from a server
does. A document naming it as
custodian or author names that record. Two entries holding an `Organization`
with one `id` are no record, and each a finding. A lab result from a server is
attributed to the one `Organization` its `performer`s name, by
`Organization/<id>` or the server's base followed by that, as the version's
`prov:wasAttributedTo`: that organization's record from the server, whether or
not the document holds it, so a pull fetching it later joins it by name. A
reference made from an entry whose `fullUrl` is a `urn:uuid:`, or to an
`Organization` held under one, or to an `id` two entries hold an
`Organization` under, names none; performers naming two
`Organization`s name none, and each performer is a finding; a performer of
another type is not read. The performing organization is on the version, so a
pull naming another leaves the record's name as it was.

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
A request's `authoredOn` is the day the prescription was written, never the
start of use, which only `effective[x]` gives.

A resource's `id` is the server's logical id, unique for its type on that
server. It is optional: a resource written by a client, or assembled into an
export, may carry none. `meta.versionId`, `meta.lastUpdated` and `meta.source`
are the server's version metadata, and change on a re-fetch of an unchanged
resource.

A sender sends one version of each record. A `history` Bundle, which repeats a type and id and carries `request` and `response` on each entry, is out of scope: the adapter reads neither member, and reads every entry whatever the Bundle's type, so a repeated id names no record. Each version falls back to the document and its selector, and arrives as a record of its own.

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

- **A variant** is an `Observation` coded LOINC 69548-6, a `cascade:GeneticVariantFinding`.
  Its value is one of Present, Absent, No call and Indeterminate (LL1971-2), or
  none. Present, or none, makes the record. Any other value makes neither a
  record nor a lab result, and a finding: a variant record says the person has
  the variant, and the vocabulary has no term for its absence.
- **A diagnostic implication** is an `Observation` coded `diagnostic-implication`
  in the IG's `tbd-codes-cs`, a `cascade:VariantInterpretation`. Its
  classification is component 53037-8, a LOINC answer
  [mapped to the five ACMG/AMP classifications](../vocab/fhir-acmg-classifications.ttl):
  any other answer, text alone, or two different answers state none. Its date is
  the day of `issued`, else of `effective[x]`, as the source wrote it in its own
  offset, so `2024-03-21T23:30:00-07:00` is 2024-03-21; a date written to the
  year or the month is that year or month, `xsd:gYear` or `xsd:gYearMonth`, as
  every partial date is.
- **Its variant** is the one `Observation` its `derivedFrom` names, by a
  `urn:uuid:` fullUrl, by `Observation/<id>` on a known server or by an absolute
  URL. The interpretation points to that variant's record, named as `cascade:patient`
  names a patient, so a record outside the document can be named. A `urn:uuid:`
  the document does not hold, an absolute URL whose base is not a plain
  scheme, host, port and path, and an `Observation/<id>` made from an entry whose
  fullUrl is a `urn:uuid:` or to an entry held under one, which FHIR gives no
  meaning, name no record. A reference to
  a record of the document must be to a variant. With no such reference (a
  `derivedFrom` with an identifier or a display and no reference is none), two,
  or another beside one, the interpretation is a record without the link, and a
  finding. A reference to a contained resource, or to a resource that is not an
  `Observation`, is not read, and leaves a link to one variant intact.
- **Its lab** is the organization record of the `Organization` its `performer`
  names, written as the version's `prov:wasAttributedTo`. A performer that is no
  `Organization` of the document, or one with no identifier to name it by and not
  from a server, is not read. Performers that name no organization record, or two, name none, and
  each performer is a finding: a lab is never lost silently.

The three elements of a variant are read from its components, by the code of the
component, and each is carried only where the variant states it once; two
different values state none, and a finding.

| component | carried as | rule |
|---|---|---|
| 48004-6, c.HGVS | `cascade:hgvsCodingDnaExpression` | the `code` of a coding under `http://varnomen.hgvs.org`, in the normal form below |
| 81252-9, discrete variant | `cascade:clinvarVariationId` | the digits, with no leading zero, of a code under `http://www.ncbi.nlm.nih.gov/clinvar`: `VCV000090011` is 90011; an RCV or SCV accession is no variation's ID; a code of another system (dbSNP) is not carried |
| 48018-6, gene studied | `cascade:geneSymbol` | the `display` of a coding under `http://www.genenames.org/geneId`, the IG's system, or `http://www.genenames.org`, which the IG's examples write; a display with no code is the symbol, a code with no display is not |

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

## Names

A record's name is one of cascade-vocabulary's naming rules, each the body of
its `tests/vectors/naming/<rule>.rq` there, copied into
[`in/sparql/record.rq`](../in/sparql/record.rq) and hashed once for the rule
picked. The rules and why they are what they are are
[cascade-vocabulary's naming note](https://github.com/jayostis/cascade-vocabulary/blob/alpha/naming/decisions/naming.md).

| a resource | its rule | its inputs, after the rule |
|---|---|---|
| a top-level resource that the server rule applies to | `RecordFromServerNamingRule` | the server's base URL, the resource type, the `id` |
| any other top-level resource | `RecordFromDocumentNamingRule` | the document's `ni:` name, the record's selector |
| a `contained` resource with an `id` | `ContainedRecordNamingRule` | its container's name, the container's `meta.versionId` or else its `meta.lastUpdated` or else `""`, the `id` |
| a `contained` resource with no `id` | `RecordFromDocumentNamingRule` | the document's `ni:` name, the resource's pointer |

**The server rule applies** to a top-level resource where the document states
`cascade:serverBaseUrl`, the resource has an `id`, its entry's `fullUrl`, if
any, is not a `urn:uuid:`, and no other top-level resource of its type in the document
has that `id`. Its `cascade:sourceUrl` is the base URL, the type and the `id`.

**The document names the rest.** A `urn:uuid:` `fullUrl` is a generator's,
unique within its Bundle only, and the server rule never uses it as identity
across documents; a document with no base URL has no server to name. A top-level
resource whose type and `id` another top-level resource of the document shares is named by
its position: one name for both would fuse two resources the source gave one
`id`. Each top-level resource sharing an `id`, or a `urn:uuid:` `fullUrl`, with another is a finding,
`fhirr4:resourceIdRepeated`. A reference to a shared `id` names no record, since
the document names both. A record named by the document carries no
`cascade:sourceUrl`: its name is not its id's.

**A contained resource** is named within its container, by the container's name
and source version, so that a renumbered `contained` list does not make one
resource a revision of another. With no `id` it has nothing to be named by but
its position, and the document names it. It carries `cascade:sourceUrl` only
where its container is named by the server: the container's address, `#` and
its `id`.

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

## Dates, and values absent for a reason

As cascade-vocabulary's
[ruling on partial dates and absent reasons](https://github.com/jayostis/cascade-vocabulary/blob/main/decisions/partial-dates-and-absent-reasons.md)
says, read on 2026-10-24:

- **A date is typed by the precision FHIR wrote it to.** A `date` or `dateTime`
  is "YYYY, YYYY-MM, or YYYY-MM-DD", or a time ([datatypes](https://hl7.org/fhir/R4/datatypes.html)):
  `2019` is an `xsd:gYear`, `2019-03` an `xsd:gYearMonth`, a day an `xsd:date`
  and a time an `xsd:dateTime`, as FHIR's own RDF types them. Nothing is padded
  but a time written to the minute, `2023-05-31T14:00-05:00`, as C-CDA on FHIR
  writes one though R4 asks for seconds: it is held padded to the second,
  `2023-05-31T14:00:00-05:00`, beside a `cascade:PaddedDateTime` node
  `<version>#padded-` and the property's local name keeping what was written.
- **A lab result's `dataAbsentReason`** stands for its value, which obs-6 says
  it has none of ([Observation](https://hl7.org/fhir/R4/observation-definitions.html)),
  and is a `cascade:ValueAbsentForReason` node of the version naming
  `cascade:resultValueKind`. Each coding in FHIR's
  [data absent reasons](https://terminology.hl7.org/CodeSystem-data-absent-reason.html)
  or [v3 NullFlavor](https://terminology.hl7.org/CodeSystem-v3-NullFlavor.html)
  is carried as its code's IRI, a code the CodeSystem defines only; any other
  coding is not carried, and is a finding, as is a reason given as text alone.
- **The [data-absent-reason extension](https://hl7.org/fhir/R4/extension-data-absent-reason.html)**
  on the `_` member of a date the adapter maps (`_birthDate`, `_onsetDateTime`,
  `_abatementDateTime`, `_occurrenceDateTime`, `_performedDateTime`,
  `_effectiveDateTime`, `_authoredOn`), where the date itself is absent, is such
  a node naming the date's property; a code its CodeSystem does not define is a
  finding.

## Codes

A `Coding.system` is not the namespace of its codes' IRIs: FHIR R5 says "there
is no simple formula for determining the correct IRI stem from a
Coding.system" ([RDF](https://hl7.org/fhir/R5/rdf.html#iri-stem), read on
2026-10-10). A code's IRI is the stem
[`vocab/fhir-code-systems.ttl`](../vocab/fhir-code-systems.ttl) gives its
`Coding.system`, which the row holds as `cascade:codingSystemUri`, then the code
percent-encoded. The stem is cascade-vocabulary's `void:uriSpace`, as its
[code IRIs ruling](https://github.com/jayostis/cascade-vocabulary/blob/main/decisions/code-iris.md)
gives it, and is never the `Coding.system` URI: SNOMED CT's `http://snomed.info/sct`
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

An `Immunization`'s `vaccineCode` is written as every CVX coding it carries, one `cascade:vaccineCode` each.

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
