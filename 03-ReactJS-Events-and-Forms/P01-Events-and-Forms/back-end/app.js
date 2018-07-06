const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
const authRoutes = require('./routes/auth');
const app = express();
const port = 8000;
const pokemons = require('./data/pokemons');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.use('/auth', authRoutes);

app.get('/pokedex', (req, res, next) => {
  console.log('geting');
  console.log(pokemons.retrivePokemons());
  let pokemonColection = (pokemons.retrivePokemons());
  return res.status(200).json({
    pokemonColection
  });
});

app.post('/pokedex/create', (req, res, next) => {
  console.log(req.body);
  pokemons.addPokem((req.body));
  return res.status(200).json({
    success: true
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});