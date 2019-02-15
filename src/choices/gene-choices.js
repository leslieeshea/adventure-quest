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

const artsChoices = [hide, plead, impress];
const quest2Choices = [];
const quest3Choices = [];

const geneAllChoices = {
    arts: artsChoices, 
    quest2: quest2Choices, 
    quest3: quest3Choices
};

export default geneAllChoices;