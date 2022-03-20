import abc
from abc import ABC, abstractmethod

class AbstractDatabaseHandler(ABC):
    @abstractmethod
    def createTable(self,data):
        pass
    @abstractmethod
    def login(self,data):
        pass
    
    @abstractmethod
    def createDatabase(self,data):
        pass
    """
    @abstractmethod
    def insertRecord(self):
        pass
    
    @abstractmethod
    def deleteRecord(self):
        pass
    @abstractmethod
    def query(self):
        pass
        """
