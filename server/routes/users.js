import express from "express"
import validateInput from "./../shared/validations/signup"
import bcrypt from 'bcrypt'
import User from '../model/user'

let router = express.Router();


router.post('/', (req, res) => {
  const { errors, isValid} = validateInput(req.body);
  console.log("error", errors);
  if (isValid) {
    //res.json({ success: true });
    const { username, password, timezone, email } = req.body;
    const password_digest = bcrypt.hashSync(password, 10);
    User.forge({
      username, password_digest, timezone, email
    }, {hasTimestamps: true}).save().then(user => res.json({ success: true })).catch(err => res.status(500).json({ error: err }))

  } else {
    res.status(400).json(errors);
  }
})

export default router;
