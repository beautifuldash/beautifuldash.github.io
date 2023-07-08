setTimeout(() => {
    const dllist = document.querySelectorAll('.dl-item');
    console.log(dllist.length);

    for(let i = 0; i < dllist.length; i++) {
        dllist[i].onclick = () => {
            const id = dllist[i].querySelector('.none').innerText;
            console.log(id);
            localStorage.setItem('id', id);
            window.location.href = './lvl.html';
        }
    }
}, 500);