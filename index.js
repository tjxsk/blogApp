const express = require("express");


const app = new express();
var PORT = 3000;
app.use(express.json());
const blogModel=require('./model');
require('./connection');
//Write missing code here and all the CRUD operations on the database
app.use(express.urlencoded({ extended: true }));


//get operation
app.get('/users', async (req, res) => {
  try {
    const data = await blogModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send('DATA NOT FOUND');
  }
});

//post operation
app.post('/add', async (req, res) => {
  try {
    const data = await blogModel.create(req.body);
    res.status(201).send('Successfully added');
  } catch (error) {
    res.status(400).send('post unsuccessfull');
  }
});

//update operation
app.put('/edit/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await blogModel.findByIdAndUpdate(id, req.body);
    res.status(200).send('Successfully updated');
  } catch (error) {
    res.status(400).send('update unsuccessfull');
  }
});

//delete operation
app.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await blogModel.findByIdAndDelete(id, req.body);
    res.status(200).send('Successfully deleted');
  } catch (error) {
    res.status(400).send('delete unsuccessfull');
  }
});



app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
