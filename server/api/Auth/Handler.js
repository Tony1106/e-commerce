const user = require('./Model');
const Joi = require('joi');
const hashPassword = require('./helper').hashPassword
function create(req,res,next){
    //Validation Schema
    const schema = Joi.object().keys({
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).required()
    })
    
    const {username, password} = req.body;
    
    const validated = Joi.validate({username, password}, schema);
    if(validated.error){
        next(validated.error)
    } else {
        user.findOne({username}, (err, doc)=>{
           err&&next(err);
           if(!doc){  
            hashPassword(password).then(encryptPassword=>{
                const password = encryptPassword;
                const User = new user({
                    username, password
                 });
                User.save((err, doc)=>{
                    if(err) {
                        next(err)
                    } else {
                        delete doc.password;
                        res.json(doc)
                    }
                }); 
            });
           } else {
                const error = new Error('This username is dupplicated')
                next(error);
           }
        })
    }
  
}  
function show(req, res, next) {
    const userID = req.params.id; 
    user.findById(userID, (err, doc)=>{
        if(err){
            res.send(err)
        } else{
            res.send(doc)
        }
    })
} 
async function destroy(req,res, next){
    try {
        const userID = req.params.id;
        user.deleteOne({_id: userID}, (err)=> {
            if(err){
                res.send({
                    name: err.name,
                    msg: err.message
                })
            } else {
                res.send('Delete user ' + userID + ' success')
            }
        })
    } catch (error) {
        console.log(error);
    }
}
async function update(req,res, next){
    try {
        const {avatar} = req.body;
        const newData = {avatar};
        //remove the null value in this object
        Object.keys(newData).forEach(key=> {
            if(newData[key]==null) delete newData[key];
        })
        const _id = req.params.id
        user.updateOne( {_id}, newData, (err, doc)=>{
            if(err){
                return res.send({err})
            } else {
                res.send({doc})
            }
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    create,
    show,
    destroy,
    update
}