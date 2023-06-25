const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://diegodscamara:fhx7wkpd@cluster0.5ybewfj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db; // Reference to the database instance

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(); // Assign the database instance to the "db" variable
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}

function getDb() {
  return db;
}

module.exports = { connect, getDb };
