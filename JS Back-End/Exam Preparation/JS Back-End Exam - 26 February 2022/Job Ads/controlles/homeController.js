const router = require('express').Router();

const jobServices = require('../services/jobServices');

router.get('/', async (req, res) => {

   const firstThreeJobs = await jobServices.getFirtsThree().lean();

   res.render('home', { firstThreeJobs, pageTitle: 'Home Page' });
});

router.get('/search', (req, res) => {
   res.render('home/search', { pageTitle: 'Search Page' });
});

router.post('/search', async (req, res) => {

   const emailText = req.body.email;

   const allJobs = await jobServices.getAllJobs().lean();

   let filterJobs = allJobs.filter(job => job.author.email == emailText);

   const notMatchFound = filterJobs.length === 0;

   res.render('home/search', { filterJobs, notMatchFound, pageTitle: 'Search Page' });
});

module.exports = router;