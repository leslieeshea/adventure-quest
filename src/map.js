import allQuests from './quests.js';
const userJSON = window.localStorage.getItem('user');
if(!userJSON) {
    window.location = '/';
}
const user = JSON.parse(userJSON);

const linksNode = document.getElementById('links');

const partner = user.partner;

const quests = allQuests[partner];

let counter = 0;

for(let i = 0; i < quests.length; i++) {
    if(user.completed[quests[i].id]) {
        continue;
    }
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = 'quest.html?name=' + encodeURIComponent(quests[i].id);
    link.textContent = quests[i].name;
    li.appendChild(link);
    linksNode.appendChild(li);
    counter++;
}

if(counter === 0) {
    window.location = 'end.html';
}