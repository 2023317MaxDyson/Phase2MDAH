
const express = require( 'express');

const { connect } = require( 'mongoose');

 const expressapp = express();

 const workspaceRoute =  require('./routes/workspaceRoute')


 // Converts data into a javascript object 


 expressapp.use(express.urlencoded({extended: false}))

expressapp.use(express.json())

expressapp.use(workspaceRoute)


// Connecting to MongoDB Atlas 

const dataBaseURL = "mongodb+srv://MongoDB:getData12341@cluster0.hdvmacc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// Stops the deprecation warnings 

connect(dataBaseURL, {useNewUrlParser: true, useUnifiedTopology: true }  )
.then(() => {
    console.log("MongoDB Atlas is connected")
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

  expressapp.listen(5000, () => {
    console.log("Server is running...");
  });