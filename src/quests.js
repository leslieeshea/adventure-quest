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
    }
];

const allQuests = {
    louise: louiseQuests, 
    gene: geneQuests, 
    tina: tinaQuests
};

export default allQuests;