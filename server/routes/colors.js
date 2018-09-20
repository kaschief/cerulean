const express = require('express');
const Color = require('../models/Color');
const { isLoggedIn } = require('../middlewares');

const router = express.Router();

// Route to get all favorite colors
router.get('/', isLoggedIn, (req, res, next) => {
  Color.find({ _owner: req.user.id })
    .then(colors => {
      res.json(colors);
    })
    .catch(err => next(err));
});

// Route to add a color
router.post('/', isLoggedIn, (req, res, next) => {
  let newColor = {
    name: req.body.name,
    hex: req.body.hex,
    rgb: req.body.rgb,
    related: req.body.related,
    _owner: req.user.id,
    isFavorite: req.body.isFavorite
  };
  Color.create(newColor)
    .then(color => {
      console.log('color is created');
      res.json({
        success: true,
        color
      });
    })
    .catch(err => next(err));
});

//Route to get a single color
router.get('/:id', isLoggedIn, (req, res, next) => {
  const id = req.params.id;
  Color.findById(id)
    .then(color => {
      res.json(color);
    })
    .catch(err => next(err));
});

// Route to delete a color
router.delete('/:id', isLoggedIn, (req, res, next) => {
  const id = req.params.id;
  Color.findByIdAndRemove(id)
    .then(color => {
      //res.redirect('/colors');
      res.json({
        success: true,
        color
      });
    })
    .catch(err => {
      console.log(err, 'Color was NOT deleted.');
    });
});

module.exports = router;
