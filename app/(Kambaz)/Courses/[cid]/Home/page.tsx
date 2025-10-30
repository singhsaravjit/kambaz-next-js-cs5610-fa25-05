/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";

import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default function Home() {
  const router = useRouter();
  const { cid } = useParams(); // course ID from URL, e.g. "RS101"

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector(
    (state: any) => state.enrollmentsReducer
  );

  // check if this user is enrolled in this course
  const isEnrolled = enrollments.some(
    (e: any) => e.user === currentUser?._id && e.course === cid
  );

  // if not enrolled, or not logged in, redirect back to Dashboard
  useEffect(() => {
    if (!currentUser || !isEnrolled) {
      router.replace("/Dashboard");
    }
  }, [currentUser, isEnrolled, router]);

  // while redirecting (or if not allowed), render nothing
  if (!currentUser || !isEnrolled) {
    return null;
  }

  // enrolled → render course content
  return (
    <div id="wd-home">
      <div className="d-flex" id="wd-home">
        <div className="flex-fill me-3">
          <Modules />
        </div>
        <div className="d-none d-lg-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
