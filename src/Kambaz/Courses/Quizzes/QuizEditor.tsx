import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import * as client from "./client";
import { addQuiz, updateQuiz as updateQuizAction } from "./reducer";
import QuestionsEditor from "./QuestionsEditor";

export default function QuizEditor() {
  const { cid, qid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isNewQuiz = qid === "new";

  const [activeTab, setActiveTab] = useState("details");
  const [quiz, setQuiz] = useState({
    title: "New Quiz",
    description: "",
    quizType: "GRADED_QUIZ",
    points: 100,
    assignmentGroup: "QUIZZES",
    shuffleAnswers: true,
    timeLimit: 20,
    multipleAttempts: false,
    showCorrectAnswers: false,
    accessCode: "",
    oneQuestionAtATime: true,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
    dueDate: new Date().toISOString().split("T")[0],
    availableDate: new Date().toISOString().split("T")[0],
    untilDate: new Date().toISOString().split("T")[0],
    published: false,
    course: cid,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isNewQuiz) {
      fetchQuiz();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchQuiz = async () => {
    try {
      const fetchedQuiz = await client.findQuizById(qid as string);
      setQuiz(fetchedQuiz);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quiz:", error);
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (isNewQuiz) {
        const newQuiz = await client.createQuiz(cid as string, quiz);
        dispatch(addQuiz(newQuiz));
        navigate(`/Kambaz/Courses/${cid}/Quizzes`);
      } else {
        await client.updateQuiz(qid as string, quiz);
        dispatch(updateQuizAction(quiz));
        navigate(`/Kambaz/Courses/${cid}/Quizzes`);
      }
    } catch (error) {
      console.error("Error saving quiz:", error);
      alert("Failed to save quiz. Check console for details.");
    }
  };

  if (loading) {
    return <div className="p-3">Loading...</div>;
  }

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between mb-3">
        <h3>{isNewQuiz ? "New Quiz" : "Edit Quiz"}</h3>
        <div>
          <Button
            variant="secondary"
            className="me-2"
            onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes`)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>

      {/* Simple Tab Navigation */}
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "questions" ? "active" : ""}`}
            onClick={() => setActiveTab("questions")}
            disabled={isNewQuiz}
          >
            Questions
          </button>
        </li>
      </ul>

      {/* Details Tab */}
      {activeTab === "details" && (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={quiz.title}
              onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={quiz.description}
              onChange={(e) =>
                setQuiz({ ...quiz, description: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Points</Form.Label>
            <Form.Control
              type="number"
              value={quiz.points}
              onChange={(e) =>
                setQuiz({ ...quiz, points: parseInt(e.target.value) })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Time Limit (minutes)</Form.Label>
            <Form.Control
              type="number"
              value={quiz.timeLimit}
              onChange={(e) =>
                setQuiz({ ...quiz, timeLimit: parseInt(e.target.value) })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={quiz.dueDate}
              onChange={(e) => setQuiz({ ...quiz, dueDate: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Available Date</Form.Label>
            <Form.Control
              type="date"
              value={quiz.availableDate}
              onChange={(e) =>
                setQuiz({ ...quiz, availableDate: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Shuffle Answers"
              checked={quiz.shuffleAnswers}
              onChange={(e) =>
                setQuiz({ ...quiz, shuffleAnswers: e.target.checked })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Multiple Attempts"
              checked={quiz.multipleAttempts}
              onChange={(e) =>
                setQuiz({ ...quiz, multipleAttempts: e.target.checked })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Show Correct Answers"
              checked={quiz.showCorrectAnswers}
              onChange={(e) =>
                setQuiz({ ...quiz, showCorrectAnswers: e.target.checked })
              }
            />
          </Form.Group>
        </Form>
      )}

      {/* Questions Tab */}
      {activeTab === "questions" && !isNewQuiz && (
        <QuestionsEditor quizId={qid as string} />
      )}
    </div>
  );
}
