const formNode = document.getElementById('user-input');
formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formNode);
    const userPartner = formData.get('partner');
    let userCompleted = {};
    if(userPartner === 'tina') {
        userCompleted = {
            sleepover: false
        };
    }
    else if(userPartner === 'gene') {
        userCompleted = {
            arts: false
        };
    }
    else if(userPartner === 'louise') {
        userCompleted = {
            wonder: false
        };
    }
    
    const user = {
        name: formData.get('name'),
        partner: userPartner,
        bp: 0,
        allowance: 5,
        completed: userCompleted
    };

    const json = JSON.stringify(user);
    window.localStorage.setItem('user', json);
    window.location = 'pages/map.html';
});