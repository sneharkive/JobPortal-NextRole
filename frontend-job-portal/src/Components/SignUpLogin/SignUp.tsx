import {
  Anchor,
  Checkbox,
  Button,
  PasswordInput,
  rem,
  TextInput,
  Radio,
  Group,
} from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Service/UserService";
import { signupValidation } from "../../Service/FormValidation";
import { notifications } from "@mantine/notifications";

const SignUp = () => {
  const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT",
  };
  const [data, setData] = useState<{ [key: string]: string }>(form);

  const [formError, setFormError] = useState<{ [key: string]: string }>(form);

  const navigate = useNavigate();

  const handleChange = (event: any) => {
    if (typeof event == "string") {
      setData({ ...data, accountType: event });
      return;
    }

    let name = event.target.name,
      value = event.target.value;

    setData({ ...data, [name]: value });
    setFormError({ ...formError, [name]: signupValidation(name, value) });

    if (name === "password" && data.confirmPassword !== "") {
      let err = "";
      if (data.confirmPassword !== value) err = "Password do not match.";
      setFormError({
        ...formError,
        [name]: signupValidation(name, value),
        confirmPassword: err,
      });
    }

    if (name === "confirmPassword") {
      if (data.password !== value)
        setFormError({ ...formError, [name]: "Password do not match." });
      else setFormError({ ...formError, confirmPassword: "" });
    }
    console.log(event.target);
  };

  const handleSubmit = () => {
    let valid = true,
      newFromError: { [key: string]: string } = {};

    for (let key in data) {
      if (key === "accountType") continue;
      if (key !== "confirmPassword")
        newFromError[key] = signupValidation(key, data[key]);
      else if (data[key] !== data["password"])
        newFromError[key] = "Password do not match.";
      if (newFromError[key]) valid = false;
    }

    setFormError(newFromError);

    if (valid === true)
      registerUser(data)
        .then((res) => {
          console.log(res);
          setData(form);
          notifications.show({
            title: "Registered Successfully.",
            message: "Redirecting to Login Page...",
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "teal.4",
            withBorder: true,
            className: "!border-teal-500",
          });
          setTimeout(() => {
            navigate("/login")
          }, 4000)
        })
        .catch((error) => {
          console.log(error.response);
            notifications.show({
            title: "Registration Failed!!.",
            message: error.response.data.errorMessage,
            withCloseButton: true,
            icon: <IconX style={{ width: "90%", height: "90%" }} />,
            color: "red.4",
            withBorder: true,
            className: "!border-red-500",
          });
        });
  };

  return (
    <div className="flex gap-4 justify-center flex-col w-1/2 px-20">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput
        error={formError.name}
        onChange={handleChange}
        name="name"
        value={data.name}
        withAsterisk
        label="Full Name"
        placeholder="Full Name"
      />
      <TextInput
        error={formError.email}
        onChange={handleChange}
        name="email"
        value={data.email}
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        placeholder="Your Email"
      />
      <PasswordInput
        error={formError.password}
        onChange={handleChange}
        name="password"
        value={data.password}
        withAsterisk
        leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
        label="Password"
        placeholder="Password"
      />
      <PasswordInput
        error={formError.confirmPassword}
        onChange={handleChange}
        name="confirmPassword"
        value={data.confirmPassword}
        withAsterisk
        leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
        label="Confirm Password"
        placeholder="Confirm Password"
      />
      <Radio.Group
        value={data.accountType}
        onChange={handleChange}
        label="You are ?"
        withAsterisk
      >
        <Group mt="xs">
          <Radio
            className="py-4 px-6 border border-gray-600 rounded-lg has-[:checked]:border-amber-400"
            color="yellow"
            autoContrast
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            className="py-4 px-6 border border-gray-600 rounded-lg has-[:checked]:border-amber-400"
            color="yellow"
            autoContrast
            value="EMPLOYER"
            label="Employer"
          />
        </Group>
      </Radio.Group>

      <Checkbox
        color="#FFD230"
        autoContrast
        label={
          <>
            I accept{" "}
            <Anchor className="!text-amber-300">Terms & Conditions</Anchor>
          </>
        }
      />
      <Button
        onClick={handleSubmit}
        color="#FFD230"
        autoContrast
        variant="filled"
      >
        Sign Up
      </Button>
      <div className="mx-auto text-lg">
        Have an Account?{" "}
        <span onClick={() => {navigate("/login"); setFormError(form); setData(form)}} className="text-amber-300 hover:underline cursor-pointer">
          Login
        </span>
      </div>
    </div>
  );
};

export default SignUp;
