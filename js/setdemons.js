const domen = 'http://127.0.0.1:5500/';
const app = new Main();

$.get(domen + 'js/dl/add.txt', (data) => {
    console.log(data);
    const lines = data.split('\n');
    for(let i = 0; i < lines.length; i++) {
        const params = lines[i].split(' ');
        if(params[1].includes('-')) {
            let lvlname = '';
            const parts = params[1].split('-');
            for(let j = 0; j < parts.length; j++) {
                lvlname += parts[j] + ' ';
            }

            app.setDemon(params[0], lvlname.slice(0, -1), params[2]);
        } else {
            app.setDemon(params[0], params[1], params[2]);
        }
    }
});