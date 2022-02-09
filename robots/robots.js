// console.log('henlo');
import { robots } from '../robots.js';
import { renderFocusRobot } from '../utils.js';

const body = document.querySelector('.body');

const robotFocus = document.getElementById('robot-focus');

const params = new URLSearchParams(window.location.search);
// console.log('robots', robots);
// console.log('robotFocus', robotFocus);
// console.log('params', params.get('id'));

const robot = robots.find((item) => item.id === params.get('id'));
// console.log('robot', robot);

const renderFocus = renderFocusRobot(robot);

robotFocus.append(renderFocus);
