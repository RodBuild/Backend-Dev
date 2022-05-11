// no need to define them lol getJoke
const getJoke = (req, res) => {
  try {
    const data = 'How did the telephone proposse to his girlfriend? Gave her a ring..';
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send('Joke not working?');
  }
};
const getPerson = (req, res) => {
  const data = 'Piero Mendoza';
  res.status(200).send(data);
};

module.exports = { getJoke, getPerson };
