import { TextInput, rem, PasswordInput, Button } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { loginUser } from "../../Service/UserService";
import { useState } from "react";


const Login = () => {

  const form = {
    email: "",
    password: "",
  };
  
  const [data, setData] = useState(form);

  const handleChange = (event: any) => {
    // if (typeof event == "string") setData({ ...data, accountType: event });
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(event.target);
  };

  const handleSubmit = () => {
    loginUser(data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error.response));
  };

  return (
    <div className="flex gap-4 justify-center flex-col w-1/2 px-20">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput onChange={handleChange} name="email" value={data.email}
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        placeholder="Your Email"
      />
      <PasswordInput onChange={handleChange} name="password" value={data.password}
        withAsterisk
        leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
        label="Password"
        placeholder="Password"
      />
      <Button color="#FFD230" autoContrast variant="filled" onClick={handleSubmit}>
        Sign Up
      </Button>
      
      <div className="mx-auto text-lg">
        Don't have an Account?{" "}
        <Link to="/signup" className="text-amber-300 hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
