(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
        const person = {
            firstName: 'Nicholas',
            lastName: 'Lopez',

    }
        console.log(person.firstName, person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
        person.sayHello = function ({ firstName, lastName }) {
            return `Hello from ${firstName} ${lastName}`
        }
        console.log(person.sayHello(person))
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},
    ];

    shoppers.forEach( shopper => {
        let originalAmount = shopper.amount;
        let discount = 0;

        if(originalAmount > 200) {
            discount = 0.12 * originalAmount
        }

        let amountAfterDiscount = originalAmount - discount
        console.log(
            `${shopper.name} bought $${originalAmount.toFixed(2)}. ${
                discount > 0 ? `They received a $${discount.toFixed(2)} discount.` : ''
            } The amount after discount is $${amountAfterDiscount.toFixed(2)}.`
        );

    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: 'Harry Potter',
            author: {
                firstName: 'jk',
                lastName: 'rowling'
            },
        },
        {
            title: 'breathe',
            author: {
                firstName: 'royce',
                lastName: 'gracie'
            },
        },
        {
            title: 'fignerprints',
            author: {
                firstName: 'stephen',
                lastName: 'graham'
            },
        },
        {
            title: 'flat stanley',
            author: {
                firstName: 'no',
                lastName: 'idea'
            },
        },
        {
            title: 'goosebumops',
            author: {
                firstName: 'rl',
                lastName: 'stine'
            },
        }

    ]
    console.log(books[1].title)
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
books.forEach((book, index) => {
    console.log(`Title: ${book.title}\nAuthor: ${book.author}\n--- `)

})








    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

// - Create a function named `createBook` that accepts a title and author
    const createBook = ( title, author ) => {
        return {
            title: title,
            author: author,
        }
    }
    books = [
        createBook('flatstanley','noidea'),
        createBook('goosebumps','rl stine'),
        createBook('twilight','whoknows'),
        createBook('dune','have0clue'),
        createBook('tokillamockingbird','who knows')

    ]

    const showBookInfo = (book) => {
        console.log(`Title: ${book.title}\nAuthor: ${book.author}\n--- `)
    }

books.forEach(showBookInfo)

})();

