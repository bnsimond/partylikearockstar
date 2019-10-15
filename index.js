//global variables
//let score = 0;
//will track the index of the question
let currentQuestion = 0;

let totalQuestionsAnsweredCorrectly = 0;

//array of objects
let questions = [
  
  {
    title: "What are some reasons to celebrate?",
    answers: ["Birthday", "Graduation", "Retirement", "Feeling down", "All of the above"],
    correct: 4
   },
  
  {
    title: "Who should be invited to a party?",
    answers: ["Everyone you know", "Close friends only", "Immediate family", "Depends on the occasion", "Only those who can afford a gift"],
    correct: 3
   },

   {
    title: "What should no party should go without?",
    answers: ["Appetizers", "Cake", "A live band", "A clown", "Kids"],
    correct: 1
   },
  
   {
    title: "When is a great time to respond to a RSVP?",
    answers: ["The day of the event", "Never", "Immediately", "The day before the event", "All of the above"],
    correct: 2
   },
  
   {
    title: "Whose responsibility is it to host a party?",
    answers: ["Parents", "Friends", "Guests", "GoFundMe", "Depends on the occasion"],
    correct: 4
   },
  
   {
    title: "I cannot afford to have a party. What should I do?",
    answers: ["Have a party anyway", "Do not have a party", "Have a Potluck", "Charge an Entry fee", "Play the lottery"],
    correct: 1
   },
  
   {
    title: "I am going to a birthday party for my cousin, what should I buy her?",
    answers: ["Nothing", "Depends on his/her interests", "Regift what they bought you for your birthday", "Nothing more than $1.00", "A dog."],
    correct: 1
   },
  
   {
    title: "Should I have an Open bar at my party?",
    answers: ["Sure, if you can afford it.", "Sure, but consider the guests...are they drinkers?", "Sure, if the guests are over 21.", "Sure, but offer alternatives", "All of the above"],
    correct: 4
   },
  
   {
    title: "How can I host a great party?",
    answers: ["Hire someone", "Spend big bucks", "Book a famous entertainer", "Have a Disco ball", "Don't have any food"],
    correct: 0
   },
  
   {
    title: "How should I prepare for a party in my home?",
    answers: ["Clean bathroom", "Put the animals away", "Clean home", "Buy food", "All of the above"],
    correct: 4
   },
  ];
  
//event listeners

//starts quiz
function startQuizGame () {
    addEventListeners () ;
}

//what happens when the start button is clicked
function addEventListeners () { 
    $('.begin a, .again').click(function(e) {
      //alert('clicked')
      e.preventDefault ()  ;
      currentQuestion = 0;
      totalQuestionsAnsweredCorrectly = 0;
      //these buttons hide and the quiz/submit and questions appear
      $('.begin, .specifics, .more').hide () ;
      $('.quiz, #submit').show () ;
      $('.again').hide () ;
      //showQuestion function starts
      showQuestion () ;
    });
    
    //when the nextQuestion is clicked
    $(".nextQuestion").click(function (e) {
       e.preventDefault () ;
       showQuestion () ;
       //specifics class and more class clears out or resets
       $(".specifics, .more").text("")
       //the submit button should reappear but it does not
       //$("#submit").show();
       $("#submit, .nextQuestion, .results").toggle () ;
       document.getElementById("quizQuestions").reset () ;
       })
      
    //when the submit button from the form is clicked
    $('#quizQuestions').submit(event=>{
       event.preventDefault();
       // alert('submitted')
       $('.results, .specifics, .more').show();
       let radioValue = $("input[name='Option']:checked").val();
       //compares the selected value with the correct value
       let correctAnswer = questions[currentQuestion].correct;
       // score += 1; 
       console.log("radio value = ", radioValue);
       //if no option is selected -- Please choose an option appears.
      if (radioValue===undefined){
       $(".specifics").text("Please choose an option.")
       $(".more, .results").css("display", "none")
      } else {
        if (radioValue==correctAnswer){
          totalQuestionsAnsweredCorrectly ++
          $('.more').text('You are correct!')
        } else {
          $('.more').text('Better luck next time.')
        }
        //if a value is selected, it shows what the correct answer is. 
        createSpecificText(radioValue, correctAnswer)
        //hide submit button
        $("#submit").hide();
      
         currentQuestion++;

        //if currentQuestion index is greater than or equal to questions.length - show summary
        if (currentQuestion>=questions.length){
            showSummary();
        } else {
           //show next question button
        $(".nextQuestion").css("display", "block")
        }
      }
    })
}
  //functions

  function showQuestion () {
    let questionObject = questions[currentQuestion];
    $('.quiz h3').text(questionObject.title);

    var labels= $("label").toArray();
    for (var i=0; i<questionObject.answers.length; i++) {
      $(labels[i]).text(questionObject.answers[i])
    }
    
  }
   
  function showSummary () {
    $('.quiz').hide () ;
    $('.more').show () ;
    $('.results p').text ('You scored x out of "$(questions.length)"');
    $(".again").show () ;
  }

  function createSpecificText (radioValue, correctAnswer) {
    let answerArray=questions[currentQuestion].answers;
    let usersAnswerString=answerArray[radioValue];
    let correctAnswerString=answerArray[correctAnswer];
    let totalQuestionsAnswered=currentQuestion+1
    let statString=`<ul><li>Correct Answers: ${totalQuestionsAnsweredCorrectly}</li><li>Total Questions Answered: ${totalQuestionsAnswered}</li></ul>`;
    let tallyString=`<p>You answered <mark>"${usersAnswerString}"</mark> and the correct answer should be <mark>"${correctAnswerString}".</mark></p>`;
    $(".specifics").html(tallyString+statString)
  }

$(startQuizGame)
