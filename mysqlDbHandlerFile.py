from AbstractDatabaseHandlerFile import AbstractDatabaseHandler
#import mysql.connector
class mysqlDbHandler(AbstractDatabaseHandler):
    
    
    def createTable(self,data):
        print("table Created")
        
        print(data["name"])
        print(data["fields"])
        print(data["fields"][1])
        
        
    def login(self, data):
        """
        global mydb
        mydb = mysql.connector.connect(
          host=data["host"],
          user=data["user"],
          password=data["password"]
        )
        
        
        
        print(mydb)
        global mycursor
        mycursor = mydb.cursor()
        print(mycursor)
        """
        print("mysql connected ")
    def createDatabase(self,data):
        #mycursor.execute("create database if not exists "+data["name"])
        print(data["name"])
        
