exports.register = (req, res) => {
  const { username, password } = req.body;
  res.status(201).json({ message: 'User registered', user: { username } });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  res.status(200).json({ message: 'User logged in', user: { username } });
};