# schema — Agent Context

`fhir.schema.json` is HL7's, pinned byte for byte, and the only file here. It
is a verbatim copy: to change it, replace it from the URL the crate names and
update the crate's digest, size, date read and description in the same commit.
HL7 publishes no digest beside it, so the sha256 in the crate is the only
check; re-download and compare before moving the pin, and record the date.
