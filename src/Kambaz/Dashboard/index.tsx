import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Full Stack software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS5610 Web Development</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Learn modern web development
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS3200 Database Design</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Database systems and design
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS4550 Web Development 2</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Advanced web technologies
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS5800 Algorithms</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Design and analysis of algorithms
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS5100 AI</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Introduction to AI concepts
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS6220 Data Mining</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Extract knowledge from data
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}