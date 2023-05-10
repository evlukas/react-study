import { Link } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <li key={course.id}>
      <Link to={course.slug}>{course.title}</Link>
    </li>
  );
};

export default Course;
