const express  = require('express')
const User  = require('../models/user')

const router = express.Router();


//POST : ADD A NEW USER TO THE DATABASE 
//@api http://localhost:8080/api
router.post('/', (req, res) => {
   const newUser = new User({ ...req.body });
   newUser
     .save()
     .then(() => { res.send("User has been added successfully!")
     .catch((err) => res.send(err))

   })
})

//Get : RETURN ALL USERS
//@api http://localhost:8080/api 
router.get('/',(req,res)=>{
   User
    .find()
    .then((users)=>{res.send((collection))
    .catch((err)=>res.send(err))
   })
})

//PUT : EDIT A USER BY ID 
//@api http://localhost:8080/api/_id
router.put('/:_id',(req,res)=>{
let {_id} =req.params;
   User
    .findOneAndUpdate({_id},{$set:{...req.body}})
    .then((user)=> res.send(user))
    .catch((err)=> res.send(err))
})

//DELETE : REMOVE A USER BY ID
//@api http://localhost:8080/api/_id 
router.delete('/:_id',(req,res)=>{
let {_id} =req.params;
    User
     .findOneAndRemove({_id})
     .then(()=>res.send("Useer has been deleted successfully!"))
     .catch((err)=> res.send(err))

})    
module.exports=router