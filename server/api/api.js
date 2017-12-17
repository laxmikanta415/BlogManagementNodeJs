var router = require('express').Router();

router.use('/posts',require('./post/post.router'));
router.use('/categories',require('./category/category.router'));
router.use('/users',require('./user/user.router'));

module.exports = router;