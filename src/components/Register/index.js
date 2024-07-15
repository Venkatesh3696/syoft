import React, { useState } from "react";
import Greeting from "../Greeting";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [tc, setTc] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(firstName, lastName, password, company, tc);
    const registerUrl =
      "https://syoft.dev/Api/user_registeration/api/user_registeration";
    const body = JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      password: password,
      company: company,
    });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };
    if (tc) {
      const response = await fetch(registerUrl, options);
      console.log(response);
      if (response.status === 201) {
        alert("Registeration Successfull");
      }
    } else {
      alert("Please accept terms and conditions");
    }
  };

  return (
    <div className="h-full flex rounded-md overflow-hidden">
      <Greeting />
      <div className="h-full w-2/5 p-20 bg-white">
        <h1>Sgn up</h1>
        <p>
          Already have an account?
          <a href="/login" className="text-blue-500">
            Sign in
          </a>
        </p>
        <form className="w-full flex flex-col" onSubmit={onSubmitForm}>
          <label htmlFor="firstname">First name *</label>
          <input
            type="text"
            id="firstname"
            required="required"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastname">Last name *</label>
          <input
            type="text"
            id="lastname"
            required="required"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="password">Password *</label>
          <input
            type="text"
            id="password"
            required="required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <div>
            <input
              type="checkbox"
              id="tc"
              value={tc}
              onChange={(e) => setTc(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="tc" className="cursor-pointer">
              I agree to the{" "}
              <a href="#" className="text-blue-500">
                Terms of Service and Privacy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-600 w-fit px-4 py-2  text-white rounded-full"
          >
            Create your free account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
