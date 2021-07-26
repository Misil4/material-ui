import React from 'react'
import { Drawer,Button } from '@material-ui/core';
import { withNavigation, DrawerActions } from 'react-navigation'
class SideBar extends React.Component {
    render() {
        return(
            <div>
            {['left', 'right', 'top', 'bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                  <Drawer anchor={anchor} open={state[anchor]} onClose={DrawerActions.toggleDrawer(anchor, false)}>
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
              </div>
        ) 
    }
}
export default SideBar