const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/signup", function (req, res) {
  res.render("signup");
});

// Navigate to profile of specific person
router.get("/profile/:id", function (req, res) {
  console.log("in the profile views controller file");
  console.log(req.params);
  db.User.findOne({
    where: {
      id: req.params.id,
    },
  }).then(function (userResponse) {
    console.log(userResponse);
    var hbsObject = {
      profileUser: userResponse.dataValues,
    };
    console.log(hbsObject);
    res.render("profile", hbsObject);
  });
});

// router.get("/dashboard", function(req,res){ // if turn on i will overwrite my api
//   res.render("dashboard")
// })
router.get("/post", function (req, res) {
  res.render("post");
});
router.get("/dashboard", function (req, res) {
  res.render("dashboard");
});



router.get("/edit_profile/:id", function (req, res) {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((data) => {
    // const hbsObject = {
    //   currentProfileData: data,
    // };
    // console.log(data.User + " THIS IS THE DATA FOR THE EDIT PROFILE STUFF")
    // res.send(data);
    // console.log(data)
    // res.send(data)
    res.render("edit_profile", data);
  });
});

module.exports = router;
// another route for the dashboaerd
// handlebars for dashboard
// logic needed for dashbaord route to HB file
