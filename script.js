function answerQuestion() {
    let question = document.getElementById("question").value.toLowerCase();

    let response = "I don't understand that question.";

    if (question.includes("hello")) {
        response = "Hello student!";
    }
    else if (question.includes("html")) {
        response = "HTML is used to create webpages.";
    }
    else if (question.includes("css")) {
        response = "CSS is used for styling webpages.";
    }
    else if (question.includes("javascript")) {
        response = "JavaScript adds functionality to websites.";
    }
    else if (question.includes("exam")) {
        response = "Study daily and practice coding problems.";
    }

    document.getElementById("response").innerText = response;
}