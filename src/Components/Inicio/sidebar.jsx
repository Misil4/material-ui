import React, {useState} from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { styles } from "./styles.js";
import Nav from '../nav.js';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles(styles);
export default function Sidebar() {
  const classes = useStyles();
    const [isOpened, setIsOpened] = useState(false);
    return (
<div className={classes.root}>
<AppBar className={classes.appBar}>
<Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setIsOpened(!isOpened)}
            className={classes.icon}>{isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" className={classes.title}>Cabeza
            </Typography>
            </Toolbar>
            </AppBar>
            <Toolbar />
  <div className={classes.container}>
    <Drawer variant="permanent"
    classes={{
      paper: clsx(classes.drawer, {
        [classes.closed]: !isOpened,
        [classes.opened]: isOpened,
      }),
    }}
    ><Nav /></Drawer>
          <main className={classes.main}><Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
            Hola
          >
            
          </Grid> </main>
          </div>
        <div className={classes.footer}>Footer</div>
      </div>
    );
  }