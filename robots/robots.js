// console.log('henlo');
import { robots } from '../robots.js';
import { renderFocusRobot, findById } from '../utils.js';

const body = document.querySelector('.body');

const robotFocus = document.getElementById('robot-focus');

const params = new URLSearchParams(window.location.search);
// console.log('robots', robots);
// console.log('robotFocus', robotFocus);
// console.log('params', params.get('id'));

const robot = findById(params.get('id'), robots);
// console.log('robot', robot);

const renderFocus = renderFocusRobot(robot);

robotFocus.append(renderFocus);

body.style.backgroundImage = `url(../assets/background${robot.id}.jpg)`;
