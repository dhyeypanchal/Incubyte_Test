const forwardBackward = require("./forwardBackward")
const leftRight = require("./leftRight")
const upDown = require("./upDown")


// this is code for running all the commands
function Launch_Chandrayaan(position, direction, commands) {
    let curr_pos = position;
    let curr_dir = direction;
    let prev_dir = null;
    for (let index = 0; index < commands.length; index++) {
        switch (commands[index]) {
            case "f":
                curr_pos = forwardBackward(curr_pos, curr_dir, 1);
                break;
            case "b":
                curr_pos = forwardBackward(curr_pos,curr_dir,-1);
                break;
            case "r":
                curr_dir = leftRight(curr_dir, "right", prev_dir);
                break;
            case "l":
                curr_dir = leftRight(curr_dir, "left", prev_dir);
                break;
            case "u":
                let resultUp = upDown(curr_dir, "Up", prev_dir);
                curr_dir = resultUp.direction;
                prev_dir = resultUp.prev_dir;
                break;
            case "d":
                let result = upDown(curr_dir, "Down", prev_dir);
                curr_dir = result.direction;
                prev_dir = result.prev_dir;
                break;
            default:
                break;
        }
    }
    return { position: curr_pos, direction: curr_dir };
}
module.exports = Launch_Chandrayaan;