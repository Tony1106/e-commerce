const product = require('./Model');


function create(req,res,next){
    const {name, description, price, type, category, image} = req.body;
    const Product = new product({
        name, description, price, type, category, image
    });
    Product.save(err=>err&&console.log(err));
    return res.json({Product})
}   
async function getAll(req,res,next){
    try{
        const products = await product.find({},'name price _id image', function(err){
            err&&console.log(err);
        });
        return res.json(products)
    } catch(err){
        console.log(err);
    } 
}
async function destroy(req,res, next){
    try {
        const productID = req.params.id;
        product.deleteOne({_id: productID}, (err)=> {
            if(err){
                res.send({
                    name: err.name,
                    msg: err.message
                })
            } else {
                res.send('Delete product ' + productID + ' success')
            }
        })
        
    } catch (error) {
        console.log(error);
    }
}
async function update(req,res, next){
    try {
        const {name, description, price, type, category, image} = req.body;
        const newData = {name, description, price, type, category, image};
        //remove the null value in this object
        Object.keys(newData).forEach(key=> {
            if(newData[key]==null) delete newData[key];
        })
        const _id = req.params.id
        product.updateOne( {_id}, newData, (err, doc)=>{
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
    getAll,
    destroy,
    update
}