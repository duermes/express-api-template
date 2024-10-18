export default (req, res) => {
  return res.status(404).send("The route doesn't exist");
};
