/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { Form, Button, Container, Card , FormControl} from "react-bootstrap";

export default function Signin() {

   const [credentials, setCredentials] = useState<any>({});
 const dispatch = useDispatch();
 const signin = () => {
   const user = db.users.find(
     (u: any) =>
       u.username === credentials.username &&
       u.password === credentials.password
   );
   if (!user) return;
   dispatch(setCurrentUser(user));
   redirect("/Dashboard");
 };


  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
      <Card style={{ width: "400px" }} className="p-4 shadow-sm border-0">
        <div id="wd-signin-screen">
          <h2 className="mb-4">Signin</h2>
          <Form>
            <div className="mb-3">
              <Form.Control
               defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                id="wd-username"
                type="text"
                placeholder="username"
                className="form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}
              />
            </div>

            <div className="mb-3">
              <Form.Control
              defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                id="wd-password"
                type="password"
                placeholder="password"
                className="form-control-lg"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}
              />
            </div>

        
              <Button 
               onClick={signin}
                id="wd-signin-btn"
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