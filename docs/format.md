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
`Observation` that is a laboratory result; a resource of any other type, and
any other `Observation`, yields a finding and no record. A `Medication` is read
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

A resource's `id` is the server's logical id, unique for its type on that
server. It is optional: a resource written by a client, or assembled into an
export, may carry none. `meta.versionId`, `meta.lastUpdated` and `meta.source`
are the server's version metadata, and change on a re-fetch of an unchanged
resource.

`resourceType` is not only at a record's root. It names the type of every
resource nested in another, and a contained resource is a resource.

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

The two narrative-only Conditions, `condition-no-id-narrative-diabetes` and
`condition-no-id-narrative-breast-cancer`, and the two id-less
MedicationStatements, `medication-no-id-bare` and `medication-no-id-note-only`,
carry no `subject`, which FHIR R4's schema requires of both types, so the four
fail the schema. Every other input, copied or authored, validates against it.
