import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Card, Alert } from "react-bootstrap";
import * as client from "./client";

export default function QuizPreview() {
  const { cid, qid } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuizData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchQuizData = async () => {
    const fetchedQuiz = await client.findQuizById(qid as string);
    const fetchedQuestions = await client.findQuestionsForQuiz(qid as string);
    setQuiz(fetchedQuiz);
    setQuestions(fetchedQuestions);
  };

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    let totalScore = 0;
    questions.forEach((question) => {
      const userAnswer = answers[question._id];
      if (
        question.type === "Fill in the Blank"
          ? userAnswer?.toLowerCase().trim() ===
            question.correctAnswer.toLowerCase().trim()
          : userAnswer === question.correctAnswer
      ) {
        totalScore += question.points;
      }
    });
    setScore(totalScore);
    setSubmitted(true);
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="p-3">
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>

      {!submitted ? (
        <>
          <Alert variant="info">
            <strong>Instructions:</strong>
            <ul>
              <li>Time Limit: {quiz.timeLimit} minutes</li>
              <li>Total Points: {quiz.points}</li>
              <li>Number of Questions: {questions.length}</li>
            </ul>
          </Alert>

          {questions.map((question, index) => (
            <Card key={question._id} className="mb-3 p-3">
              <h5>
                Question {index + 1} ({question.points} pts)
              </h5>
              <p>{question.question}</p>

              {question.type === "Multiple Choice" && (
                <Form>
                  {question.choices.map((choice: string, i: number) => (
                    <Form.Check
                      key={i}
                      type="radio"
                      name={question._id}
                      label={choice}
                      value={choice}
                      onChange={(e) =>
                        handleAnswerChange(question._id, e.target.value)
                      }
                    />
                  ))}
                </Form>
              )}

              {question.type === "True/False" && (
                <Form>
                  <Form.Check
                    type="radio"
                    name={question._id}
                    label="True"
                    value="true"
                    onChange={(e) =>
                      handleAnswerChange(question._id, e.target.value)
                    }
                  />
                  <Form.Check
                    type="radio"
                    name={question._id}
                    label="False"
                    value="false"
                    onChange={(e) =>
                      handleAnswerChange(question._id, e.target.value)
                    }
                  />
                </Form>
              )}

              {question.type === "Fill in the Blank" && (
                <Form.Control
                  type="text"
                  placeholder="Enter your answer"
                  onChange={(e) =>
                    handleAnswerChange(question._id, e.target.value)
                  }
                />
              )}
            </Card>
          ))}

          <Button variant="danger" onClick={handleSubmit}>
            Submit Quiz
          </Button>
        </>
      ) : (
        <div>
          <Alert variant="success">
            <h4>Quiz Submitted!</h4>
            <p>
              Your Score: {score} / {quiz.points}
            </p>
          </Alert>

          {quiz.showCorrectAnswers && (
            <div>
              <h5>Review Your Answers</h5>
              {questions.map((question, index) => {
                const userAnswer = answers[question._id];
                const isCorrect =
                  question.type === "Fill in the Blank"
                    ? userAnswer?.toLowerCase().trim() ===
                      question.correctAnswer.toLowerCase().trim()
                    : userAnswer === question.correctAnswer;

                return (
                  <Card
                    key={question._id}
                    className={`mb-3 p-3 ${
                      isCorrect ? "border-success" : "border-danger"
                    }`}
                  >
                    <h5>
                      Question {index + 1} ({question.points} pts) -{" "}
                      {isCorrect ? "✓ Correct" : "✗ Incorrect"}
                    </h5>
                    <p>{question.question}</p>
                    <p>
                      <strong>Your Answer:</strong> {userAnswer || "No answer"}
                    </p>
                    <p>
                      <strong>Correct Answer:</strong> {question.correctAnswer}
                    </p>
                  </Card>
                );
              })}
            </div>
          )}

          <Button
            variant="primary"
            onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes`)}
          >
            Back to Quizzes
          </Button>
        </div>
      )}
    </div>
  );
}
