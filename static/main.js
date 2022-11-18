function calculateCompatbility() {
    const preferedAnswers = [3, 4, 1];
    console.log('calculating love');
    var userAnswers = [];
    userAnswers.push(document.getElementById("q1").selectedOptions[0].value);
    userAnswers.push(document.getElementById("q2").selectedOptions[0].value);
    userAnswers.push(document.getElementById("q3").selectedOptions[0].value);

    console.log(userAnswers);

    let totalCompatibilty = 0;

    for (let i = 0; i < userAnswers.length; i++) {
        var userAnswers = parseInt(userAnswers[i]);
        let questionCompatibility = 5 - Math.abs(userAnswers - preferedAnswers[i]);
        totalCompatibilty += questionCompatibility;
    }

    console.log(totalCompatibilty);
    document.getElementById("score").innerHTML = "Your compatibility is: " + totalCompatibilty;
    }
