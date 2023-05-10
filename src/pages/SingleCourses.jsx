import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import courses from "../courses";
import { Link } from "react-router-dom";

const SingleCourses = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === params.slug);

  useEffect(() => {
    if (!course) { navigate("..", {relative: "path"}) }
  }, [course, navigate])

  return (
    <>
      <h1 className="course">{course?.title}</h1>
      <p>{course?.slug}</p>
      <Link to=".." relative="path">
        All Courses
      </Link>
    </>
  );
};

export default SingleCourses;
