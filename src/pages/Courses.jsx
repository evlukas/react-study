import { useLocation } from "react-router";
import courses from "../courses";
import Course from "./Course";
import queryString from "query-string";
import { useEffect, useState } from "react";

const sortCorses = (corses, key) => {
  if (!key) return corses;
  const sortedCorses = [...corses].sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCorses;
};

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCorses, setSortedCorses] = useState(
    sortCorses(courses, sortKey)
  );

  return (
    <>
      <h1>{sortKey ? `Sorted by ${sortKey}` : "Our Courses"}</h1>
      <ul>
        {sortedCorses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </ul>
    </>
  );
};

export default Courses;
