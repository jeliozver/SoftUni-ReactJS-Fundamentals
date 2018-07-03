const MEME_CONTROLLER = require('../controllers/meme');

module.exports = (APP) => {
  APP.get('/roster', MEME_CONTROLLER.getRoster);
  APP.get('/character/:id', MEME_CONTROLLER.getCharacter);
  APP.get('/episodePreview/:id', MEME_CONTROLLER.getEpisode);
};