const express = require('express');
const Color = require('../models/Color');
const { isLoggedIn } = require('../middlewares');

const router = express.Router();

router.get('/', isLoggedIn, (req, res, next) => {
  Color.find({ _owner: req.user.id })
    .then(colors => {
      res.json(colors);
    })
    .catch(err => next(err));
});

router.post('/', isLoggedIn, (req, res, next) => {
  let newColor = {
    hex: req.body.hex,
    name: req.body.name,
    rgb: req.body.rgb,
    meaning: req.body.meaning,
    family: req.body.family,
    analagous: req.body.analagous,
    tetrad: req.body.tetrad,
    splitcomplement: req.body.splitcomplement,
    monochromatic: req.body.monochromatic,
    _owner: req.user.id,
    isFavorite: true
  };
  Color.find({ $and: [{ _owner: req.user.id }, { hex: newColor.hex }] })
    .then(color => {
      if (color.length === 0) {
        Color.create(newColor)
          .then(color => {
            res.json({
              success: true,
              color
            });
          })
          .catch(err => {
            next(err);
          });
      } else {
        res.json({
          message: 'User already has this color',
          color
        });
      }
    })
    .catch(err => next(err));
});

router.get('/:id', isLoggedIn, (req, res, next) => {
  const id = req.params.id;
  Color.findById(id)
    .then(color => {
      res.json(color);
    })
    .catch(err => next(err));
});

router.delete('/:id', isLoggedIn, (req, res, next) => {
  const id = req.params.id;
  Color.findByIdAndRemove(id)
    .then(color => {
      res.json({
        success: true,
        color
      });
    })
    .catch(err => {
      console.log(err, 'Color was NOT deleted.');
    });
});

router.get('/is-favorite/:hex', isLoggedIn, (req, res, next) => {
  Color.findOne({
    $and: [{ _owner: req.user.id }, { hex: '#' + req.params.hex }]
  })
    .then(color => {
      if (!color) {
        res.json({
          isFavorite: false
        });
      } else {
        res.json({
          isFavorite: true,
          color
        });
      }
    })
    .catch(err => next(err));
});

module.exports = router;
