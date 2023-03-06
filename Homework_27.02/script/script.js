const users = [];

const root = document.querySelector('#root');
const form = document.querySelector('.addUser');

function addCard(link, fullName){
    const container = document.createElement('div');
    const pLink = document.createElement('p');
    const pFullName = document.createElement('p');
    const img = document.createElement('img');

    container.classList.add('item');
    container.classList.add('img');


    pLink.innerText = link;
    pFullName.innerText = fullName;
    img.src = link;

    container.append(img, pFullName);
    root.append(container);

};

function rerender(){
    root.innerText = '';
    form.link.value = '';
    form.fullName.value = '';
    for(let i = 0; i < users.length; i++){
        addCard(users[i].link, users[i].fullName);
    }
    const items = document.querySelectorAll('.item');
    for (let i = 0; i < items.length; i += 3){
        const line = document.createElement('div');
        line.classList.add('line');
        root.insertBefore(line, items[i]);
        for (let a = 0; a < 3; a++){
            const item = items[i + a];
            line.appendChild(item);
        }
    }
}

form.addEventListener('submit', function (event){
    event.preventDefault();
    const link = form.link;
    const fullName = form.fullName;


const newUser = {
    link: link.value,
    fullName: fullName.value,
}
users.push(newUser);
rerender();

link.value = '';
fullName.value = '';
});



rerender();

