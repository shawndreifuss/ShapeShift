const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => { 
  try {
    console.log('im here')
    const userData = await User.create({
      name: req.body.name, 
      email: req.body.email,
      password: req.body.password,
    });

    console.log(userData)

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.name = userData.name;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    console.log("logging in user")
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.name = userData.name;
      res.status(200).json(userData)
      
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


router.post('/createProfile', async (req, res) => {
  try {
    const newProfile = await Profile.create({
      waist: req.body.waist,
      hips: req.body.hips,
      neck: req.body.neck,
      heightft: req.body.heightft,
      heightin: req.body.heightin,
      gender: req.body.gender,
      birthdate: req.body.birthdate,
      perferredUnits: req.body.perferredUnits,
      timezones: req.body.timezones,
      description: req.body.description,


    })
    req.session.save(() => {
      req.session.waist= newProfile.waist;
      req.session.hips= newProfile.hips;
      req.session.neck= newProfile.neck;
      req.session.heightft= newProfile.heightft;
      req.session.heightin= newProfile.heightin;
      req.session.gender= newProfile.gender;
      req.session.birthdate= newProfile.birhtdate;
      req.session.perferredUnits= newProfile.perferredUnits;
      req.session.timezones= newProfile.timezones;
      req.session.description= newProfile.description;
      res.json(newProfile);

    })
    console.log(newProfile)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;