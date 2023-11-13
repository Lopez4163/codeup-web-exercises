console.log("Hello from external Javascript")

let welcomeAlert = alert("Welcome to my Website!")

let favColorPrompt = prompt("What is your favorite color?")
alert(`Great, ${favColorPrompt} is my favorite color too!`)

let littleMermaidRentalDays = prompt("how many days did you rent the little mermaid for? ")
let brotherBearRentalDays = prompt("how many days did you rent the Brother Bear for? ")
let herculesRentalDays = prompt("how many days did you rent Hercules for? ")
littleMermaidRentalDays = parseInt(littleMermaidRentalDays);
brotherBearRentalDays = parseInt(brotherBearRentalDays);
herculesRentalDays = parseInt(herculesRentalDays);
let pricePerDay = 3
let total = (littleMermaidRentalDays + brotherBearRentalDays + herculesRentalDays) * pricePerDay
alert(`$${total}`)


let googlePay = parseInt(prompt("How much does Google pay you?"));
let amazonPay = parseInt(prompt("How much does Amazon pay you?"));
let facebookPay = parseInt(prompt("How much does Facebook pay you?"));
let googleHoursWorked = parseInt(prompt("How many hours did you work for Google?"));
let amazonHoursWorked = parseInt(prompt("How many hours did you work for Amazon?"));
let facebookHoursWorked = parseInt(prompt("How many hours did you work for Facebook?"));

let totalPay = (googlePay * googleHoursWorked) + (amazonPay * amazonHoursWorked) + (facebookPay * facebookHoursWorked)
alert(`$${totalPay}`)