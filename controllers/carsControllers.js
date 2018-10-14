const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Cars = require("../models/cars");

// Index Route
router.get("/", (req, res) => {
    Cars.find({}, (err, allCars) => {
        if(err){
            console.log(err);
        }else {
            console.log(allCars);
            res.render("index.ejs", {cars: allCars});
        }
    });
});

// New Route
router.get('/new', (req, res) => {
    res.render('new.ejs');
  });

// Route to Post Created Cars
router.post('/', (req, res) => {
console.log(req.body, ' this is where our info from the fruit form will live');
Cars.create(req.body, (err, createdCars) => {
    if(err){
        console.log(err)
    } else {
        console.log(createdCars);
        res.redirect('/cars')
    }
    })
});


// Edit Route
router.get('/:id/edit', (req, res) => {
    Cars.findById(req.params.id, (err, foundCars) => {
        res.render('edit.ejs', {cars: foundCars});
    });
});


// Show route
router.get('/:id', (req, res) => {
    console.log(req.params);
    Cars.findById(req.params.id, (err, foundCars) => {
      console.log(foundCars, ' foundCars')
        res.render('show.ejs', {cars: foundCars});
    });
});


// Delete Route 
router.delete('/:id', (req, res) => {
    console.log(req.params.id, ' id in delete route');
    Cars.findByIdAndRemove(req.params.id, (err, deleteCars) => {
      res.redirect('/cars');
    });
  });

// Route to Update Model after Deleting
router.put('/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    Cars.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel) => {
      res.redirect('/cars')
    });
})










module.exports = router;