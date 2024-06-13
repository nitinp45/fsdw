const express = require('express');
const mongoose = require('mongoose');
const usermodel = require('./usermodels');

const app = express();
app.use(express.json());


// POST route to create a new user
app.post('/create', async (req, res) => {
  try {
    const createrecord = new usermodel(req.body);
    const insertUser = await createrecord.save();
    res.status(200).send(insertUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

// GET route to read all users
app.get('/read', async (req, res) => {
  try {
    let user = await usermodel.find();
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});
app.put('/update/:id', async (req, res) => {
    try {
      const updatedUser = await usermodel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedUser) {
        return res.status(404).send();
      }
      res.status(200).send(updatedUser);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  app.delete('/delete/:id', async (req, res) => {
    try {
      const userdelete = await usermodel.findByIdAndDelete(req.params.id);

      res.status(200).send({ message: "User deleted successfully" });
    } catch (e) {
      res.status(500).send(e);
    }
  });
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
