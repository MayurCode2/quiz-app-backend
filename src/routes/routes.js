const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const participantController = require('../controllers/participantController');
const userController = require('../controllers/userController');

// Quizzes
router.post('/quizzes', quizController.createQuiz);
router.get('/quizzes', quizController.getAllQuizzes);

// Participants
router.post('/quizzes/:quizId/participants', participantController.createParticipant);
router.get('/quizzes/:quizId/participants', participantController.getAllParticipants);
router.put('/quizzes/:quizId/participants/:participantId/submit', participantController.submitAnswers);

// Users
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router;
