const express = require('express');
const router = express.Router();
const familyTree = require('./../../src/model/database/familyTree');

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/* GET api listing. */
router.get('/tree/:nodeId', (req, res) => {
  getTreeFromNodeMiddleWear,
  function(req, res, next){
    return res.status(200).json(req.tree);
}
});


function getTreeFromNode(nodeId, callback){
   // Perform database query that calls callback when it's done
  // This is our fake database!
  if (!familyTree[nodeId])
    return callback(new Error(
      'No nodeId matching '
       + nodeId
      )
    );
  return callback(null, familyTree[nodeId]);
}


function getTreeFromNodeMiddleWear(request, response, next){
   if (request.params.nodeId) {
    console.log('nodeid param was detected: ', request.params.nodeId)
    getTreeFromNode(request.params.nodeId, function(error,tree){
      if (error) return next(error);
      request.tree = tree;
      return next();
    })
 } else {
   return next();
 }
}

module.exports = router;