window.BENCHMARK_DATA = {
  "lastUpdate": 1795122098664,
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
      }
    ]
  }
}