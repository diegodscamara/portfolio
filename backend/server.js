const express = require('express');
const bodyParser = require('body-parser');
const { connect, getDb } = require('./db');
const mongodb = require('mongodb'); // Add this line

const app = express();
const port = 3000; // Update with your desired port number

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a new record
app.post('/api/records', (req, res) => {
  const record = req.body;

  const db = getDb();
  db.collection('records').insertOne(record, (error, result) => {
    if (error) {
      console.error('Failed to insert record:', error);
      res.status(500).send('Failed to insert record');
      return;
    }

    res.send('Record created successfully');
  });
});

// Read all records
app.get('/api/records', (req, res) => {
  const db = getDb();
  db.collection('records').find({}).toArray((error, records) => {
    if (error) {
      console.error('Failed to fetch records:', error);
      res.status(500).send('Failed to fetch records');
      return;
    }

    res.json(records);
  });
});

// Read a single record
app.get('/api/records/:id', (req, res) => {
  const id = req.params.id;

  const db = getDb();
  db.collection('records').findOne({ _id: mongodb.ObjectId(id) }, (error, record) => {
    if (error) {
      console.error('Failed to fetch record:', error);
      res.status(500).send('Failed to fetch record');
      return;
    }

    if (!record) {
      res.status(404).send('Record not found');
      return;
    }

    res.json(record);
  });
});

// Update a record
app.put('/api/records/:id', (req, res) => {
  const id = req.params.id;
  const updatedRecord = req.body;

  const db = getDb();
  db.collection('records').updateOne(
    { _id: mongodb.ObjectId(id) },
    { $set: updatedRecord },
    (error, result) => {
      if (error) {
        console.error('Failed to update record:', error);
        res.status(500).send('Failed to update record');
        return;
      }

      if (result.modifiedCount === 0) {
        res.status(404).send('Record not found');
        return;
      }

      res.send('Record updated successfully');
    }
  );
});

// Delete a record
app.delete('/api/records/:id', (req, res) => {
  const id = req.params.id;

  const db = getDb();
  db.collection('records').deleteOne({ _id: mongodb.ObjectId(id) }, (error, result) => {
    if (error) {
      console.error('Failed to delete record:', error);
      res.status(500).send('Failed to delete record');
      return;
    }

    if (result.deletedCount === 0) {
      res.status(404).send('Record not found');
      return;
    }

    res.send('Record deleted successfully');
  });
});

connect(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
