// const jwt = require("jsonwebtoken");

// let userId;
// const auth = (req, res, next) => {
//   const url = req.url.split("/");
//   if (url.includes("todo")) {
//     const { token } = req.headers;
//     try {
//       const decoded = jwt.verify(token, "amaze");
//       console.log(decoded);
//       req.body.userId = decoded.userId;
//     } catch (err) {
//       res.send({ error: err.message });
//     }
//   }
//   next();
// };
// module.exports = { auth };

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const url = req.url;
  const {token} = req.headers;
  if (url.includes("cart")) {
    if (!token) {
      return res.status(401).send({ error: "token is missing" });
    }
    try {
      const decoded = jwt.verify(token, "amaze");
      if (!decoded) {
        return res.status(401).send({ error: "Unauthorized" });
      }
      if(decoded){
        req.body.userID = decoded.userID;
      }
      //relationship form here

      next();
    } catch (error) {
      res.status(401).send({ error: "Unauthorized" });
    }
  }
};

module.exports = { auth };
