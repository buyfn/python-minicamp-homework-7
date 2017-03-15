import sqlite3

connection = sqlite3.connect('database.db')
print('Opened successfully')

connection.execute('CREATE TABLE posts (author TEXT, title TEXT, body TEXT, likes INTEGER DEFAULT 0, id INTEGER PRIMARY KEY AUTOINCREMENT)')
print('Table successfully created')
connection.close()
