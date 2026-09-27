# fixtures — Agent Context

The cases a Bridge's harness runs, and the inputs and expected outputs they name.
Nothing here executes; `manifest.ttl` declares the cases and the rule each is
judged by, and the crate records where every file came from.

## Every byte is recorded, and inputs are never edited

Every file under `in/`, `expected/` and `findings/` has its digest in the crate,
and `.gitattributes` and `.editorconfig` protect them from normalisation. A
change updates the crate's digest, size and description in the same commit.

An input is one of two kinds, and the crate says which:

- **Copied**: from `../../conformance`, `fixtures/clinical-fhir/` at the commit
  the crate's `isBasedOn` names, under the same file name, byte for byte, with
  a `sameAs` to its blob.
- **Authored here**: written for a case the conformance corpus does not hold,
  with the date it was written. An authored input is edited only by replacing
  it, as a new file under a new name.

An input is committed once. A case that needs the same bytes twice names one
file in both of its entries.

An expected graph is written by hand from the specification's rules and the
input, never from a Bridge's output or from `../in/sparql/`. A findings file is
a Bridge's own `convert --findings` output over the input beside it, committed
unedited, and compared as a graph, never as bytes: a rerun writes the same
findings under other blank node labels and in another order
([jayostis/cascade-bridge-rs#35](https://github.com/jayostis/cascade-bridge-rs/issues/35)).

## Checks CI cannot run

- Each `sameAs` copy is byte-identical to conformance. Compare against the
  **blobs**, never the worktree: a clone with `core.autocrlf=true` holds those
  files as CRLF, and "fixing" that would break the recorded digests.

  ```
  git -C ../../conformance show <commit>:fixtures/clinical-fhir/X.json | cmp - in/X.json
  ```
