(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ['nick', 'Jim', 'katie', 'steve']

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
        console.log(names.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
        console.log(names[0])
        console.log(names[1])
        console.log(names[2])
        console.log(names[3])

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

        for(let i = 0; i < names.length; i++) {
            console.log(names[i])
        }

    const logNames = (names) => {
            for (let i = 0; i < names.length; i++) {
                console.log(names[i])
            }
        }
        logNames(names)




    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    const singleLiner = (names) => names.forEach((name) => console.log(name))
    singleLiner(names)




    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     *
     *
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    //First Array First Element
    // const firstElement = (names) => {
    //         return names[0]
    //         }
    // console.log(firstElement(names))
    const firstElement = (names) => names[0]
    console.log(firstElement(names))


    //Second Array First Element
    // const secondElement = (names) => {
    //     return names[1]
    // }
    // console.log(secondElement(names))

    const secondElement = (names) => names[1]
    console.log(secondElement(names))




    //Third Array First Element
    // const thirdElement = (names) => {
    //     return names[names.length - 1]
    // }
    // console.log(thirdElement(names))


    const lastElement = (names) => names[names.length - 1]
    console.log(lastElement(names))




})();
