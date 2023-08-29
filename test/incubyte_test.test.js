// this function is used for returning result for resultant position
const forwardbackward = (initial_pos,initial_dir)=>{

    // currently i give cordinate staticaly
    const [x,y,z] = initial_pos;
    switch (initial_dir) {
        case 'N':
            return [x,y+1,z];
        case 'S':
            return [x, y - 1, z];
        case 'E':
            return [x+1, y, z];
        case 'W':
            return [x -1, y, z]
        case 'Up':
            return [x, y - 1, z]
        case 'Down':
            return [x, y, z - 1];
        default:
            return initial_pos;
    }
}


// now for left and right
const leftRight = (current_dir,next_dir)=>{
    const directions = ["N","E","S","W"];
    const currentIndex = directions.indexOf(current_dir);

    const changeInDirection = next_dir === "left"?-1:1;

    const newIndex = (currentIndex + changeInDirection + 4) %4; 
    return directions[newIndex];
}

// now for Up and down
let prev_dir;
const UpDown = (initial_dir,next_dir)=>{
    if (initial_dir!=="up" && initial_dir!=="down") {
        prev_dir = initial_dir;
    }
    return next_dir === "up" ? "Up":"Down";
}


// built test cases below
describe("Chandrayaan 3 Lunar Craft: Galactic Space Craft Control",()=>{

    const initial_pos = [1,5,7];
    const initial_dir = "E";
    // this is for checking forward and backward
    test("forward backward check", () => {
        expect(forwardbackward(initial_pos, initial_dir)).toEqual([2, 5, 7]);
    });

    // this is for checking left and right
    test("left right check", () => {
        expect(leftRight(initial_dir, "left")).toEqual("N");
    });

    // this is for checking up and down
    test("up down check", () => {
        expect(UpDown(initial_dir, "up")).toEqual("Up");
    });
});