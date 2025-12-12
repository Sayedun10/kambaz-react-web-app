import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaEllipsisV } from "react-icons/fa";
import * as client from "./client";
import { setQuizzes, deleteQuiz as removeQuiz, updateQuiz } from "./reducer";

export default function Quizzes() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const isFaculty = currentUser?.role === "FACULTY";

  const fetchQuizzes = async () => {
    const quizzes = await client.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  };

  useEffect(() => {
    fetchQuizzes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteQuiz = async (quizId: string) => {
    await client.deleteQuiz(quizId);
    dispatch(removeQuiz(quizId));
  };

  const togglePublish = async (quiz: any) => {
    const updatedQuiz = { ...quiz, published: !quiz.published };
    await client.updateQuiz(quiz._id, updatedQuiz);
    dispatch(updateQuiz(updatedQuiz));
  };

  return (
    <div id="wd-quizzes" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search for Quiz"
        />
        {isFaculty && (
          <button
            className="btn btn-danger"
            onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes/new`)}
          >
            <FaPlus className="me-2" />
            Quiz
          </button>
        )}
      </div>

      <ul className="list-group">
        {quizzes.map((quiz: any) => (
          <li key={quiz._id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="flex-grow-1">
                <FaEllipsisV className="me-3" />
                <strong
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (isFaculty) {
                      navigate(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`);
                    } else {
                      navigate(
                        `/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/preview`
                      );
                    }
                  }}
                >
                  {quiz.title}
                </strong>
                <div className="text-muted small mt-1">
                  <span className="me-3">
                    <strong>Available:</strong>{" "}
                    {new Date(quiz.availableDate).toLocaleDateString()}
                  </span>
                  <span className="me-3">
                    <strong>Due:</strong>{" "}
                    {new Date(quiz.dueDate).toLocaleDateString()}
                  </span>
                  <span className="me-3">
                    <strong>Points:</strong> {quiz.points}
                  </span>
                  <span className="me-3">
                    <strong>Questions:</strong> {quiz.numberOfQuestions || 0}
                  </span>
                </div>
              </div>

              {isFaculty && (
                <div className="d-flex gap-2">
                  <button
                    className={`btn btn-sm ${
                      quiz.published ? "btn-success" : "btn-secondary"
                    }`}
                    onClick={() => togglePublish(quiz)}
                  >
                    {quiz.published ? "Published" : "Unpublished"}
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteQuiz(quiz._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
