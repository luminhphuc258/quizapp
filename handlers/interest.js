export const interestList = [];

export const adduserInterest = async (req, res) => {
  console.log("Calling add interest!");
  console.log(req.body);
  const _firstname = req.body.firstname;
  const _lastname = req.body.lastname;
  const _email = req.body.email;
  const _interest = req.body.interest;

  // Validate required fields
  if (!_firstname || !_lastname || !_email || !_interest) {
    return res.status(400).send('All fields are required.');
  }

  // Create an interest object
  const newInterest = {
    "firstname": _firstname,
    "lastname": _lastname,
    "email": _email,
    "interest": _interest,
    "submitdate": new Date()
  };

  // Add the new interest to the list
  try {
    interestList.push(newInterest);
    // Log the updated list of interest objects
    console.log('Updated Interest List:', interestList);
    console.log("<===================================================>");
    console.log('Successfully add a user interest:', isSuccess);
    res.status(200).send({ "status": "success" });
  }
  catch (err) {
    console.log('Some problems in adding this interest!:');
    res.status(400).send({ "status": "failure" });
  }

}
