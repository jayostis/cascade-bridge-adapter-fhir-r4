window.BENCHMARK_DATA = {
  "lastUpdate": 1795147198894,
  "repoUrl": "https://github.com/jayostis/cascade-bridge-adapter-fhir-r4",
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
      }
    ]
  }
}