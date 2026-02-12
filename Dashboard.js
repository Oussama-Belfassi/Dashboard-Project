const chart = document.querySelector("#chart").getContext('2d');
const header = document.querySelector('header');
const search = document.querySelector('.search input');
const container = document.querySelector('.container');
const nav2 = document.querySelector('.nav2');
const nav1_a = document.querySelectorAll('.nav1 a');
const first1 = document.querySelector('.first1 input');
const divs_div = document.querySelectorAll('.wrap');
const first4_button = document.querySelector('.add');
const canva = document.querySelector('canvas');
const one = document.querySelector('.one');
const down = document.querySelector('#down');
const profil = document.querySelector('.profil');
const upp = document.querySelector('.up');
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684,
                    33572, 39974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 32698,
                    5000, 3000, 18656, 24832, 36844],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
});

const dark = document.querySelector('.dark');
const light = document.querySelector('.light');


dark.addEventListener('click', () => {
    dark.classList.add('dark1');
    light.classList.add('light1');
    container.classList.add('container1');
    header.classList.add('head');
    search.classList.add('input');
    nav2.style.backgroundColor = '#0f0f0f';
    first4_button.style.backgroundColor = '#0f0f0f';
    first4_button.style.color = 'var(--color-light)';
    first1.classList.add('input');
    divs_div.forEach(div => {
        div.classList.add('wrap1');
    });
    canva.style.backgroundColor = '#0f0f0f';
    one.style.backgroundColor = '#0f0f0f';
    nav1_a.forEach(element => {
        element.classList.add('link');
    });;
    upp.classList.add('upp');
});

first1.addEventListener('click', () => {
    first1.showPicker();
});

light.addEventListener('click', () => {
    dark.classList.remove('dark1');
    light.classList.remove('light1');
    container.classList.remove('container1');
    header.classList.remove('head');
    search.classList.remove('input');
    nav2.style.backgroundColor = '#fff';
    first4_button.style.backgroundColor = '#fff';
    first4_button.style.color = 'var(--color-light)';
    first1.classList.remove('input');
    divs_div.forEach(div => {
        div.classList.remove('wrap1');
    });
    canva.style.backgroundColor = '#fff';
    one.style.backgroundColor = '#fff';
    nav1_a.forEach(element => {
        element.classList.remove('link');
    });
    upp.classList.remove('upp');
});

let up = true;

down.addEventListener('click', () => {
    if (up) {
        down.style.transform = 'rotate(180deg)';
        profil.style.overflow = 'visible';
        up= false;
    }
    else {
        down.style.transform = 'rotate(0deg)';
        profil.style.overflow = 'hidden';
        up = true;
    }
});