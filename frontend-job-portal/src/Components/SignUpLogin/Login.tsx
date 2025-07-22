import { TextInput, rem, PasswordInput, Button } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Service/UserService";
import { useState } from "react";
import { loginValidation } from "../../Service/FormValidation";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";

const Login = () => {
  const form = {
    email: "",
    password: "",
  };

  const [data, setData] = useState<{ [key: string]: string }>(form);

  const [formError, setFormError] = useState<{ [key: string]: string }>(form);

  const [opened, { open, close }] = useDisclosure(false);

  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setFormError({ ...formError, [event.target.name]: "" });
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    let valid = true,
      newFromError: { [key: string]: string } = {};

    for (let key in data) {
      newFromError[key] = loginValidation(key, data[key]);
      if (newFromError[key]) valid = false;
    }

    setFormError(newFromError);

    if (valid) {
      loginUser(data)
        .then((res) => { 
          console.log(res)
          notifications.show({
            title: "Login Successful.",
            message: "Redirecting to Home Page...",
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "teal.4",
            withBorder: true,
            className: "!border-teal-500",
          });
          setTimeout(() => {
            navigate("/")
          }, 3000)
        
        })
        .catch((error) => {
          console.log(error.response);
            notifications.show({
            title: "Login Failed!!.",
            message: error.response.data.errorMessage,
            withCloseButton: true,
            icon: <IconX style={{ width: "90%", height: "90%" }} />,
            color: "red.4",
            withBorder: true,
            className: "!border-red-500",
          });
        });
    }
  };

  return (<>
    <div className="flex gap-4 justify-center flex-col w-1/2 px-20">
      <div className="text-2xl font-semibold">Login Account</div>
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
      <Button
        color="#FFD230"
        autoContrast
        variant="filled"
        onClick={handleSubmit}
      >
        Sign Up
      </Button>

      <div className="mx-auto text-lg">
        Don't have an Account?{" "}
        <span onClick={() => {navigate("/signup"); setFormError(form); setData(form)}} className="text-amber-300 hover:underline cursor-pointer">
          Signup
        </span>
      </div>
      <div className="text-center "><span onClick={open} className="text-amber-300 hover:underline cursor-pointer text-lg">Forget Password?</span></div>
    </div>
    <ResetPassword opened={opened} close={close} />
    
    
    </>
  );
};

export default Login;
