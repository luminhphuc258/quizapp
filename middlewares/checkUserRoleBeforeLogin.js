export const checkUserRoleBeforeLogin = async (req, res, next) => {
  const _username = req.body.username;
  const _password = req.body.password;

  // Check that both username and password are provided
  if (!_username || !_password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  // Check if the credentials match the admin credentials.
  if (_username === "matthew" && _password === "123") {
    req.user = { username: _username, role: "admin" };
    next();
  } else {
    return res.status(403).json({ message: "Access denied: Only admin users are allowed." });
  }
};