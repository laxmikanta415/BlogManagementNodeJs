var router = require('express').Router();

router.route('/').get((req,res)=>{
    res.send({'ok':'user requests'});
});

module.exports = router;