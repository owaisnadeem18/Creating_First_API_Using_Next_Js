let courses = [
  {
    id: 1,
    title: "Math",
    instructor: "Mr. Smith",
  },
  {
    id: 2,
    title: "Science",
    instructor: "Ms. Johnson",
  },
  {
    id: 3,
    title: "English",
    instructor: "Mrs. Brown",
  },
];

export async function GET(request) {
  return Response.json({
    courses: courses,
    msg: "Data a gya hay",
  });
}
