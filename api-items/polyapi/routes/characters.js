var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json(
    [
      { 
        name: 'Wolverine',
        class: 'beta',
        type: 'hero',
        bio: 'Wolverine (born James "Jimmy" Howlett, usually referred to as Logan) was a mutant born with retractable forearm claws, enhanced physical parameters, and a powerful healing factor. Living for nearly two centuries, Logan\'s life was filled with blood, hatred, war, suffering, and betrayal.',
        image: 'https://vignette.wikia.nocookie.net/xmenmovies/images/1/1c/XMOWOLVERINEPROMO-011.jpg/revision/latest/scale-to-width-down/666?cb=20120501153105'
      },
      { 
        name: 'Professor X',
        type: 'hero',
        class: 'alpha',
        bio: 'Magneto (born Erik Magnus Lehnsherr) is a mutant, leader and founder of the Brotherhood of Mutants. He has the ability to manipulate create magnetic fields and control metal telekinetically.',
        image: 'https://vignette.wikia.nocookie.net/xmenmovies/images/0/02/Magneto_-_Transparent_%28Michael_Fassbender_-_DOFP%29.png/revision/latest/scale-to-width-down/700?cb=20170322181414'
      },
      { 
        name: 'Magneto',
        type: 'villain',
        class: 'alpha',
        bio: 'Magneto (born Erik Magnus Lehnsherr) is a mutant, leader and founder of the Brotherhood of Mutants. He has the ability to manipulate create magnetic fields and control metal telekinetically.',
        image: 'https://vignette.wikia.nocookie.net/xmenmovies/images/0/02/Magneto_-_Transparent_%28Michael_Fassbender_-_DOFP%29.png/revision/latest/scale-to-width-down/700?cb=20170322181414'
      },
      { 
        name: 'Cyclops',
        type: 'hero',
        class: 'beta',
        bio: 'Cyclops (born Scott Summers) is a mutant with the ability to fire an optic blast from his eyes. Having been one of the first members of the modern group of X-Men, Scott Summers was chosen to succeed his mentor and become the X-Men\'s field leader.',
        image: 'https://vignette.wikia.nocookie.net/xmenmovies/images/1/14/X-Men_Apocalypse_Cyclops_Image_2_.jpeg/revision/latest?cb=20160917234226'
      },
      { 
        name: 'Apocalypse',
        type: 'villain',
        class: 'omega',
        bio: 'Apocalypse (born En Sabah Nur) was an immensely powerful and ancient mutant. He is believed to be the very first mutant, having lived for several millennia.',
        image: 'https://vignette.wikia.nocookie.net/xmenmovies/images/a/ab/ApocalypseFP.jpg/revision/latest?cb=20160422202430'
      },
      { 
        name: 'Rogue',
        type: 'hero',
        class: 'gamma',
        bio: 'Rogue (born Marie D\'Ancanto) is a mutant who absorbs the powers or memories of any person touching her skin; if the contact continues for too long, it may kill the other person. She is a member of the X-Men and the girlfriend of Iceman.',
        image: 'https://vignette.wikia.nocookie.net/xmenmovies/images/1/13/IadVz8w.png/revision/latest/scale-to-width-down/699?cb=20150723120814'
      },
      { 
        name: 'Jean Grey',
        type: 'hero',
        class: 'omega',
        bio: 'Jean Grey is a class five mutant with immensely powerful telepathic and telekinetic abilities.',
        image: 'https://vignette.wikia.nocookie.net/xmenmovies/images/1/10/Tumblr_o554o7U7111uh91oco2_r1_500_-_Edited.png/revision/latest?cb=20160415052124'
      },
      { 
        name: 'Beast',
        type: 'hero',
        class: 'gamma',
        bio: 'Beast (born Henry Philip "Hank" McCoy) is a mutant who has super strength. He was one of Charles Xavier\'s students and was also a teacher in the Xavier Institute.',
        image: 'https://vignette.wikia.nocookie.net/xmenmovies/images/b/b2/Beast_poster_image_.jpeg/revision/latest?cb=20160917234932'
      },
      { 
        name: 'Juggernaut',
        type: 'villain',
        class: 'beta',
        bio: 'Juggernaut (born Cain Marko) is a mutant who has superhuman strength and durability. He was a member of the Brotherhood of Mutants.',
        image: 'https://vignette.wikia.nocookie.net/xmenmovies/images/f/fa/JugProfile.jpg/revision/latest/scale-to-width-down/699?cb=20180522232112'
      },
      { 
        name: 'Domino',
        type: 'hero',
        class: 'delta',
        bio: 'Domino survived a traumatic childhood to become one of the most dangerous mutant mercenaries in the Marvel Universe. Her ability to manipulate probability – ensuring her own good luck – can be a sneaky tool when she needs things to go her way.',
        image: 'https://vignette.wikia.nocookie.net/marvel/images/9/96/Domino_commission_digital_colors_by_dawn_mcteigue-d64bck3.jpg/revision/latest/scale-to-width-down/180?cb=20140314010648&path-prefix=es'
      },
      { 
        name: 'Cecilia Reyes',
        type: 'hero',
        class: 'epsilon',
        bio: 'When she was only six years old, Puerto Rican Cecilia Reyes saw her father gunned down in a drive-by shooting. From that moment on, she dedicated her life to becoming a medical doctor. Soon after achieving her goal, her latent mutant powers awakened and she sought help from Charles Xavier, founder of the X-Men. He invited Reyes to join the X-Men but she declined, wanting to instead to continue working as a trauma surgeon at the Our Mother Mercy Hospital in New York Citys South Bronx.',
        image: 'https://static.comicvine.com/uploads/scale_small/9/96747/3818957-caitlin_reyes_%28r%29.jpg'
      },
    ]
  );
});

module.exports = router;
