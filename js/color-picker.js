let i = 0;
const colors = [
    ['#fff', '#f2d57e', 'rgb(242, 172, 126)', 'Selected'],
    ['#FFF', '#FFF', '#7ec59f', 'Original'],
    ['#FFF', '#FFF', '#52817d'],
    ['#FFF', '#FFF', '#53697b'],
    ['#444', '#FFF', 'rgb(222, 227, 226)'],
    ['#444', '#FFF', 'rgb(237, 201, 197)'],
    ['#444', '#FFF', 'rgb(242, 213, 126)'] //,
    // ['#444', '#FFF'],
    // ['#FFF', '#68B0AB'],
    // ['#FFF', '#A5B9C7'],
    // ['#444', '#A5B9C7'],
    // ['#FFF', '#A09DAF'],
    // ['#261816', '#F9F3DF'],
    // ['#444', '#F7DECF'],
    // ['#444', '#F2DAA3'],
    // ['#261816', '#F6DC69'],
    // ['#fff', '#D5916B'],
    // ['#FFF', '#D4816B'],
    // ['#FFF', '#E4A87E'],
    // ['#2F3027', '#D9BEA4'],
    // ['#2F3027', '#CCB09D'],
    // ['#FFF', '#977E7E'],
    // ['#FFF', '#A17B60'],
    // ['#FFF', '#444']
];

const setColor = () => {
    const fontColor = colors[i][0];
    const gradientColor = colors[i][1];
    const bgColor = colors[i][2];
    const root = document.documentElement;
    root.style.setProperty('--hero-text-color', fontColor);
    root.style.setProperty('--hero-gradient-color', gradientColor);
    root.style.setProperty('--hero-bg-color', bgColor);
    root.style.setProperty('--badge-color', bgColor);
    if (i !== 0) {
        root.style.setProperty('--nav-bg-color', bgColor);
    }
    
};

const initColor = () => {
    setColor();
    const label = document.querySelector('.btn-tester span');
    if (colors[i][3]) {
        label.innerHTML = colors[i][3];
    } else {
        label.innerHTML = `Option ${i+1} / ${colors.length}`;
    }
};

const nextColor = () => {
    i++;
    if (i >= colors.length) {
        i = 0;
    }
    initColor();
};
const prevColor = () => {
    i--;
    if (i < 0) {
        i =  colors.length - 1;
    }
    initColor()
};

const initScreen = () => {
    document.querySelector('#hero').insertAdjacentHTML('beforeend', `
        <div class="btn-tester">
            <button onclick="prevColor()"><i class="fas fa-chevron-left"></i></button>
            <span></span>
            <button onclick="nextColor()"><i class="fas fa-chevron-right"></i></button>
        </div>
    `)

    initColor();
};

// initScreen();

