import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (!name.includes(" ")) {
      setNameError("Name Should be in Tow Words");
      return;
    } else {
      setNameError("");
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const check = e.target.check.checked;

    // console.log({ name, photo, email, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        {" "}
        <h2 className="font-semibold text-2xl text-center">Register now</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-error text-xs">{nameError}</p>}
            {/* photo */}
            <label className="label">PhotoURL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="PhotoURL"
              required
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div className="flex items-center gap-2 mt-1">
              <input
                name="check"
                type="checkbox"
                className="checkbox"
                required
              />
              <p className="text-accent">
                Accept <span className="font-semibold">Term & Conditions</span>
              </p>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
          <p className="font-semibold text-accent text-center">
            Already Have An Account ?{" "}
            <Link className="text-secondary" to="/auth/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
