'use client';
import { ReactNode, use } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CoursesLayout({
  children,
  params,
}: Readonly<{ 
  children: ReactNode; 
  params: Promise<{ cid: string }> 
}>) {
  const { cid } = use(params);
  const pathname = usePathname();

  const getCurrentSection = () => {
    if (pathname === `/Courses/${cid}` || pathname === `/Courses/${cid}/Home`) {
      return 'Home';
    }
    
   
    if (pathname.includes('/Assignments')) {
      const segments = pathname.split('/');
      const assignmentIndex = segments.indexOf('Assignments');
      const assignmentId = segments[assignmentIndex + 1];
      
      if (assignmentId) {
        return `Assignments > ${assignmentId}`;
      }
      return 'Assignments';
    }
    
    if (pathname.includes('/Modules')) return 'Modules';
    if (pathname.includes('/Grades')) return 'Grades';
    if (pathname.includes('/Piazza')) return 'Piazza';
    if (pathname.includes('/Zoom')) return 'Zoom';
    if (pathname.includes('/Quizzes')) return 'Quizzes';
    if (pathname.includes('/People')) return 'People';
  
    return 'Home';
  };
  
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course
        <Link href="/Dashboard" className="text-danger text-decoration-none ms-2">
          {cid}
        </Link>
        {" > "}
        {getCurrentSection()}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}