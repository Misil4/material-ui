import React from 'react'
import SIDEBAR from './Inicio/sidebar'
import CssBaseline from "@material-ui/core/CssBaseline";
import 'semantic-ui-css/semantic.min.css'
function Inicio(props) {
        return(<div className="App">
        <CssBaseline />
        <SIDEBAR />
      </div>);
}
export default Inicio