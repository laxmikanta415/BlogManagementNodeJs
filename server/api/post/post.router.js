var router = require('express').Router();

router.route('/').get((req,res)=>{
    console.log('servejstest');
    res.send({'ok':'post data posts'});
});

module.exports = router;