var db = require("../models");
module.exports = function (app) {
  
  
  //Option1 RandomNameGenerator
  app.get("/api/wild/:letter/:gender", function(req, res) {  
    db.Names.findAll({
      where : {
        name: {
          $like:  req.params.letter + "%"},
        gender: req.params.gender}
    }).then(function(dbName) {
      res.send(dbName);
    });
  });
  app.get("/api/wild/:letter/", function(req, res) {  
    db.Names.findAll({
      where : {
        name: {
          $like:  req.params.letter + "%"}}
    }).then(function(dbName) {
      res.send(dbName);
    });
  });
  //END OPTION1

  //OPTION3
  //FILTER BY YEAR AND SORT BY POPULARITY
  app.get("/api/year/:year", function (req, res) {
    db.Names.findAll({
      where: { 
        year: {
          "$between": [req.params.year, (req.params.year + 9)]
        },
      },
      order: [["year", "DESC"]]
    }).then(function(dbName) {
      res.render("results", {dbName});
    });
  });
  //FILTER BY YEAR AND SORT BY POPULARITY AND GENDER
  app.get("/api/year/:year/:gender", function (req, res) {
    db.Names.findAll({
      where: { 
        gender: req.params.gender,
        year: {
          "$between": [req.params.year, (req.params.year + 9)]
        },
      },
      order: [["year", "DESC"]]
    }).then(function(dbName) {
      res.render("results", {dbName});
    });
  });
  
  
  
  
  //gender, popularity, year
  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id changee
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });

  //UNUSED
  // app.get("/api/all", function(req, res) {  
  //   db.Names.findAll({}).then(function(dbName) {
  //     res.render("results", {dbName});
  //   });
  // });
  // //FILTER BY GENDER
  // app.get("/api/all/:gender", function (req, res) {
  //   db.Names.findAll({
  //     where: {gender: req.params.gender.toUpperCase()}
  //   }).then(function(dbName) {
  //     res.render("results", {dbName});
  //   });
  // });

  // app.get("/api/firstLetter/:letter", function (req, res) {
  //   db.Names.findAll({
  //     where: {
  //       name: {
  //         $like:  req.params.letter + "%"}}
  //   }).then(function(dbName) {
  //     res.render("results", {dbName});

  //   });
  // });
  // //SORT BY POPULARITY
  // app.get("/api/sortCount", function (req, res) {
  //   db.Names.findAll({
  //     order: [["count", "DESC"]]
  //   }).then(function(dbName) {
  //     res.render("results", {dbName});
  //   });
  // });
  // //FILTER BY GENDER AND SORT BY POPULARITY
  // app.get("/api/sortCount/:gender", function (req, res) {
  //   db.Names.findAll({
  //     where: { gender: req.params.gender.toUpperCase() },
  //     order: [["count", "DESC"]]
  //   }).then(function(dbName) {
  //     res.render("results", {dbName});
  //   });
  // });
};
