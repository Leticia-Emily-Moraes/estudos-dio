import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Link to="/login">Login</Link>
        </>
    )
}

export {Home}