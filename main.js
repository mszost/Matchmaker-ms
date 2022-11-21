var userAnswerIDs = [];

function getRadioIDs() {
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5']
    userAnswerIDs.length = 0;
    //iterates q1-5 radio groups
    for (var i = 0; i < questions.length; i++) {
        // nested loop iterates a-e radios for each group
        for (var n = 0; n < document.getElementsByName(questions[i]).length; n++) {
            // checks which radio is selected from the group
            if (document.getElementsByName(questions[i])[n].checked) {
                // adds selected radio ID to userAnswerIDs
                userAnswerIDs.push(document.getElementsByName(questions[i])[n].id)
            }
        }
    }
    return userAnswerIDs;
}

function calculateCompatibility() {
    const scoreElement = document.querySelector('#score'); // for editing css upon function call
    const DESIRED_VALUES = [1, 1, 1, 1, 1];
    const WEIGHTINGS = [1, 1, 2, 2, 3]
    var differenceArray = [];
    var totalScore = 0

    userAnswerIDs.length = 0; // reset lists before running loops
    differenceArray.length = 0;

    for (var i = 0; i < DESIRED_VALUES.length; i++) { // appends instance of ABS((DESIRED VALUE - USER VALUE) * WEIGHTS) to array once for every value
        differenceArray.push(Math.abs(DESIRED_VALUES[i] - document.getElementById(getRadioIDs()[i]).value) * WEIGHTINGS[i])
    } 
    for (var i = 0; i < differenceArray.length; i++) { // adds all items in differenceArray into one sum variable called totalScore
        totalScore += differenceArray[i]; 
    }

    totalScore = Math.abs(totalScore - 100)
    scoreElement.style.opacity = '100%';
    document.getElementById("score").innerHTML = "Your score is: " + totalScore + "%";
    
    if (totalScore > 90) {
        document.getElementById("msg").innerHTML = "Let's get married!";
    } else if (totalScore < 70) {
        document.getElementById("msg").innerHTML = "Go away ...";
    } else {
        document.getElementById("msg").innerHTML = "We can be friends.";
    }
}