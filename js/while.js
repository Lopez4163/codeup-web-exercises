// let i = 2
// const firstWhileLoop = (i) => {
//     while (i <= 65536) {
//         console.log('while loop iteration #' + i)
//         i *= 2
//     }
//     }
// firstWhileLoop(i)


//First write enough code that generates
// a random number between 50 and 100

// let allCones = Math.floor(Math.random() * 50) + 50;
//
// //should generate another random number between 1 and 5,
// // simulating the amount of cones being bought by her clients
// let conesBought = Math.floor(Math.random() * 5) + 1;
//
// let i = 10;
//
console.log("Starting with " + allCones + " cones.");

do {
    let conesBought = Math.floor(Math.random() * 5) + 1;

    if (conesBought <= allCones) {
        console.log(conesBought + " cones sold...");

        allCones -= conesBought;
    } else {
        console.log("Cannot sell you " + conesBought + " cones. I only have " + allCones + "...");
    }

} while (allCones > 0);

console.log("Yay! I sold them all!");

