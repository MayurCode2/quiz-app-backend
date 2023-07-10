const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      choices: [
        {
          answer: {
            type: String,
            required: true,
          },
          isCorrect: {
            type: Boolean,
            default: false,
          },
        },
      ],
    },
  ],
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
