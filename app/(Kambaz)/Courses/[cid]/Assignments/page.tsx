import Link from "next/link";
import { FaSearch, FaPlus, FaCheckCircle, FaCaretDown } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { RiEditBoxLine } from "react-icons/ri";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup style={{ width: "300px" }}>
          <span className="input-group-text bg-white">
            <FaSearch />
          </span>
          <Form.Control
            type="text"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="border-start-0"
          />
        </InputGroup>
        <div>
          <Button variant="secondary" className="me-2" id="wd-add-assignment-group">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <div className="border rounded-top bg-light p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-5" />
          <FaCaretDown className="me-2" />
          <h5 className="mb-0" id="wd-assignments-title">
            ASSIGNMENTS
          </h5>
        </div>
        <div className="d-flex align-items-center">
          <span className="badge bg-light text-dark border me-3">40% of Total</span>
          <FaPlus className="me-2" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>

      <ul id="wd-assignment-list" className="list-unstyled">
        <li className="wd-assignment-list-item border border-top-0 position-relative d-flex align-items-start">
          <div className="bg-success position-absolute" style={{ width: "6px", height: "100%", left: 0, top: 0 }}></div>
          <div className="p-3 flex-grow-1 ms-2">
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-3 fs-5 text-muted" />
                <RiEditBoxLine className="me-2 fs-5 text-muted" />
                <div>
                  <Link href="/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-decoration-none text-dark fw-bold">
                    A1
                  </Link>
                  <div className="wd-assignment-details mt-1">
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am |
                  </div>
                  <div className="text-muted">
                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-3 fs-5" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
          </div>
        </li>

        <li className="wd-assignment-list-item border border-top-0 position-relative d-flex align-items-start">
          <div className="bg-success position-absolute" style={{ width: "6px", height: "100%", left: 0, top: 0 }}></div>
          <div className="p-3 flex-grow-1 ms-2">
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-3 fs-5 text-muted" />
                <RiEditBoxLine className="me-2 fs-5 text-muted" />
                <div>
                  <Link href="/Courses/1234/Assignments/234"
                    className="wd-assignment-link text-decoration-none text-dark fw-bold">
                    A2
                  </Link>
                  <div className="wd-assignment-details mt-1">
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am |
                  </div>
                  <div className="text-muted">
                    <strong>Due</strong> May 20 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-3 fs-5" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
          </div>
        </li>

        <li className="wd-assignment-list-item border border-top-0 border-bottom position-relative d-flex align-items-start">
          <div className="bg-success position-absolute" style={{ width: "6px", height: "100%", left: 0, top: 0 }}></div>
          <div className="p-3 flex-grow-1 ms-2">
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-3 fs-5 text-muted" />
                <RiEditBoxLine className="me-2 fs-5 text-muted" />
                <div>
                  <Link href="/Courses/1234/Assignments/345"
                    className="wd-assignment-link text-decoration-none text-dark fw-bold">
                    A3
                  </Link>
                  <div className="wd-assignment-details mt-1">
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am |
                  </div>
                  <div className="text-muted">
                    <strong>Due</strong> May 27 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-3 fs-5" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className="mt-4 border rounded-top bg-light p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-5" />
          <FaCaretDown className="me-2" />
          <h5 className="mb-0" id="wd-quizzes-title">
            QUIZZES
          </h5>
        </div>
        <div className="d-flex align-items-center">
          <span className="badge bg-light text-dark border me-3">10% of Total</span>
          <FaPlus className="me-2" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>
      <div className="border border-top-0 border-bottom p-3"></div>

      <div className="mt-4 border rounded-top bg-light p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-5" />
          <FaCaretDown className="me-2" />
          <h5 className="mb-0" id="wd-exam-title">
            EXAMS
          </h5>
        </div>
        <div className="d-flex align-items-center">
          <span className="badge bg-light text-dark border me-3">20% of Total</span>
          <FaPlus className="me-2" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>
      <div className="border border-top-0 border-bottom p-3"></div>

      <div className="mt-4 border rounded-top bg-light p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-5" />
          <FaCaretDown className="me-2" />
          <h5 className="mb-0" id="wd-project-title">
            PROJECT
          </h5>
        </div>
        <div className="d-flex align-items-center">
          <span className="badge bg-light text-dark border me-3">30% of Total</span>
          <FaPlus className="me-2" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>
      <div className="border border-top-0 border-bottom p-3"></div>
    </div>
  );
}