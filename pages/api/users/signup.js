import { connectoToMongoDB } from "./../../../lib/database";
import bcrypt from "bcrypt";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 400;
    res.json({ message: "incorrect method." });
    return;
  }

  const { email, password, bio } = req.body;

  // Email Regex Check.
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    res.statusCode = 400;
    res.json({ message: "invalid email address." });
    return;
  }

  const connection = await connectoToMongoDB();
  const existing = await connection.collection("users").findOne({ email });

  // Check if email is registered.
  if (existing) {
    res.statusCode = 400;
    res.json({ message: "email already registered" });
    return;
  }

  // Basic password check.
  if (password.length < 5) {
    res.statusCode = 400;
    res.json({ message: "Password must be 5 characters or longer." });
    return;
  }

  const hash = await bcrypt.hash(password, 10);
  connection.collection("users").insertOne({ email, password: hash, bio });

  res.statusCode = 200;
  res.json({ message: "successfully registered user." });
};
