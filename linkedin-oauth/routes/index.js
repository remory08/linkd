var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user)
  res.render('index', { title: 'Express', user: req.user});
});

router.get('/logout', function(req, res, next) {
  req.session = null;
  res.redirect('/')
})

module.exports = router;
