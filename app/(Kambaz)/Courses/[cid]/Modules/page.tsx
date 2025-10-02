import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        {/* Week 1 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
             <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Learn what is Web Development
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Full Stack Developer - Chapter 1 - Introduction
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
             <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Introduction to Web Development
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Creating an HTTP server with Node.js
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Creating a React Application
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 2 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
             <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
             <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Learn how to create user interfaces with HTML
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Deploy the assignment to Netlify
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
             <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Introduction to HTML and the DOM
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Formatting Web content with Headings
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Formatting content with Lists and Tables
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 3 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
             <BsGripVertical className="me-2 fs-3" /> Week 3 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Will be updated later on
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}