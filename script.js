function pathFinder() {
    let firstName = prompt("What is your first name?");
    let city = prompt("What city do you live in?");
    let age = prompt("How old are you?");
    let h1 = document.querySelector("h1");

    if (age >= 18) {
        h1.innerHTML = (`Welcome, ${firstName} from ${city}. Happy biking! <br />🚵🏾‍♂️`);
    } else {
        alert(`Hi, ${firstName}, be sure to bike safely with an adult.`);
    }
}
let happyPath = document.querySelector("button");
happyPath.addEventListener("click", pathFinder);