const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5001; // The port for your back-end server

// Middleware
app.use(express.json());  // Parses incoming JSON requests
app.use(cors());  // Allows cross-origin requests from the front-end (React)

// MongoDB connection setup
const uri = "mongodb+srv://convidenthelp:xCsKYGsWEz3rHKIm@cluster0.jjfto.mongodb.net/Project0?retryWrites=true&w=majority";
const client = new MongoClient(uri);

let dbConnection;

async function connectDB() {
  
  if (dbConnection) return dbConnection;
  try {
    await client.connect();
    dbConnection = client.db("Project0"); // Using the "Project0" database
    console.log("Connected to MongoDB!");
    return dbConnection;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}
app.get('/', (req, res) => {
    res.send('Server is running!');
  });
  
// Example route to fetch data from MongoDB
app.get('/api/data', async (req, res) => {
  try {
    const db = await connectDB();
    const collection = db.collection("Cluster0"); // Using the "Cluster0" collection
    const documents = await collection.find().toArray();
    res.json(documents);  // Send the MongoDB documents as JSON
  } catch (err) {
    res.status(500).send("Database error");
  }
});

// Example route to create a new document
app.post('/api/data', async (req, res) => {
  const { email, phone } = req.body;

  try {
    const db = await connectDB();
    const collection = db.collection("Cluster0"); // Replace with your collection name

    // Check if the email or phone already exists
    const existingUser = await collection.findOne({ $or: [{ email }, { phone }] });

    if (existingUser) {
      return res.json({ message: 'User already exists' });
    }

    // If user does not exist, insert new user
    const result = await collection.insertOne({ email, phone });
    res.json(result);  // Respond with the result of the insertion
  } catch (err) {
    console.error("Error inserting data into MongoDB:", err);
    res.status(500).send("Error inserting data");
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(cors({
  origin: 'http://localhost:5001'  
}));