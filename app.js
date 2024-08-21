const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const db = require('./models');
const studentRoutes = require('./Routes/studentRoutes');
const AdminRoutes = require('./Routes/AdminRoutes');


const app = express();

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use('/student', studentRoutes);
app.use('/Admin', AdminRoutes);

async function startServer() {
  try {
    await db.sequelize.sync(); 
    app.listen(8000, () => {
      console.log('Server is running on http://localhost:8000');
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}
startServer();                                    