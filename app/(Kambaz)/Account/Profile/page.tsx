import Link from "next/link";
import { Form, Button, Container, Card } from "react-bootstrap";

export default function Profile() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <Card style={{ width: "400px" }} className="p-4 shadow-sm border-0">
        <div id="wd-profile-screen">
          <h2 className="mb-4">Profile</h2>
          <Form>
            <div className="mb-3">
              <Form.Control
                defaultValue="alice"
                placeholder="username"
                className="wd-username form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}
              />
            </div>

            <div className="mb-3">
              <Form.Control
                defaultValue="123"
                placeholder="password"
                type="password"
                className="wd-password form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}
              />
            </div>

            <div className="mb-3">
              <Form.Control
                defaultValue="Alice"
                placeholder="First Name"
                id="wd-firstname"
                className="form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}
              />
            </div>

            <div className="mb-3">
              <Form.Control
                defaultValue="Wonderland"
                placeholder="Last Name"
                id="wd-lastname"
                className="form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}
              />
            </div>

            <div className="mb-3">
              <Form.Control
                defaultValue="mm/dd/yyyy"
                placeholder="Date of Birth"
                type="date"
                id="wd-dob"
                className="form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}
              />
            </div>

            <div className="mb-3">
              <Form.Control
                defaultValue="alice@wonderland.com"
                placeholder="Email"
                type="email"
                id="wd-email"
                className="form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}
              />
            </div>

            <div className="mb-4">
              <Form.Select 
                defaultValue="USER"
                id="wd-role"
                className="form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6", cursor: "pointer" }}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </Form.Select>
            </div>

            <Link href="/Account/Signin" className="text-decoration-none">
              <Button 
                className="btn btn-danger w-100 btn-lg"
                style={{ backgroundColor: "#dc3545", border: "none" }}>
                Signout
              </Button>
            </Link>
          </Form>
        </div>
      </Card>
    </Container>
  );
}