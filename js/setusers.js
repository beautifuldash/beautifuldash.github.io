const domen = 'http://127.0.0.1:5500/';
const app = new Main();

$.get(domen + 'js/dl/users.txt', (data) => {
    const lines = data.split('\n');

    for(let i = 0; i < lines.length; i++) {
        const params = lines[i].split(' ');
        app.addUserTop(params[0], params[1], params[2], params[3], params[4], params[5], params[6]);
    }
});