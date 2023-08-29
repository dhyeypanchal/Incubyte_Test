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


// built test cases below
describe("Chandrayaan 3 Lunar Craft: Galactic Space Craft Control",()=>{
    // beforeEach(()=>{
    //     const initial_pos = [0, 0, 0];
    //     const initial_dir = "Up";
    // })
    test("forward backward check", () => {
        const initial_pos = [1,5,7];
        const initial_dir = "Down";
        const expected_Result = [1,5,6];

        let result = forwardbackward(initial_pos, initial_dir);
        expect(result).toEqual(expected_Result);
    });
});