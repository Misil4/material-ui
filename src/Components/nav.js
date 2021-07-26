import React from "react";
import { Link } from "react-router-dom";
const nav = ['/Inicio','/Paises','/Media','/Historial']
class Nav extends React.Component {
render() {
    return(
        <nav>
            <ul>
                {nav.map((value) =><li key={value}><Link to={value}>{value}</Link></li>)}
            </ul>
        </nav>
    )
}
}
export default Nav