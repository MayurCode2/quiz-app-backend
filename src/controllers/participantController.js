const Participant = require('../model/Participant');
const Quiz = require('../model/Quiz');

exports.createParticipant = async (req, res) => {
  const { quizId } = req.params;
  const { name } = req.body;

  try {
    // Find the quiz
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    // Create a new participant
    const participant = new Participant({
      name,
      quiz: quizId,
    });

    // Save the participant
    await participant.save();

    res.status(201).json(participant);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllParticipants = async (req, res) => {
  const { quizId } = req.params;

  try {
    // Find the quiz
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    // Get participants for the quiz
    const participants = await Participant.find({ quiz: quizId });

    res.json(participants);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.submitAnswers = async (req, res) => {
  const { quizId, participantId } = req.params;
  const { answers } = req.body;

  try {
    // Find the quiz
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    // Find the participant
    const participant = await Participant.findById(participantId);
    if (!participant) {
      return res.status(404).json({ error: 'Participant not found' });
    }

    // Calculate the participant's score
    let score = 0;
    const submittedAnswers = [];

    for (let i = 0; i < answers.length; i++) {
      const question = quiz.questions[i];
      const selectedChoices = answers[i];
      const correctChoices = question.choices.filter((choice) => choice.isCorrect).map((choice) => choice.answer);

      // Determine if the selected choices are correct
      const isCorrect =
        correctChoices.length === selectedChoices.length &&
        correctChoices.every((choice) => selectedChoices.includes(choice));

      // Update the score
      if (isCorrect) {
        score++;
      }

      // Store the submitted answers
      submittedAnswers.push({
        questionId: question._id,
        selectedChoices,
      });
    }

    // Update the participant's score and submitted answers
    participant.score = score;
    participant.submittedAnswers = submittedAnswers;
    await participant.save();

    res.json({ score });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
