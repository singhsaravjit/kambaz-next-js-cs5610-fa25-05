import Link from "next/link";
import { Form, Button, Container, Card } from "react-bootstrap";

export default function Signin() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
      <Card style={{ width: "400px" }} className="p-4 shadow-sm border-0">
        <div id="wd-signin-screen">
          <h2 className="mb-4">Signin</h2>
          <Form>
            <div className="mb-3">
              <Form.Control
                id="wd-username"
                type="text"
                placeholder="username"
                className="form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}
              />
            </div>

            <div className="mb-3">
              <Form.Control
                id="wd-password"
                type="password"
                placeholder="password"
                className="form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}
              />
            </div>

            <Button 
              id="wd-signin-btn"
              href="/Account/Profile"
              as={Link}
              className="btn btn-primary w-100 btn-lg mb-3"
              style={{ backgroundColor: "#0d6efd", border: "none" }}>
              Signin
            </Button>
          </Form>

          <div className="text-start">
            <Link id="wd-signup-link" href="/Account/Signup" 
                  className="text-primary text-decoration-underline">
              Signup
            </Link>
          </div>
        </div>
      </Card>
    </Container>
  );
}