# cascade-bridge-adapter-fhir-r4

[![compatibility](https://github.com/jayostis/cascade-bridge-adapter-fhir-r4/actions/workflows/validate.yml/badge.svg?branch=main)](https://github.com/jayostis/cascade-bridge-adapter-fhir-r4/actions/workflows/validate.yml?query=branch%3Amain)

The **Cascade Bridge Adapter** for FHIR R4 JSON: the package of data a
**Cascade Bridge** runs to turn FHIR R4 resources, alone or in a Bundle, into
Cascade records. Import-only.

The contract it is written against is the
[Cascade Bridge Specification](https://github.com/jayostis/cascade-bridge-spec),
and the terms it writes are
[cascade-vocabulary](https://github.com/jayostis/cascade-vocabulary)'s. There is
no code here: an adapter is mappings, schemas, fixtures and a manifest, and the
thing that runs it is a Bridge.

## Layout

```
ro-crate-metadata.json   the adapter manifest, and provenance for every file (RO-Crate 1.2)
compatibility.json       the Bridges that must pass this adapter
docs/format.md           FHIR R4 JSON as the adapter sees it
schema/                  HL7's R4 JSON Schema, byte for byte
in/sparql/               the detect rule, the document table, the mappings and the findings queries
vocab/                   this adapter's own namespace: its gap scheme and source accounting
fixtures/                the test manifest, its inputs, and the expected graphs and findings
.github/workflows/       runs the specification's checks; no logic of its own
```

How a Bridge runs an adapter, and what the lint checks, are the specification's:
[`engine/stages.md`](https://github.com/jayostis/cascade-bridge-spec/blob/main/engine/stages.md)
and [`adapter/validation.md`](https://github.com/jayostis/cascade-bridge-spec/blob/main/adapter/validation.md).

## Licence

Apache-2.0 for the package. HL7's schema is CC0; each file's licence is in
`ro-crate-metadata.json`.
