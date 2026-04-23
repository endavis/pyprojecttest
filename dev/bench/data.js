window.BENCHMARK_DATA = {
  "lastUpdate": 1776967236617,
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
      },
      {
        "commit": {
          "author": {
            "email": "6662995+endavis@users.noreply.github.com",
            "name": "Eric Davis",
            "username": "endavis"
          },
          "committer": {
            "email": "6662995+endavis@users.noreply.github.com",
            "name": "Eric Davis",
            "username": "endavis"
          },
          "distinct": true,
          "id": "b465e80502f5e101d6f9f2492363f60c340b9ca5",
          "message": "chore: apply code formatting\n\n- Fix linting issues with ruff\n- Format pyproject.toml with pyproject-fmt\n- Format code with ruff\n\n🤖 Generated with setup-repo.py",
          "timestamp": "2026-04-23T18:48:27+01:00",
          "tree_id": "66840889caaf4f4cb72cba44711fb2b2fbdd28f0",
          "url": "https://github.com/endavis/pyprojecttest/commit/b465e80502f5e101d6f9f2492363f60c340b9ca5"
        },
        "date": 1776966840983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_bench_core.py::test_bench_greet_default",
            "value": 8873899.302700398,
            "unit": "iter/sec",
            "range": "stddev: 1.08644326187878e-8",
            "extra": "mean: 112.69003240725213 nsec\nrounds: 87635"
          },
          {
            "name": "tests/benchmarks/test_bench_core.py::test_bench_greet_with_name",
            "value": 8818000.75014986,
            "unit": "iter/sec",
            "range": "stddev: 1.1457082337468712e-8",
            "extra": "mean: 113.4043904433786 nsec\nrounds: 89278"
          },
          {
            "name": "tests/benchmarks/test_bench_core.py::test_bench_greet_long_name",
            "value": 5266911.482186718,
            "unit": "iter/sec",
            "range": "stddev: 2.241145798544577e-8",
            "extra": "mean: 189.8645920635104 nsec\nrounds: 52643"
          },
          {
            "name": "tests/benchmarks/test_bench_logging.py::test_bench_get_logger",
            "value": 1666388.7228864117,
            "unit": "iter/sec",
            "range": "stddev: 2.790862572762142e-7",
            "extra": "mean: 600.1000764502679 nsec\nrounds: 58855"
          },
          {
            "name": "tests/benchmarks/test_bench_logging.py::test_bench_setup_logging",
            "value": 497724.8068839193,
            "unit": "iter/sec",
            "range": "stddev: 5.115442439249661e-7",
            "extra": "mean: 2.009142373796174 usec\nrounds: 52313"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "6662995+endavis@users.noreply.github.com",
            "name": "Eric Davis",
            "username": "endavis"
          },
          "committer": {
            "email": "6662995+endavis@users.noreply.github.com",
            "name": "Eric Davis",
            "username": "endavis"
          },
          "distinct": true,
          "id": "100251cf7c00af1da18bd3f6d076122c2ae874f4",
          "message": "chore: remove template management suite\n\nAuto-removed by setup_repo.py to keep the consumer project free of\ntemplate-only tooling:\n\n- tools/pyproject_template/ (manage.py, setup_repo.py, configure.py,\n  cleanup.py, check_template_updates.py, migrate_existing_project.py,\n  settings.py, repo_settings.py, utils.py, __init__.py)\n- docs/template/\n- bootstrap.py\n- Template nav section in mkdocs.yml\n\nTo reinstall the template-sync suite later, run:\n  curl -sSL https://raw.githubusercontent.com/endavis/pyproject-template/main/bootstrap.py \\\n      | python3 - --sync\n\n🤖 Generated with setup-repo.py",
          "timestamp": "2026-04-23T18:48:29+01:00",
          "tree_id": "ec4479b8ec8e8f533757cc74efd22a4c5a9c75b3",
          "url": "https://github.com/endavis/pyprojecttest/commit/100251cf7c00af1da18bd3f6d076122c2ae874f4"
        },
        "date": 1776966849426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_bench_core.py::test_bench_greet_default",
            "value": 8842928.343590276,
            "unit": "iter/sec",
            "range": "stddev: 1.321201204342709e-8",
            "extra": "mean: 113.08471143779444 nsec\nrounds: 85978"
          },
          {
            "name": "tests/benchmarks/test_bench_core.py::test_bench_greet_with_name",
            "value": 8815791.426948726,
            "unit": "iter/sec",
            "range": "stddev: 3.1296550870551314e-8",
            "extra": "mean: 113.43281068823046 nsec\nrounds: 91241"
          },
          {
            "name": "tests/benchmarks/test_bench_core.py::test_bench_greet_long_name",
            "value": 5092131.809527953,
            "unit": "iter/sec",
            "range": "stddev: 2.908699906743827e-8",
            "extra": "mean: 196.3814051570478 nsec\nrounds: 199243"
          },
          {
            "name": "tests/benchmarks/test_bench_logging.py::test_bench_get_logger",
            "value": 1663497.396150551,
            "unit": "iter/sec",
            "range": "stddev: 2.4664429897403724e-7",
            "extra": "mean: 601.1431110827524 nsec\nrounds: 58507"
          },
          {
            "name": "tests/benchmarks/test_bench_logging.py::test_bench_setup_logging",
            "value": 486123.41152839817,
            "unit": "iter/sec",
            "range": "stddev: 4.955960144848765e-7",
            "extra": "mean: 2.0570908051022396 usec\nrounds: 52453"
          }
        ]
      },
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
          "id": "6d7c70c9f6d613f3255c9a28cbf1854e4883ee79",
          "message": "release: v0.1.0a0 (merges PR #1)\n\nchore: update changelog for v0.1.0a0",
          "timestamp": "2026-04-23T19:00:06+01:00",
          "tree_id": "42cae89124088940e17ceb7e3bcdd2a981bce643",
          "url": "https://github.com/endavis/pyprojecttest/commit/6d7c70c9f6d613f3255c9a28cbf1854e4883ee79"
        },
        "date": 1776967235708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_bench_core.py::test_bench_greet_default",
            "value": 8810095.611860292,
            "unit": "iter/sec",
            "range": "stddev: 1.5743204981942578e-8",
            "extra": "mean: 113.5061461369141 nsec\nrounds: 84510"
          },
          {
            "name": "tests/benchmarks/test_bench_core.py::test_bench_greet_with_name",
            "value": 8986798.15565931,
            "unit": "iter/sec",
            "range": "stddev: 1.2576958835987135e-8",
            "extra": "mean: 111.27433627406708 nsec\nrounds: 88410"
          },
          {
            "name": "tests/benchmarks/test_bench_core.py::test_bench_greet_long_name",
            "value": 5364061.407962341,
            "unit": "iter/sec",
            "range": "stddev: 1.6005373288821668e-8",
            "extra": "mean: 186.42590454233303 nsec\nrounds: 54663"
          },
          {
            "name": "tests/benchmarks/test_bench_logging.py::test_bench_get_logger",
            "value": 1652755.9030917496,
            "unit": "iter/sec",
            "range": "stddev: 2.816599358414286e-7",
            "extra": "mean: 605.0500247068165 nsec\nrounds: 56712"
          },
          {
            "name": "tests/benchmarks/test_bench_logging.py::test_bench_setup_logging",
            "value": 487737.1024662399,
            "unit": "iter/sec",
            "range": "stddev: 5.299286366024993e-7",
            "extra": "mean: 2.0502848664649576 usec\nrounds: 56616"
          }
        ]
      }
    ]
  }
}