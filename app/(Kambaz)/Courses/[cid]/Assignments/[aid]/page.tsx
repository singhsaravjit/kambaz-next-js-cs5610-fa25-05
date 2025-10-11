import { Form, Button, Row, Col, Card } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container-fluid mt-4">
      <Row>
        <Col md={10} className="mx-auto">
          <Form>
            <div className="mb-3">
              <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
              <Form.Control
                id="wd-name"
                type="text"
                defaultValue="A1"
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                id="wd-description"
                rows={10}
                style={{ lineHeight: '1.8' }}
                defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
              />
            </div>

            <Row className="mb-3">
              <Col md={3} className="text-end">
                <Form.Label>Points</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  id="wd-points"
                  type="number"
                  defaultValue={100}
                  style={{ maxWidth: "300px" }}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="text-end">
                <Form.Label>Assignment Group</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Select id="wd-group" defaultValue="ASSIGNMENTS" style={{ maxWidth: "100%" }}>
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="QUIZZES">QUIZZES</option>
                  <option value="EXAMS">EXAMS</option>
                  <option value="PROJECTS">PROJECTS</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="text-end">
                <Form.Label>Display Grade as</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Select id="wd-display-grade-as" defaultValue="Percentage" style={{ maxWidth: "100%" }}>
                  <option value="Percentage">Percentage</option>
                  <option value="Points">Points</option>
                  <option value="Complete/Incomplete">Complete/Incomplete</option>
                  <option value="Letter Grade">Letter Grade</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="text-end">
                <Form.Label>Submission Type</Form.Label>
              </Col>
              <Col md={9}>
                <Card className="p-3">
                  <Form.Select id="wd-submission-type" defaultValue="Online" className="mb-3">
                    <option value="Online">Online</option>
                    <option value="On Paper">On Paper</option>
                    <option value="No Submission">No Submission</option>
                  </Form.Select>

                  <div>
                    <h6 className="mb-3">Online Entry Options</h6>
                    <Form.Check
                      type="checkbox"
                      id="wd-text-entry"
                      label="Text Entry"
                      className="mb-2"
                    />
                    <Form.Check
                      type="checkbox"
                      id="wd-website-url"
                      label="Website URL"
                      defaultChecked
                      className="mb-2"
                    />
                    <Form.Check
                      type="checkbox"
                      id="wd-media-recordings"
                      label="Media Recordings"
                      className="mb-2"
                    />
                    <Form.Check
                      type="checkbox"
                      id="wd-student-annotation"
                      label="Student Annotation"
                      className="mb-2"
                    />
                    <Form.Check
                      type="checkbox"
                      id="wd-file-upload"
                      label="File Uploads"
                      className="mb-2"
                    />
                  </div>
                </Card>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="text-end">
                <Form.Label>Assign</Form.Label>
              </Col>
              <Col md={9}>
                <div className="border rounded p-3">
                  <Form.Label htmlFor="wd-assign-to">Assign to</Form.Label>
                  <div className="position-relative">
                    <Form.Control 
                      id="wd-assign-to" 
                      defaultValue="Everyone" 
                      className="pe-5"
                      style={{ backgroundColor: '#f8f8f8' }}
                    />
                    <span 
                      className="position-absolute" 
                      style={{ 
                        right: '10px', 
                        top: '50%', 
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                        color: '#6c757d'
                      }}
                    >
                      ✕
                    </span>
                  </div>
                  
                  <Form.Label htmlFor="wd-due-date" className="mt-3">Due</Form.Label>
                  <Form.Control 
                    type="datetime-local" 
                    id="wd-due-date" 
                    defaultValue="2024-10-10T23:59" 
                  />
                  
                  <Row className="mt-3">
                    <Col>
                      <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
                      <Form.Control 
                        type="date" 
                        id="wd-available-from" 
                        defaultValue="2024-10-10" 
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                      <Form.Control 
                        type="date" 
                        id="wd-available-until" 
                        defaultValue="2024-11-11" 
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <hr className="my-4" />
            
            <div className="text-end">
              <Button variant="secondary" className="me-2">
                Cancel
              </Button>
              <Button variant="danger">
                Save
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}