import { Anchor, Checkbox, Button, PasswordInput, rem, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="flex gap-4 justify-center flex-col w-1/2 px-20">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput withAsterisk label="Full Name" placeholder="Full Name" />
      <TextInput withAsterisk  leftSection={<IconAt style={{width: rem(16), height:rem(16)}} />} label="Email" placeholder="Your Email" />
      <PasswordInput withAsterisk  leftSection={<IconLock style={{width: rem(16), height:rem(16)}} />} label="Password" placeholder="Password" />
      <PasswordInput withAsterisk  leftSection={<IconLock style={{width: rem(16), height:rem(16)}} />} label="Confirm Password" placeholder="Confirm Password" />
      <Checkbox color="#FFD230" autoContrast label={<>I accept{' '}<Anchor className="!text-amber-300">Terms & Conditions</Anchor></>}  />
      <Button color="#FFD230" autoContrast variant="filled">Sign Up</Button>
      <div className="mx-auto text-lg">Have an Account? <Link to="/login" className="text-amber-300 hover:underline">Login</Link></div>
    </div>
  )
}

export default SignUp