import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import React, { useEffect }  from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import pic from "../../../asset/bg1.jpg"
import auth from '../../../firebase.init';
import Loading from "../../Shared/Loading"

const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email , data.password);
        
    };

    let SignInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if(loading || gloading){
        return <Loading></Loading>
    }

    if(error || gerror){
        SignInError = <p>{gerror?.message || error?.message}</p>
    }

    if(user || guser){
        navigate(from, {replace:true});
    }
    // const [token] =useToken(user || guser);
    // useEffect(()=>{
    //     if(token){
    //         navigate(from, {replace:true});
    //     }
    // },[token,from,navigate]);
    // if( gloading || loading){
    //     return <Loading></Loading>
    // }
    // if(gerror || error){
    //     SignInError = <p>{gerror?.message || error?.message}</p>
    // }


    return (
        <section >
            <div className="hero min-h-screen" style={{ background: `url(${pic})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <h1 className='text-black text-4xl text-center py-5'>Login Form</h1>
                        <div className="card-body text-black">

                        {/*  */}
                            <form onSubmit={handleSubmit(onSubmit)} >
                               

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                 type="email" 
                                 placeholder="Email" 
                                 className="input input-bordered w-full max-w-xs"
                                 {...register("email",  {
                                     required:{
                                         value:true,
                                         message:"Eamil is required"
                                     },
                                    pattern: /[A-Za-z]{3}/,
                                    message:"provide a valid email"
                                    
                                  })}
                                 
                                 />
                                  <label className="label">
                                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 text-1xl font-bold">{errors.email.message}</span> }
                                  {errors.email?.type === 'pattern' && <span className="label-text-alt text-primary text-1xl font-bold">{errors.email.message}</span> }
                                  
                                </label>
                                
                                
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                 type="password" 
                                 placeholder="Password" 
                                 className="input input-bordered w-full max-w-xs"
                                 {...register("password",  {
                                     required:{
                                         value:true,
                                         message:"password is required"
                                     },
                                     minLength: {
                                        value: 6,
                                        message: 'must be 6 characters or longer' 
                                      }
                                    
                                  })}
                                 
                                 />
                                  <label className="label">
                                  {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-1xl font-bold">{errors.password.message}</span> }
                                  {errors.password?.type === 'minLength' && <span className="label-text-alt text-primary text-1xl font-bold">{errors.password.message}</span> }
                                  
                                </label>
                                 
                                
                            </div>

                                  <span className='text-red-500'>{SignInError}</span>
                            <input className='btn btn-secondary w-full max-w-xs' type="submit" value='Login' />
                            </form>





                           




                          
                            {/* <button className="btn btn-secondary">Login Now</button> */}
                            <p className='text-center text-black'>New to Doctor Portal ? <Link className='font-bold text-secondary' to='/signup'>Create New Accout</Link>  </p>
                            <div>
                                <div className="divider">OR</div>
                            </div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn text-bold"
                            >Continue with google</button>

                        </div>
                    </div>

                </div>
            </div>

        </section >
    );
};

export default Login;