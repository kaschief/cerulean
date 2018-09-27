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
      console.log('THIS IS WHAT WAS FOUND---->', color.length);
      if (color.length === 0) {
        Color.create(newColor)
          .then(color => {
            console.log('(FROM THE INSIDE: Color was created', color);
            res.json({
              success: true,
              color
            });
          })
          .catch(err => {
            console.log('New color could not be created');
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
  console.log('this was the ID I received---------->', id);
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

router.get('/is-favorite/:hex', isLoggedIn, (req, res, next) => {
  console.log('THIS IS THE HEX--->', req.params.hex);
  Color.findOne({
    $and: [{ _owner: req.user.id }, { hex: '#' + req.params.hex }]
  })
    .then(color => {
      //console.log('THIS IS WHAT WAS FOUND---->', color);
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

// // Route to remove a color
// router.put('/:id', isLoggedIn, (req, res, next) => {
//   const id = req.params.id;

//   let editedColor = {
//     hex: req.body.hex,
//     name: req.body.name,
//     rgb: req.body.rgb,
//     meaning: req.body.meaning,
//     family: req.body.family,
//     analagous: req.body.analagous,
//     tetrad: req.body.tetrad,
//     splitcomplement: req.body.splitcomplement,
//     monochromatic: req.body.monochromatic,
//     _owner: req.user.id,
//     isFavorite: false
//   };

//   Color.update({ _id: id }, { $set: editedColor })
//     .then(color => {
//       res.json({
//         success: true,
//         color
//       });
//     })
//     .catch(err => {
//       console.log(err, 'Color was NOT deleted.');
//     });
// });

/********/

// router.post('/celebrities/:id/edit', (req, res, next) => {
//   let id = req.params.id; // to find the ID of the celeb

//   //after finding, save the changes to the instance in a NEW variable
//   let editedCeleb = {
//     name: req.body.name,
//     occupation: req.body.occupation,
//     catchphrase: req.body.catchphrase
//   };

//use Model.update() to change the instance

/*Model.update ( {_id: theIDnumber}, { $set: THEUPDATEDOBJECT } )   no need for curly braces around object name 
  when stored as variable; the braces are implied since it's an object*/

//   CelebrityModel.update({ _id: id }, { $set: editedCeleb }).then(
//     editedCeleb => {
//       console.log('---------->', id, editedCeleb, 'Celeb was edited!');
//       res.redirect('/celebrities'); // post = redirect
//     }
//   );
// });

module.exports = router;
