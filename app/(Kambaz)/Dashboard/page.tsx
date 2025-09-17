import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
  <Link href="/Courses/3100" className="wd-dashboard-course-link">
    <Image src="/images/htmlcss.png" width={200} height={150} alt="" />
    <div>
      <h5> CS3100 HTML & CSS </h5>
      <p className="wd-dashboard-course-title">
        Basics of Web Development
      </p>
      <button> Go </button>
    </div>
  </Link>
</div>

<div className="wd-dashboard-course">
  <Link href="/Courses/3520" className="wd-dashboard-course-link">
    <Image src="/images/javascript.png" width={200} height={150} alt="" />
    <div>
      <h5> CS3520 JavaScript </h5>
      <p className="wd-dashboard-course-title">
        Programming Design & Implementation
      </p>
      <button> Go </button>
    </div>
  </Link>
</div>

<div className="wd-dashboard-course">
  <Link href="/Courses/4550" className="wd-dashboard-course-link">
    <Image src="/images/nodejs.png" width={200} height={150} alt="" />
    <div>
      <h5> CS4550 Node JS </h5>
      <p className="wd-dashboard-course-title">
        Building Scalable Server Apps
      </p>
      <button> Go </button>
    </div>
  </Link>
</div>

<div className="wd-dashboard-course">
  <Link href="/Courses/5800" className="wd-dashboard-course-link">
    <Image src="/images/algorithms.jpg" width={200} height={150} alt="" />
    <div>
      <h5> CS5800 Algorithms </h5>
      <p className="wd-dashboard-course-title">
        Advanced Algorithm Analysis
      </p>
      <button> Go </button>
    </div>
  </Link>
</div>

<div className="wd-dashboard-course">
  <Link href="/Courses/5200" className="wd-dashboard-course-link">
    <Image src="/images/database.jpeg" width={200} height={150} alt="" />
    <div>
      <h5> CS5200 Databases </h5>
      <p className="wd-dashboard-course-title">
        Database Design & Management
      </p>
      <button> Go </button>
    </div>
  </Link>
</div>

<div className="wd-dashboard-course">
  <Link href="/Courses/5610" className="wd-dashboard-course-link">
    <Image src="/images/machinelearning.jpeg" width={200} height={150} alt="" />
    <div>
      <h5> CS5610 Machine Learning </h5>
      <p className="wd-dashboard-course-title">
        Intro to ML & AI Applications
      </p>
      <button> Go </button>
    </div>
  </Link>
</div>
      </div>
    </div>
);}
