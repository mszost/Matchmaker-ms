/*function calculateCompatbility() {
    const preferedAnswers = [3, 4, 1];
    console.log('calculating love');
    var userAnswers = [];
    userAnswers.push(document.getElementById("q1").selectedOptions[0].value);

    console.log(userAnswers);

    let totalCompatibilty = 0;

    for (let i = 0; i < userAnswers.length; i++) {
        var userAnswers = parseInt(userAnswers[i]);
        let questionCompatibility = 5 - Math.abs(userAnswers - preferedAnswers[i]);
        totalCompatibilty += questionCompatibility;
    }

    console.log(totalCompatibilty);
    document.getElementById("score").innerHTML = "Your compatibility is: " + totalCompatibilty;
    }*/
var userAnswerIDs = [];

function getRadioIDs() {
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5']
    userAnswerIDs.length = 0;
    //iterates q1-5
    for (var i = 0; i < questions.length; i++)
    {
        // iterates a-e for each question
        for (var n = 0; n < document.getElementsByName(questions[i]).length; n++) 
        {
            // checks which radio is selected
            if (document.getElementsByName(questions[i])[n].checked)
            {
                // adds selected radio id to userAnswerIDs
                userAnswerIDs.push(document.getElementsByName(questions[i])[n].id)
            }
        }
    }
    
    //console.log('userAnswerIDs', userAnswerIDs);
    return userAnswerIDs;

    /* Determines which radio button is selected and adds it to userAnswerIDs
    userAnswerIDs.pop(0)
        for (var i = 0; i < document.getElementsByName('q1').length; i++) {
            if (document.getElementsByName('q1')[i].checked) {
                userAnswerIDs.push(document.getElementsByName('q1')[i].id)
                console.log('ARRAY:', userAnswerIDs)
            }
        }
    }
    */
}

function calculateCompatibility() {
    const DESIRED_VALUES = [1, 1, 1, 1, 1];
    const WEIGHTINGS = [1, 1, 2, 2, 3]
    var differenceArray = [];
    var totalScore = 0

    userAnswerIDs.length = 0;
    differenceArray.length = 0;

    for (var i = 0; i < DESIRED_VALUES.length; i++) {
        differenceArray.push(Math.abs(DESIRED_VALUES[i] - document.getElementById(getRadioIDs()[i]).value) * WEIGHTINGS[i])
    }

    for (var i = 0; i < differenceArray.length; i++) {
        totalScore += differenceArray[i]; 
    }

    totalScore = Math.abs(totalScore - 100)
    
    console.log('differenceArray', differenceArray);
    console.log('totalScore', totalScore);

    document.getElementById("score").innerHTML = "Your score is: " + totalScore;
}

    

/*
for (var i = 0; i < document.getElementsByName('q1').length; i++) {
    if (document.getElementsByName('q1')[i].checked) {
        userAnswerIDs.push(document.getElementsByName('q1')[i].id)

        console.log('ARRAY:', userAnswerIDs);
    }
} */