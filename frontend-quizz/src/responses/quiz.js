const response = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        answer: "Paris"
    },
    {
        id: 2,
        question: "Which language is used for React?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        id: 3,
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter"
    },
    {
        id: 4,
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        id: 5,
        question: "What is the boiling point of water at sea level?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C"
    },
    {
        id: 6,
        question: "Which element has the chemical symbol 'O'?",
        options: ["Osmium", "Oxygen", "Gold", "Oganesson"],
        answer: "Oxygen"
    },
    {
        id: 7,
        question: "In which year did the World War II end?",
        options: ["1942", "1945", "1950", "1939"],
        answer: "1945"
    },
    {
        id: 8,
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "India"],
        answer: "Japan"
    },
    {
        id: 9,
        question: "Who is the founder of Microsoft?",
        options: ["Steve Jobs", "Elon Musk", "Mark Zuckerberg", "Bill Gates"],
        answer: "Bill Gates"
    },
    {
        id: 10,
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
        answer: "Hyper Text Markup Language"
    }
];

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }


export const getQuizResponse = function() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            shuffle(response)
            return resolve(response);
        }, 2000)
    })
}