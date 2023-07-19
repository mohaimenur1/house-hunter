import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const user = {
    name,
    email,
    password,
    phone,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const user = {
        name,
        email,
        password,
        phone,
      };
      const result = await axios.post("/api/users/register", user);
      setEmail("");
      setName("");
      setPassword("");
      setPhone("");
      alert("Register Successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="text-center text-lg-start d-flex justify-content-center ">
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card cascading-right">
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Register now</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                        />
                        <label className="form-label" for="form3Example1">
                          Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-control"
                        />
                        <label className="form-label" for="form3Example2">
                          Phone Number
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                    <label className="form-label" for="form3Example3">
                      Email
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                    <label className="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <Link
                      to="/login"
                      className="form-check-label"
                      for="form2Example33"
                    >
                      Already have an account?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="img/register.png"
              className="w-100 rounded-4 shadow-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
