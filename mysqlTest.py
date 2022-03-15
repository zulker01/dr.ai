import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="zulker",
  password="muri khao muri"
)

print(mydb)

mycursor = mydb.cursor()
print(mycursor)

mycursor.execute("CREATE DATABASE IF NOT EXISTS TenantInfo")  # create database &  then use it 
mycursor.execute("use TenantInfo")
mycursor.execute("CREATE TABLE IF NOT EXISTS tenants (name VARCHAR(255), address VARCHAR(255))") # create table
mycursor.execute("SHOW TABLES")

for x in mycursor:
    print(x)


"""
#If this page is executed with no error, you have successfully created a database.

mycursor = mydb.cursor()

mycursor.execute("CREATE DATABASE IF NOT EXISTS TenantInfo")

#mycursor.execute("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))")




"""



"""
log : 
    
    1 install mysql server
    2 install mysql connector for python
    3 create a user in mysql server : create user 'zulker'@'localhost' identified by 'muri khao muri'
    4 use the authentication id & password in python in code
    5 grant all permission to the user as super user in root :GRANT ALL PRIVILEGES ON *.* TO 'zulker'@'localhost';

"""