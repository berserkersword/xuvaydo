import { UserCredential } from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../Components/Input';
import { SignInWidthGoogle } from '../hooks/index';

const Login = (props:{setIsAuth:Dispatch<SetStateAction<boolean>>,isAuth:boolean,setUser:Dispatch<React.SetStateAction<UserCredential | undefined>>}) => {

  const LoginUser =  (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      event.preventDefault()
      SignInWidthGoogle({setIsAuth:props.setIsAuth,setUser:props.setUser})
      toast.dark('siz muvaffaqiyatli ro`yxatdan o`tdingiz')
    } catch (err) {
      toast.error('kechirasiz ro`yxatdan o`tib bo`lmadi')
    }
  }

  if (props.isAuth) {
    redirect("/")
  }

  return (
    <section className="h-screen min-h-[100vh] bg-gradient-to-t from-[rgba(255,242,173,0.5)]">
  <div className="container px-6 py-12 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full"
          alt="Phone"
        />
      </div>
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <form>
          <div className="mb-6">
            <Input type='text' placeholder='Email manzilingizni kiriting' />
          </div>

          <div className="mb-6">
            <Input type='password' placeholder='parolingizni kiriting'/>
          </div>

          <div className="flex justify-between items-center mb-6">
            
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
              >Parolingizni Unutdingizmi?</Link>
          </div>

          <button
            type="submit"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign in
          </button>

          <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>

          <button
            className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
            style={{ backgroundColor: '#3b5998' }}
                onClick={(e) =>LoginUser(e) }
              >
                <FcGoogle />
                <span className='mx-4'>Continue with Google</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login