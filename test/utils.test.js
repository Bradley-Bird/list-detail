import { robots } from '../robots.js';
import { renderFocusRobot, renderImg } from '../utils.js';
const test = QUnit.test;

test('should return div with image', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="robot-img-1"><img src="./assets/Bender.png"></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderImg(robots[0]);

    expect.equal(actual.outerHTML, expected);
});

test('should return img with info on bender', (expect) => {
    const expected = `<div class="focus1"><img src="../assets/Bender1.png"><h2>BENDER</h2><ul><li>Appears In: Futurama</li><li>Quote: "O cruel fate, to be thusly boned! Ask not for whom the bone bones—it bones for thee."</li><li>Fun Fact: Bender would like to kill all humans</li></ul></div>`;

    const actual = renderFocusRobot(robots[0]);

    expect.equal(actual.outerHTML, expected);
});
