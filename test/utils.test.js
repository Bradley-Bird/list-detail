import { robots } from '../robots.js';
import { renderRobots } from '../utils.js';
const test = QUnit.test;

test('should return list with nested array lists', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class=\"robot-1\"><h2>BENDER</h2><ul><li>Appears In: Futurama</li><li>Quote: \"O cruel fate, to be thusly boned! Ask not for whom the bone bones—it bones for thee.\"</li><li>Fun Fact: Bender would like to kill all humans</li></ul></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderRobots(robots[0]);

    expect.equal(actual.outerHTML, expected);
});
