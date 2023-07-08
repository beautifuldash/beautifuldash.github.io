const domen = 'http://127.0.0.1:5500/';
const add = new Main();

$.get(domen + 'js/dl/info.txt', (data) => {
    const lines = data.split('\n');
    const curId = localStorage.getItem('id');
    let lvlname = '';
    let usersstr = '';
    for(let i = 0; i < lines.length; i++) {
        const params = lines[i].split(' ');
        if(curId != params[0]) continue;

        if(params[1].includes('-')) {
            const parts = params[1].split('-');
            for(let j = 0; j < parts.length; j++) {
                lvlname += parts[j] + ' ';
            }

            lvlname = lvlname.slice(0, -1);
        } else {
            lvlname = params[1];
        }

        if(params[3].includes('&')) {
            const users = params[3].split('&');
            for(let l = 0; l < users.length; l++) {
                usersstr += users[l] + ', ';
            }

            usersstr = usersstr.slice(0, -2);
        } else {
            usersstr = params[3];
        }

        add.setModalInfo(params[0], lvlname, params[2], usersstr, params[4], params[5], params[6], params[7], params[8], params[9]);
    }
});