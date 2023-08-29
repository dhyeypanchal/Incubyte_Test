const leftRight = require("../leftRight");
const forwardBackward = require("../forwardBackward");
const upDown = require("../upDown");
const Launch_Chandrayaan = require("../Launch_Chandrayaan");

// built test cases for Chandrayaan moving
describe("Chandrayaan 3 Lunar Craft: Galactic Space Craft Control",()=>{
    const initial_pos = [0,0,0];
    const initial_dir = "N";
    const commands = ["f", "r", "u", "b", "l"];
    // this is for checking forward and backward
    test("Launch Chandrayaan check", () => {
        const result = Launch_Chandrayaan(initial_pos, initial_dir, commands);
        expect(result.position).toEqual([0,1,-1]);
        expect(result.direction).toEqual("N");
    });
    // this is for checking forward and backward
    test("forward backward check", () => {
        expect(forwardBackward(initial_pos, initial_dir,1)).toEqual([0,1,0]);
    });
    // this is for checking left and right
    test("left right check", () => {
        expect(leftRight(initial_dir, "left",null)).toEqual("W");
    });
    // this is for checking up and down
    test("up down check", () => {
        const updown = upDown(initial_dir, "Up", null);
        expect(updown.direction).toEqual("Up");
    });
});