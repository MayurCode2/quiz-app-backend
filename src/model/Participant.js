const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  submittedAnswers: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
      },
      selectedChoices: [
        {
          type: String,
        },
      ],
    },
  ],
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
