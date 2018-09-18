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
            name: "Squid's Ink",
            hex: '#4d4e5c',
            rgb: {
              r: 77,
              g: 78,
              b: 92
            },
            related: [],
            _owner: id,
            isFavorite: false
          },
          {
            name: "St. Patrick's Blue",
            hex: '#23297a',
            rgb: {
              r: 35,
              g: 41,
              b: 122
            },
            related: [],
            _owner: id,
            isFavorite: false
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
