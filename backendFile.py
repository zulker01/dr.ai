import json
#import mysql.connector
from mysqlDbHandlerFile import mysqlDbHandler
from AbstractDatabaseHandlerFile import AbstractDatabaseHandler

with open('mysqlDB.json', 'r') as f:
  data2 = json.load(f)

print(data2["Login"]["host"])

dataJson = '{"host":"localhost","user":"root","password":"endeavour"}'

data = json.loads(dataJson)

dbHandlerObj = mysqlDbHandler()
dbHandlerObj.login(data)

databaseJson = '{"name":"ApartmentManagement"}'
data = json.loads(databaseJson)

tableJson = '{"name":"tenantInfo","fields":["name","age","NID"],"fieldsType":["varchar(100)","int","varchar(16)"]}'
tabledata = json.loads(tableJson)
dbHandlerObj.createDatabase(data)

dbHandlerObj.createTable(tabledata)

"""
data = mysqlDbHandler()
data.createTable()
#mycursor.execute("CREATE DATABASE mydatabase")

mycursor.execute("CREATE DATABASE IF NOT EXISTS"+data["CreateDatabase"]["CREATE DATABASE IF NOT EXISTS"])
mycursor.execute("USE "+data["CreateDatabase"]["CREATE DATABASE IF NOT EXISTS"])
mycursor.execute("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))")

mycursor.execute("CREATE DATABASE IF NOT EXISTS TenantInfo")
mycursor.execute("USE TenantInfo")
mycursor.execute("CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))")
mycursor.execute("show tables")
for x in mycursor:
    print(x)
    
"""