// fitness website



// array of exercises
const randomExercise = [
    "Squats",
    "Bench Press",
    "Deadlift",
    "Overhead Press",
    "Barbell Row",
    "Cable Row",
    "Dumbbell Curl",
    "Dumbbell Hammer Curl",
    "Dumbbell Incline Press",
    "Dumbbell Incline Row",
    "Dumbbell Press",
    "Dumbbell Row",
    "Push Press",
    "Push Up",
    "Pull Up",
    "Cable Curl",
    "Cable Hammer Curl",
    "Cable Incline Press",
    "Cable Incline Row",
    "Cable Press",
    "Cable Row",
    "Cable Crunch",
    "Cable Side Bend",
    "Curl Up",
    "Curl",
    "Running",
    "Bicycling",
    "Swimming",
    "Walking",
    "Stair Climbing",
    "Jumping",
    "Rowing",
    "Stretching",
    "Yoga",
    "Pilates",
    "HIIT",
    "Cardio",
    "Weight Lifting",
    "Strength Training",
    "Flexibility",
    "Balance",
    "Seeing what the gym has to offer"
]

// function to generate random exercise
function generateExercise() {
    let random = Math.floor(Math.random() * randomExercise.length);
    document.getElementById("display").innerHTML = randomExercise[random];
}

// displays exercise
function displayExercise() {
    generateExercise();
}

displayExercise();

// function to generate random workout
function generateWorkout() {
    let random = Math.floor(Math.random() * randomExercise.length);
    document.getElementById("display").innerHTML = randomExercise[random];
}

// doing this to get more lines of code
function displayWorkout() {
    generateWorkout();
}
// wont use it but need js to be main lang in github

// tell me a joke about programming
//function tellJoke() {
    //document.getElementById("display").innerHTML = "Why did the programmer quit his job? Because he didn't get arrays.";
//}

// bad joke imo
