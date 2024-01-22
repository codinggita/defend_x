import express from 'express';

const app = express();
const port = 6000;

// Middleware to parse JSON body in requests
app.use(express.json());

// In-memory "database"
let training = {
  bouncer: [
    {
      course: "Event Management",
      courseId: 1,
      Time: "6 months",
      averageRating: 5,
      Description: "Learn the skills required for effective event management and crowd control.",
    },
    {
      course: "Property Guarding",
      courseId: 2,
      Time: "8 months",
      averageRating: 4,
      Description: "Understand the techniques of property guarding and security.",
    },
    {
      course: "Personal Protection",
      courseId: 3,
      Time: "1.5 Year",
      averageRating: 5,
      Description: "Develop the skills needed for personal protection and VIP security.",
    },
    {
      course: "Security Driver",
      courseId: 4,
      Time: "1 Year",
      averageRating: 4,
      Description: "Learn the essentials of security driving for safe transportation.",
    },
    {
      course: "Gunman",
      courseId: 5,
      Time: "2 Year",
      averageRating: 5,
      Description: "Specialized training in the use of firearms for security personnel.",
    },
  ]
};

// GET - Welcome to the Security Service Course
app.get('/', (req, res) => {
  res.send("Welcome to the Security training course home page!");
});

// GET - List all courses
app.get('/training', (req, res) => {
  res.json(training.bouncer);
});

// GET - Details of a specific course by name
app.get('/training/:courseName', (req, res) => {
  const course = training.bouncer.find((c) => c.course === req.params.courseName);
  if (!course) {
    res.status(404).send("Course not found");
  } else {
    res.json(course);
  }
});

// GET - Average rating of a specific course
app.get("/training/:courseName/rating", (req, res) => {
  const course = training.bouncer.find((c) => c.course === req.params.courseName);
  if (!course) {
    res.status(404).send("Course not found");
  } else {
    res.json({ averageRating: course.averageRating });
  }
});

// POST - Create a new course
app.post("/training", (req, res) => {
  const newCourse = req.body;
  newCourse.courseId = training.bouncer.length + 1;
  training.bouncer.push(newCourse);
  res.send("Course added");
});

// POST - Add a rating to a course
app.post("/training/:courseName/rating", (req, res) => {
  const course = training.bouncer.find((c) => c.course === req.params.courseName);
  if (!course) {
    res.status(404).send("Course not found");
  } else {
    const rating = req.body.rating;
    course.Rating =
      (course.Rating * course.Time + rating) /
      (course.Time + 1);
    course.Time++;
    res.send("Rating updated");
  }
});

// PUT - Modify information of a course
app.put("/training/:courseName", (req, res) => {
  const index = training.bouncer.findIndex(
    (c) => c.course === req.params.courseName
  );
  if (index === -1) {
    res.status(404).send("Course not found");
  } else {
    training.bouncer[index] = { ...training.bouncer[index], ...req.body };
    res.send("Course updated");
  }
});

// DELETE - Remove a course by name
app.delete("/training/:courseName", (req, res) => {
  const index = training.bouncer.findIndex(
    (c) => c.course === req.params.courseName
  );
  if (index === -1) {
    res.status(404).send("Course not found");
  } else {
    training.bouncer.splice(index, 1);
    res.send("Course deleted");
  }
});

// DELETE - Remove a course by index
app.delete("/training/:courseName/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (isNaN(index) || index < 0 || index >= training.bouncer.length) {
    res.status(400).send("Invalid index");
  } else {
    training.bouncer.splice(index, 1);
    res.send("Course deleted at index " + index);
  }
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
