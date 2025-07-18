import { TextInput, rem, PasswordInput, Button } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex gap-4 justify-center flex-col w-1/2 px-20">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput withAsterisk  leftSection={<IconAt style={{width: rem(16), height:rem(16)}} />} label="Email" placeholder="Your Email" />
      <PasswordInput withAsterisk  leftSection={<IconLock style={{width: rem(16), height:rem(16)}} />} label="Password" placeholder="Password" />
      <Button color="#FFD230" autoContrast variant="filled">Sign Up</Button>
      <div className="mx-auto text-lg">Don't have an Account? <Link to="/signup" className="text-amber-300 hover:underline">Sign Up</Link></div>
    </div>
  )
}

export default Login