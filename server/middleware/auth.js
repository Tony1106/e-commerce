const jwt = require("jsonwebtoken");

const handleError = (res, next) => {
  res.status(401);
  next(new Error("Authorization fail"));
};
function checkTokenUser(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) handleError(res, next);
      req.user = decoded;
      next();
    });
  } else {
    next();
  }
}
function checkLogined(req, res, next) {
  if (req.user) {
    next();
  } else next(handleError(res, next));
}
function grantAccessByToken(req, res, next) {
  const tokenFromClient = req.body.token;
  if (tokenFromClient) {
    const token = tokenFromClient.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) handleError(res, next);
      req.user = decoded;
      res.json(decoded);
    });
  } else {
    next(handleError(res, next));
  }
}
module.exports = {
  checkTokenUser,
  checkLogined,
  grantAccessByToken
};
