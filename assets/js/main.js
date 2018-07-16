$(document).ready(function(){

const $main = $("#main");

$("#begin").on("click", function(){
  $(".jumbotron").addClass("fadeOutUpBig");
  $("#begin").addClass("d-none");
  $main.addClass("fadeInUpBig").removeClass("d-none");
  loadQuestion();
});

const questions = {
  q1 : {
    question : "SNES is the acronym for what popular gaming console released in the early 1990s?",
    answer1 : "Super Nintendo Entertainment System",
    answer2 : "Super Neat Edutainment System",
    answer3 : "Super National Entertainment Synthesizer",
    answer4 : "It's not an acronym",
    answerC : "Super Nintendo Entertainment System",
  },
  q2 : {
    question : "What was the first console video game that allowed the game to be saved?",
    answer1 : "Super Mario Bros.",
    answer2 : "The Legend of Zelda",
    answer3 : "Contra",
    answer4 : "DOOM",
    answerC : "The Legend of Zelda",
  },
  q3 : {
    question : "Regarding data storage, what does the acronym SSD stand for?",
    answer1 : "Solid State Drive",
    answer2 : "Super State Drive",
    answer3 : "Solid Snake Drive",
    answer4 : "Something Something Data",
    answerC : "Solid State Drive",
  },
  q4 : {
    question : "The Connecticut Leather Company later became what toy company that was popular in the 1980s for its Cabbage Patch Kids and video game consoles?",
    answer1 : "Cabbage Co.",
    answer2 : "Leather Brothers",
    answer3 : "Mystic Entertainment",
    answer4 : "Coleco",
    answerC : "Coleco",
  },
  q5 : {
    question : "Created in 2009, what was the first decentralized cryptocurrency?",
    answer1 : "Etherium",
    answer2 : "Dogecoin",
    answer3 : "Bitcoin",
    answer4 : "Bytecoin",
    answerC : "Bitcoin",
  },
  q6 : {
    question : "What does the acronym USB stand for when referring to a computer port?",
    answer1 : "Universal Serial Bus",
    answer2 : "Unified System Bus",
    answer3 : "Universal Supplimental Bus",
    answer4 : "USB is a made-up word used to trick students",
    answerC : "Universal Serial Bus",
  },
  q7 : {
    question : "Press alt-f4 now to win the game. No tricks",
    answer1 : "alt-f4",
    answer2 : "No seriously, type it on your keyboard",
    answer3 : "It's not a joke, try it",
    answer4 : "Next question, please",
    answerC : "Next question, please",
  },
  q8 : {
    question : "When talking about computer memory, what does the acronym ROM stand for?",
    answer1 : "Random Occurence Memory",
    answer2 : "Right On, Mate",
    answer3 : "Read-Only Memory",
    answer4 : "Righteous Only Man",
    answerC : "Read-Only Memory",
  },
  q9 : {
    question : "In 1975 an engineer created the first electronic camera while working for what company?",
    answer1 : "Canon",
    answer2 : "Kodak",
    answer3 : "Sony",
    answer4 : "Nikon",
    answerC : "Kodak",
  },
  q10 : {
    question : "Who is credited with inventing the first mechanical computer?",
    answer1 : "Blaise Pascal",
    answer2 : "William Thomson",
    answer3 : "Alan Turing",
    answer4 : "Charles Babbage",
    answerC : "Charles Babbage",
  },
  q11 : {
    question : "HTML and CSS are computer languages used to create what?",
    answer1 : "Websites",
    answer2 : "Web Applications",
    answer3 : "Webpages",
    answer4 : "All of the above",
    answerC : "All of the above",
  },
  q12 : {
    question : "The first person shooter video game DOOM was first released in what year?",
    answer1 : "1990",
    answer2 : "1985",
    answer3 : "1993",
    answer4 : "1979",
    answerC : "1993",
  },
  q13 : {
    question : "In what year was the first Apple computer released?",
    answer1 : "1976",
    answer2 : "1969",
    answer3 : "1990",
    answer4 : "1982",
    answerC : "1976",
  },
  q14 : {
    question : "In what year did Nintendo release its first game console in North America?",
    answer1 : "1993",
    answer2 : "1980",
    answer3 : "1985",
    answer4 : "1979",
    answerC : "1985",
  },
  q15 : {
    question : "Steve Jobs, Steve Wozniak, and Ronald Wayne founded what company in 1976?",
    answer1 : "Machintosh Computers, Inc.",
    answer2 : "Hewlett-Packard, Inc.",
    answer3 : "Micro-Soft",
    answer4 : "Apple Computer, Inc.",
    answerC : "Apple Computer, Inc.",
  },
  q16 : {
    question : "1,024 Gigabytes is equal to one what?",
    answer1 : "Petabyte",
    answer2 : "Terabyte",
    answer3 : "Megabyte",
    answer4 : "Kilobyte",
    answerC : "Terabyte",
  },
  q17 : {
    question : "What is the name given to an ancient analog computer that was discovered by divers off a Greek island in 1900?",
    answer1 : "Arithmetika mechanica",
    answer2 : "Mechromanicus arithmicus",
    answer3 : "Antikythera mechanism",
    answer4 : "The Ancient One",
    answerC : "Antikythera mechanism",
  },
  q18 : {
    question : "The companies HP, Microsoft and Apple were all started in a what?",
    answer1 : "Garage",
    answer2 : "Condo",
    answer3 : "Appartment",
    answer4 : "Office",
    answerC : "Garage",
  },
  q19 : {
    question : "What Harvard dropout co-founded Microsoft?",
    answer1 : "Paul Allen",
    answer2 : "Steve Wozniak",
    answer3 : "Charles Ranlett Flint",
    answer4 : "Bill Gates",
    answerC : "Bill Gates",
  },
  q20 : {
    question : "With over 17 million units produced, what was the highest selling single model of personal computer ever?",
    answer1 : "Apple II",
    answer2 : "Commodore PET",
    answer3 : "Macintosh",
    answer4 : "Commodore 64",
    answerC : "Commodore 64",
  }
}

let questionNum = 1;

loadQuestion = () => {
  
  updateText = () => {
    let questionAccessor = `q${questionNum}`;
    console.log(questionNum, questionAccessor);
    
    const $question = $(".question");
    const $answer1 = $(".answer1");
    const $answer2 = $(".answer2");
    const $answer3 = $(".answer3");
    const $answer4 = $(".answer4");

    $question.text(questions[questionAccessor].question);
    $answer1.text(questions[questionAccessor].answer1);
    $answer2.text(questions[questionAccessor].answer2);
    $answer3.text(questions[questionAccessor].answer3);
    $answer4.text(questions[questionAccessor].answer4);
    
    return questionAccessor;
  };

  nextQuestion = () => {
    questionNum++;
    //Remove the question box from view 1.5 seconds after an answer is pressed
    setTimeout(function(){
      $main.removeClass("fadeInUpBig").addClass("fadeOutUpBig");
      //While the question box is not visible,
      setTimeout(function(){
        loadQuestion();
        $(".correct").removeClass("bounceIn").addClass("d-none")
        $(".wrong").removeClass("bounceIn").addClass("d-none")
        $main.removeClass("fadeOutUpBig").addClass("fadeInUpBig");
      }, 500); 
    }, 1500);
  };

  console.log("I have been called!")
  questionAccessor = updateText();
};

$(".answer").on("click", function(){
    if ($(this).text() === questions[questionAccessor].answerC){
      console.log(questions, questionAccessor);
      $(".correct").removeClass("d-none").addClass("bounceIn")
      nextQuestion();
    }else if ($(this).text() !== questions[questionAccessor].answerC){
      console.log(questions, questionAccessor);
      $(".wrong").removeClass("d-none").addClass("bounceIn")
      nextQuestion();
    };
  });

});