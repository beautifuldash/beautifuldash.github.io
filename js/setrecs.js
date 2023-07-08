const set = new Main();

$.get(domen + 'js/dl/records.txt', (data) => {
    const lines = data.split('\n');
    for(let i = 0; i < lines.length; i++) {
        const params = lines[i].split(' ');
        set.setRecord(params[0].replace(' ', ''), params[1].replace(' ', ''), params[2].replace(' ', ''), params[3].replace(' ', ''), params[4].replace(' ', ''));
    }
});