exports.getAllUsers = async (req, res, next) => {
  const usersList = [
    { username: 'Reuben', email: 'reuben@example.com' }, 
    { username: 'Frimpong', email: 'frimpong@example.com' },
  ];
  res.json(usersList);
}