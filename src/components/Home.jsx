import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='wrapper bg-red-600 border w-full h-screen overflow-y-scroll flex bg-gradient-to-r from-blue-900 p-5 font-poppins'>
      <div className="home-section rounded-2xl m-auto shadow-xl hover:shadow-2xl">
        <h1 className="text-white text-2xl m-auto w-[80%] py-6 text-center font-extrabold">Welcome to <br/>Login-Signup Home Page</h1>
        <hr />
        <p className="text-white text-sm m-auto w-[80%] py-6 text-center font-bold">"This platform is designed to practice and understand the logic behind Login and Sign-Up functionality, <br/>exploring how various components work together and integrate seamlessly."</p>

        <div className="btnWrapper flex flex-col w-[90%] m-auto p-6 rounded-xl sm:flex-row">
          <div className="loginBtn w-full text-white text-center p-4">
            <p className="text-sm">If you already have an account,<br/> just Login.</p>
            <button className="bg-blue-700 px-6 py-3 rounded-full my-6"><Link to="/signin">Login</Link></button>
          </div>
          <div className="signupBtn w-full text-white text-center p-4">
            <p className="text-sm">Don't have an account?<br/>Please Sign Up!</p>
            <button className="bg-blue-700 px-6 py-3 rounded-full my-6"><Link to="/signup">SignUp</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;