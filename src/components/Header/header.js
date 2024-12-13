import { Link } from "react-router-dom"

export const Header = ({ title })=> {
    return (
        <div>
            <h1>{title}</h1>
            <Link to='/'><p>ホーム</p></Link>
            <Link to='/Page1'><p>Page1</p></Link>
            <Link to='/Page2'><p>Page2</p></Link>
            <Link to='/Page3'><p>Page3</p></Link>
            <Link to='/Page4'><p>Page4</p></Link>
        </div>
    )
}