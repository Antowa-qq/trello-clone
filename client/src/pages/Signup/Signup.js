import React, { useState } from "react";
import { Button, TextField, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  login: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    flexDirection: "column",
    "& h3": {
      textAlign: "center",
    },
  },
  login__form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  form__field: {
    margin: 10,
    width: 300,
  },
});

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(form),
    });
    const result = await data.json();
    console.log(result);
  };

  const classes = useStyles();
  return (
    <section className={classes.login}>
      <Typography variant="h3">Sign up</Typography>
      <form className={classes.login__form}>
        <TextField
          autoComplete="off"
          variant="outlined"
          name="name"
          type="text"
          label="Name"
          onChange={handleChange}
          value={form.name}
          className={classes.form__field}
        />
        <TextField
          variant="outlined"
          autoComplete="off"
          name="email"
          type="text"
          label="Email"
          onChange={handleChange}
          value={form.email}
          className={classes.form__field}
        />
        <TextField
          variant="outlined"
          autoComplete="off"
          name="password"
          type="password"
          label="Password"
          onChange={handleChange}
          value={form.password}
          className={classes.form__field}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          className={classes.form__field}
          fullWidth
        >
          Sign up
        </Button>
      </form>
      <Typography> Have an account? Sign in</Typography>
    </section>
  );
}

export default Signup;
