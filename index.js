import express from "express";
const app = express();
app.use(express.json());
let movieList = [];

// app.get("/say-hello", (req, res) => {
//   return res.status(200).send("hello");
// });
app.post("/movie/add", (req, res) => {
  const newMovie = req.body;
  movieList.push(newMovie);
  return res.status(200).send({ message: "movie is added successfully." });
});
app.get("/movie/list", (req, res) => {
  return res.status(200).send({ message: "success", movie: movieList });
});
app.delete("/movie/delete", (req, res) => {
  console.log(req.body.name);
  const movieNameToBeDeleted = req.body.name;

  return res.status(200).send({ message: "deleting..." });
});
const PORT = 8002;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
