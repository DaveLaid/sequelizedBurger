// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // Create all our routes and set up logic within those routes where required.
  app.get("/", function(req, res) {
    
    db.Burger.findAll({
    }).then(function(data) {
      var burObject = {data: data};
      // console.log(data);
      res.render("index", burObject);
      // res.sendFile(path.join(__dirname, "../views/index"));
    });
  });

  app.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(data){
      // res.render("index", data);
      res.redirect("/");
      // return res.json(data);
      // res.redirect("/");
    });
  });

  app.put("/:id", function(req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(function(data) {
      // return res.json(data);
      res.redirect("/");
    });
  });

};



// // DELETE route for deleting todos. We can get the id of the todo to be deleted
//   // from req.params.id
//   app.delete("/:id", function(req, res) {
//     // Destroy takes in one argument: a "where object describing the todos we want to destroy
//     db.Burger.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//     .then(function(data) {
//       res.json(data);
//     });

//   });