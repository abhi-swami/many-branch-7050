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
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], "amaze");
    console.log(decoded);

    if (!decoded) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    //relationship form here

    next();
  } catch (error) {
    res.status(401).send({ error: "Unauthorized" });
  }
};

module.exports = { auth };
