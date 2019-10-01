//global variables
let score = 0;
//will track the index of the question
let currentQuestion = 0;

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
    answers: ["Wait until you can afford to have a party.", "Do not have a party", "Have a Potluck", "Charge an Entry fee", "Play the lottery"],
    correct: 4
   },
  
   {
    title: "I am going to a birthday party for my cousin, what should I buy her?",
    answers: ["Nothing", "Depends on her interests", "Regift what she bought you for your birthday", "Nothing more than $1.00", "A dog."],
    correct: 4
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
    title: "How should I prepare for a party in home?",
    answers: ["Clean bathroom", "Put the animals away", "Clean home", "Buy food", "Clean bathroom again"],
    correct: 0
   },
  ];
  
//event listeners

function startQuizGame(){
    addEventListeners();
}

function addEventListeners(){
  $('.begin a').click(function(e){
      //alert('clicked')
      e.preventDefault();
      $('.begin').hide();
      $('.quiz').show();
      showQuestion();
    });
    
   /* $("input:radio").click(function(e){
      e.preventDefault();
      if($('#id').length){
        var guess = $('#id').attr('.id');
        console.log(guess);
     } else {
        alert('You must select and answer to continue');
      }
    });*/
    
   $('#quizQuestions').submit(event=>{
     event.preventDefault();
     // alert('submitted')
      let radioValue = $("input[name='Option']:checked").val();
      let correctAnswer = questions[currentQuestion].correct;
      console.log("radio value = ", radioValue);
      if (radioValue===undefined){
        $(".specifics").text("Please choose an option.")
      } else {
        $(".specifics").text(`You answered ${radioValue} and the correct answer should be ${correctAnswer}`)
     
        console.log(`user answered ${radioValue} and correct answer is ${correctAnswer}`);
      //hide submit button
      $("#submit").css("display","none")
     
      //show next question button
      (".nextQuestion").css("display", "block")
      (".nextQuestion").click(function(e){
      e.preventDefault();
      showQuestion();
      }
      
      if (radioValue===correctAnswer){
      //correct answer from user
      $('.more').text('You are correct!')
      } else {
      $('.more').text('Better luck next time.')
      }
        
  //functions

  function showQuestion(){
    let questionObject = questions[currentQuestion];
    $('.quiz h3').text(questionObject.title);
    //MAY HAVE TO AMEND BELOW//
    //$('.quiz').html('');//
    //var inputTags = $("input[name='Option']").toArray();
    var labels= $("label").toArray();
    //console.log(inputTags)
    for(var i=0; i<questionObject.answers.length; i++){
      $(labels[i]).text(questionObject.answers[i])
     //$(inputTags[i]).val(questionObject.answers[i])
    }
  }
  //pass into function
  function checkAnswer(){
    let answer = questions[currentQuestion];
    if(correctAnswer === radioValue){
      score++;
    }
  }
 currentQuestion++;
    if(currentQuestion>=questions.length){
    showSummary();
    } else {
    showQuestion();
  }
  
  function showSummary(){
    $('.quiz').hide();
    $('.more').show();
    $('.results p').text ("You scored 'x' out of 'questions.length'");
  }
    
  function restartQuiz(){
    $('.more').hide();
    $('.quiz').show();
    score=0;
    currentQuestion=0;
    showQuestion();
  }

$(startQuizGame)





