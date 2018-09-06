var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json(
    [
      { 
        id:1,
        class: 'epsilon',
      },
      { 
        id:2,
        class: 'delta',
      },
      { 
        id:3,
        class: 'gamma',
      },
      { 
        id:4,
        class: 'beta',
      },
      { 
        id:5,
        class: 'alpha',
      },
      { 
        id:6,
        class: 'omega',
      },
    ]
  );
});

module.exports = router;
