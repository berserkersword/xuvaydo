import { BsGoogle } from 'react-icons/bs';
import Input from '../Components/Input';
import MainButton from '../Components/MainButton';

const SignUP = () => {
  return (
    <section className="h-screen bg-gradient-to-t from-[rgba(255,242,173,0.5)]">
        <div className="px-6 h-full text-gray-800">
            <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
            >
            <div
                className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
                <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="newww"
                />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                    <p className="text-lg mb-0 mr-10">Orqali kiring:</p>
                    <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                    >
                                        <BsGoogle />
                    </button>
                                    
                </div>

                <div
                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                    <p className="text-center font-semibold mx-4 mb-0">yoki</p>
                </div>
                          
                <div className='mb-6 flex '>
                    <div className='flex pr-4'><Input type='text' placeholder='Ismingizni kiriting' /></div>
                    <div className='flex pl-4'><Input type='text' placeholder='Familyangizni kiriting' /></div>          
                </div>
                <div className="mb-6">
                    <Input type='email' placeholder='Emailingizni kiriting' />
                </div>

                <div className="mb-6">
                   <Input type='password' placeholder='parolingizni kiriting' />
                </div>

                <div className="text-center lg:text-left">
                    <MainButton text='Ro`yxatdan o`tish' />
                    
                </div>
                </form>
            </div>
            </div>
        </div>
    </section>
  )
}

export default SignUP