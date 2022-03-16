const router = require('express').Router();
const todoRoutes = require('./todo');


router.get('/ping', (_req, res) => {
    res.status(200).json({
        message: "PONG",
        data: {}
    });
});


router.use('/todo', todoRoutes);


module.exports = router;