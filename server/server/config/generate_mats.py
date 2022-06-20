
import os
import sys
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent

MONTY_DIR = BASE_DIR.parent
os.mkdir("mat")
os.mkdir("geo")

sys.path.insert(0, str(BASE_DIR.parent))
from MontyCarlo.geometry.CSG import *
from MontyCarlo.sources import *
from MontyCarlo import *

water = Mat(
    {1: 2, 8: 1},
    1,
    name="Water"
)

air = Mat(
    {
        6: 1.50187000E-04,
        7: 7.84430000E-01,
        8: 2.10748000E-01,
        18: 4.67111000E-03
    },
    1.20479e-03,
    C1=.2,
    C2=.2,
    name="AirDryNearSeaLevel"
)

gold = Mat(
    {79: 1},
    1.93200000E+01,
    name="Gold"
)