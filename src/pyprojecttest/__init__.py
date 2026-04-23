"""pyprojecttest - A Python project based on pyproject-template."""

from ._version import __version__
from .core import greet
from .logging import get_logger, setup_logging

__all__ = ["__version__", "get_logger", "greet", "setup_logging"]
