from django.db import models
from monaco.common.models import FileDTO,PrinterBase, ReaderBase, ScraperBase, Printer, Reader, Scraper
import pandas as pd
import numpy as np
import warnings
warnings.filterwarnings("ignore")
import pandas as pd
import pandas_datareader.data as web
import numpy as np
import matplotlib.pyplot as plt
from fbprophet import Prophet
from datetime import datetime

path = "c:/Windows/Fonts/malgun.ttf"
import platform
from matplotlib import font_manager, rc
if platform.system() == 'Darwin':
    rc('font', family='AppleGothic')
elif platform.system() == 'Windows':
    font_name = font_manager.FontProperties(fname=path).get_name()
    rc('font', family=font_name)
else:
    print('Unknown system... sorry~~~~')

plt.rcParams['axes.unicode_minus'] = False


class Entity(FileDTO,PrinterBase, ReaderBase, ScraperBase, Printer, Reader, Scraper):
    pass

class DataService(Reader):

    def __init__(self):
        self.file = FileDTO()
        self.reader = Reader()
        self.printer = Printer()

    def Regression(self):


