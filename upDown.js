//for move Up and down the Chandrayaan
const upDown = (initial_dir, next_dir, prev_dir) => {
    if (initial_dir !== "Up" && initial_dir !== "Down") {
        prev_dir = initial_dir;
    }
    return { direction: next_dir === "Up" ? "Up" : "Down", prev_dir: prev_dir };
}
module.exports = upDown;