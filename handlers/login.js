
export const handleLogin = async (req, res) => {
  console.log("Calling for Login!");
  console.log("User attached by middleware:", req.user);

  // If the middleware has set req.user, I assume the login is valid
  if (req.user) {
    console.log("login successfully!");
    res.status(200).send({ "status": "success" });
  } else {
    // If somehow req.user isn't set, redirect to the login page
    return res.status(401).render('login', { message: "Unauthorized" });
  }
}

