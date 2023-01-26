const { isObjectIdOrHexString } = require('mongoose');
var Userdb = require('../model/model')
// create and save new user
exports.create = (req,res)=>{
// validate request
if(!req.body){
 res.status(400).send({message:"Content can not be empty!"});
 return;
}
// new user
const user = new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
})



// save user in the database

user
  .save(user)
  .then(data=>{
    res.send(data)
    res.redirect('/add-user');
    // res.redirect('/update-user');
    
  })
  .catch(err=>{
    res.status(500).send({
        message:err.message || "Internal Server Error"
    })
  })
  }
// retrieve and return all the users/ retrieve and return a single user
exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found user with id "+ id})
            }
            else{
                res.send(data)
            }
        }).catch(err=>{
            res.status(500).send({message:"Error retreiving user with id"+ id})
        })
    }else{
        Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error Occured while retrieving user information"})
        })
    }
}

// Update a new identified user by user id
exports.update = (req,res)=>{
   if(!req.body){
    return res
    .status(400)
    .send({message:"Data to update can not be empty "})
   }
   const id = req.params.id;
   Userdb.findOneAndUpdate(id,req.body,{id:req.params.id})
   .then(data=>{
    if(data){
        res.status(404).send({message:`Can not update the user ${id},User not found`})
    }else{
        res.send(data)
        res.status(200).send({message:`The user can be updated now ${id,res} `})
    }
   }).catch(err=>{
    res.status(500).send({message:"This users can not be updated"})
   })
}




// Delete a user with speicified user id in the request

exports.delete = (req,res)=>{
const id = req.params.id;
Userdb.findByIdAndDelete(id)
.then(data=>{
    if(data){
        res.status(404).send({message:`Cannot delete with user id ${id}.Maybe id is wrong`})
    }else{
        res.send({message:"User was deleted successfully"});
    }

}).catch(err=>{
    res.status(500).send({message:"Could not delete the user with user id=" +id})
})
}
