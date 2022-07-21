const Router  = require('koa-router');
const userController = require('./controllers/user');
const path = require('path');
const fs = require('fs');
const router = require('koa-router')();
const body = require('koa-body')();



router.get("/users",()=>{
    console.log("all users");
    console.log(body);
    userController.getAllUsers
},()=>{
    console.log("all users");
    userController.getAllUsers
});

module.exports = router;


// module.exports.connect = function (path, app) {
// const router = require('./todos').routes();
// console.log(typeof router)
// console.log(router)
// router.route("/users").get(userController.getAllUsers);

  // router.route("/login")
  //     .post(userController.loginUser)
  //     .get(userController.authorization);
  //
  // router.route("/logout")
  //     .get(userController.logoutUser);
  //
  //
  // router.post("/users", userController.createUser);
      // .post(userController.loginUser);
  //
  //
  //
  // router.route("/users/:id")
  //     .post(userController.getSingleUser)
  //     .put(userController.updateUser)
  //     .delete(userController.deleteUser);
  //
  // router.route("/calendarAdd")
  //     .get(userController.addCalendarRecord)
  //     .post(userController.addNewCalendarRecord);
  //
  // router.route("/calendarRemove")
  //     .delete(userController.removeCalendarRecord);
  //
  // router.route("/calendarAddGuest")
  //     .post(userController.addNewCalendarRecordGuest);
  //
  // router.route("/calendarGet")
  //     .get(userController.getCalendarItems)
  //     .post(userController.calendarGetHoursTaken);
  //
  // router.route("/car")
  //     .post(userController.getCarLicensePlate);

  // app.use(path, router);
// };
