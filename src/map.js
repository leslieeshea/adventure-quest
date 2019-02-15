const userJSON = window.localStorage.getItem('user');
if(!userJSON) {
    window.location = '/';
}
const user = JSON.parse(userJSON);

import allQuests from './quests.js';

const linksNode = document.getElementById('links');

const partner = user.partner;

const quests = allQuests[partner];

for(let i = 0; i < quests.length; i++) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = 'quest.html?name=' + encodeURIComponent(quests[i].id);
    link.textContent = quests[i].name;
    li.appendChild(link);
    linksNode.appendChild(link);
}