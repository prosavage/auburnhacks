import { connectoToMongoDB } from "./../../../lib/database";
import bcrypt from "bcrypt";

export default async (req, res) => {
  // check if the request method is valid.
  if (req.method !== "POST") {
    res.statusCode = 400;
    res.json({ message: "incorrect method." });
    return;
  }

  const { email, password } = req.body;

  // check if email address is valid
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    res.statusCode = 400;
    res.json({ message: "invalid login information." });
    return;
  }

  // connect to database
  const connection = await connectoToMongoDB();

  // check if user is in database
  const existing = await connection.collection("users").findOne({ email });

  // haven't signed up.
  if (!existing) {
    res.statusCode = 400;
    res.json({ message: "invalid login information." });
    return;
  }

  // compare passwords.
  const passwordMatches = bcrypt.compareSync(password, existing.password);

  // deny if passwords not equal
  if (!passwordMatches) {
    res.statusCode = 400;
    res.json({ message: "invalid login information." });
    return;
  }

  res.statusCode = 200;
  res.json({ token: undefined, message: "successfully logged in." });
};
