const product = require("./Model");

function create(req, res, next) {
  const data = req.body;
  const Product = new product(data);
  Product.save(err => (err ? next(err) : res.json({ Product })));
}
async function getProductDetail(req, res, next) {
  const _id = req.params.id;
  try {
    product.findOne({ _id }, (err, data) => {
      err ? next(err) : res.json(data);
    });
  } catch (err) {
    next(err);
  }
}
async function get(req, res, next) {
  const page = +req.params.page;
  const skip = page ? page * 10 - 10 : 0;
  try {
    product
      .find()
      .skip(+skip)
      .limit(10)
      .exec(callback);
    function callback(err, products) {
      err ? next(err) : res.json(products);
    }
  } catch (err) {
    next(err);
  }
}
async function destroy(req, res, next) {
  try {
    const productID = req.params.id;
    product.deleteOne({ _id: productID }, err => {
      if (err) {
        res.send({
          name: err.name,
          msg: err.message
        });
      } else {
        res.send("Delete product " + productID + " success");
      }
    });
  } catch (error) {
    console.log(error);
  }
}
async function update(req, res, next) {
  try {
    const { name, description, price, type, category, image } = req.body;
    const newData = { name, description, price, type, category, image };
    //remove the null value in this object
    Object.keys(newData).forEach(key => {
      if (newData[key] == null) delete newData[key];
    });
    const _id = req.params.id;
    product.updateOne({ _id }, newData, (err, doc) => {
      if (err) {
        return res.send({ err });
      } else {
        res.send({ doc });
      }
    });
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  create,
  get,
  destroy,
  update,
  getProductDetail
};
