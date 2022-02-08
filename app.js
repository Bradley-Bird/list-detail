// import functions and grab DOM elements
import { robots } from './robots.js';
import { renderRobots } from './utils.js';
const robotList = document.getElementById('robotList');
// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
for (let robot of robots) {
    const idLink = `/robots/?id=${robot.id}`;
    const idNum = robot.id;
    const div = renderRobots(robot);
    div.classList.add(`robot-${idNum}`);
    const a = document.createElement('a');
    a.href = idLink;
    a.append(div);
    robotList.append(a);
}
