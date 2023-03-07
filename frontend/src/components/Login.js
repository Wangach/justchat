import { Link } from "react-router-dom"

const Login = () => {
  return (
    <form action="#" id='logForm'>
        <h3>Login</h3>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Your Name..."/>
        </div>
        <div className="form-group">
            <label htmlFor="name">Password</label>
            <input type="password" className="form-control" placeholder="Your Password..."/>
        </div>
        <button className="btn btn-success">Login</button>
        <p>Not Yet Registered? <Link href="/register">Click Here</Link></p>
    </form>
  )
}

export default Login