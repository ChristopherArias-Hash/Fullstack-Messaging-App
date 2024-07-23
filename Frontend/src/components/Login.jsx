
function Login(){
    return(
        <>
        <h1>Welcome!</h1>
        <h2>Please login below</h2>
        <input placeholder="Enter Email or Password"></input>
        <input placeholder="Enter Password"></input> 
        <button>Login</button>
        <h2>Dont have an account? <a href="/Register">sign up</a></h2>
        </>
    );

}

export default Login;