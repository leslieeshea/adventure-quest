import tinaAllChoices from './choices/tina-choices.js';
import louiseAllChoices from './choices/louise-choices.js';
import geneAllChoices from './choices/gene-choices.js';

const tinaQuests = [
    {
        id: 'sleepover',
        name: 'Spy on Jimmy Jr.\'s Sleepover',
        description: 'Jimmy Jr. is having a sleepover. Tina has the great idea to climb up the Pesto’s fire escape in the hopes of catching a peek of the party! Jimmy Sr. catches you on the fire escape just before you get to Jimmy Jr.\'s window.',
        choices: tinaAllChoices.sleepover,
        image: '',
        audio: ''
    },

    {
        id: 'butt',
        name: 'Butts Galore!',
        description: 'Tina finds Bob\'s digital camera and can\'t stop taking pics of butts. However, when she takes a pic of Mr. Frond\'s butt, he freaks out and calls Bob and Linda in for a conference.',
        choices: tinaAllChoices.butt,
        image: '',
        audio: ''
    },

    {
        id: 'zombie',
        name: 'Zombie Make-Out Party',
        description: 'While working at the restaurant, Tina tells you that she heard a rumor about zombies making out on Ocean Ave. You can\'t help yourselves and abandon your posts to go check it out. Bob sees you leaving and follows you.',
        choices: tinaAllChoices.zombie,
        image: '',
        audio: ''
    }
];

const geneQuests = [
    {
        id: 'arts',
        name: 'Break into the Wharf Arts Center',
        description: 'Gene has always wanted to sing in the Wharf Arts Center Auditorium so you decide to break in. Sergeant Bosco sees you sneak into the building and calls for backup.',
        choices: geneAllChoices.arts,
        image: '',
        audio: ''
    },

    {
        id: 'fire',
        name: 'Gene Starts a Fire',
        description: 'You are staying over at the Belcher\'s. You and Gene, in a fit of midnight hunger, start up the grill with reckless abandon. A small fire breaks out.',
        choices: geneAllChoices.fire,
        image: '',
        audio: ''
    },

    {
        id: 'fart',
        name: 'Fart Song',
        description: 'Gene enlists your help to record an entire song made of different fart noises. The recording process gets so stinky that Linda storms in to break it up.',
        choices: geneAllChoices.fart,
        image: '',
        audio: ''
    }
];

const louiseQuests = [
    {
        id: 'wonder',
        name: 'Terrorize Wonder Wharf',
        description: 'Wonder Wharf is closed for the day due to inclement weather conditions. Louise has the great idea to sneak in and do something no one has ever done: ride the Queezy Queen at full speed! Mr. Fischoeder spots you just as Louise is about to hit “start” on the ride.',
        choices: louiseAllChoices.wonder,
        image: '',
        audio: ''
    },

    {
        id: 'rats',
        name: 'Release the Rats!',
        description: 'Jimmy Pesto\'s has been getting great Yelp reviews and Bob is pissed. Louise has the brilliant idea of releasing rats into Jimmy\'s kitchen and calling Hugo the health inspector. Unfortunately, Bob finds the box of rats before you leave.',
        choices: louiseAllChoices.rats,
        image: '',
        audio: ''
    },
    
    {
        id: 'ghost',
        name: 'Ghosthunt',
        description: 'Louise is convinced there is a ghost in It\'s Your Funeral next door. You sneak in to find the ghost, but the door locks behind you, trapping you inside with Mort\'s deceased clientele.',
        choices: louiseAllChoices.ghost,
        image: '',
        audio: ''
    }
];

const allQuests = {
    louise: louiseQuests, 
    gene: geneQuests, 
    tina: tinaQuests
};

export default allQuests;