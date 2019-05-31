var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pedi' });
});

router.get('/terms', function (req, res, next) {
  var options = {
    root: path.join(__dirname, '../public'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  res.sendFile('/attachments/terms.pdf', options, function (error) {
    if (error) {
      console.log(error)
      next(error);
    } else {

    }
  });
})

module.exports = router;
