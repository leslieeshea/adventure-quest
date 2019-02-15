const hide = {
    description: 'Put on costumes from backstage and sneak into the crowd forming around the Arts Center.',
    id: 'hide',
    name: 'Hide',
    result: 'The director of the current production showing at the Center recognizes the costumes and rats you out to the cops. Sergeant Bosco drives you home and Linda grounds you. Lose 5 burger points.',
    bp: -5,
    allowance: 0,
    image: '',
    audio: ''
};

const plead = {
    description: 'Come out of the Center crying, claiming you lost your bus money and were just trying to get out of the rain.',
    id: 'plead',
    name: 'Plead',
    result: 'Sergeant Bosco takes pity on you. He gives you bus money and a little something extra to get a treat from the store. Gain 5 allowance.',
    bp: 0,
    allowance: 5,
    image: '',
    audio: ''
};

const impress = {
    description: 'Why waste an audience? Burst into song to impress the crowd.',
    id: 'impress',
    name: 'Impress',
    result: 'Bosco and the backup officers are very impressed by your performance. The director of the current production gets word of your talent and casts you in her next show - for scale, of course. Gain 5 burger points and 5 allowance.',
    bp: 5,
    allowance: 5,
    image: '',
    audio: ''
};

const freak = {
    description: 'Leave the restaurant immediately.',
    id: 'freak',
    name: 'Freak Out',
    result: 'Thankfully, the fire does not spread. Bob and Linda take everyone\'s allowance to pay for the damages. Lose 5 burger points and 5 allowance.',
    bp: -5,
    allowance: -5,
    image: '',
    audio: ''
};

const help = {
    description: 'Run upstairs and get Tina to help you.',
    id: 'help',
    name: 'Get Tina\'s Help',
    result: 'She helps you at a cost, you must pay her off. Gain 5 burger points and lose 5 allowance.',
    bp: 5,
    allowance: -5,
    image: '',
    audio: ''
};

const extinguish = {
    description: 'Try to put out the fire yourself.',
    id: 'extinguish',
    name: 'Think Fast',
    result: 'Gene throws a pile of potatoes onto the fire, and it goes out. You clean up and slip back into bed without a trace.',
    bp: 5,
    allowance: 0,
    image: '',
    audio: ''
};

const artsChoices = [hide, plead, impress];
const fireChoices = [freak, help, extinguish];
const quest3Choices = [];

const geneAllChoices = {
    arts: artsChoices, 
    fire: fireChoices, 
    quest3: quest3Choices
};

export default geneAllChoices;