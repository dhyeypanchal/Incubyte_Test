// for moving chandrayaan left and right
const leftRight = (current_dir, next_dir,prev_dir) => {
    const directions = ["N", "E", "S", "W"];
    const curr_index = (current_dir === "Up" || current_dir == "Down") ? directions.indexOf(prev_dir) : directions.indexOf(current_dir);
    const change_in_dir = next_dir === "left" ? -1 : 1;
    const new_index = (curr_index + change_in_dir + 4) % 4;
    return directions[new_index];
}
module.exports = leftRight;