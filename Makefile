.PHONY: install test docs

install:
	pip install --upgrade pip
	pip install -e ".[dev]"
	pre-commit install

docs:
	jupyter-book build docs
	cp -r docs/_extras/* docs/_build/html/
