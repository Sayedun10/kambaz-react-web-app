import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Card } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";
import * as client from "./client";
import {
  setQuestions,
  addQuestion as addQ,
  deleteQuestion as delQ,
  updateQuestion as updQ,
} from "./reducer";

export default function QuestionsEditor({ quizId }: { quizId: string }) {
  const dispatch = useDispatch();
  const { questions } = useSelector((state: any) => state.quizzesReducer);

  const [editingQuestion, setEditingQuestion] = useState<any>(null);

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchQuestions = async () => {
    const fetchedQuestions = await client.findQuestionsForQuiz(quizId);
    dispatch(setQuestions(fetchedQuestions));
  };

  const addNewQuestion = () => {
    setEditingQuestion({
      title: "New Question",
      type: "Multiple Choice",
      points: 1,
      question: "",
      choices: ["", "", "", ""],
      correctAnswer: "",
      quiz: quizId,
    });
  };

  const saveQuestion = async () => {
    if (editingQuestion._id) {
      const updated = await client.updateQuestion(
        editingQuestion._id,
        editingQuestion
      );
      dispatch(updQ(updated));
    } else {
      const created = await client.createQuestion(quizId, editingQuestion);
      dispatch(addQ(created));
    }
    setEditingQuestion(null);
  };

  const deleteQuestion = async (questionId: string) => {
    await client.deleteQuestion(questionId);
    dispatch(delQ(questionId));
  };

  const updateChoice = (index: number, value: string) => {
    const newChoices = [...editingQuestion.choices];
    newChoices[index] = value;
    setEditingQuestion({ ...editingQuestion, choices: newChoices });
  };

  return (
    <div>
      <Button variant="danger" className="mb-3" onClick={addNewQuestion}>
        <FaPlus /> Add Question
      </Button>

      {editingQuestion && (
        <Card className="mb-3 p-3">
          <Form.Group className="mb-3">
            <Form.Label>Question Title</Form.Label>
            <Form.Control
              type="text"
              value={editingQuestion.title}
              onChange={(e) =>
                setEditingQuestion({
                  ...editingQuestion,
                  title: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Question Type</Form.Label>
            <select
              className="form-control"
              value={editingQuestion.type}
              onChange={(e) =>
                setEditingQuestion({ ...editingQuestion, type: e.target.value })
              }
            >
              <option>Multiple Choice</option>
              <option>True/False</option>
              <option>Fill in the Blank</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Points</Form.Label>
            <Form.Control
              type="number"
              value={editingQuestion.points}
              onChange={(e) =>
                setEditingQuestion({
                  ...editingQuestion,
                  points: parseInt(e.target.value),
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Question Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={editingQuestion.question}
              onChange={(e) =>
                setEditingQuestion({
                  ...editingQuestion,
                  question: e.target.value,
                })
              }
            />
          </Form.Group>

          {editingQuestion.type === "Multiple Choice" && (
            <div>
              <Form.Label>Answer Choices</Form.Label>
              {editingQuestion.choices.map((choice: string, index: number) => (
                <Form.Group key={index} className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder={`Choice ${index + 1}`}
                    value={choice}
                    onChange={(e) => updateChoice(index, e.target.value)}
                  />
                </Form.Group>
              ))}
              <Form.Group className="mb-3">
                <Form.Label>Correct Answer</Form.Label>
                <select
                  className="form-control"
                  value={editingQuestion.correctAnswer}
                  onChange={(e) =>
                    setEditingQuestion({
                      ...editingQuestion,
                      correctAnswer: e.target.value,
                    })
                  }
                >
                  <option value="">Select correct answer</option>
                  {editingQuestion.choices.map(
                    (choice: string, index: number) => (
                      <option key={index} value={choice}>
                        {choice}
                      </option>
                    )
                  )}
                </select>
              </Form.Group>
            </div>
          )}

          {editingQuestion.type === "True/False" && (
            <Form.Group className="mb-3">
              <Form.Label>Correct Answer</Form.Label>
              <select
                className="form-control"
                value={editingQuestion.correctAnswer}
                onChange={(e) =>
                  setEditingQuestion({
                    ...editingQuestion,
                    correctAnswer: e.target.value,
                  })
                }
              >
                <option value="">Select correct answer</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </Form.Group>
          )}

          {editingQuestion.type === "Fill in the Blank" && (
            <Form.Group className="mb-3">
              <Form.Label>Correct Answer</Form.Label>
              <Form.Control
                type="text"
                value={editingQuestion.correctAnswer}
                onChange={(e) =>
                  setEditingQuestion({
                    ...editingQuestion,
                    correctAnswer: e.target.value,
                  })
                }
              />
            </Form.Group>
          )}

          <div>
            <Button variant="success" className="me-2" onClick={saveQuestion}>
              Save Question
            </Button>
            <Button
              variant="secondary"
              onClick={() => setEditingQuestion(null)}
            >
              Cancel
            </Button>
          </div>
        </Card>
      )}

      <div className="mt-4">
        <h5>Existing Questions</h5>
        {questions.map((question: any, index: number) => (
          <Card key={question._id} className="mb-2 p-3">
            <div className="d-flex justify-content-between">
              <div>
                <strong>Q{index + 1}:</strong> {question.title} (
                {question.points} pts)
                <div className="text-muted small">{question.type}</div>
              </div>
              <div>
                <Button
                  variant="link"
                  className="text-primary me-2"
                  onClick={() => setEditingQuestion(question)}
                >
                  Edit
                </Button>
                <Button
                  variant="link"
                  className="text-danger"
                  onClick={() => deleteQuestion(question._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
