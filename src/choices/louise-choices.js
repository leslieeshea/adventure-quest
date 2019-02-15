const sneak = {
    description: 'Turn off the Queezy Queen and hide in the booths.',
    id: 'sneak',
    name: 'Sneak',
    result: 'Mr. Fischoeder lazily inspects the ride but doesn\'t see you. You are able to escape without him noticing, but you don\'t get to ride the Queezy Queen at full speed. You lose 5 burger points.',
    bp: -5,
    allowance: 0,
    image: '',
    audio: ''
};

const attack = {
    description: 'Throw wet bags of cotton candy at Mr. Fischoeder.',
    id: 'attack',
    name: 'Attack',
    result: 'You get to ride the Queezy Queen at full speed!! Gain 5 burger points. Unfortunately, Mr. Fischoeder tacks on the cost of the cotton candy onto the Belcher\'s rent, and they take 5 out of your allowance.',
    bp: 5,
    allowance: -5,
    image: '',
    audio: ''
};

const deceive = {
    description: 'Grab the trash bag out the can and pretend to pick up wet trash.',
    id: 'deceive',
    name: 'Deceive',
    result: 'When Mr. Fischoeder discovers you, you tell him that Bob and Linda sent you out to do community service by cleaning up the wharf, and he believes you! He rewards Bob and Linda by reducing their rent for the month. Gain 5 allowance but lose 5 burger points for touching wet trash.',
    bp: -5,
    allowance: 5,
    image: '',
    audio: ''
};

const wonderChoices = [deceive, attack, sneak];
const quest2Choices = [];
const quest3Choices = [];

const louiseAllChoices = {
    wonder: wonderChoices, 
    quest2: quest2Choices, 
    quest3: quest3Choices
};

export default louiseAllChoices;