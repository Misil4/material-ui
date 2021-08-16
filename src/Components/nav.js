import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const nav = ['Inicio','Paises','Media','Historial']
class Nav extends React.Component {
render() {
    return(
        <nav>
            <ul>
                {nav.map((value) =><li><Button variant="secondary"><Link to={value}>{value}</Link></Button></li>)}
            </ul>
        </nav>
    )
}
}
export default Nav