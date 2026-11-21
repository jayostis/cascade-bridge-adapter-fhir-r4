window.BENCHMARK_DATA = {
  "lastUpdate": 1795297904744,
  "repoUrl": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-fhir-r4",
  "entries": {
    "Bridge performance": [
      {
        "commit": {
          "author": {
            "email": "jayostis@gmail.com",
            "name": "jayostis",
            "username": "jayostis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbaa314e9438da8c08e8d3bf233e25702b665f30",
          "message": "Merge pull request #75 from jayostis/feat/perf-files\n\nci(perf): a performance file for each main run",
          "timestamp": "2026-11-19T13:00:18-08:00",
          "tree_id": "3b0cd4ba83ed868e6454f3c5353f5d8f2dbd1bb0",
          "url": "https://github.com/jayostis/cascade-bridge-adapter-fhir-r4/commit/bbaa314e9438da8c08e8d3bf233e25702b665f30"
        },
        "date": 1795122098351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fhir-r4-lab-pull-3000/convert/first",
            "value": 6.735016,
            "range": "6.539929-6.854611",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. A pull of 3,000 lab results in one FHIR R4 searchset Bundle. sha256 69b4daac45fd32449b8c290be9a7551566b537a6171218e8125169e94ca5882b, 2760035 bytes"
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/second",
            "value": 6.449738,
            "range": "6.059518-6.467605",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/profiled",
            "value": 7.157981,
            "range": "7.157981-7.157981",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/rss",
            "value": 430043136,
            "range": "376586240-434958336",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-lab-pull-3000/records",
            "value": 3004,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. A pull of 3,000 lab results in one FHIR R4 searchset Bundle."
          },
          {
            "name": "fhir-r4-lab-pull-3000/triples",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/findings",
            "value": 3006,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-lab-pull-3000/fallbacks",
            "value": 0,
            "unit": "{count}",
            "extra": "Record executions the general evaluator answered because a query was not compiled or a compiled plan gave up. The detect query, which runs once, is not counted."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/coding-system-table.rq",
            "value": 0.063221,
            "range": "0.063221-0.063221",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-table.rq",
            "value": 0.009596,
            "range": "0.009596-0.009596",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-table.rq",
            "value": 0.019453,
            "range": "0.019453-0.019453",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-table.rq",
            "value": 0.010561,
            "range": "0.010561-0.010561",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document-table.rq",
            "value": 0.005854,
            "range": "0.005854-0.005854",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-table.rq",
            "value": 0.019013,
            "range": "0.019013-0.019013",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-table.rq",
            "value": 0.008428,
            "range": "0.008428-0.008428",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-table.rq",
            "value": 0.009222,
            "range": "0.009222-0.009222",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reasons.rq",
            "value": 0.064351,
            "range": "0.064351-0.064351",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/allergy-intolerance.rq",
            "value": 0.011221,
            "range": "0.011221-0.011221",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/attachments.rq",
            "value": 0.01212,
            "range": "0.01212-0.01212",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/condition.rq",
            "value": 0.010704,
            "range": "0.010704-0.010704",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/immunization.rq",
            "value": 0.008992,
            "range": "0.008992-0.008992",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-codes.rq",
            "value": 0.10651,
            "range": "0.10651-0.10651",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-identifiers.rq",
            "value": 0.02481,
            "range": "0.02481-0.02481",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-performer.rq",
            "value": 0.004129,
            "range": "0.004129-0.004129",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-quantities.rq",
            "value": 0.113801,
            "range": "0.113801-0.113801",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result.rq",
            "value": 0.122947,
            "range": "0.122947-0.122947",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription.rq",
            "value": 0.012814,
            "range": "0.012814-0.012814",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense.rq",
            "value": 0.00928,
            "range": "0.00928-0.00928",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-supply-and-dosages.rq",
            "value": 0.011277,
            "range": "0.011277-0.011277",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication.rq",
            "value": 0.010522,
            "range": "0.010522-0.010522",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-text.rq",
            "value": 0.03226,
            "range": "0.03226-0.03226",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document.rq",
            "value": 0.009009,
            "range": "0.009009-0.009009",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-from-server.rq",
            "value": 0.005874,
            "range": "0.005874-0.005874",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization.rq",
            "value": 0.013184,
            "range": "0.013184-0.013184",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient.rq",
            "value": 0.009556,
            "range": "0.009556-0.009556",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/procedure.rq",
            "value": 0.008361,
            "range": "0.008361-0.008361",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/record.rq",
            "value": 0.283234,
            "range": "0.283234-0.283234",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-performer.rq",
            "value": 0.003783,
            "range": "0.003783-0.003783",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-results.rq",
            "value": 0.011942,
            "range": "0.011942-0.011942",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report.rq",
            "value": 0.008583,
            "range": "0.008583-0.008583",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation.rq",
            "value": 0.01166,
            "range": "0.01166-0.01166",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant.rq",
            "value": 0.01063,
            "range": "0.01063-0.01063",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reason-findings.rq",
            "value": 0.042219,
            "range": "0.042219-0.042219",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/category-text-findings.rq",
            "value": 0.013472,
            "range": "0.013472-0.013472",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/code-findings.rq",
            "value": 0.009854,
            "range": "0.009854-0.009854",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/date-findings.rq",
            "value": 0.045154,
            "range": "0.045154-0.045154",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-version-findings.rq",
            "value": 0.001445,
            "range": "0.001445-0.001445",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-findings.rq",
            "value": 0.083409,
            "range": "0.083409-0.083409",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-findings.rq",
            "value": 0.010636,
            "range": "0.010636-0.010636",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.011632,
            "range": "0.011632-0.011632",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-findings.rq",
            "value": 0.070951,
            "range": "0.070951-0.070951",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-findings.rq",
            "value": 0.007333,
            "range": "0.007333-0.007333",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-component-findings.rq",
            "value": 0.011527,
            "range": "0.011527-0.011527",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-findings.rq",
            "value": 0.070742,
            "range": "0.070742-0.070742",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-findings.rq",
            "value": 0.009169,
            "range": "0.009169-0.009169",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-findings.rq",
            "value": 0.00771,
            "range": "0.00771-0.00771",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-reference-findings.rq",
            "value": 0.057298,
            "range": "0.057298-0.057298",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/recorded-date-findings.rq",
            "value": 0.010435,
            "range": "0.010435-0.010435",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-display-findings.rq",
            "value": 0.03714,
            "range": "0.03714-0.03714",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-without-server-findings.rq",
            "value": 0.042138,
            "range": "0.042138-0.042138",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/repeated-id-findings.rq",
            "value": 0.030179,
            "range": "0.030179-0.030179",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-findings.rq",
            "value": 0.013055,
            "range": "0.013055-0.013055",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-result-findings.rq",
            "value": 0.012099,
            "range": "0.012099-0.012099",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/resource-type-findings.rq",
            "value": 0.012211,
            "range": "0.012211-0.012211",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-findings.rq",
            "value": 0.023815,
            "range": "0.023815-0.023815",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-findings.rq",
            "value": 0.012603,
            "range": "0.012603-0.012603",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/detect.rq",
            "value": 0.007585,
            "range": "0.007585-0.007585",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/document-table",
            "value": 0.183281,
            "range": "0.183281-0.183281",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/lift",
            "value": 0.371018,
            "range": "0.371018-0.371018",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/source-validation",
            "value": 1.191748,
            "range": "1.191748-1.191748",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/accounting",
            "value": 0.019195,
            "range": "0.019195-0.019195",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/dataset",
            "value": 0.009785,
            "range": "0.009785-0.009785",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/index",
            "value": 0.20729,
            "range": "0.20729-0.20729",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/mapping",
            "value": 0.966623,
            "range": "0.966623-0.966623",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/records",
            "value": 0.21634,
            "range": "0.21634-0.21634",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/output-validation",
            "value": 2.683034,
            "range": "2.683034-2.683034",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/findings",
            "value": 0.8421,
            "range": "0.8421-0.8421",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unresolved-addresses",
            "value": 0.034573,
            "range": "0.034573-0.034573",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/detect",
            "value": 0.007692,
            "range": "0.007692-0.007692",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/summary",
            "value": 0.017137,
            "range": "0.017137-0.017137",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/serialising",
            "value": 0.177684,
            "range": "0.177684-0.177684",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unaccounted",
            "value": 0.230481,
            "range": "0.230481-0.230481",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/graph",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 37ddd3ff45eedcca686486482a5dd0ea90120d791c04352fb96a41e20d5fe7ac"
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/findings",
            "value": 45090,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 21239a39a4729ba969bd423ee6088a728e8605fcfbcd31a1c9d285695c6251e5"
          },
          {
            "name": "fhir-r4/load",
            "value": 0.764549,
            "range": "0.760433-0.770263",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "fhir-r4/load/read-files",
            "value": 0.011149,
            "range": "0.01002-0.012149",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "fhir-r4/load/prepare",
            "value": 0.754529,
            "range": "0.749285-0.758114",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "fhir-r4/boot/read-wasm",
            "value": 0.004794,
            "range": "0.004705-0.005336",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "fhir-r4/boot/compile-wasm",
            "value": 0.017453,
            "range": "0.017354-0.019744",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "fhir-r4/boot/instantiate-wasm",
            "value": 0.001366,
            "range": "0.001243-0.002231",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bbaa314e9438da8c08e8d3bf233e25702b665f30",
          "message": "Merge pull request #75 from jayostis/feat/perf-files\n\nci(perf): a performance file for each main run",
          "timestamp": "2026-11-19T21:00:18Z",
          "url": "https://github.com/jayostis/cascade-bridge-adapter-fhir-r4/commit/bbaa314e9438da8c08e8d3bf233e25702b665f30"
        },
        "date": 1795147198735,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fhir-r4-lab-pull-3000/convert/first",
            "value": 9.056362,
            "range": "8.906851-9.180981",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. A pull of 3,000 lab results in one FHIR R4 searchset Bundle. sha256 69b4daac45fd32449b8c290be9a7551566b537a6171218e8125169e94ca5882b, 2760035 bytes"
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/second",
            "value": 8.167215,
            "range": "8.095102-8.431214",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/profiled",
            "value": 8.692805,
            "range": "8.692805-8.692805",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/rss",
            "value": 416292864,
            "range": "399855616-461193216",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-lab-pull-3000/records",
            "value": 3004,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. A pull of 3,000 lab results in one FHIR R4 searchset Bundle."
          },
          {
            "name": "fhir-r4-lab-pull-3000/triples",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/findings",
            "value": 3006,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-lab-pull-3000/fallbacks",
            "value": 0,
            "unit": "{count}",
            "extra": "Record executions the general evaluator answered because a query was not compiled or a compiled plan gave up. The detect query, which runs once, is not counted."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/coding-system-table.rq",
            "value": 0.082712,
            "range": "0.082712-0.082712",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-table.rq",
            "value": 0.013182,
            "range": "0.013182-0.013182",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-table.rq",
            "value": 0.026468,
            "range": "0.026468-0.026468",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-table.rq",
            "value": 0.014277,
            "range": "0.014277-0.014277",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document-table.rq",
            "value": 0.007455,
            "range": "0.007455-0.007455",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-table.rq",
            "value": 0.025207,
            "range": "0.025207-0.025207",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-table.rq",
            "value": 0.010965,
            "range": "0.010965-0.010965",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-table.rq",
            "value": 0.011905,
            "range": "0.011905-0.011905",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reasons.rq",
            "value": 0.077659,
            "range": "0.077659-0.077659",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/allergy-intolerance.rq",
            "value": 0.01346,
            "range": "0.01346-0.01346",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/attachments.rq",
            "value": 0.014044,
            "range": "0.014044-0.014044",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/condition.rq",
            "value": 0.011549,
            "range": "0.011549-0.011549",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/immunization.rq",
            "value": 0.010338,
            "range": "0.010338-0.010338",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-codes.rq",
            "value": 0.126894,
            "range": "0.126894-0.126894",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-identifiers.rq",
            "value": 0.0299,
            "range": "0.0299-0.0299",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-performer.rq",
            "value": 0.005198,
            "range": "0.005198-0.005198",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-quantities.rq",
            "value": 0.138208,
            "range": "0.138208-0.138208",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result.rq",
            "value": 0.1499,
            "range": "0.1499-0.1499",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription.rq",
            "value": 0.016371,
            "range": "0.016371-0.016371",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense.rq",
            "value": 0.010677,
            "range": "0.010677-0.010677",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-supply-and-dosages.rq",
            "value": 0.012988,
            "range": "0.012988-0.012988",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication.rq",
            "value": 0.011996,
            "range": "0.011996-0.011996",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-text.rq",
            "value": 0.038452,
            "range": "0.038452-0.038452",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document.rq",
            "value": 0.009954,
            "range": "0.009954-0.009954",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-from-server.rq",
            "value": 0.006388,
            "range": "0.006388-0.006388",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization.rq",
            "value": 0.015366,
            "range": "0.015366-0.015366",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient.rq",
            "value": 0.011284,
            "range": "0.011284-0.011284",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/procedure.rq",
            "value": 0.010256,
            "range": "0.010256-0.010256",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/record.rq",
            "value": 0.345624,
            "range": "0.345624-0.345624",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-performer.rq",
            "value": 0.00531,
            "range": "0.00531-0.00531",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-results.rq",
            "value": 0.015029,
            "range": "0.015029-0.015029",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report.rq",
            "value": 0.010494,
            "range": "0.010494-0.010494",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation.rq",
            "value": 0.01451,
            "range": "0.01451-0.01451",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant.rq",
            "value": 0.012698,
            "range": "0.012698-0.012698",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reason-findings.rq",
            "value": 0.051329,
            "range": "0.051329-0.051329",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/category-text-findings.rq",
            "value": 0.016,
            "range": "0.016-0.016",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/code-findings.rq",
            "value": 0.011353,
            "range": "0.011353-0.011353",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/date-findings.rq",
            "value": 0.050655,
            "range": "0.050655-0.050655",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-version-findings.rq",
            "value": 0.001802,
            "range": "0.001802-0.001802",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-findings.rq",
            "value": 0.098139,
            "range": "0.098139-0.098139",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-findings.rq",
            "value": 0.011776,
            "range": "0.011776-0.011776",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.013116,
            "range": "0.013116-0.013116",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-findings.rq",
            "value": 0.083316,
            "range": "0.083316-0.083316",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-findings.rq",
            "value": 0.008533,
            "range": "0.008533-0.008533",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-component-findings.rq",
            "value": 0.01315,
            "range": "0.01315-0.01315",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-findings.rq",
            "value": 0.082826,
            "range": "0.082826-0.082826",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-findings.rq",
            "value": 0.011415,
            "range": "0.011415-0.011415",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-findings.rq",
            "value": 0.009332,
            "range": "0.009332-0.009332",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-reference-findings.rq",
            "value": 0.068551,
            "range": "0.068551-0.068551",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/recorded-date-findings.rq",
            "value": 0.012711,
            "range": "0.012711-0.012711",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-display-findings.rq",
            "value": 0.045813,
            "range": "0.045813-0.045813",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-without-server-findings.rq",
            "value": 0.052486,
            "range": "0.052486-0.052486",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/repeated-id-findings.rq",
            "value": 0.033081,
            "range": "0.033081-0.033081",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-findings.rq",
            "value": 0.016237,
            "range": "0.016237-0.016237",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-result-findings.rq",
            "value": 0.014868,
            "range": "0.014868-0.014868",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/resource-type-findings.rq",
            "value": 0.016399,
            "range": "0.016399-0.016399",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-findings.rq",
            "value": 0.024029,
            "range": "0.024029-0.024029",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-findings.rq",
            "value": 0.014825,
            "range": "0.014825-0.014825",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/detect.rq",
            "value": 0.009882,
            "range": "0.009882-0.009882",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/document-table",
            "value": 0.245205,
            "range": "0.245205-0.245205",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/lift",
            "value": 0.482441,
            "range": "0.482441-0.482441",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/source-validation",
            "value": 1.400225,
            "range": "1.400225-1.400225",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/accounting",
            "value": 0.020757,
            "range": "0.020757-0.020757",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/dataset",
            "value": 0.012302,
            "range": "0.012302-0.012302",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/index",
            "value": 0.25602,
            "range": "0.25602-0.25602",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/mapping",
            "value": 1.167616,
            "range": "1.167616-1.167616",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/records",
            "value": 0.262528,
            "range": "0.262528-0.262528",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/output-validation",
            "value": 3.299695,
            "range": "3.299695-3.299695",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/findings",
            "value": 1.005446,
            "range": "1.005446-1.005446",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unresolved-addresses",
            "value": 0.04104,
            "range": "0.04104-0.04104",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/detect",
            "value": 0.009941,
            "range": "0.009941-0.009941",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/summary",
            "value": 0.019161,
            "range": "0.019161-0.019161",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/serialising",
            "value": 0.205904,
            "range": "0.205904-0.205904",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unaccounted",
            "value": 0.264523,
            "range": "0.264523-0.264523",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/graph",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 37ddd3ff45eedcca686486482a5dd0ea90120d791c04352fb96a41e20d5fe7ac"
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/findings",
            "value": 45090,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 21239a39a4729ba969bd423ee6088a728e8605fcfbcd31a1c9d285695c6251e5"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/first",
            "value": 3.121394,
            "range": "3.113115-3.242267",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle. sha256 2703dc1e7e920fa1e45d16c58f8338ef13b3cc1916ee40ffa461112d54dce5de, 1098812 bytes"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/second",
            "value": 2.736497,
            "range": "2.68402-2.769296",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/profiled",
            "value": 3.36974,
            "range": "3.36974-3.36974",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/first",
            "value": 86179840,
            "range": "69402624-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/second",
            "value": 86179840,
            "range": "69402624-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/rss",
            "value": 370225152,
            "range": "354213888-386928640",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/records",
            "value": 647,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/triples",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/findings",
            "value": 2256,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/coding-system-table.rq",
            "value": 0.02734,
            "range": "0.02734-0.02734",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-table.rq",
            "value": 0.004362,
            "range": "0.004362-0.004362",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-table.rq",
            "value": 0.005984,
            "range": "0.005984-0.005984",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-table.rq",
            "value": 0.004203,
            "range": "0.004203-0.004203",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document-table.rq",
            "value": 0.002618,
            "range": "0.002618-0.002618",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-table.rq",
            "value": 0.006289,
            "range": "0.006289-0.006289",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-table.rq",
            "value": 0.002886,
            "range": "0.002886-0.002886",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-table.rq",
            "value": 0.003063,
            "range": "0.003063-0.003063",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reasons.rq",
            "value": 0.026589,
            "range": "0.026589-0.026589",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/allergy-intolerance.rq",
            "value": 0.00556,
            "range": "0.00556-0.00556",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/attachments.rq",
            "value": 0.005406,
            "range": "0.005406-0.005406",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/condition.rq",
            "value": 0.011082,
            "range": "0.011082-0.011082",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/immunization.rq",
            "value": 0.004456,
            "range": "0.004456-0.004456",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-codes.rq",
            "value": 0.025125,
            "range": "0.025125-0.025125",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-identifiers.rq",
            "value": 0.007212,
            "range": "0.007212-0.007212",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-performer.rq",
            "value": 0.001677,
            "range": "0.001677-0.001677",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-quantities.rq",
            "value": 0.025701,
            "range": "0.025701-0.025701",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result.rq",
            "value": 0.032345,
            "range": "0.032345-0.032345",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription.rq",
            "value": 0.00504,
            "range": "0.00504-0.00504",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense.rq",
            "value": 0.003525,
            "range": "0.003525-0.003525",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-supply-and-dosages.rq",
            "value": 0.011759,
            "range": "0.011759-0.011759",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication.rq",
            "value": 0.012031,
            "range": "0.012031-0.012031",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-text.rq",
            "value": 0.013795,
            "range": "0.013795-0.013795",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document.rq",
            "value": 0.003878,
            "range": "0.003878-0.003878",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-from-server.rq",
            "value": 0.002328,
            "range": "0.002328-0.002328",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization.rq",
            "value": 0.005023,
            "range": "0.005023-0.005023",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient.rq",
            "value": 0.003936,
            "range": "0.003936-0.003936",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/procedure.rq",
            "value": 0.007796,
            "range": "0.007796-0.007796",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/record.rq",
            "value": 0.09844,
            "range": "0.09844-0.09844",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-performer.rq",
            "value": 0.001837,
            "range": "0.001837-0.001837",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-results.rq",
            "value": 0.00469,
            "range": "0.00469-0.00469",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report.rq",
            "value": 0.003596,
            "range": "0.003596-0.003596",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation.rq",
            "value": 0.004595,
            "range": "0.004595-0.004595",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant.rq",
            "value": 0.00392,
            "range": "0.00392-0.00392",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reason-findings.rq",
            "value": 0.017194,
            "range": "0.017194-0.017194",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/category-text-findings.rq",
            "value": 0.005866,
            "range": "0.005866-0.005866",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/code-findings.rq",
            "value": 0.005091,
            "range": "0.005091-0.005091",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/date-findings.rq",
            "value": 0.021149,
            "range": "0.021149-0.021149",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-version-findings.rq",
            "value": 0.000536,
            "range": "0.000536-0.000536",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-findings.rq",
            "value": 0.027867,
            "range": "0.027867-0.027867",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-findings.rq",
            "value": 0.003889,
            "range": "0.003889-0.003889",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.004848,
            "range": "0.004848-0.004848",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-findings.rq",
            "value": 0.03831,
            "range": "0.03831-0.03831",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-findings.rq",
            "value": 0.003101,
            "range": "0.003101-0.003101",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-component-findings.rq",
            "value": 0.004462,
            "range": "0.004462-0.004462",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-findings.rq",
            "value": 0.01889,
            "range": "0.01889-0.01889",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-findings.rq",
            "value": 0.003458,
            "range": "0.003458-0.003458",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-findings.rq",
            "value": 0.00303,
            "range": "0.00303-0.00303",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-reference-findings.rq",
            "value": 0.023683,
            "range": "0.023683-0.023683",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/recorded-date-findings.rq",
            "value": 0.004595,
            "range": "0.004595-0.004595",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-display-findings.rq",
            "value": 0.013605,
            "range": "0.013605-0.013605",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-without-server-findings.rq",
            "value": 0.014284,
            "range": "0.014284-0.014284",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/repeated-id-findings.rq",
            "value": 0.008871,
            "range": "0.008871-0.008871",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-findings.rq",
            "value": 0.005153,
            "range": "0.005153-0.005153",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-result-findings.rq",
            "value": 0.004876,
            "range": "0.004876-0.004876",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/resource-type-findings.rq",
            "value": 0.004571,
            "range": "0.004571-0.004571",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-findings.rq",
            "value": 0.006557,
            "range": "0.006557-0.006557",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-findings.rq",
            "value": 0.004434,
            "range": "0.004434-0.004434",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/detect.rq",
            "value": 0.010047,
            "range": "0.010047-0.010047",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/document-table",
            "value": 0.073242,
            "range": "0.073242-0.073242",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/lift",
            "value": 0.160806,
            "range": "0.160806-0.160806",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/source-validation",
            "value": 0.52109,
            "range": "0.52109-0.52109",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/accounting",
            "value": 0.03446,
            "range": "0.03446-0.03446",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/dataset",
            "value": 0.003978,
            "range": "0.003978-0.003978",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/index",
            "value": 0.085718,
            "range": "0.085718-0.085718",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/mapping",
            "value": 0.344626,
            "range": "0.344626-0.344626",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/records",
            "value": 0.759181,
            "range": "0.759181-0.759181",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/output-validation",
            "value": 0.857261,
            "range": "0.857261-0.857261",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/findings",
            "value": 0.319676,
            "range": "0.319676-0.319676",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unresolved-addresses",
            "value": 0.01316,
            "range": "0.01316-0.01316",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/detect",
            "value": 0.010117,
            "range": "0.010117-0.010117",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/summary",
            "value": 0.006156,
            "range": "0.006156-0.006156",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/serialising",
            "value": 0.08207,
            "range": "0.08207-0.08207",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unaccounted",
            "value": 0.098199,
            "range": "0.098199-0.098199",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/graph",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7cc449ffbde5128e52fafcf8acfb64362df9b08f54ac053668923208f8175856"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/findings",
            "value": 33875,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 b652127fa85ae51be3efc3f467bdff274a9e99631bf26d3f1bccb60d4dc5eb7d"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/first",
            "value": 72.637062,
            "range": "71.126454-74.419162",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of one person, a 51 MB FHIR R4 Bundle. sha256 f20b86408066ece2d25a7b02d380b7652f22d16df9dab613a0c73c9969b17da8, 51227791 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/second",
            "value": 68.52032,
            "range": "67.906425-70.132814",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/profiled",
            "value": 72.516325,
            "range": "72.516325-72.516325",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/first",
            "value": 2518876160,
            "range": "2518876160-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/second",
            "value": 2518876160,
            "range": "2518876160-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/rss",
            "value": 3344240640,
            "range": "3341512704-3388235776",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime/records",
            "value": 16833,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of one person, a 51 MB FHIR R4 Bundle."
          },
          {
            "name": "fhir-r4-synthea-lifetime/triples",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/findings",
            "value": 267199,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/coding-system-table.rq",
            "value": 0.65948,
            "range": "0.65948-0.65948",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-table.rq",
            "value": 0.068879,
            "range": "0.068879-0.068879",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-table.rq",
            "value": 0.080839,
            "range": "0.080839-0.080839",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-table.rq",
            "value": 0.101998,
            "range": "0.101998-0.101998",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document-table.rq",
            "value": 0.046923,
            "range": "0.046923-0.046923",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-table.rq",
            "value": 0.11619,
            "range": "0.11619-0.11619",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-table.rq",
            "value": 0.047393,
            "range": "0.047393-0.047393",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-table.rq",
            "value": 0.048724,
            "range": "0.048724-0.048724",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reasons.rq",
            "value": 0.573157,
            "range": "0.573157-0.573157",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/allergy-intolerance.rq",
            "value": 0.096756,
            "range": "0.096756-0.096756",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/attachments.rq",
            "value": 0.149183,
            "range": "0.149183-0.149183",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/condition.rq",
            "value": 0.104434,
            "range": "0.104434-0.104434",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/immunization.rq",
            "value": 0.0816,
            "range": "0.0816-0.0816",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-codes.rq",
            "value": 0.259767,
            "range": "0.259767-0.259767",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-identifiers.rq",
            "value": 0.109468,
            "range": "0.109468-0.109468",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-performer.rq",
            "value": 0.032955,
            "range": "0.032955-0.032955",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-quantities.rq",
            "value": 0.239329,
            "range": "0.239329-0.239329",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result.rq",
            "value": 0.308008,
            "range": "0.308008-0.308008",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription.rq",
            "value": 0.096129,
            "range": "0.096129-0.096129",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense.rq",
            "value": 0.067777,
            "range": "0.067777-0.067777",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-supply-and-dosages.rq",
            "value": 0.11125,
            "range": "0.11125-0.11125",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication.rq",
            "value": 0.16861,
            "range": "0.16861-0.16861",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-text.rq",
            "value": 0.535375,
            "range": "0.535375-0.535375",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document.rq",
            "value": 0.18808,
            "range": "0.18808-0.18808",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-from-server.rq",
            "value": 0.047405,
            "range": "0.047405-0.047405",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization.rq",
            "value": 0.102716,
            "range": "0.102716-0.102716",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient.rq",
            "value": 0.067934,
            "range": "0.067934-0.067934",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/procedure.rq",
            "value": 0.194271,
            "range": "0.194271-0.194271",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/record.rq",
            "value": 1.468977,
            "range": "1.468977-1.468977",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-performer.rq",
            "value": 0.031563,
            "range": "0.031563-0.031563",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-results.rq",
            "value": 0.24074,
            "range": "0.24074-0.24074",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report.rq",
            "value": 0.250168,
            "range": "0.250168-0.250168",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation.rq",
            "value": 0.087235,
            "range": "0.087235-0.087235",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant.rq",
            "value": 0.081269,
            "range": "0.081269-0.081269",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reason-findings.rq",
            "value": 0.286337,
            "range": "0.286337-0.286337",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/category-text-findings.rq",
            "value": 0.115651,
            "range": "0.115651-0.115651",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/code-findings.rq",
            "value": 0.133481,
            "range": "0.133481-0.133481",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/date-findings.rq",
            "value": 0.252165,
            "range": "0.252165-0.252165",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-version-findings.rq",
            "value": 0.010902,
            "range": "0.010902-0.010902",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-findings.rq",
            "value": 0.353102,
            "range": "0.353102-0.353102",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-findings.rq",
            "value": 0.07717,
            "range": "0.07717-0.07717",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.089009,
            "range": "0.089009-0.089009",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-findings.rq",
            "value": 0.941297,
            "range": "0.941297-0.941297",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-findings.rq",
            "value": 0.06272,
            "range": "0.06272-0.06272",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-component-findings.rq",
            "value": 0.117408,
            "range": "0.117408-0.117408",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-findings.rq",
            "value": 0.27783,
            "range": "0.27783-0.27783",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-findings.rq",
            "value": 0.071153,
            "range": "0.071153-0.071153",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-findings.rq",
            "value": 0.06416,
            "range": "0.06416-0.06416",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-reference-findings.rq",
            "value": 0.276872,
            "range": "0.276872-0.276872",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/recorded-date-findings.rq",
            "value": 0.080414,
            "range": "0.080414-0.080414",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-display-findings.rq",
            "value": 0.294978,
            "range": "0.294978-0.294978",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-without-server-findings.rq",
            "value": 0.135708,
            "range": "0.135708-0.135708",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/repeated-id-findings.rq",
            "value": 0.133167,
            "range": "0.133167-0.133167",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-findings.rq",
            "value": 0.180743,
            "range": "0.180743-0.180743",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-result-findings.rq",
            "value": 0.135436,
            "range": "0.135436-0.135436",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/resource-type-findings.rq",
            "value": 1.188278,
            "range": "1.188278-1.188278",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-findings.rq",
            "value": 0.118828,
            "range": "0.118828-0.118828",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-findings.rq",
            "value": 0.095769,
            "range": "0.095769-0.095769",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/detect.rq",
            "value": 0.009857,
            "range": "0.009857-0.009857",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/document-table",
            "value": 1.676903,
            "range": "1.676903-1.676903",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/lift",
            "value": 5.764523,
            "range": "5.764523-5.764523",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/source-validation",
            "value": 12.049987,
            "range": "12.049987-12.049987",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/accounting",
            "value": 3.27758,
            "range": "3.27758-3.27758",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/dataset",
            "value": 0.081523,
            "range": "0.081523-0.081523",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/index",
            "value": 2.802748,
            "range": "2.802748-2.802748",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/mapping",
            "value": 5.925566,
            "range": "5.925566-5.925566",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/records",
            "value": 1.039291,
            "range": "1.039291-1.039291",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/output-validation",
            "value": 18.064441,
            "range": "18.064441-18.064441",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/findings",
            "value": 6.95001,
            "range": "6.95001-6.95001",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unresolved-addresses",
            "value": 0.373334,
            "range": "0.373334-0.373334",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/detect",
            "value": 0.009966,
            "range": "0.009966-0.009966",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/summary",
            "value": 0.136672,
            "range": "0.136672-0.136672",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/serialising",
            "value": 9.183836,
            "range": "9.183836-9.183836",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unaccounted",
            "value": 5.179947,
            "range": "5.179947-5.179947",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/graph",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7a293b50f329e9697119ef46a49e0e55365198126021106ead2739fd58656a51"
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/findings",
            "value": 4050084,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4b992f4465adb297491a6571d8108f50b9d23e5375d2b20338ace4af174e227d"
          },
          {
            "name": "fhir-r4/load",
            "value": 1.038742,
            "range": "0.975495-1.221337",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "fhir-r4/load/read-files",
            "value": 0.015744,
            "range": "0.012802-0.016971",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "fhir-r4/load/prepare",
            "value": 1.023165,
            "range": "0.961286-1.20498",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "fhir-r4/boot/read-wasm",
            "value": 0.008248,
            "range": "0.007693-0.00913",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "fhir-r4/boot/compile-wasm",
            "value": 0.023745,
            "range": "0.023129-0.02986",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "fhir-r4/boot/instantiate-wasm",
            "value": 0.001602,
            "range": "0.001467-0.003921",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jayostis@gmail.com",
            "name": "jayostis",
            "username": "jayostis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ac2e803bf433b742e9678e18e0edf9b371c01d8",
          "message": "Merge pull request #76 from jayostis/feat/synthea-scale-sizes\n\nfeat(bench): three more lifetime Synthea records for the scale curve (about 4,000 entries, and a family pod of about 43,000)",
          "timestamp": "2026-11-20T10:38:26-08:00",
          "tree_id": "04a269368aeb432989301121986d04a42f3512c9",
          "url": "https://github.com/jayostis/cascade-bridge-adapter-fhir-r4/commit/0ac2e803bf433b742e9678e18e0edf9b371c01d8"
        },
        "date": 1795199978424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fhir-r4-lab-pull-3000/convert/first",
            "value": 5.204572,
            "range": "5.074225-5.266338",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. A pull of 3,000 lab results in one FHIR R4 searchset Bundle. sha256 69b4daac45fd32449b8c290be9a7551566b537a6171218e8125169e94ca5882b, 2760035 bytes"
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/second",
            "value": 4.886529,
            "range": "4.804685-4.950121",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/profiled",
            "value": 5.185251,
            "range": "5.185251-5.185251",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/rss",
            "value": 392003584,
            "range": "379621376-441159680",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-lab-pull-3000/records",
            "value": 3004,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. A pull of 3,000 lab results in one FHIR R4 searchset Bundle."
          },
          {
            "name": "fhir-r4-lab-pull-3000/triples",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/findings",
            "value": 3006,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-lab-pull-3000/fallbacks",
            "value": 0,
            "unit": "{count}",
            "extra": "Record executions the general evaluator answered because a query was not compiled or a compiled plan gave up. The detect query, which runs once, is not counted."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/coding-system-table.rq",
            "value": 0.047439,
            "range": "0.047439-0.047439",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-table.rq",
            "value": 0.007925,
            "range": "0.007925-0.007925",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-table.rq",
            "value": 0.015277,
            "range": "0.015277-0.015277",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-table.rq",
            "value": 0.008564,
            "range": "0.008564-0.008564",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document-table.rq",
            "value": 0.004317,
            "range": "0.004317-0.004317",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-table.rq",
            "value": 0.015121,
            "range": "0.015121-0.015121",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-table.rq",
            "value": 0.006744,
            "range": "0.006744-0.006744",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-table.rq",
            "value": 0.007238,
            "range": "0.007238-0.007238",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reasons.rq",
            "value": 0.041579,
            "range": "0.041579-0.041579",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/allergy-intolerance.rq",
            "value": 0.005879,
            "range": "0.005879-0.005879",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/attachments.rq",
            "value": 0.007557,
            "range": "0.007557-0.007557",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/condition.rq",
            "value": 0.005899,
            "range": "0.005899-0.005899",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/immunization.rq",
            "value": 0.00543,
            "range": "0.00543-0.00543",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-codes.rq",
            "value": 0.07426,
            "range": "0.07426-0.07426",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-identifiers.rq",
            "value": 0.016317,
            "range": "0.016317-0.016317",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-performer.rq",
            "value": 0.002665,
            "range": "0.002665-0.002665",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-quantities.rq",
            "value": 0.082283,
            "range": "0.082283-0.082283",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result.rq",
            "value": 0.086357,
            "range": "0.086357-0.086357",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription.rq",
            "value": 0.007864,
            "range": "0.007864-0.007864",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense.rq",
            "value": 0.005483,
            "range": "0.005483-0.005483",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-supply-and-dosages.rq",
            "value": 0.006975,
            "range": "0.006975-0.006975",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication.rq",
            "value": 0.006665,
            "range": "0.006665-0.006665",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-text.rq",
            "value": 0.022083,
            "range": "0.022083-0.022083",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document.rq",
            "value": 0.005462,
            "range": "0.005462-0.005462",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-from-server.rq",
            "value": 0.003555,
            "range": "0.003555-0.003555",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization.rq",
            "value": 0.009019,
            "range": "0.009019-0.009019",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient.rq",
            "value": 0.006001,
            "range": "0.006001-0.006001",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/procedure.rq",
            "value": 0.005186,
            "range": "0.005186-0.005186",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/record.rq",
            "value": 0.209188,
            "range": "0.209188-0.209188",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-performer.rq",
            "value": 0.002536,
            "range": "0.002536-0.002536",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-results.rq",
            "value": 0.007592,
            "range": "0.007592-0.007592",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report.rq",
            "value": 0.005659,
            "range": "0.005659-0.005659",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation.rq",
            "value": 0.007612,
            "range": "0.007612-0.007612",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant.rq",
            "value": 0.006891,
            "range": "0.006891-0.006891",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reason-findings.rq",
            "value": 0.024842,
            "range": "0.024842-0.024842",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/category-text-findings.rq",
            "value": 0.007668,
            "range": "0.007668-0.007668",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/code-findings.rq",
            "value": 0.005914,
            "range": "0.005914-0.005914",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/date-findings.rq",
            "value": 0.02953,
            "range": "0.02953-0.02953",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-version-findings.rq",
            "value": 0.001065,
            "range": "0.001065-0.001065",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-findings.rq",
            "value": 0.054215,
            "range": "0.054215-0.054215",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-findings.rq",
            "value": 0.005812,
            "range": "0.005812-0.005812",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.006894,
            "range": "0.006894-0.006894",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-findings.rq",
            "value": 0.045887,
            "range": "0.045887-0.045887",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-findings.rq",
            "value": 0.005149,
            "range": "0.005149-0.005149",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-component-findings.rq",
            "value": 0.007364,
            "range": "0.007364-0.007364",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-findings.rq",
            "value": 0.046643,
            "range": "0.046643-0.046643",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-findings.rq",
            "value": 0.005698,
            "range": "0.005698-0.005698",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-findings.rq",
            "value": 0.005042,
            "range": "0.005042-0.005042",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-reference-findings.rq",
            "value": 0.037854,
            "range": "0.037854-0.037854",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/recorded-date-findings.rq",
            "value": 0.006224,
            "range": "0.006224-0.006224",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-display-findings.rq",
            "value": 0.024726,
            "range": "0.024726-0.024726",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-without-server-findings.rq",
            "value": 0.028959,
            "range": "0.028959-0.028959",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/repeated-id-findings.rq",
            "value": 0.017627,
            "range": "0.017627-0.017627",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-findings.rq",
            "value": 0.008309,
            "range": "0.008309-0.008309",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-result-findings.rq",
            "value": 0.007532,
            "range": "0.007532-0.007532",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/resource-type-findings.rq",
            "value": 0.007545,
            "range": "0.007545-0.007545",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-findings.rq",
            "value": 0.013631,
            "range": "0.013631-0.013631",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-findings.rq",
            "value": 0.008459,
            "range": "0.008459-0.008459",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/detect.rq",
            "value": 0.006453,
            "range": "0.006453-0.006453",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/document-table",
            "value": 0.144345,
            "range": "0.144345-0.144345",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/lift",
            "value": 0.293515,
            "range": "0.293515-0.293515",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/source-validation",
            "value": 0.79148,
            "range": "0.79148-0.79148",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/accounting",
            "value": 0.010851,
            "range": "0.010851-0.010851",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/dataset",
            "value": 0.006857,
            "range": "0.006857-0.006857",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/index",
            "value": 0.1518,
            "range": "0.1518-0.1518",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/mapping",
            "value": 0.673123,
            "range": "0.673123-0.673123",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/records",
            "value": 0.17105,
            "range": "0.17105-0.17105",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/output-validation",
            "value": 2.072203,
            "range": "2.072203-2.072203",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/findings",
            "value": 0.561904,
            "range": "0.561904-0.561904",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unresolved-addresses",
            "value": 0.028077,
            "range": "0.028077-0.028077",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/detect",
            "value": 0.006497,
            "range": "0.006497-0.006497",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/summary",
            "value": 0.013938,
            "range": "0.013938-0.013938",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/serialising",
            "value": 0.10555,
            "range": "0.10555-0.10555",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unaccounted",
            "value": 0.154061,
            "range": "0.154061-0.154061",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/graph",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 37ddd3ff45eedcca686486482a5dd0ea90120d791c04352fb96a41e20d5fe7ac"
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/findings",
            "value": 45090,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 21239a39a4729ba969bd423ee6088a728e8605fcfbcd31a1c9d285695c6251e5"
          },
          {
            "name": "fhir-r4/load",
            "value": 0.637463,
            "range": "0.614775-0.715754",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "fhir-r4/load/read-files",
            "value": 0.009505,
            "range": "0.009141-0.009739",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "fhir-r4/load/prepare",
            "value": 0.627724,
            "range": "0.605269-0.706613",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "fhir-r4/boot/read-wasm",
            "value": 0.003779,
            "range": "0.003625-0.003799",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "fhir-r4/boot/compile-wasm",
            "value": 0.016914,
            "range": "0.014119-0.03927",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "fhir-r4/boot/instantiate-wasm",
            "value": 0.001191,
            "range": "0.000955-0.01758",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ac2e803bf433b742e9678e18e0edf9b371c01d8",
          "message": "Merge pull request #76 from jayostis/feat/synthea-scale-sizes\n\nfeat(bench): three more lifetime Synthea records for the scale curve (about 4,000 entries, and a family pod of about 43,000)",
          "timestamp": "2026-11-20T18:38:26Z",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-fhir-r4/commit/0ac2e803bf433b742e9678e18e0edf9b371c01d8"
        },
        "date": 1795233900016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fhir-r4-lab-pull-3000/convert/first",
            "value": 4.937924,
            "range": "4.930017-5.052903",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. A pull of 3,000 lab results in one FHIR R4 searchset Bundle. sha256 69b4daac45fd32449b8c290be9a7551566b537a6171218e8125169e94ca5882b, 2760035 bytes"
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/second",
            "value": 4.678223,
            "range": "4.560381-4.755638",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/profiled",
            "value": 5.075843,
            "range": "5.075843-5.075843",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/rss",
            "value": 381325312,
            "range": "374173696-423645184",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-lab-pull-3000/records",
            "value": 3004,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. A pull of 3,000 lab results in one FHIR R4 searchset Bundle."
          },
          {
            "name": "fhir-r4-lab-pull-3000/triples",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/findings",
            "value": 3006,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-lab-pull-3000/fallbacks",
            "value": 0,
            "unit": "{count}",
            "extra": "Record executions the general evaluator answered because a query was not compiled or a compiled plan gave up. The detect query, which runs once, is not counted."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/coding-system-table.rq",
            "value": 0.0468,
            "range": "0.0468-0.0468",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-table.rq",
            "value": 0.007937,
            "range": "0.007937-0.007937",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-table.rq",
            "value": 0.015089,
            "range": "0.015089-0.015089",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-table.rq",
            "value": 0.008647,
            "range": "0.008647-0.008647",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document-table.rq",
            "value": 0.004256,
            "range": "0.004256-0.004256",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-table.rq",
            "value": 0.014813,
            "range": "0.014813-0.014813",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-table.rq",
            "value": 0.006593,
            "range": "0.006593-0.006593",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-table.rq",
            "value": 0.006962,
            "range": "0.006962-0.006962",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reasons.rq",
            "value": 0.040675,
            "range": "0.040675-0.040675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/allergy-intolerance.rq",
            "value": 0.005946,
            "range": "0.005946-0.005946",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/attachments.rq",
            "value": 0.007411,
            "range": "0.007411-0.007411",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/condition.rq",
            "value": 0.005623,
            "range": "0.005623-0.005623",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/immunization.rq",
            "value": 0.005438,
            "range": "0.005438-0.005438",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-codes.rq",
            "value": 0.073745,
            "range": "0.073745-0.073745",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-identifiers.rq",
            "value": 0.016579,
            "range": "0.016579-0.016579",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-performer.rq",
            "value": 0.002638,
            "range": "0.002638-0.002638",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-quantities.rq",
            "value": 0.079966,
            "range": "0.079966-0.079966",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result.rq",
            "value": 0.084562,
            "range": "0.084562-0.084562",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription.rq",
            "value": 0.007799,
            "range": "0.007799-0.007799",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense.rq",
            "value": 0.005544,
            "range": "0.005544-0.005544",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-supply-and-dosages.rq",
            "value": 0.006995,
            "range": "0.006995-0.006995",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication.rq",
            "value": 0.00675,
            "range": "0.00675-0.00675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-text.rq",
            "value": 0.022159,
            "range": "0.022159-0.022159",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document.rq",
            "value": 0.005479,
            "range": "0.005479-0.005479",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-from-server.rq",
            "value": 0.003491,
            "range": "0.003491-0.003491",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization.rq",
            "value": 0.008737,
            "range": "0.008737-0.008737",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient.rq",
            "value": 0.005821,
            "range": "0.005821-0.005821",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/procedure.rq",
            "value": 0.004937,
            "range": "0.004937-0.004937",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/record.rq",
            "value": 0.206177,
            "range": "0.206177-0.206177",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-performer.rq",
            "value": 0.002578,
            "range": "0.002578-0.002578",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-results.rq",
            "value": 0.007694,
            "range": "0.007694-0.007694",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report.rq",
            "value": 0.005684,
            "range": "0.005684-0.005684",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation.rq",
            "value": 0.007525,
            "range": "0.007525-0.007525",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant.rq",
            "value": 0.006822,
            "range": "0.006822-0.006822",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reason-findings.rq",
            "value": 0.024906,
            "range": "0.024906-0.024906",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/category-text-findings.rq",
            "value": 0.007707,
            "range": "0.007707-0.007707",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/code-findings.rq",
            "value": 0.005725,
            "range": "0.005725-0.005725",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/date-findings.rq",
            "value": 0.029527,
            "range": "0.029527-0.029527",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-version-findings.rq",
            "value": 0.000972,
            "range": "0.000972-0.000972",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-findings.rq",
            "value": 0.053182,
            "range": "0.053182-0.053182",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-findings.rq",
            "value": 0.00556,
            "range": "0.00556-0.00556",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.006878,
            "range": "0.006878-0.006878",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-findings.rq",
            "value": 0.045286,
            "range": "0.045286-0.045286",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-findings.rq",
            "value": 0.004879,
            "range": "0.004879-0.004879",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-component-findings.rq",
            "value": 0.00717,
            "range": "0.00717-0.00717",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-findings.rq",
            "value": 0.046116,
            "range": "0.046116-0.046116",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-findings.rq",
            "value": 0.005567,
            "range": "0.005567-0.005567",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-findings.rq",
            "value": 0.004987,
            "range": "0.004987-0.004987",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-reference-findings.rq",
            "value": 0.037409,
            "range": "0.037409-0.037409",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/recorded-date-findings.rq",
            "value": 0.006209,
            "range": "0.006209-0.006209",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-display-findings.rq",
            "value": 0.02414,
            "range": "0.02414-0.02414",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-without-server-findings.rq",
            "value": 0.02784,
            "range": "0.02784-0.02784",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/repeated-id-findings.rq",
            "value": 0.018279,
            "range": "0.018279-0.018279",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-findings.rq",
            "value": 0.008473,
            "range": "0.008473-0.008473",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-result-findings.rq",
            "value": 0.007365,
            "range": "0.007365-0.007365",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/resource-type-findings.rq",
            "value": 0.00738,
            "range": "0.00738-0.00738",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-findings.rq",
            "value": 0.013199,
            "range": "0.013199-0.013199",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-findings.rq",
            "value": 0.007613,
            "range": "0.007613-0.007613",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/detect.rq",
            "value": 0.007088,
            "range": "0.007088-0.007088",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/document-table",
            "value": 0.141823,
            "range": "0.141823-0.141823",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/lift",
            "value": 0.28951,
            "range": "0.28951-0.28951",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/source-validation",
            "value": 0.768771,
            "range": "0.768771-0.768771",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/accounting",
            "value": 0.009768,
            "range": "0.009768-0.009768",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/dataset",
            "value": 0.006523,
            "range": "0.006523-0.006523",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/index",
            "value": 0.151817,
            "range": "0.151817-0.151817",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/mapping",
            "value": 0.663176,
            "range": "0.663176-0.663176",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/records",
            "value": 0.168335,
            "range": "0.168335-0.168335",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/output-validation",
            "value": 2.012281,
            "range": "2.012281-2.012281",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/findings",
            "value": 0.555218,
            "range": "0.555218-0.555218",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unresolved-addresses",
            "value": 0.027405,
            "range": "0.027405-0.027405",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/detect",
            "value": 0.007134,
            "range": "0.007134-0.007134",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/summary",
            "value": 0.013575,
            "range": "0.013575-0.013575",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/serialising",
            "value": 0.105145,
            "range": "0.105145-0.105145",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unaccounted",
            "value": 0.155361,
            "range": "0.155361-0.155361",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/graph",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 37ddd3ff45eedcca686486482a5dd0ea90120d791c04352fb96a41e20d5fe7ac"
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/findings",
            "value": 45090,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 21239a39a4729ba969bd423ee6088a728e8605fcfbcd31a1c9d285695c6251e5"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/first",
            "value": 1.73741,
            "range": "1.692426-1.829305",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle. sha256 2703dc1e7e920fa1e45d16c58f8338ef13b3cc1916ee40ffa461112d54dce5de, 1098812 bytes"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/second",
            "value": 1.479856,
            "range": "1.451653-1.618267",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/profiled",
            "value": 1.741841,
            "range": "1.741841-1.741841",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/first",
            "value": 86179840,
            "range": "69402624-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/second",
            "value": 86179840,
            "range": "86179840-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/rss",
            "value": 371499008,
            "range": "362729472-384643072",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/records",
            "value": 647,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/triples",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/findings",
            "value": 2256,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/coding-system-table.rq",
            "value": 0.015582,
            "range": "0.015582-0.015582",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-table.rq",
            "value": 0.002464,
            "range": "0.002464-0.002464",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-table.rq",
            "value": 0.003578,
            "range": "0.003578-0.003578",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-table.rq",
            "value": 0.002416,
            "range": "0.002416-0.002416",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document-table.rq",
            "value": 0.001295,
            "range": "0.001295-0.001295",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-table.rq",
            "value": 0.003848,
            "range": "0.003848-0.003848",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-table.rq",
            "value": 0.001743,
            "range": "0.001743-0.001743",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-table.rq",
            "value": 0.001912,
            "range": "0.001912-0.001912",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reasons.rq",
            "value": 0.012044,
            "range": "0.012044-0.012044",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/allergy-intolerance.rq",
            "value": 0.002002,
            "range": "0.002002-0.002002",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/attachments.rq",
            "value": 0.002053,
            "range": "0.002053-0.002053",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/condition.rq",
            "value": 0.0059,
            "range": "0.0059-0.0059",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/immunization.rq",
            "value": 0.001817,
            "range": "0.001817-0.001817",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-codes.rq",
            "value": 0.012018,
            "range": "0.012018-0.012018",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-identifiers.rq",
            "value": 0.003084,
            "range": "0.003084-0.003084",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-performer.rq",
            "value": 0.000635,
            "range": "0.000635-0.000635",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-quantities.rq",
            "value": 0.012518,
            "range": "0.012518-0.012518",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result.rq",
            "value": 0.01538,
            "range": "0.01538-0.01538",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription.rq",
            "value": 0.002036,
            "range": "0.002036-0.002036",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense.rq",
            "value": 0.001428,
            "range": "0.001428-0.001428",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-supply-and-dosages.rq",
            "value": 0.008015,
            "range": "0.008015-0.008015",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication.rq",
            "value": 0.00638,
            "range": "0.00638-0.00638",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-text.rq",
            "value": 0.006609,
            "range": "0.006609-0.006609",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document.rq",
            "value": 0.001416,
            "range": "0.001416-0.001416",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-from-server.rq",
            "value": 0.000913,
            "range": "0.000913-0.000913",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization.rq",
            "value": 0.002298,
            "range": "0.002298-0.002298",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient.rq",
            "value": 0.001873,
            "range": "0.001873-0.001873",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/procedure.rq",
            "value": 0.003535,
            "range": "0.003535-0.003535",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/record.rq",
            "value": 0.050186,
            "range": "0.050186-0.050186",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-performer.rq",
            "value": 0.000737,
            "range": "0.000737-0.000737",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-results.rq",
            "value": 0.001936,
            "range": "0.001936-0.001936",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report.rq",
            "value": 0.001447,
            "range": "0.001447-0.001447",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation.rq",
            "value": 0.001805,
            "range": "0.001805-0.001805",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant.rq",
            "value": 0.001667,
            "range": "0.001667-0.001667",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reason-findings.rq",
            "value": 0.006757,
            "range": "0.006757-0.006757",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/category-text-findings.rq",
            "value": 0.002531,
            "range": "0.002531-0.002531",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/code-findings.rq",
            "value": 0.002278,
            "range": "0.002278-0.002278",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/date-findings.rq",
            "value": 0.009929,
            "range": "0.009929-0.009929",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-version-findings.rq",
            "value": 0.000276,
            "range": "0.000276-0.000276",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-findings.rq",
            "value": 0.01201,
            "range": "0.01201-0.01201",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-findings.rq",
            "value": 0.001503,
            "range": "0.001503-0.001503",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.001847,
            "range": "0.001847-0.001847",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-findings.rq",
            "value": 0.017615,
            "range": "0.017615-0.017615",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-findings.rq",
            "value": 0.001362,
            "range": "0.001362-0.001362",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-component-findings.rq",
            "value": 0.001853,
            "range": "0.001853-0.001853",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-findings.rq",
            "value": 0.008674,
            "range": "0.008674-0.008674",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-findings.rq",
            "value": 0.001357,
            "range": "0.001357-0.001357",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-findings.rq",
            "value": 0.001264,
            "range": "0.001264-0.001264",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-reference-findings.rq",
            "value": 0.009395,
            "range": "0.009395-0.009395",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/recorded-date-findings.rq",
            "value": 0.00185,
            "range": "0.00185-0.00185",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-display-findings.rq",
            "value": 0.006225,
            "range": "0.006225-0.006225",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-without-server-findings.rq",
            "value": 0.006305,
            "range": "0.006305-0.006305",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/repeated-id-findings.rq",
            "value": 0.00389,
            "range": "0.00389-0.00389",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-findings.rq",
            "value": 0.002196,
            "range": "0.002196-0.002196",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-result-findings.rq",
            "value": 0.00194,
            "range": "0.00194-0.00194",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/resource-type-findings.rq",
            "value": 0.002119,
            "range": "0.002119-0.002119",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-findings.rq",
            "value": 0.002885,
            "range": "0.002885-0.002885",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-findings.rq",
            "value": 0.001861,
            "range": "0.001861-0.001861",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/detect.rq",
            "value": 0.006356,
            "range": "0.006356-0.006356",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/document-table",
            "value": 0.044042,
            "range": "0.044042-0.044042",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/lift",
            "value": 0.096862,
            "range": "0.096862-0.096862",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/source-validation",
            "value": 0.249159,
            "range": "0.249159-0.249159",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/accounting",
            "value": 0.017282,
            "range": "0.017282-0.017282",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/dataset",
            "value": 0.002004,
            "range": "0.002004-0.002004",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/index",
            "value": 0.050001,
            "range": "0.050001-0.050001",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/mapping",
            "value": 0.166056,
            "range": "0.166056-0.166056",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/records",
            "value": 0.371877,
            "range": "0.371877-0.371877",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/output-validation",
            "value": 0.48299,
            "range": "0.48299-0.48299",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/findings",
            "value": 0.147397,
            "range": "0.147397-0.147397",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unresolved-addresses",
            "value": 0.00812,
            "range": "0.00812-0.00812",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/detect",
            "value": 0.006397,
            "range": "0.006397-0.006397",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/summary",
            "value": 0.003855,
            "range": "0.003855-0.003855",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/serialising",
            "value": 0.041788,
            "range": "0.041788-0.041788",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unaccounted",
            "value": 0.05401,
            "range": "0.05401-0.05401",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/graph",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7cc449ffbde5128e52fafcf8acfb64362df9b08f54ac053668923208f8175856"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/findings",
            "value": 33875,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 b652127fa85ae51be3efc3f467bdff274a9e99631bf26d3f1bccb60d4dc5eb7d"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/first",
            "value": 41.717931,
            "range": "40.594823-44.240641",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of one person, Xochitl Corkery, a 51 MB FHIR R4 Bundle of 16,833 entries. With the records of Dona Okuneva and Cole Gaylord it is also one pod of 42,784 entries; the three are unrelated people and Xochitl's is 39% of the pod, so the step from this input to the pod is not independent data. sha256 f20b86408066ece2d25a7b02d380b7652f22d16df9dab613a0c73c9969b17da8, 51227791 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/second",
            "value": 40.830343,
            "range": "37.841477-41.338515",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/profiled",
            "value": 44.25166,
            "range": "44.25166-44.25166",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/first",
            "value": 2518876160,
            "range": "2518876160-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/second",
            "value": 2518876160,
            "range": "2518876160-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/rss",
            "value": 3328434176,
            "range": "3322855424-3330404352",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime/records",
            "value": 16833,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of one person, Xochitl Corkery, a 51 MB FHIR R4 Bundle of 16,833 entries. With the records of Dona Okuneva and Cole Gaylord it is also one pod of 42,784 entries; the three are unrelated people and Xochitl's is 39% of the pod, so the step from this input to the pod is not independent data."
          },
          {
            "name": "fhir-r4-synthea-lifetime/triples",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/findings",
            "value": 267199,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/coding-system-table.rq",
            "value": 0.39544,
            "range": "0.39544-0.39544",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-table.rq",
            "value": 0.039097,
            "range": "0.039097-0.039097",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-table.rq",
            "value": 0.045869,
            "range": "0.045869-0.045869",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-table.rq",
            "value": 0.060192,
            "range": "0.060192-0.060192",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document-table.rq",
            "value": 0.026951,
            "range": "0.026951-0.026951",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-table.rq",
            "value": 0.068534,
            "range": "0.068534-0.068534",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-table.rq",
            "value": 0.028931,
            "range": "0.028931-0.028931",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-table.rq",
            "value": 0.028768,
            "range": "0.028768-0.028768",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reasons.rq",
            "value": 0.301438,
            "range": "0.301438-0.301438",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/allergy-intolerance.rq",
            "value": 0.043726,
            "range": "0.043726-0.043726",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/attachments.rq",
            "value": 0.08345,
            "range": "0.08345-0.08345",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/condition.rq",
            "value": 0.058667,
            "range": "0.058667-0.058667",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/immunization.rq",
            "value": 0.04259,
            "range": "0.04259-0.04259",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-codes.rq",
            "value": 0.143476,
            "range": "0.143476-0.143476",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-identifiers.rq",
            "value": 0.053185,
            "range": "0.053185-0.053185",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-performer.rq",
            "value": 0.014597,
            "range": "0.014597-0.014597",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-quantities.rq",
            "value": 0.135026,
            "range": "0.135026-0.135026",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result.rq",
            "value": 0.169846,
            "range": "0.169846-0.169846",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription.rq",
            "value": 0.047552,
            "range": "0.047552-0.047552",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense.rq",
            "value": 0.034973,
            "range": "0.034973-0.034973",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-supply-and-dosages.rq",
            "value": 0.059761,
            "range": "0.059761-0.059761",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication.rq",
            "value": 0.104156,
            "range": "0.104156-0.104156",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-text.rq",
            "value": 0.314327,
            "range": "0.314327-0.314327",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document.rq",
            "value": 0.113153,
            "range": "0.113153-0.113153",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-from-server.rq",
            "value": 0.023048,
            "range": "0.023048-0.023048",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization.rq",
            "value": 0.056382,
            "range": "0.056382-0.056382",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient.rq",
            "value": 0.036455,
            "range": "0.036455-0.036455",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/procedure.rq",
            "value": 0.119965,
            "range": "0.119965-0.119965",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/record.rq",
            "value": 0.848495,
            "range": "0.848495-0.848495",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-performer.rq",
            "value": 0.014882,
            "range": "0.014882-0.014882",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-results.rq",
            "value": 0.137192,
            "range": "0.137192-0.137192",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report.rq",
            "value": 0.157354,
            "range": "0.157354-0.157354",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation.rq",
            "value": 0.044077,
            "range": "0.044077-0.044077",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant.rq",
            "value": 0.041004,
            "range": "0.041004-0.041004",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reason-findings.rq",
            "value": 0.132675,
            "range": "0.132675-0.132675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/category-text-findings.rq",
            "value": 0.060771,
            "range": "0.060771-0.060771",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/code-findings.rq",
            "value": 0.070509,
            "range": "0.070509-0.070509",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/date-findings.rq",
            "value": 0.13285,
            "range": "0.13285-0.13285",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-version-findings.rq",
            "value": 0.006121,
            "range": "0.006121-0.006121",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-findings.rq",
            "value": 0.190416,
            "range": "0.190416-0.190416",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-findings.rq",
            "value": 0.035141,
            "range": "0.035141-0.035141",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.044904,
            "range": "0.044904-0.044904",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-findings.rq",
            "value": 0.514792,
            "range": "0.514792-0.514792",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-findings.rq",
            "value": 0.034752,
            "range": "0.034752-0.034752",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-component-findings.rq",
            "value": 0.064035,
            "range": "0.064035-0.064035",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-findings.rq",
            "value": 0.1505,
            "range": "0.1505-0.1505",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-findings.rq",
            "value": 0.034328,
            "range": "0.034328-0.034328",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-findings.rq",
            "value": 0.033092,
            "range": "0.033092-0.033092",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-reference-findings.rq",
            "value": 0.143483,
            "range": "0.143483-0.143483",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/recorded-date-findings.rq",
            "value": 0.040416,
            "range": "0.040416-0.040416",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-display-findings.rq",
            "value": 0.165905,
            "range": "0.165905-0.165905",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-without-server-findings.rq",
            "value": 0.068354,
            "range": "0.068354-0.068354",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/repeated-id-findings.rq",
            "value": 0.074647,
            "range": "0.074647-0.074647",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-findings.rq",
            "value": 0.102045,
            "range": "0.102045-0.102045",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-result-findings.rq",
            "value": 0.0732,
            "range": "0.0732-0.0732",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/resource-type-findings.rq",
            "value": 0.89721,
            "range": "0.89721-0.89721",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-findings.rq",
            "value": 0.0622,
            "range": "0.0622-0.0622",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-findings.rq",
            "value": 0.046899,
            "range": "0.046899-0.046899",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/detect.rq",
            "value": 0.006606,
            "range": "0.006606-0.006606",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/document-table",
            "value": 1.010254,
            "range": "1.010254-1.010254",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/lift",
            "value": 3.514124,
            "range": "3.514124-3.514124",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/source-validation",
            "value": 6.837587,
            "range": "6.837587-6.837587",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/accounting",
            "value": 1.947542,
            "range": "1.947542-1.947542",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/dataset",
            "value": 0.042706,
            "range": "0.042706-0.042706",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/index",
            "value": 1.736734,
            "range": "1.736734-1.736734",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/mapping",
            "value": 3.337554,
            "range": "3.337554-3.337554",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/records",
            "value": 0.646164,
            "range": "0.646164-0.646164",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/output-validation",
            "value": 10.652234,
            "range": "10.652234-10.652234",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/findings",
            "value": 4.072558,
            "range": "4.072558-4.072558",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unresolved-addresses",
            "value": 0.212785,
            "range": "0.212785-0.212785",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/detect",
            "value": 0.006742,
            "range": "0.006742-0.006742",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/summary",
            "value": 0.111789,
            "range": "0.111789-0.111789",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/serialising",
            "value": 7.259181,
            "range": "7.259181-7.259181",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unaccounted",
            "value": 2.863707,
            "range": "2.863707-2.863707",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/graph",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7a293b50f329e9697119ef46a49e0e55365198126021106ead2739fd58656a51"
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/findings",
            "value": 4050084,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4b992f4465adb297491a6571d8108f50b9d23e5375d2b20338ace4af174e227d"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/first",
            "value": 10.691844,
            "range": "10.415627-10.819419",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Justa Moore, a 15 MB FHIR R4 Bundle of 3,987 entries. sha256 da8b599d1bafbc500fd74a1aded71f6a426dde36edc25b0fd86856595e9ad292, 14900379 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/second",
            "value": 9.625294,
            "range": "9.594616-9.84641",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/profiled",
            "value": 10.228809,
            "range": "10.228809-10.228809",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/wasm-memory/first",
            "value": 639827968,
            "range": "589496320-639827968",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/wasm-memory/second",
            "value": 639827968,
            "range": "589496320-639827968",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/rss",
            "value": 1026928640,
            "range": "1001906176-1062871040",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/records",
            "value": 3987,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Justa Moore, a 15 MB FHIR R4 Bundle of 3,987 entries."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/triples",
            "value": 41528,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/findings",
            "value": 68397,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/coding-system-table.rq",
            "value": 0.12967,
            "range": "0.12967-0.12967",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/document-table.rq",
            "value": 0.009916,
            "range": "0.009916-0.009916",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-table.rq",
            "value": 0.010396,
            "range": "0.010396-0.010396",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-table.rq",
            "value": 0.012302,
            "range": "0.012302-0.012302",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/note-or-document-table.rq",
            "value": 0.007057,
            "range": "0.007057-0.007057",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-table.rq",
            "value": 0.0165,
            "range": "0.0165-0.0165",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation-table.rq",
            "value": 0.006637,
            "range": "0.006637-0.006637",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-table.rq",
            "value": 0.006577,
            "range": "0.006577-0.006577",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/absent-reasons.rq",
            "value": 0.071047,
            "range": "0.071047-0.071047",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/allergy-intolerance.rq",
            "value": 0.00949,
            "range": "0.00949-0.00949",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/attachments.rq",
            "value": 0.018896,
            "range": "0.018896-0.018896",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/condition.rq",
            "value": 0.016594,
            "range": "0.016594-0.016594",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/immunization.rq",
            "value": 0.011407,
            "range": "0.011407-0.011407",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-codes.rq",
            "value": 0.01444,
            "range": "0.01444-0.01444",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-identifiers.rq",
            "value": 0.009305,
            "range": "0.009305-0.009305",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-performer.rq",
            "value": 0.003196,
            "range": "0.003196-0.003196",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-quantities.rq",
            "value": 0.015205,
            "range": "0.015205-0.015205",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result.rq",
            "value": 0.016139,
            "range": "0.016139-0.016139",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-prescription.rq",
            "value": 0.010981,
            "range": "0.010981-0.010981",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense.rq",
            "value": 0.007749,
            "range": "0.007749-0.007749",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-supply-and-dosages.rq",
            "value": 0.010628,
            "range": "0.010628-0.010628",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication.rq",
            "value": 0.012356,
            "range": "0.012356-0.012356",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/narrative-text.rq",
            "value": 0.068969,
            "range": "0.068969-0.068969",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/note-or-document.rq",
            "value": 0.028898,
            "range": "0.028898-0.028898",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-from-server.rq",
            "value": 0.004768,
            "range": "0.004768-0.004768",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization.rq",
            "value": 0.012665,
            "range": "0.012665-0.012665",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient.rq",
            "value": 0.008435,
            "range": "0.008435-0.008435",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/procedure.rq",
            "value": 0.045579,
            "range": "0.045579-0.045579",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/record.rq",
            "value": 0.175654,
            "range": "0.175654-0.175654",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-and-note-performer.rq",
            "value": 0.003434,
            "range": "0.003434-0.003434",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-results.rq",
            "value": 0.017443,
            "range": "0.017443-0.017443",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report.rq",
            "value": 0.037444,
            "range": "0.037444-0.037444",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation.rq",
            "value": 0.009218,
            "range": "0.009218-0.009218",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant.rq",
            "value": 0.008381,
            "range": "0.008381-0.008381",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/absent-reason-findings.rq",
            "value": 0.030191,
            "range": "0.030191-0.030191",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/category-text-findings.rq",
            "value": 0.014073,
            "range": "0.014073-0.014073",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/code-findings.rq",
            "value": 0.020219,
            "range": "0.020219-0.020219",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/date-findings.rq",
            "value": 0.026932,
            "range": "0.026932-0.026932",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/document-version-findings.rq",
            "value": 0.001422,
            "range": "0.001422-0.001422",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-findings.rq",
            "value": 0.019041,
            "range": "0.019041-0.019041",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-findings.rq",
            "value": 0.007787,
            "range": "0.007787-0.007787",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.009949,
            "range": "0.009949-0.009949",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-findings.rq",
            "value": 0.10445,
            "range": "0.10445-0.10445",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/narrative-findings.rq",
            "value": 0.007922,
            "range": "0.007922-0.007922",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/observation-component-findings.rq",
            "value": 0.020222,
            "range": "0.020222-0.020222",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/observation-findings.rq",
            "value": 0.023519,
            "range": "0.023519-0.023519",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-findings.rq",
            "value": 0.007633,
            "range": "0.007633-0.007633",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient-findings.rq",
            "value": 0.00732,
            "range": "0.00732-0.00732",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient-reference-findings.rq",
            "value": 0.029061,
            "range": "0.029061-0.029061",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/recorded-date-findings.rq",
            "value": 0.009278,
            "range": "0.009278-0.009278",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/reference-display-findings.rq",
            "value": 0.038288,
            "range": "0.038288-0.038288",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/reference-without-server-findings.rq",
            "value": 0.015675,
            "range": "0.015675-0.015675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/repeated-id-findings.rq",
            "value": 0.014838,
            "range": "0.014838-0.014838",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-and-note-findings.rq",
            "value": 0.021622,
            "range": "0.021622-0.021622",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-result-findings.rq",
            "value": 0.012885,
            "range": "0.012885-0.012885",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/resource-type-findings.rq",
            "value": 0.017459,
            "range": "0.017459-0.017459",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-findings.rq",
            "value": 0.012345,
            "range": "0.012345-0.012345",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation-findings.rq",
            "value": 0.009466,
            "range": "0.009466-0.009466",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/detect.rq",
            "value": 0.006595,
            "range": "0.006595-0.006595",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/document-table",
            "value": 0.286633,
            "range": "0.286633-0.286633",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/lift",
            "value": 0.972708,
            "range": "0.972708-0.972708",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/source-validation",
            "value": 1.63668,
            "range": "1.63668-1.63668",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/accounting",
            "value": 0.458553,
            "range": "0.458553-0.458553",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/dataset",
            "value": 0.010167,
            "range": "0.010167-0.010167",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/index",
            "value": 0.44451,
            "range": "0.44451-0.44451",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/mapping",
            "value": 0.68043,
            "range": "0.68043-0.68043",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/records",
            "value": 0.130374,
            "range": "0.130374-0.130374",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/output-validation",
            "value": 2.455448,
            "range": "2.455448-2.455448",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/findings",
            "value": 0.694308,
            "range": "0.694308-0.694308",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/unresolved-addresses",
            "value": 0.061704,
            "range": "0.061704-0.061704",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/detect",
            "value": 0.006725,
            "range": "0.006725-0.006725",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/summary",
            "value": 0.028868,
            "range": "0.028868-0.028868",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/serialising",
            "value": 1.622312,
            "range": "1.622312-1.622312",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/unaccounted",
            "value": 0.73939,
            "range": "0.73939-0.73939",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/output/graph",
            "value": 41528,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 8e086cb7aab88e92c913f3ca926a715c879be434ff2ea8f59b3d7677a6a406a2"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/output/findings",
            "value": 1041849,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 16af8499003462b269135d82ddfce43a20a3fa92be30be18cb3b28d448bbf2b7"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/first",
            "value": 45.418571,
            "range": "43.832432-47.291627",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Dona Okuneva, a 56 MB FHIR R4 Bundle of 19,728 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Cole Gaylord's; the three are unrelated people. sha256 4a4a24b9c8a052cc60465fffe5da9f34ab71101f3479ebdcc794e61e6d76d7f2, 56150281 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/second",
            "value": 41.75121,
            "range": "41.525441-42.236936",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/profiled",
            "value": 46.298802,
            "range": "46.298802-46.298802",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/wasm-memory/first",
            "value": 2552430592,
            "range": "2552430592-2552430592",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/wasm-memory/second",
            "value": 2552430592,
            "range": "2552430592-2552430592",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/rss",
            "value": 3050160128,
            "range": "3013689344-3063861248",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/records",
            "value": 19728,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Dona Okuneva, a 56 MB FHIR R4 Bundle of 19,728 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Cole Gaylord's; the three are unrelated people."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/triples",
            "value": 283762,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/findings",
            "value": 198775,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/coding-system-table.rq",
            "value": 0.491351,
            "range": "0.491351-0.491351",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/document-table.rq",
            "value": 0.044105,
            "range": "0.044105-0.044105",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-table.rq",
            "value": 0.062144,
            "range": "0.062144-0.062144",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-table.rq",
            "value": 0.05389,
            "range": "0.05389-0.05389",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/note-or-document-table.rq",
            "value": 0.02837,
            "range": "0.02837-0.02837",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-table.rq",
            "value": 0.079261,
            "range": "0.079261-0.079261",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation-table.rq",
            "value": 0.03486,
            "range": "0.03486-0.03486",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-table.rq",
            "value": 0.035658,
            "range": "0.035658-0.035658",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/absent-reasons.rq",
            "value": 0.330661,
            "range": "0.330661-0.330661",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/allergy-intolerance.rq",
            "value": 0.045721,
            "range": "0.045721-0.045721",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/attachments.rq",
            "value": 0.073413,
            "range": "0.073413-0.073413",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/condition.rq",
            "value": 0.075666,
            "range": "0.075666-0.075666",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/immunization.rq",
            "value": 0.047116,
            "range": "0.047116-0.047116",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-codes.rq",
            "value": 0.260734,
            "range": "0.260734-0.260734",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-identifiers.rq",
            "value": 0.072663,
            "range": "0.072663-0.072663",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-performer.rq",
            "value": 0.016305,
            "range": "0.016305-0.016305",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-quantities.rq",
            "value": 0.236925,
            "range": "0.236925-0.236925",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result.rq",
            "value": 0.311842,
            "range": "0.311842-0.311842",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-prescription.rq",
            "value": 0.054658,
            "range": "0.054658-0.054658",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense.rq",
            "value": 0.03796,
            "range": "0.03796-0.03796",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-supply-and-dosages.rq",
            "value": 0.058502,
            "range": "0.058502-0.058502",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication.rq",
            "value": 0.085453,
            "range": "0.085453-0.085453",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/narrative-text.rq",
            "value": 0.251494,
            "range": "0.251494-0.251494",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/note-or-document.rq",
            "value": 0.08039,
            "range": "0.08039-0.08039",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-from-server.rq",
            "value": 0.025953,
            "range": "0.025953-0.025953",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization.rq",
            "value": 0.063675,
            "range": "0.063675-0.063675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient.rq",
            "value": 0.040738,
            "range": "0.040738-0.040738",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/procedure.rq",
            "value": 0.117107,
            "range": "0.117107-0.117107",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/record.rq",
            "value": 1.259754,
            "range": "1.259754-1.259754",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-and-note-performer.rq",
            "value": 0.017762,
            "range": "0.017762-0.017762",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-results.rq",
            "value": 0.247717,
            "range": "0.247717-0.247717",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report.rq",
            "value": 0.15941,
            "range": "0.15941-0.15941",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation.rq",
            "value": 0.050773,
            "range": "0.050773-0.050773",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant.rq",
            "value": 0.046469,
            "range": "0.046469-0.046469",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/absent-reason-findings.rq",
            "value": 0.1615,
            "range": "0.1615-0.1615",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/category-text-findings.rq",
            "value": 0.063658,
            "range": "0.063658-0.063658",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/code-findings.rq",
            "value": 0.071534,
            "range": "0.071534-0.071534",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/date-findings.rq",
            "value": 0.182053,
            "range": "0.182053-0.182053",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/document-version-findings.rq",
            "value": 0.007107,
            "range": "0.007107-0.007107",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-findings.rq",
            "value": 0.341685,
            "range": "0.341685-0.341685",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-findings.rq",
            "value": 0.038808,
            "range": "0.038808-0.038808",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.048265,
            "range": "0.048265-0.048265",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-findings.rq",
            "value": 0.604357,
            "range": "0.604357-0.604357",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/narrative-findings.rq",
            "value": 0.037348,
            "range": "0.037348-0.037348",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/observation-component-findings.rq",
            "value": 0.131422,
            "range": "0.131422-0.131422",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/observation-findings.rq",
            "value": 0.228144,
            "range": "0.228144-0.228144",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-findings.rq",
            "value": 0.037856,
            "range": "0.037856-0.037856",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient-findings.rq",
            "value": 0.036433,
            "range": "0.036433-0.036433",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient-reference-findings.rq",
            "value": 0.184529,
            "range": "0.184529-0.184529",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/recorded-date-findings.rq",
            "value": 0.045262,
            "range": "0.045262-0.045262",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/reference-display-findings.rq",
            "value": 0.203477,
            "range": "0.203477-0.203477",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/reference-without-server-findings.rq",
            "value": 0.084791,
            "range": "0.084791-0.084791",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/repeated-id-findings.rq",
            "value": 0.107909,
            "range": "0.107909-0.107909",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-and-note-findings.rq",
            "value": 0.087958,
            "range": "0.087958-0.087958",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-result-findings.rq",
            "value": 0.106804,
            "range": "0.106804-0.106804",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/resource-type-findings.rq",
            "value": 0.079469,
            "range": "0.079469-0.079469",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-findings.rq",
            "value": 0.08647,
            "range": "0.08647-0.08647",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation-findings.rq",
            "value": 0.05255,
            "range": "0.05255-0.05255",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/detect.rq",
            "value": 0.006565,
            "range": "0.006565-0.006565",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/document-table",
            "value": 1.173634,
            "range": "1.173634-1.173634",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/lift",
            "value": 4.022831,
            "range": "4.022831-4.022831",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/source-validation",
            "value": 7.760649,
            "range": "7.760649-7.760649",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/accounting",
            "value": 1.364081,
            "range": "1.364081-1.364081",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/dataset",
            "value": 0.048882,
            "range": "0.048882-0.048882",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/index",
            "value": 2.019707,
            "range": "2.019707-2.019707",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/mapping",
            "value": 4.236763,
            "range": "4.236763-4.236763",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/records",
            "value": 0.884632,
            "range": "0.884632-0.884632",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/output-validation",
            "value": 12.652424,
            "range": "12.652424-12.652424",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/findings",
            "value": 4.085127,
            "range": "4.085127-4.085127",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/unresolved-addresses",
            "value": 0.214623,
            "range": "0.214623-0.214623",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/detect",
            "value": 0.006721,
            "range": "0.006721-0.006721",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/summary",
            "value": 0.115947,
            "range": "0.115947-0.115947",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/serialising",
            "value": 4.707372,
            "range": "4.707372-4.707372",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/unaccounted",
            "value": 3.005408,
            "range": "3.005408-3.005408",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/output/graph",
            "value": 283762,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 5241acfb6f7cb6de9f7a1d1e19b5c9196c248ef9cd96d821dd26d0b158ad15b4"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/output/findings",
            "value": 3011148,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 9de40e54a3ada526d408a98ee9cc21153fe48c9ae091f3502213adb8f892a2b2"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/first",
            "value": 14.230009,
            "range": "13.888291-14.402143",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Cole Gaylord, a 19 MB FHIR R4 Bundle of 6,223 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Dona Okuneva's; the three are unrelated people. sha256 843940715d3b2edbdc883697a79ebf312a7754df290d28b0cd89e228549fa678, 19009113 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/second",
            "value": 13.356235,
            "range": "13.114764-13.564496",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/profiled",
            "value": 14.562677,
            "range": "14.562677-14.562677",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/wasm-memory/first",
            "value": 723714048,
            "range": "706936832-723714048",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/wasm-memory/second",
            "value": 723714048,
            "range": "706936832-723714048",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/rss",
            "value": 1111867392,
            "range": "1083109376-1153990656",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/records",
            "value": 6223,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Cole Gaylord, a 19 MB FHIR R4 Bundle of 6,223 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Dona Okuneva's; the three are unrelated people."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/triples",
            "value": 79183,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/findings",
            "value": 72909,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/coding-system-table.rq",
            "value": 0.183446,
            "range": "0.183446-0.183446",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/document-table.rq",
            "value": 0.016727,
            "range": "0.016727-0.016727",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-table.rq",
            "value": 0.019334,
            "range": "0.019334-0.019334",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-table.rq",
            "value": 0.018622,
            "range": "0.018622-0.018622",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/note-or-document-table.rq",
            "value": 0.009587,
            "range": "0.009587-0.009587",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-table.rq",
            "value": 0.02672,
            "range": "0.02672-0.02672",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation-table.rq",
            "value": 0.01123,
            "range": "0.01123-0.01123",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-table.rq",
            "value": 0.011362,
            "range": "0.011362-0.011362",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/absent-reasons.rq",
            "value": 0.102901,
            "range": "0.102901-0.102901",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/allergy-intolerance.rq",
            "value": 0.015063,
            "range": "0.015063-0.015063",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/attachments.rq",
            "value": 0.0246,
            "range": "0.0246-0.0246",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/condition.rq",
            "value": 0.027839,
            "range": "0.027839-0.027839",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/immunization.rq",
            "value": 0.017017,
            "range": "0.017017-0.017017",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-codes.rq",
            "value": 0.062489,
            "range": "0.062489-0.062489",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-identifiers.rq",
            "value": 0.020633,
            "range": "0.020633-0.020633",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-performer.rq",
            "value": 0.005208,
            "range": "0.005208-0.005208",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-quantities.rq",
            "value": 0.058807,
            "range": "0.058807-0.058807",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result.rq",
            "value": 0.075675,
            "range": "0.075675-0.075675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-prescription.rq",
            "value": 0.017042,
            "range": "0.017042-0.017042",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense.rq",
            "value": 0.01182,
            "range": "0.01182-0.01182",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-supply-and-dosages.rq",
            "value": 0.022369,
            "range": "0.022369-0.022369",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication.rq",
            "value": 0.023514,
            "range": "0.023514-0.023514",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/narrative-text.rq",
            "value": 0.083444,
            "range": "0.083444-0.083444",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/note-or-document.rq",
            "value": 0.029758,
            "range": "0.029758-0.029758",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-from-server.rq",
            "value": 0.007379,
            "range": "0.007379-0.007379",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization.rq",
            "value": 0.01935,
            "range": "0.01935-0.01935",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient.rq",
            "value": 0.012696,
            "range": "0.012696-0.012696",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/procedure.rq",
            "value": 0.038898,
            "range": "0.038898-0.038898",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/record.rq",
            "value": 0.364372,
            "range": "0.364372-0.364372",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-and-note-performer.rq",
            "value": 0.005217,
            "range": "0.005217-0.005217",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-results.rq",
            "value": 0.065537,
            "range": "0.065537-0.065537",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report.rq",
            "value": 0.050883,
            "range": "0.050883-0.050883",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation.rq",
            "value": 0.015133,
            "range": "0.015133-0.015133",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant.rq",
            "value": 0.013697,
            "range": "0.013697-0.013697",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/absent-reason-findings.rq",
            "value": 0.047197,
            "range": "0.047197-0.047197",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/category-text-findings.rq",
            "value": 0.01982,
            "range": "0.01982-0.01982",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/code-findings.rq",
            "value": 0.023677,
            "range": "0.023677-0.023677",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/date-findings.rq",
            "value": 0.053808,
            "range": "0.053808-0.053808",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/document-version-findings.rq",
            "value": 0.002194,
            "range": "0.002194-0.002194",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-findings.rq",
            "value": 0.084053,
            "range": "0.084053-0.084053",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-findings.rq",
            "value": 0.012444,
            "range": "0.012444-0.012444",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.015703,
            "range": "0.015703-0.015703",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-findings.rq",
            "value": 0.182215,
            "range": "0.182215-0.182215",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/narrative-findings.rq",
            "value": 0.011829,
            "range": "0.011829-0.011829",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/observation-component-findings.rq",
            "value": 0.042178,
            "range": "0.042178-0.042178",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/observation-findings.rq",
            "value": 0.063483,
            "range": "0.063483-0.063483",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-findings.rq",
            "value": 0.011894,
            "range": "0.011894-0.011894",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient-findings.rq",
            "value": 0.011105,
            "range": "0.011105-0.011105",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient-reference-findings.rq",
            "value": 0.056467,
            "range": "0.056467-0.056467",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/recorded-date-findings.rq",
            "value": 0.014879,
            "range": "0.014879-0.014879",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/reference-display-findings.rq",
            "value": 0.059663,
            "range": "0.059663-0.059663",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/reference-without-server-findings.rq",
            "value": 0.025518,
            "range": "0.025518-0.025518",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/repeated-id-findings.rq",
            "value": 0.029297,
            "range": "0.029297-0.029297",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-and-note-findings.rq",
            "value": 0.028802,
            "range": "0.028802-0.028802",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-result-findings.rq",
            "value": 0.030607,
            "range": "0.030607-0.030607",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/resource-type-findings.rq",
            "value": 0.023997,
            "range": "0.023997-0.023997",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-findings.rq",
            "value": 0.02477,
            "range": "0.02477-0.02477",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation-findings.rq",
            "value": 0.015538,
            "range": "0.015538-0.015538",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/detect.rq",
            "value": 0.006509,
            "range": "0.006509-0.006509",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/document-table",
            "value": 0.418462,
            "range": "0.418462-0.418462",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/lift",
            "value": 1.350594,
            "range": "1.350594-1.350594",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/source-validation",
            "value": 2.381448,
            "range": "2.381448-2.381448",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/accounting",
            "value": 0.48698,
            "range": "0.48698-0.48698",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/dataset",
            "value": 0.014954,
            "range": "0.014954-0.014954",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/index",
            "value": 0.641677,
            "range": "0.641677-0.641677",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/mapping",
            "value": 1.2423,
            "range": "1.2423-1.2423",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/records",
            "value": 0.242319,
            "range": "0.242319-0.242319",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/output-validation",
            "value": 3.842469,
            "range": "3.842469-3.842469",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/findings",
            "value": 1.230935,
            "range": "1.230935-1.230935",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/unresolved-addresses",
            "value": 0.073394,
            "range": "0.073394-0.073394",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/detect",
            "value": 0.006604,
            "range": "0.006604-0.006604",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/summary",
            "value": 0.037354,
            "range": "0.037354-0.037354",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/serialising",
            "value": 1.662252,
            "range": "1.662252-1.662252",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/unaccounted",
            "value": 0.930935,
            "range": "0.930935-0.930935",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/output/graph",
            "value": 79183,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 4a0efd931e29be8bc7f18e54577b1a79251cdec785961503cfb14c2add98830d"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/output/findings",
            "value": 1105859,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 e2390f83b5b1732a36a59e3e296df199c0085c7e875099be9d3dc489ee652832"
          },
          {
            "name": "fhir-r4/load",
            "value": 0.620392,
            "range": "0.585041-0.670381",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "fhir-r4/load/read-files",
            "value": 0.009737,
            "range": "0.008863-0.013988",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "fhir-r4/load/prepare",
            "value": 0.610678,
            "range": "0.576021-0.660829",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "fhir-r4/boot/read-wasm",
            "value": 0.003827,
            "range": "0.00366-0.004877",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "fhir-r4/boot/compile-wasm",
            "value": 0.013827,
            "range": "0.013324-0.017838",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "fhir-r4/boot/instantiate-wasm",
            "value": 0.001208,
            "range": "0.001-0.002963",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jayostis@gmail.com",
            "name": "jayostis",
            "username": "jayostis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15621eef1b6e4578c254871490838e45939a8487",
          "message": "Merge pull request #77 from the-cascade-protocol/chore/org-addresses\n\nchore(org): addresses name the-cascade-protocol, not the personal account",
          "timestamp": "2026-11-21T13:50:16-08:00",
          "tree_id": "cca51dae8561e86a721074c110a82ffe4aec570a",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-fhir-r4/commit/15621eef1b6e4578c254871490838e45939a8487"
        },
        "date": 1795297904370,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fhir-r4-lab-pull-3000/convert/first",
            "value": 6.399473,
            "range": "6.283246-6.409673",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. A pull of 3,000 lab results in one FHIR R4 searchset Bundle. sha256 69b4daac45fd32449b8c290be9a7551566b537a6171218e8125169e94ca5882b, 2760035 bytes"
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/second",
            "value": 6.035439,
            "range": "5.954601-6.103896",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/profiled",
            "value": 6.751204,
            "range": "6.751204-6.751204",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/rss",
            "value": 394608640,
            "range": "349335552-417955840",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-lab-pull-3000/records",
            "value": 3004,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. A pull of 3,000 lab results in one FHIR R4 searchset Bundle."
          },
          {
            "name": "fhir-r4-lab-pull-3000/triples",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/findings",
            "value": 3006,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-lab-pull-3000/fallbacks",
            "value": 0,
            "unit": "{count}",
            "extra": "Record executions the general evaluator answered because a query was not compiled or a compiled plan gave up. The detect query, which runs once, is not counted."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/coding-system-table.rq",
            "value": 0.061357,
            "range": "0.061357-0.061357",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-table.rq",
            "value": 0.008905,
            "range": "0.008905-0.008905",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-table.rq",
            "value": 0.018202,
            "range": "0.018202-0.018202",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-table.rq",
            "value": 0.009492,
            "range": "0.009492-0.009492",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document-table.rq",
            "value": 0.004861,
            "range": "0.004861-0.004861",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-table.rq",
            "value": 0.016978,
            "range": "0.016978-0.016978",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-table.rq",
            "value": 0.006937,
            "range": "0.006937-0.006937",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-table.rq",
            "value": 0.007455,
            "range": "0.007455-0.007455",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reasons.rq",
            "value": 0.064461,
            "range": "0.064461-0.064461",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/allergy-intolerance.rq",
            "value": 0.009048,
            "range": "0.009048-0.009048",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/attachments.rq",
            "value": 0.010947,
            "range": "0.010947-0.010947",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/condition.rq",
            "value": 0.009041,
            "range": "0.009041-0.009041",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/immunization.rq",
            "value": 0.008712,
            "range": "0.008712-0.008712",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-codes.rq",
            "value": 0.101675,
            "range": "0.101675-0.101675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-identifiers.rq",
            "value": 0.022276,
            "range": "0.022276-0.022276",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-performer.rq",
            "value": 0.003805,
            "range": "0.003805-0.003805",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-quantities.rq",
            "value": 0.117604,
            "range": "0.117604-0.117604",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result.rq",
            "value": 0.119067,
            "range": "0.119067-0.119067",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription.rq",
            "value": 0.011433,
            "range": "0.011433-0.011433",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense.rq",
            "value": 0.007499,
            "range": "0.007499-0.007499",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-supply-and-dosages.rq",
            "value": 0.009669,
            "range": "0.009669-0.009669",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication.rq",
            "value": 0.008984,
            "range": "0.008984-0.008984",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-text.rq",
            "value": 0.029991,
            "range": "0.029991-0.029991",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document.rq",
            "value": 0.008209,
            "range": "0.008209-0.008209",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-from-server.rq",
            "value": 0.005084,
            "range": "0.005084-0.005084",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization.rq",
            "value": 0.011986,
            "range": "0.011986-0.011986",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient.rq",
            "value": 0.008148,
            "range": "0.008148-0.008148",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/procedure.rq",
            "value": 0.007274,
            "range": "0.007274-0.007274",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/record.rq",
            "value": 0.273463,
            "range": "0.273463-0.273463",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-performer.rq",
            "value": 0.003656,
            "range": "0.003656-0.003656",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-results.rq",
            "value": 0.010204,
            "range": "0.010204-0.010204",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report.rq",
            "value": 0.007877,
            "range": "0.007877-0.007877",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation.rq",
            "value": 0.0104,
            "range": "0.0104-0.0104",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant.rq",
            "value": 0.008997,
            "range": "0.008997-0.008997",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reason-findings.rq",
            "value": 0.038178,
            "range": "0.038178-0.038178",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/category-text-findings.rq",
            "value": 0.01181,
            "range": "0.01181-0.01181",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/code-findings.rq",
            "value": 0.008502,
            "range": "0.008502-0.008502",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/date-findings.rq",
            "value": 0.041002,
            "range": "0.041002-0.041002",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-version-findings.rq",
            "value": 0.001489,
            "range": "0.001489-0.001489",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-findings.rq",
            "value": 0.079154,
            "range": "0.079154-0.079154",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-findings.rq",
            "value": 0.008387,
            "range": "0.008387-0.008387",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.009986,
            "range": "0.009986-0.009986",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-findings.rq",
            "value": 0.064804,
            "range": "0.064804-0.064804",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-findings.rq",
            "value": 0.007152,
            "range": "0.007152-0.007152",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-component-findings.rq",
            "value": 0.009948,
            "range": "0.009948-0.009948",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-findings.rq",
            "value": 0.062831,
            "range": "0.062831-0.062831",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-findings.rq",
            "value": 0.008348,
            "range": "0.008348-0.008348",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-findings.rq",
            "value": 0.006962,
            "range": "0.006962-0.006962",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-reference-findings.rq",
            "value": 0.057021,
            "range": "0.057021-0.057021",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/recorded-date-findings.rq",
            "value": 0.008756,
            "range": "0.008756-0.008756",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-display-findings.rq",
            "value": 0.032243,
            "range": "0.032243-0.032243",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-without-server-findings.rq",
            "value": 0.037726,
            "range": "0.037726-0.037726",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/repeated-id-findings.rq",
            "value": 0.025345,
            "range": "0.025345-0.025345",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-findings.rq",
            "value": 0.011608,
            "range": "0.011608-0.011608",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-result-findings.rq",
            "value": 0.010082,
            "range": "0.010082-0.010082",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/resource-type-findings.rq",
            "value": 0.009961,
            "range": "0.009961-0.009961",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-findings.rq",
            "value": 0.017364,
            "range": "0.017364-0.017364",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-findings.rq",
            "value": 0.01182,
            "range": "0.01182-0.01182",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/detect.rq",
            "value": 0.007121,
            "range": "0.007121-0.007121",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/document-table",
            "value": 0.173304,
            "range": "0.173304-0.173304",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/lift",
            "value": 0.355599,
            "range": "0.355599-0.355599",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/source-validation",
            "value": 0.955745,
            "range": "0.955745-0.955745",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/accounting",
            "value": 0.017509,
            "range": "0.017509-0.017509",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/dataset",
            "value": 0.010278,
            "range": "0.010278-0.010278",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/index",
            "value": 0.198513,
            "range": "0.198513-0.198513",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/mapping",
            "value": 0.921015,
            "range": "0.921015-0.921015",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/records",
            "value": 0.226576,
            "range": "0.226576-0.226576",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/output-validation",
            "value": 2.748478,
            "range": "2.748478-2.748478",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/findings",
            "value": 0.793016,
            "range": "0.793016-0.793016",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unresolved-addresses",
            "value": 0.036342,
            "range": "0.036342-0.036342",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/detect",
            "value": 0.007246,
            "range": "0.007246-0.007246",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/summary",
            "value": 0.014263,
            "range": "0.014263-0.014263",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/serialising",
            "value": 0.128987,
            "range": "0.128987-0.128987",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unaccounted",
            "value": 0.164331,
            "range": "0.164331-0.164331",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/graph",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 37ddd3ff45eedcca686486482a5dd0ea90120d791c04352fb96a41e20d5fe7ac"
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/findings",
            "value": 45090,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 21239a39a4729ba969bd423ee6088a728e8605fcfbcd31a1c9d285695c6251e5"
          },
          {
            "name": "fhir-r4/load",
            "value": 0.708435,
            "range": "0.690466-0.708728",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "fhir-r4/load/read-files",
            "value": 0.011092,
            "range": "0.010337-0.011993",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "fhir-r4/load/prepare",
            "value": 0.696442,
            "range": "0.679374-0.698391",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "fhir-r4/boot/read-wasm",
            "value": 0.003666,
            "range": "0.003561-0.003869",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "fhir-r4/boot/compile-wasm",
            "value": 0.016935,
            "range": "0.0169-0.024756",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "fhir-r4/boot/instantiate-wasm",
            "value": 0.001494,
            "range": "0.001243-0.005287",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      }
    ]
  }
}