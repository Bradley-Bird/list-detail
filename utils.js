export function renderRobots(robot) {
    const idNum = robot.id;
    const div = document.createElement('div');
    div.classList.add(`robot-${idNum}`);
    const h2 = document.createElement('h2');
    h2.textContent = robot.name.toUpperCase();
    const ul = document.createElement('ul');

    for (let item of robot.info) {
        const li = document.createElement('li');
        //access info list in each
        li.textContent = item;
        ul.append(li);
    }
    div.append(h2, ul);
    return div;
}
export function renderImg(robot) {
    const idNum = robot.id;
    const imgDiv = document.createElement('div');
    imgDiv.classList.add(`robot-img-${idNum}`);
    const img = document.createElement('img');
    img.src = `./assets/${robot.name}.png`;

    imgDiv.append(img);
    return imgDiv;
}
export function renderFocusRobot(robot) {
    const body = document.querySelector('.body');
    const div = document.createElement('div');
    div.classList.add('focus-div');
    const img = document.createElement('img');
    img.src = `../assets/${robot.name}1.png`;
    const h2 = document.createElement('h2');
    h2.textContent = robot.name.toUpperCase();
    const ul = document.createElement('ul');

    for (let item of robot.info) {
        const li = document.createElement('li');
        //access info list in each
        li.textContent = item;
        ul.append(li);
    }
    if (robot.id === '1') {
        body.style.backgroundImage = `url(../assets/background1.jpg)`;
    } else if (robot.id === '2') {
        body.style.backgroundImage = `url(../assets/background2.jpg)`;
    } else if (robot.id === '3') {
        body.style.backgroundImage = `url(../assets/background3.jpeg)`;
    } else {
    }

    div.append(img, h2, ul);
    return div;
}
