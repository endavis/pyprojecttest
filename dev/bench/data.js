window.BENCHMARK_DATA = {
  "lastUpdate": 1776966802462,
  "repoUrl": "https://github.com/endavis/pyprojecttest",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "6662995+endavis@users.noreply.github.com",
            "name": "Eric Davis",
            "username": "endavis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3446f56cd4d17bc1365dce2e6a1569564f8326cf",
          "message": "Initial commit",
          "timestamp": "2026-04-23T18:47:54+01:00",
          "tree_id": "38e612fa8a1ad7a89800935d0c2f638c88efe6a7",
          "url": "https://github.com/endavis/pyprojecttest/commit/3446f56cd4d17bc1365dce2e6a1569564f8326cf"
        },
        "date": 1776966802228,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_bench_core.py::test_bench_greet_default",
            "value": 9062322.351292185,
            "unit": "iter/sec",
            "range": "stddev: 1.1289428609855493e-8",
            "extra": "mean: 110.3469906758957 nsec\nrounds: 85049"
          },
          {
            "name": "tests/benchmarks/test_bench_core.py::test_bench_greet_with_name",
            "value": 8815309.498911269,
            "unit": "iter/sec",
            "range": "stddev: 1.1968524093088214e-8",
            "extra": "mean: 113.43901199651634 nsec\nrounds: 84190"
          },
          {
            "name": "tests/benchmarks/test_bench_core.py::test_bench_greet_long_name",
            "value": 6420636.868513414,
            "unit": "iter/sec",
            "range": "stddev: 1.5036265393688918e-8",
            "extra": "mean: 155.74778958516814 nsec\nrounds: 61260"
          },
          {
            "name": "tests/benchmarks/test_bench_logging.py::test_bench_get_logger",
            "value": 1766251.8016288592,
            "unit": "iter/sec",
            "range": "stddev: 2.6714544199930934e-7",
            "extra": "mean: 566.1706892968419 nsec\nrounds: 56348"
          },
          {
            "name": "tests/benchmarks/test_bench_logging.py::test_bench_setup_logging",
            "value": 499218.46312313236,
            "unit": "iter/sec",
            "range": "stddev: 6.622830412023134e-7",
            "extra": "mean: 2.0031310415563492 usec\nrounds: 44856"
          }
        ]
      }
    ]
  }
}