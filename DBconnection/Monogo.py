from pymongo import MongoClient

# Connect to the MongoDB server
client = MongoClient('mongodb://abinash.biswal:7a1843b173fd2cd6@qa-mcsmongo001.aws.phenom.local:27017,qa-mcsmongo002.aws.phenom.local:27017,qa-mcsmongo003.aws.phenom.local:27017/')
databases = client.list_database_names()

for db in databases:
    print(db)
# Access a database
#db1 = client['candidates']
#collections=db1.list_collection_names()
#for collection in collections:
#    print(collection)
#print("DB connected")
# Access a collection
#collection = db['mycollection']

# Insert a document
#document = {"name": "John", "age": 30, "city": "New York"}
#collection.insert_one(document)

# Find a document
#result = collection.find_one({"name": "John"})
#print(result)

# Close the connection
client.close()
