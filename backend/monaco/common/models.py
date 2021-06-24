from django.db import models
from dataclasses import dataclass
from abc import *
import json
import googlemaps
import pandas as pd
from selenium import webdriver
import icecream as ic


@dataclass
class FileDTO(object):

    context: str
    fname: str
    url: str
    dframe: object

    @property
    def context(self) -> str: return self._context

    @context.setter
    def context(self, context): self._context = context

    @property
    def fname(self) -> str: return self._fname

    @fname.setter
    def fname(self, fname): self._fname = fname

    @property
    def url(self) -> str: return self._url

    @url.setter
    def url(self, url): self._url = url

    @property
    def dframe(self) -> object: return self._dframe

    @dframe.setter
    def dframe(self, dframe): self._dframe = dframe

class PrinterBase(metaclass=ABCMeta):

    @abstractmethod
    def dframe(self):
        pass

class ReaderBase(metaclass=ABCMeta):

    @abstractmethod
    def new_file(self):
        pass

    @abstractmethod
    def csv(self):
        pass

    @abstractmethod
    def xls(self):
        pass

    @abstractmethod
    def json(self):
        pass

class ScraperBase(metaclass=ABCMeta):

    @abstractmethod
    def driver(self):
        pass

class Printer(PrinterBase):

    def dframe(self, this):
        ic(this)
        ic(f'cctv 의 type \n {type(this)} 이다.')
        ic(f'cctv 의 column \n {this.columns} 이다.')
        ic(f'cctv 의 상위 5개 행\n {type(this.head(1))} 이다.')
        ic(f'cctv 의 null\n {this.isnull().sum()}개')


class Reader(ReaderBase):

    def new_file(self, file) -> str:
        return file._context + file._fname

    def csv(self, file, header) -> object:
        return pd.read_csv(f'{self.new_file(file)}.csv', encoding='UTF-8', thousands=',', header=header)

    def xls(self, file, header, usecols) -> object:
        return pd.read_excel(f'{self.new_file(file)}.xls', header=header, usecols=usecols)

    def json(self, file) -> object:
        return json.load(open(f'{self.new_file(file)}.json', encoding='UTF-8'))

    def gmaps(self) -> object:
        return googlemaps.Client(key='AIzaSyAdsgtjzlmn8G1wM1wrMrSomONGj-3vt9A')

class Scraper(ScraperBase):

    def driver(self) -> object:
        return webdriver.Chrome('C:/Users/bitcamp/chromedriver')
