//Create prompt that asks user their name, age, and city & if they are older than 18, it will change the h1 and state a message.
//if under 18, it will alert them a different msg

function pathFinder() {
    let firstName = prompt("What is your first name?");
    let city = prompt("What city do you live in?");
    let age = prompt("How old are you?");
    let h1 = document.querySelector("h1"); //will select the h1

    if (age >= 18) {
        h1.innerHTML = (`Welcome, ${firstName} from ${city}. Happy biking! <br />🚵🏾‍♂️`);
    } else {
        alert(`Hi, ${firstName}, be sure to bike safely with an adult.`);
    }
}
let happyPath = document.querySelector("button"); //select the button
happyPath.addEventListener("click", pathFinder); //add an event listener that will trigger when the button is clicked and run the function pathFinder