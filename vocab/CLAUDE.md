# vocab — Agent Context

This adapter's own namespace, `https://ns.cascadeprotocol.org/adapter/fhir-r4/v1-draft#`,
prefix `fhirr4:`, never `fhir:`, which is HL7's FHIR RDF namespace. No Cascade
term is minted here.

## A lookup table is a concept map, and its rows are transcribed

What a concept map holds, and the form a `skos:notation` is written in, is
[`shapes/concept-map.shapes.ttl`](https://github.com/jayostis/cascade-bridge-spec/blob/main/shapes/concept-map.shapes.ttl)'s
to say, and a failing run prints it.

- `skos:closeMatch` where the code and the term do not mean the same thing.
- **A row is transcribed, never invented.** Adding one, removing one or changing
  what a code maps to changes what this adapter carries; the crate's
  `schema:isBasedOn` for the file says where the rows came from, usually the
  HL7 value set the element is bound to.
- The source accounting's entry for the path holding those values names the map
  with `bridge:lookupIn` and the miss with `bridge:lookupNamesGap`, and the
  mapping query joins the same scheme on the same key. The two halves fold a
  value the same way or a value is mapped and reported as unmapped at once.

## A gap is a kind of problem, never an instance of one

`fhir-gaps.ttl` is the scheme the crate names as `bridge:gapScheme`, and the
only place a findings query may take a body from.

- A `skos:prefLabel` says what the source carries and that nothing carries it
  across. It names no value read from a record, no id, no date, no list and no
  vocabulary version: a value the rule fired on is the finding's `sh:value`, and
  which node it is about is the finding's selector.
- Two sentences that differ only by a value are one gap. Two source elements
  whose loss reads as two sentences are two gaps, even where one rule reports
  both; where one sentence covers both, they open one gap between them.
- Every `skos:broader` names a concept of the specification's `bridge:gapKinds`.
  Adding a kind is a change to [cascade-bridge-spec](https://github.com/jayostis/cascade-bridge-spec).
- A gap whose sentence proposed two `bridge:closedBy` terms names neither until
  the rule is split.

## Adding, removing or renaming a gap

A body a findings query constructs is a gap of this scheme, and outside it is
red. So a findings query, the `fixtures/findings/` files and
`ro-crate-metadata.json` change in the same commit.

A gap no findings query constructs is **not** red. An entry of the source
accounting may report it instead, from its verdict or from its
`bridge:lookupIn`; which entries report, and how many findings each one yields,
is [`engine/sparql.md`](https://github.com/jayostis/cascade-bridge-spec/blob/main/engine/sparql.md)'s
to say. A gap nothing names at all — no query, no entry — is dead, and goes.

A gap whose findings are not `sh:Info` carries its own `sh:resultSeverity`,
and no rule reporting it writes one: severity belongs to the kind of problem
rather than to the rule that finds it.

## A verdict on a path is read, never inferred from its name

The source accounting holds one `bridge:PathEntry` for each path a mapping
reads and each path the judged inputs carry, at every place a resource stands
in a record: the record itself, `/resource` in a Bundle entry, and `/contained`
under either. A path is relative to the record, so the envelopes' paths differ.

- The same member name holds different things under different parents
  (`display` in a `Coding` and in a `Reference`), so a verdict is settled
  against `../in/sparql/`, not against the name.
- Several entries may name one gap: a gap is a kind of problem, and the paths
  that open it are as many as the source has.
- A gap no entry names is a rule about an absence, a construct the judged
  inputs do not carry, or a path whose verdict is not a gap at all. Which one it
  is goes in the pull request, never into a gap minted to close the join.
