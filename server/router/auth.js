const express = require("express");
const { findOne } = require("../model/userSchema");
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from the server router js`);
});

// Registeration Router
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res
      .status(208)
      .json({ error: "Please filled the field properly........" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ error: "email is already exist" });
    } else if (password != cpassword) {
      return res.status(400).json({ error: "Password are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();
      res.status(201).json({ message: "user seccessfuly registered...." });
    }
  } catch (error) {
    console.log(error);
  }
});

// Login Router
router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password)
      res.status(400).json({ message: "Fill complete field" });

    const userExist = await User.findOne({ email: email });
    
    if (userExist) {
      const isMatchPassword = await bcrypt.compare(password, userExist.password);
      token = await userExist.generateAuthToken();
      res.cookie("jwttoken", token, {
        expires: new Date(Date.now()+(1*24*3600000)),
        httpOnly:true,
      })
      if (!isMatchPassword) {
        return res.status(400).json({ message: "invalid crendationals" });
      } else {
        return res.status(200).json({ message: "Login sucessfuly..." });
      }
    } else{
      return res.status(400).json({ message: "invalid crendationals" });
    }

    
  } catch (error) {
    console.log(error);
  }
});

// About us Page

router.get('/about', authenticate, (req, res)=>{
  res.send(req.rootUser);
})

router.get('/getData', authenticate, (req, res)=>{
  res.send(req.rootUser);
})

// Using Promise
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res
//       .status(208)
//       .json({ error: "Please filled the field properly........" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(400).json({ error: "email is already exist" });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() =>
//           res.status(201).json({ message: "user seccessfuly registered...." })
//         )
//         .catch((err) =>
//           res.status(500).json({ message: "Failed registeration......" })
//         );
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

module.exports = router;
