// no need to define them lol getJoke
const getJoke = (req, res) => {
  const data = 'How did the telephone proposse to his girlfriend? Gave her a ring..';
  res.status(200).send(data);
};
const getPerson = (req, res) => {
  const data = 'Piero Mendoza';
  res.status(200).send(data);
};

module.exports = { getJoke, getPerson };
