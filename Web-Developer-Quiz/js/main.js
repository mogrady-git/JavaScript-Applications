//  Get all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
// 
const option_list = document.querySelector(".option_list");
// 
const timeCount = quiz_box.querySelector(".timer .timer_sec");
//
const timeLine = quiz_box.querySelector("header .time_line");




// When start_btn button is clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show the info box
    // console.log("start_btn clicked!");
}

// When exit_btn is clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide the info box
    // console.log("exit_btn clicked!");
}

// When continue_btn is clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide the info box
    // console.log("continue_btn clicked!");
    quiz_box.classList.add("activeQuiz"); //show the quiz box

    // 
    showQuestions(0); //calling showQuestions function
    // 
    queCounter(1); //passing que_numb value to queCounter
    // 
    startTimer(15); //calling startTimer function
    //
    startTimerLine(0); //calling startTimerLine function
}

// Functionality of the quiz
let que_count = 0; //initializing starting point of questions
// 
let que_numb = 1; //initializing starting question number value
// 
let counter; //initializing counter initial value
// 
let timeValue = 15; //time limit value in seconds
// 
let widthValue = 0; //starting value at 0px for the progress indicator line
// 
let userScore = 0; //initializing starting score


const next_btn = quiz_box.querySelector(".next_btn");
// 
const result_box = document.querySelector(".result_box");
// 
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


//if next button is clicked.. move array to next question and answers
next_btn.onclick = () => {
    // que_count++;
    // showQuestions(que_count);
    if (que_count < questions.length - 1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuestions(que_count); //calling showQuestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        startTimer(timeValue); //clear counterLine
        // 
        clearInterval(counterLine); //clear counterLine
        startTimerLine(widthValue); //calling startTimerLine function
        // 
        next_btn.style.display = "none";
    } else {
        console.log("Questions completed...");
        showResultBox(); //calling showResult function
    }
}



// Get questions and options from questions.js - array values
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    // const option_list = document.querySelector(".option_list");
    //create a new span and div tag for each question and option and pass in the values using array index from questions.js file
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>' //Prints from the array 1) number of the question. 2) Question
    let option_tag =
        '<div class="option">' + questions[index].options[0] + '<span></span></div>' + // Prints option 1
        '<div class="option">' + questions[index].options[1] + '<span></span></div>' + // Prints option 2
        '<div class="option">' + questions[index].options[2] + '<span></span></div>' + // Prints option 3
        '<div class="option">' + questions[index].options[3] + '<span></span></div>'; // Prints option 4
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    // set onclick attribute to all available options
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// div tags to be created with appropriate icons
let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
    let userAns = answer.textContent; //getting user selected option
    let correctAns = questions[que_count].answer; //answer is defined in the array /get correct answer from array
    // 
    let allOptions = option_list.children.length; //get all option items
    // 
    if (userAns == correctAns) { //if user selected option is equal to array's correct answer
        userScore += 1; // addition assignment operator; upgrading score value by 1
        console.log(userScore);
        console.log("Answer is Correct!");
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIcon); //adding tick icon to correct selected option

    } else {
        console.log("Answer is Wrong!");
        answer.classList.add("incorrect"); //adding red color to incorrectly selected option
        answer.insertAdjacentHTML("beforeend", crossIcon); //adding cross icon to incorrectly selected option


        // if answer is incorrect then select the correct answer
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon); //adding tick icon to matched option
            }
        }
    }

    // once user selected disables all other options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";

}

function showResultBox() {

    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.remove("activeQuiz"); //hide the quiz box
    result_box.classList.add("activeResult"); //show the quiz box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) {
        let scoreTag = '<span>Sorry, you got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
    }
};


function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time < 0) { //if timer is less than 0
            clearInterval(counter); //clear counter
            timeCount.textContent = "00"
        }
    }
};

//Create a new span tag and passing the question number and total question
function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let total_QuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = total_QuesCountTag; //adding new span tag inside bottom_ques_counter

};

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);

    function timer() {
        time += 1; //upgrading time value with 1
        timeLine.style.width = time + "px"; //increasing width of time_line with px by time value
        if (time > 549) { //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
};