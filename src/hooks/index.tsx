import { auth, provider } from '../Firebase/Firebase';
import { signInWithPopup, signOut, UserCredential } from 'firebase/auth';
import { toast } from 'react-toastify';

export const getRand = (pow: number) => {
    return Math.floor(Math.random() * Math.pow(10, pow));
}
export const SignInWidthGoogle =  (props:{setIsAuth: React.Dispatch<React.SetStateAction<boolean>>,setUser:React.Dispatch<React.SetStateAction<UserCredential | undefined>>}) => {
        signInWithPopup(auth, provider).then(result => {
        props.setIsAuth(true);
        console.log(result.user.email);
        
        props.setUser(result)
    })
}
export const SignOut = async () => {
    await signOut(auth).then(() => {
        toast.warn('Iltimos hisobingzga kiring yoki ro`yhatdan o`ting')
    })
}