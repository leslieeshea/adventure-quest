import allQuests from './quests.js';
const formNode = document.getElementById('choice-form');
const headerNode = document.getElementById('quest-title');
const descriptionNode = document.getElementById('quest-description');

const json = window.localStorage.getItem('user');
if(!json) {
    window.location = '/';
}
const user = JSON.parse(json);

const searchParams = new URLSearchParams(window.location.search);
const questName = searchParams.get('name');

const quests = allQuests[user.partner];

let quest = null; 
for(let i = 0; i < quests.length; i++) {
    if(quests[i].id === questName) {
        quest = quests[i];
        break;
    }
}

headerNode.textContent = quest.name;
descriptionNode.textContent = quest.description;
for(let i = 0; i < quest.choices.length; i++) {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.id = quest.choices[i].id;
    radio.value = quest.choices[i].id;
    radio.name = 'choices';
    radio.required = true;
    const label = document.createElement('label');
    label.for = quest.choices[i].id;
    label.textContent = quest.choices[i].name + ' - ' + quest.choices[i].description;
    formNode.prepend(label);
    formNode.prepend(radio);
    formNode.prepend(document.createElement('br'));
}

const resultsNode = document.getElementById('result-section');

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    formNode.hidden = true;
    resultsNode.hidden = false;
    
    const formData = new FormData(formNode);
    const choice = formData.get('choices');
    
    let chosen = null;

    for(let i = 0; i < quest.choices.length; i++) {
        if(quest.choices[i].id === choice) {
            chosen = quest.choices[i];
        }
    }

    const result = document.getElementById('results');

    result.textContent = chosen.result;

    user.bp += chosen.bp;
    user.allowance += chosen.allowance;
    user.completed[quest.id] = true;

    console.log(user);

    const json = JSON.stringify(user);
    window.localStorage.setItem('user', json);

});