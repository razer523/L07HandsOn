function regexChecker() {
    let firstName=document.getElementById('firstName').value;
    let lastName=document.getElementById('lastName').value;
    let firstRegex=/^[A-Z][a-zA-Z]+$/;
    let lastRegex=/^[A-Z][a-zA-Z]+$/;
    if (firstName.match(firstRegex) && lastName.match(lastRegex)){
        alert ("Yay! Your inputs were all correct!");
    }
    else {
        alert ("Oh no! Thats an invalid format!");
    }
}
