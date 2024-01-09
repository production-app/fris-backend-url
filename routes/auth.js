const jwt = require("jsonwebtoken");
const { Sequelize, sequelize, requistionLogs } = require("../models");

//REJECTED

exports.authOnly = async (req, res, next) => {
  try {
    const token = req.headers.token;

    const { control } = req.body;

    const getApproval = await requistionLogs.findAll({
      where: {
        control_number: control,
      },
    });

    function isPendending(element, index, array) {
      //console.log("pending", element.dataValues.status);
      return element.dataValues.status === "PENDING";
    }

    //[2, 5, 8, 1, 4].some(isBiggerThan10); // false

    getApproval.some(isPendending);
    //
    // console.log(getApproval.status);

    // console.log(control);

    // //console.log(firebaseToken);
    // if (!token) {
    //   //  console.log("false");
    //   return res.json({
    //     status: false,
    //     // message: "Sorry access denied, kindly retry again",
    //   });
    // }

    // await jwt.verify(token, process.env.PASSWORD, (err, decoded) => {
    //   //   if (decoded) {
    //   //     next();
    //   //     return { status: true };
    //   //   } else if (err) {
    //   //     next();
    //   //     return { status: false };

    //   //   }

    //   if (err) {
    //     return res.json({ status: false });
    //   } else {
    //     return res.json({ status: true });
    //   }
    // });

    if (!token) {
      //console.log("error !");
      return res.status(401).json({
        status: false,
        // message: "Sorry access denied, kindly retry again",
      });
    } else {
      //const tokenBody = tokenID.slice(7);
      jwt.verify(token, process.env.PASSWORD, (err, decoded) => {
        if (!err) {
          // req.user = user;

          //decoded &&

          if (decoded && getApproval.some(isPendending)) {
            // req.email = decoded.email;
            // req.phone = decoded.phone;
            next();
          } else {
            // console.log("error !");
            return res.status(401).json({
              status: false,
              message: "Sorry access denied, kindly retry again",
            });
          }
        } else {
          //console.log("error !");
          res.status(401).json({
            status: false,
            message: "Not Authorized",
          });
        }
      });
    }

    //next();
  } catch (error) {
    return res.status(401).json({
      err: "Invalid or expired Token",
      error,
    });
  }
};

exports.authReject = async (req, res, next) => {
  try {
    const token = req.headers.token;

    const { control } = req.body;

    const getApproval = await requistionLogs.findAll({
      where: {
        control_number: control,
      },
    });

    function isPendending(element, index, array) {
      //console.log("pending", element.dataValues.status);
      return element.dataValues.status === "PENDING";
    }

    //[2, 5, 8, 1, 4].some(isBiggerThan10); // false

    getApproval.some(isPendending);

    if (!token) {
      //console.log("error !");
      return res.status(401).json({
        status: false,
        // message: "Sorry access denied, kindly retry again",
      });
    } else {
      //const tokenBody = tokenID.slice(7);
      jwt.verify(token, process.env.PASSWORD, (err, decoded) => {
        if (!err) {
          // req.user = user;

          //decoded &&

          if (decoded && getApproval.some(isPendending)) {
            // req.email = decoded.email;
            // req.phone = decoded.phone;
            next();
          } else {
            // console.log("error !");
            return res.status(401).json({
              status: false,
              message: "Sorry access denied, kindly retry again",
            });
          }
        } else {
          //console.log("error !");
          res.status(401).json({
            status: false,
            message: "Not Authorized",
          });
        }
      });
    }

    //next();
  } catch (error) {
    return res.status(401).json({
      err: "Invalid or expired Token",
      error,
    });
  }
};
