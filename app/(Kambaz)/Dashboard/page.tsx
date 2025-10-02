import Link from "next/link";
import Image from "next/image";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="d-flex flex-wrap" 
           style={{ gap: "35px 20px", paddingLeft: "20px" }}>
        
        <div className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card className="h-100">
            <Link href="/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
              <CardBody>
                <CardTitle className="wd-dashboard-course-title">
                  <h5>CS1234 React JS</h5>
                </CardTitle>
                <CardText className="wd-dashboard-course-description">
                  Full Stack software developer
                </CardText>
                <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
          </Card>
        </div>
        
        <div className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card className="h-100">
            <Link href="/Courses/3100/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/htmlcss.png" width="100%" height={160}/>
              <CardBody>
                <CardTitle className="wd-dashboard-course-title">
                  <h5>CS3100 HTML & CSS</h5>
                </CardTitle>
                <CardText className="wd-dashboard-course-description">
                  Basics of Web Development
                </CardText>
                <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
          </Card>
        </div>
        
        <div className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card className="h-100">
            <Link href="/Courses/3520/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/javascript.png" width="100%" height={160}/>
              <CardBody>
                <CardTitle className="wd-dashboard-course-title">
                  <h5>CS3520 JavaScript</h5>
                </CardTitle>
                <CardText className="wd-dashboard-course-description">
                  Programming Design & Implementation
                </CardText>
                <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
          </Card>
        </div>
        
        <div className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card className="h-100">
            <Link href="/Courses/4550/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/nodejs.png" width="100%" height={160}/>
              <CardBody>
                <CardTitle className="wd-dashboard-course-title">
                  <h5>CS4550 Node JS</h5>
                </CardTitle>
                <CardText className="wd-dashboard-course-description">
                  Building Scalable Server Apps
                </CardText>
                <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
          </Card>
        </div>
        
        <div className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card className="h-100">
            <Link href="/Courses/5800/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/algorithms.jpg" width="100%" height={160}/>
              <CardBody>
                <CardTitle className="wd-dashboard-course-title">
                  <h5>CS5800 Algorithms</h5>
                </CardTitle>
                <CardText className="wd-dashboard-course-description">
                  Advanced Algorithm Analysis
                </CardText>
                <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
          </Card>
        </div>
        
        <div className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card className="h-100">
            <Link href="/Courses/5200/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/database.jpeg" width="100%" height={160}/>
              <CardBody>
                <CardTitle className="wd-dashboard-course-title">
                  <h5>CS5200 Databases</h5>
                </CardTitle>
                <CardText className="wd-dashboard-course-description">
                  Database Design & Management
                </CardText>
                <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
          </Card>
        </div>
        
        <div className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card className="h-100">
            <Link href="/Courses/5610/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/machinelearning.jpeg" width="100%" height={160}/>
              <CardBody>
                <CardTitle className="wd-dashboard-course-title">
                  <h5>CS5610 Machine Learning</h5>
                </CardTitle>
                <CardText className="wd-dashboard-course-description">
                  Intro to ML & AI Applications
                </CardText>
                <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}