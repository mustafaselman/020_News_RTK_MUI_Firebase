import React, { createContext, useState } from 'react'
import { auth } from "../auth/firebase"
import { onAuthStateChanged, signOut, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import { toast } from 'react-toastify';
import { Navigate} from 'react-router-dom';
import { useFormik } from 'formik';

export const UserContext = createContext();


const UserProvider = ({ children }) =>
{
    const [ user, setUser ] = useState({});

    onAuthStateChanged(auth, (currentUser) =>
    {
        setUser(currentUser)
    })

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

// const Login = async (loginEmail,loginPassword) =>
// {
//     try
//     {
//         const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
//         toast.success('Login Successfully', { position: toast.POSITION.TOP_RIGHT });
//         console.log(user);
//         <Navigate to="/" />;
//     }
//     catch (error)
//     {
//         console.log(error.massage);
//         toast.error("Not Valid Email or Password ...", {
//             position: toast.POSITION.TOP_RIGHT
//         });

//     }
// }

// const RegisterForm = useFormik({
//     initialValues:{
//         registerEmail:"",
//         registerPassword:"",
//         registerName:""
//     },
//     onSubmit: async (values,{resetForm}) => {
//         await createUserWithEmailAndPassword(auth, values.registerEmail, values.registerPassword);
//         await updateProfile(auth.currentUser, {
//             displayName: values.registerName
            
//            })
//                 }
            
// })
// const Register = async (registerEmail, registerPassword,registerName) => {
//     try{
        
//        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
//        const update = await updateProfile(auth.currentUser, {
//         displayName: registerName
        
//        })
//        console.log(user)
//        toast.success("Register successfully...", {
//         position: toast.POSITION.TOP_CENTER
//       });
//       <Navigate to="/" />;
       
       
//     }
//     catch(error){
//       console.log(error.massage);
//       toast.success("error..please try again.. are you fill all blank ? are you register same email account ?", {
//         position: toast.POSITION.TOP_CENTER
//       });
//     }
//   }

// const SignInWithGoogle = async () =>
// {
//     try
//     {
        
//         await signInWithPopup(auth, new GoogleAuthProvider());
//         toast.success('Login Successfully', { position: toast.POSITION.TOP_RIGHT });
//         <Navigate to="/" />;
//     }
//     catch (error)
//     {
//         console.log(error.message)
//         toast.error("Sign in Google errors ...", {
//             position: toast.POSITION.TOP_RIGHT
//         });
//     }
// }
// const SendNewPassword = async (loginEmail) =>
// {
//     try
//     {
        
//         await sendPasswordResetEmail(auth, loginEmail)
//         console.log("message send")
//         toast.success('Mail has been send for reset password to your email account...', { position: toast.POSITION.TOP_RIGHT })
//     }
//     catch (error)
//     {
//         console.log(error.message)
//         toast.error("Please enter email adress...", {
//             position: toast.POSITION.TOP_RIGHT
//         });
//     }
// }

// export const Logout = async () =>
// {
//     await signOut(auth)
//     toast.success("Signout successful...", {
//         position: toast.POSITION.TOP_RIGHT
//     });
//     localStorage.removeItem("searchedAdress");

// }


export default UserProvider;
