"use client";
import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [willLogin, setWillLogin] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const responseGoogle = async (response: any) => {
    setLoading(true)
    
    try{console.log(response);
      const tokenId = response.credential;
      const clientId = response.clientId;
      const fcmToken = localStorage.getItem('fcmToken');
      fetch('http://localhost:38000/login', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({token: tokenId, fcmToken})
      }).then(r => r.json()).then(data => localStorage.setItem("token", data.token));
    } finally {
      setLoading(false);
    }
    
  }
  
  const login = async (e: any) => {
    e.preventDefault();
    setWillLogin(true)
  }


  return (
    <div className="google">
          {willLogin ? 
          <GoogleLogin onSuccess={responseGoogle} ></GoogleLogin> :
          <button onClick={login} type="submit">Login com <img alt="Google Icon"  /></button> }
        </div>
  )

  }
  export default Login;
    /*const handleLogin = async () => {
       await signIn("google");
        const {data: sessionData }  =  useSession();
        console.log(sessionData);
    }

  if (session && session.user) {
    // User signed in
    return (
        
      <div className="border flex items-center justify-center">
        <h3>Login component client rendered</h3>
        <p>
          Signed in as
          <Image
            src={
              session.user.image ||
              `https://avatars.dicebear.com/api/micah/${session.user.name}.svg`
            }
            width={40}
            height={40}
            alt={session.user.name || `Profile Icon`}
            className="rounded-full"
          />
          {session.user && session.user.email}
        </p>
        <button onClick={() => signOut()}>Sign out by click event</button>

        <div className="google">
          {willLogin ? 
          <GoogleLogin onSuccess={responseGoogle} ></GoogleLogin> :
          <button onClick={login} type="submit">Login com <img alt="Google Icon" src={logoGoogle} /></button> }
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-slate-100 p-8 flex items-center justify-center w-min gap-2 border flex-col-reverse">
      <h3>Login component client rendered</h3>
      <button
        className="whitespace-nowrap rounded-md border border-slate-100 p-2"
        onClick={handleLogin}
      >
        Google Sign in
      </button>
      
    </div>
  );
};

export default Login;
*/