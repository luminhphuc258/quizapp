
export const handleLogin = async (req, res) => {
  console.log("Calling for Login!");
  console.log("User attached by middleware:", req.user);

  // If the middleware has set req.user, I assume the login is valid
  if (req.user) {
    console.log("login successfully!");

    // Store user session when login successfully
    req.session.login = req.user.username;
    req.session.isLoggedIn = true;

    console.log("Login successful:", req.user.username);

    // Return JSON response
    return res.status(200).json({
      status: "success",
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      },
      token
    });

  } else {
    // If somehow req.user isn't set, redirect to the login page
    return res.status(401).render('login', { message: "Unauthorized" });
  }
}

