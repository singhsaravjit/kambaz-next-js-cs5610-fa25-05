import React from "react";
import Link from "next/link";
import { Form, Button, Container, Card } from "react-bootstrap";

export default function Signup() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
      <Card style={{ width: "400px" }} className="p-4 shadow-sm border-0">
        <div id="wd-signup-screen">
          <h2 className="mb-4">Signup</h2>
          <Form>
            <div className="mb-3">
              <Form.Control
                type="text"
                placeholder="username"
                className="wd-username form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}
              />
            </div>

            <div className="mb-3">
              <Form.Control
                type="password"
                placeholder="password"
                className="wd-password form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}
              />
            </div>

            <div className="mb-3">
              <Form.Control
                type="password"
                placeholder="verify password"
                className="wd-password-verify form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}
              />
            </div>

            <Button 
              href="Profile"
              as={Link} 
              className="btn btn-primary w-100 btn-lg mb-3"
              style={{ backgroundColor: "#0d6efd", border: "none" }}>
              Signup
            </Button>
          </Form>

          <div className="text-start">
            <Link href="Signin" className="text-primary text-decoration-underline">
              Signin
            </Link>
          </div>
        </div>
      </Card>
    </Container>
  );
}