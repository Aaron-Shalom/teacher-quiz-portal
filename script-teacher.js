// script-teacher.js

document.getElementById('poll-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collecting data
    var question = document.getElementById('question').value;
    var options = document.getElementById('options').value.split(',');
    var correctAnswer = document.getElementById('correct-answer').value;
    var timer = document.getElementById('timer').value;

    // Creating a poll
    var poll = {
        question: question,
        options: options,
        correctAnswer: correctAnswer,
        timer: timer
    };
    
    // Displaying poll
    var pollsDiv = document.getElementById('polls');
    var pollElement = document.createElement('div');
    pollElement.innerHTML = `
        <h3>${poll.question}</h3>
        <ul>
            ${poll.options.map(option => `<li>${option}</li>`).join('')}
        </ul>
        <p>Timer: ${poll.timer} seconds</p>
    `;
    pollsDiv.appendChild(pollElement);
    
    // Reset form
    document.getElementById('poll-form').reset();
});
