/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCourse,
  deleteCourse,
  updateCourse,
} from "../Courses/reducer";
import {
  enrollInCourse,
  unenrollFromCourse,
} from "../Enrollments/reducer";
import useHydrateUser from "../hooks/useHydrateUser";
import Link from "next/link";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
  FormControl,
} from "react-bootstrap";
// 👇 import uuid for generating new course IDs locally
import { v4 as uuidv4 } from "uuid";

export default function Dashboard() {
  const dispatch = useDispatch();

  // 1. hydrate (may dispatch setCurrentUser on mount)
  const hydratedUser = useHydrateUser();

  // 2. read Redux slices
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector(
    (state: any) => state.enrollmentsReducer
  );

  // 3. pick best available user
  const effectiveUser = currentUser || hydratedUser;

  // 4. UI state for the New Course form
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  // toggle for "Show All Enrollments" vs "My Courses"
  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);

  // we gate rendering until first client pass to avoid flicker
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  // helper: is this user enrolled in a given course?
  const isEnrolled = (courseId: string) => {
    if (!effectiveUser?._id) return false;
    return enrollments.some(
      (e: any) => e.user === effectiveUser._id && e.course === courseId
    );
  };

  // list we actually render
  const visibleCourses = showAllCourses
    ? courses
    : courses.filter((c: any) => isEnrolled(c._id));

  // can this user edit (add/delete/update courses)?
  const canEdit =
    effectiveUser?.role === "FACULTY" || effectiveUser?.role === "ADMIN";

  // enroll / unenroll handlers
  const handleEnroll = (courseId: string) => {
    if (!effectiveUser?._id) return;
    dispatch(
      enrollInCourse({
        user: effectiveUser._id,
        course: courseId,
      })
    );
  };

  const handleUnenroll = (courseId: string) => {
    if (!effectiveUser?._id) return;
    dispatch(
      unenrollFromCourse({
        user: effectiveUser._id,
        course: courseId,
      })
    );
  };

  // 💡 NEW: Add Course flow that does NOT flip showAllCourses
  const handleAddCourse = () => {
    if (!canEdit) return;

    // 1. make a fresh ID
    const newId = uuidv4();

    // 2. assemble the new course object
    const newCourse = {
      ...course,
      _id: newId,
    };

    // 3. add to Redux courses
    dispatch(addNewCourse(newCourse));

    // 4. auto-enroll creator so it shows up in "My Courses"
    if (effectiveUser?._id) {
      dispatch(
        enrollInCourse({
          user: effectiveUser._id,
          course: newId,
        })
      );
    }

    // 5. reset form for convenience
    setCourse({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: "/images/reactjs.jpg",
      description: "New Description",
    });

    // ❌ DO NOT toggle showAllCourses here.
    // We stay in the current view (often "My Courses").
  };

  // ---------- RENDER ----------
  if (!ready) {
    return null;
  }

  return (
    <div id="wd-dashboard">
      {/* Header w/ title + toggle button */}
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1 id="wd-dashboard-title" className="mb-0">
            Dashboard
          </h1>
        </div>

        <div>
          <button
            className="btn btn-primary"
            id="wd-enrollments-toggle"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses
              ? "Show My Enrollments"
              : "Show All Enrollments"}
          </button>
        </div>
      </div>

      <hr />

      {/* New Course form (FACULTY / ADMIN only) */}
      {canEdit && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={handleAddCourse}
            >
              Add
            </button>

            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={() => dispatch(updateCourse(course))}
            >
              Update
            </button>
          </h5>

          <hr />
          <br />

          {/* Course Name */}
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) =>
              setCourse({ ...course, name: e.target.value })
            }
          />

          {/* Description */}
          <FormControl
            as="textarea"
            rows={3}
            className="mb-2"
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />

          <hr />
        </>
      )}

      {/* Section label */}
      <h2 id="wd-dashboard-published">
        {showAllCourses
          ? `All Courses (${visibleCourses.length})`
          : `My Courses (${visibleCourses.length})`}
      </h2>
      <hr />

      {/* Course cards */}
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {visibleCourses.map((c: any) => {
            const enrolled = isEnrolled(c._id);

            return (
              <Col
                key={c._id ?? c.number ?? c.name}
                className="wd-dashboard-course"
                style={{ width: "300px" }}
              >
                <Card>
                  {/* Only let them navigate into the course if enrolled */}
                  <Link
                    href={enrolled ? `/Courses/${c._id}/Home` : "/Dashboard"}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <CardImg
                      src={c.image}
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <CardBody className="card-body">
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {c.name}
                      </CardTitle>

                      <CardText
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {c.description}
                      </CardText>

                      {/* Go button */}
                      <Button variant="primary" disabled={!enrolled}>
                        Go
                      </Button>

                      {/* Enroll / Unenroll buttons, ONLY in "Show All Enrollments" mode */}
                      {showAllCourses && (
                        <>
                          {enrolled ? (
                            <button
                              className="btn btn-danger float-end"
                              id={`wd-unenroll-${c._id}`}
                              onClick={(event) => {
                                event.preventDefault();
                                handleUnenroll(c._id);
                              }}
                            >
                              Unenroll
                            </button>
                          ) : (
                            <button
                              className="btn btn-success float-end"
                              id={`wd-enroll-${c._id}`}
                              onClick={(event) => {
                                event.preventDefault();
                                handleEnroll(c._id);
                              }}
                            >
                              Enroll
                            </button>
                          )}
                        </>
                      )}

                      {/* Faculty/Admin edit + delete controls */}
                      {canEdit && (
                        <>
                          <button
                            id="wd-delete-course-click"
                            className="btn btn-danger float-end me-2"
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(deleteCourse(c._id));
                            }}
                          >
                            Delete
                          </button>

                          <button
                            id="wd-edit-course-click"
                            className="btn btn-warning me-2 float-end"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(c);
                            }}
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
