const router = require('express').Router();
const { Module, Lessons} = require('../models');
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        
        const moduleData = await Module.findAll({
            include: [Lessons]
        })
        const modules = moduleData.map((module) => module.get({ plain: true }));
        console.log("modules", modules)
;
        res.render('home', { modules  });
    } catch (error) {
        res.json(error)
    }
});

const getSignupPage = () => {
    axios.get('http://localhost:3001/signup')
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => console.error(error));
};
getSignupPage();

router.get('/signup', async (req, res) => {
    res.render('signup');
});
// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:3001',
//     maxRedirects: 5,
//   });
// const getSignupPage = () => {
//     axiosInstance.get('/signup')
//     .then((response) => {
//         console.log(response.data)
//         render('signup', response.data)
//     })
//     .catch((error) => console.error(error));
// };
// getSignupPage();


module.exports = router;