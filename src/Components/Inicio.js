import React from 'react'
import Banner from './Inicio/banner'
import SideBar from './Inicio/sidebar'
class Inicio extends React.Component {
    render() {
        return(
            <>
            <Banner />
            <SideBar />
            </>
        )
    }
}
export default Inicio