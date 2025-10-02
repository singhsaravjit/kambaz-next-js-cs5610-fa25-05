'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();
  

  const isActive = (path: string) => {
    return pathname?.includes(path);
  };
  
  
  const getLinkClass = (path: string) => {
    const baseClass = "list-group-item border-0";
    return isActive(path) ? `${baseClass} active` : `${baseClass} text-danger`;
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link 
        href="/Courses/1234/Home" 
        id="wd-course-home-link"
        className={getLinkClass("/Courses/1234/Home")}
      >
        Home
      </Link>
      <Link 
        href="/Courses/1234/Modules" 
        id="wd-course-modules-link"
        className={getLinkClass("/Courses/1234/Modules")}
      >
        Modules
      </Link>
      <Link 
        href="/Courses/1234/Piazza" 
        id="wd-course-piazza-link"
        className={getLinkClass("/Courses/1234/Piazza")}
      >
        Piazza
      </Link>
      <Link 
        href="/Courses/1234/Zoom" 
        id="wd-course-zoom-link"
        className={getLinkClass("/Courses/1234/Zoom")}
      >
        Zoom
      </Link>
      <Link 
        href="/Courses/1234/Assignments" 
        id="wd-course-assignments-link"
        className={getLinkClass("/Courses/1234/Assignments")}
      >
        Assignments
      </Link>
      <Link 
        href="/Courses/1234/Quizzes" 
        id="wd-course-quizzes-link"
        className={getLinkClass("/Courses/1234/Quizzes")}
      >
        Quizzes
      </Link>
      <Link 
        href="/Courses/1234/Grades" 
        id="wd-course-grades-link"
        className={getLinkClass("/Courses/1234/Grades")}
      >
        Grades
      </Link>
      <Link 
        href="/Courses/1234/People/Table" 
        id="wd-course-people-link"
        className={getLinkClass("/Courses/1234/People")}
      >
        People
      </Link>
    </div>
  );
}