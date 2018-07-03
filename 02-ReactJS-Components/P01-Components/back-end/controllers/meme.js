const DB = require('../config/database.config');

module.exports = {
  getRoster: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(DB.bioCollection);
  },

  getCharacter: (req, res) => {
    let targetElem = req.params.id;

    let target = DB.bioCollection.find(x => {
      if (x.id == targetElem) {
        return x;
      }
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(target);
  },

  getEpisode: (req, res) => {
    let targetElem = req.params.id;

    if (Number(targetElem) < 0) {
      targetElem = 0;
    }

    if (Number(targetElem) >= DB.epCollection.length) {
      targetElem = DB.epCollection.length - 1;
    }

    let target = DB.epCollection.find(x => {
      if (x.id == targetElem) {
        return x;
      }
    });
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(target);
  }
};