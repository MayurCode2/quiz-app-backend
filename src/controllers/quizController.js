const Quiz = require('../model/Quiz');

exports.createQuiz = async (req, res) => {
  const { title, questions } = req.body;

  try {
    // Create a new quiz
    const quiz = new Quiz({
      title,
      questions,
    });

    // Save the quiz
    await quiz.save();

    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllQuizzes = async (req, res) => {
  try {
    // Retrieve all quizzes
    const quizzes = await Quiz.find();

    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
