const db = require('../models');
const { Op, where } = require('sequelize');
const student = require('../models/student');

exports.GetAllStudents = async (req, res) => {

  console.log("get called");
  try {

    // offset: 6, limit: 5
    const students = await db.Student.findAll({include:db.Address }
      
    );
    res.status(200).json({ message: "Connection successful", data: students });
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).send('Server Erro2r');
  }
};

exports.CreateStudent = async (req, res) => {
  try {
    const { name, age,Parmanent_Address ,Local_Address} = req.body;
    console.log( name, age );
     await db.Student.create({ name, age }).then((data) => {

 db.Address.create({
  Parmanent_Address:Parmanent_Address,
  Local_Address:Local_Address,
  StudentId:data.id

 }).then((result)=>{

  res.status(200).json({ message: "CreateUser  successful",});

 })
    })
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).send('Server Error');
  }
};

// delete data /
exports.DeleteStudent=async(req,res)=>{
const  id = req.body.id;
try {
  // console.log(id);
  if (!id) {
    return res.status(400).send('ID is required');
  }
  db.Student.destroy({ where: { id : id }}).then((data) => {
  res.status(200).json({ message: "Delete student successful", data:data });
 })
} catch (error) {
  console.error('Error creating student:', error);
    res.status(500).send('Server Error');
}
}

// update student data 
exports.UpdateStudent=async(req, res) => {
  const id = req.body.id;
  db.Student.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};


// search data by name 

exports.searchStudentbyname = async(req,res)=>{
const {skey}= req.body;
const age = parseInt(skey, 10);
if(!skey){
  res.status(500).json({ message: 'keyword is required!' })
}
try {
db.Student.findAll(
  {include:db.Address ,
    where:{   
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${skey}%`, // Search for keyword in name field
          },
        },
        {
          age: {
            [Op.eq]: !isNaN(age) ? age : null, // Search for exact age if valid number
          },
        },
      ],
    }  
  }).then((resp)=>{
    // console.log( "line 100"  , resp)
if (resp) {
  // console.log(res);
  res.status(500).json({ message: 'Not found!' ,data: resp })
} else {
  res.status(200).json({ message: "successfully data get",data: resp })
}
})} 
catch (error) {

  console.error('Error creating student:', error);
  res.status(500).send('Server Error');
  
}
}

                   
