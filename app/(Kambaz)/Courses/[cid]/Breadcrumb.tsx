"use client";
import React from "react";
import { usePathname, useParams } from "next/navigation";

interface BreadcrumbProps {
  course: { 
    name: string;
    _id: string;
  } | undefined;
}

export default function Breadcrumb({ course }: BreadcrumbProps) {
  const pathname = usePathname();
  const params = useParams();
  const cid = params.cid as string;

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
    
 
    if (pathname.includes('/Quizzes')) {
      const segments = pathname.split('/');
      const quizIndex = segments.indexOf('Quizzes');
      const quizId = segments[quizIndex + 1];
      
      if (quizId) {
        return `Quizzes > ${quizId}`;
      }
      return 'Quizzes';
    }
    

    if (pathname.includes('/People')) {
      const segments = pathname.split('/');
      const peopleIndex = segments.indexOf('People');
      const view = segments[peopleIndex + 1];
      
      if (view) {
        return `People > ${view}`;
      }
      return 'People';
    }
    

    if (pathname.includes('/Modules')) return 'Modules';
    if (pathname.includes('/Grades')) return 'Grades';
    if (pathname.includes('/Piazza')) return 'Piazza';
    if (pathname.includes('/Zoom')) return 'Zoom';

    return 'Home';
  };

  return (
    <span>
      {course?.name || `Course ${cid}`} &gt; {getCurrentSection()}
    </span>
  );
}