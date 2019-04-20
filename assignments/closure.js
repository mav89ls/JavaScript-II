// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


function solarsystem() {
    const star = "the Sun";
    console.log(`I am the solar system, my biggest celestial object is ${star}.`);

    function earth() {
        const planet = "the Earth"
        console.log(`I am planet earth, I rotate around ${star}.`);

        function moon() {
            console.log(`I am the moon, I rotate around ${planet}. `);
        } //moon scope
        moon();

    } //earth scope
    earth();

} //solar scope
solarsystem()


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
};