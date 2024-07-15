import React, { useState } from "react";
import Greeting from "../Greeting";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Register = () => {
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [tc, setTc] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const registerUrl =
      "https://syoft.dev/Api/user_registeration/api/userlogin";
    const body = JSON.stringify({
      user_email: email,
      user_password: password,
    });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };
    const response = await fetch(registerUrl, options);
    console.log(response);
    if (response.status === 201) {
      alert("login Successfull");
    }
  };

  return (
    <div className="h-full flex rounded-md overflow-hidden">
      <Greeting />
      <div className="h-full w-2/5 p-20 bg-white">
        <h1>Sign in</h1>
        <form className="w-full flex flex-col" onSubmit={onSubmitForm}>
          <label htmlFor="email">email</label>
          <Input
            type="text"
            id="email"
            required="required"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password *</label>
          <Input
            type="text"
            id="password"
            required="required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            className="bg-blue-600 w-fit px-4 py-2  text-white rounded-full"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
