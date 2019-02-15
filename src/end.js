const json = window.localStorage.getItem('user')

if(!json) {
    window.location = '/';
}
const user = JSON.parse(json);

const outcomeNode = document.getElementById('outcome');

let message = null;

outcomeNode.textContent = 