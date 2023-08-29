// this function is used for returning result for resultant position
const forwardBackward = (initial_pos, initial_dir,steps) => {
    const [a, b, c] = initial_pos;
    switch (initial_dir) {
        case 'N':
            return [a, b + steps, c];
        case 'S':
            return [a, b - steps, c];
        case 'E':
            return [a + steps, b, c];
        case 'W':
            return [a - steps, b, c]
        case 'Up':
            return [a, b, c+steps]
        case 'Down':
            return [a, b, c - steps];
        default:
            return initial_pos;
    }
}
module.exports = forwardBackward;