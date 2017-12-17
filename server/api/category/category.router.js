var router = require('express').Router();

router.route('/').get((req,res) =>{
    res.send({'ok':'category get'});
});

module.exports = router;