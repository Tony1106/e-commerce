const bcrypt = require("bcrypt");
function hashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt
      .hash(password, 12)
      .then(hashPassword => {
        console.log(hashPassword);
        resolve(hashPassword);
      })
      .catch(err => {
        reject(err);
      });
  });
}
function comparePassword(password, hash) {
  return new Promise((resolve, reject) => {
    bcrypt
      .compare(password, hash)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
}

module.exports = {
  hashPassword,
  comparePassword
};
