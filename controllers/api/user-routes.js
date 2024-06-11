const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user

router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.email = req.body.email;
            res.status(200).json(userData);
        });
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// LOGIN user
router.post('/login', async (req, res) => {
    console.log("login route");
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (!userData) {
            res
            .status(400)
            .json({message: 'Incorrect email or password, please try again'});
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
            .status(400)
            .json({message: 'Incorrect email or password, please try again'});
            return;
        }

        req.session.save(() => {
            req.session.email = userData.email;
            res
            .status(200)
            .json({user: userData, message: 'You are now logged in!'});
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// LOGOUT user



module.exports = router;