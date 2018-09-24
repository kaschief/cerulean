const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Color = require('../models/Color');

const bcryptSalt = 10;

// mongoose.set('useCreateIndex', true);

mongoose
  .connect(
    'mongodb://localhost/cerulean',
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

let users = {
  username: 'alice',
  password: bcrypt.hashSync('alice', bcrypt.genSaltSync(bcryptSalt))
};

User.deleteMany()
  .then(() => {
    return Color.deleteMany()
      .then(() => {
        return User.create(users);
      })
      .then(user => {
        //console.log('THE USER', user, 'THE LENGTH', user.length, user._id);
        let id = user._id;

        let newColorsArray = [
          {
            hex: '#3d1c02',
            name: '90% Cocoa',
            rgb: { r: 61, g: 28, b: 2 },
            meaning: '',
            family: '',
            analagous: [
              '#3d1c02',
              '#3d0402',
              '#3d1002',
              '#3d1c02',
              '#3d2802',
              '#3d3402'
            ],
            tetrad: ['#3d1c02', '#053d02', '#02233d', '#39023d'],
            splitcomplement: ['#3d1c02', '#173d02', '#04023d'],
            monochromatic: [
              '#3d1c02',
              '#672f03',
              '#924305',
              '#bc5706',
              '#e76a08',
              '#120801'
            ],
            _owner: id,
            isFavorite: true
          },
          {
            hex: '#88ffcc',
            name: 'A State of Mint',
            rgb: { r: 136, g: 255, b: 204 },
            meaning: '',
            family: '',
            analagous: [
              '#88ffcc',
              '#88ff9c',
              '#88ffb4',
              '#88ffcc',
              '#88ffe4',
              '#88fffc'
            ],
            tetrad: ['#88ffcc', '#9088ff', '#ff88bb', '#f6ff88'],
            splitcomplement: ['#88ffcc', '#88a3ff', '#ff9c88'],
            monochromatic: [
              '#88ffcc',
              '#172a22',
              '#2d5544',
              '#448066',
              '#5baa88',
              '#71d4aa'
            ],
            _owner: id,
            isFavorite: true
          }
        ];

        return Color.create(newColorsArray).then(newColors => {
          console.log(newColors);
          console.log(`${newColors.length} colors were added`);
          mongoose.disconnect();
        });
      });
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
