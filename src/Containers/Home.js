import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddBoxIcon from '@material-ui/icons/AddBox';
import BallotIcon from '@material-ui/icons/Ballot';
import GrainIcon from '@material-ui/icons/Grain';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const drawerWidth = 240;

function Home(props) {
    const classes = useStyles();
    const { container } = props;
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [modalOpen, setModalState] = React.useState(false)
    const topOptions = [
        { type: 'Add Client', icon: <AddBoxIcon />, path: '/add_client'}, 
        { type: 'Create KeyMap', icon: <BallotIcon />}
    ]
    const middleOptions = [{type: 'Start Session', icon: <GrainIcon />}, {type: 'Calculate Agreement', icon: <EqualizerIcon />}]
    const bottomOptions = [{ type: 'Set Directory', icon: <SubdirectoryArrowRightIcon />}]

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {topOptions.map((key, index) => (
                    <Link to={key['path']} style={{ textDecoration: 'none' }}>
                        <ListItem button key={key['type']}>
                            <ListItemIcon>{key['icon']}</ListItemIcon>
                            <ListItemText primary={key['type']} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {middleOptions.map((key, index) => (
                    <ListItem button key={key['type']}>
                        <ListItemIcon>{key['icon']}</ListItemIcon>
                        <ListItemText primary={key['type']} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {bottomOptions.map((key, index) => (
                    <ListItem button key={key['type']}>
                        <ListItemIcon>{key['icon']}</ListItemIcon>
                        <ListItemText primary={key['type']} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

  return (
      <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                  <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      className={classes.menuButton}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap>
                      dosa data
          </Typography>
              </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="mailbox folders">
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Hidden smUp implementation="css">
                  <Drawer
                      container={container}
                      variant="temporary"
                      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                      open={mobileOpen}
                      onClose={handleDrawerToggle}
                      classes={{
                          paper: classes.drawerPaper,
                      }}
                      ModalProps={{
                          keepMounted: true, // Better open performance on mobile.
                      }}
                  >
                      {drawer}
                  </Drawer>
              </Hidden>
              <Hidden xsDown implementation="css">
                  <Drawer
                      classes={{
                          paper: classes.drawerPaper,
                      }}
                      variant="permanent"
                      open
                  >
                      {drawer}
                  </Drawer>
              </Hidden>
          </nav>
          <main className={classes.content}>
              <div className={classes.toolbar} />
              <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                  facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                  gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                  donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                  adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                  Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                  imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                  arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                  donec massa sapien faucibus et molestie ac.
        </Typography>
              <Typography paragraph>
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                  facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                  tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                  consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                  vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                  hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                  tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                  nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                  accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
          </main>
      </div>
  );
}

Home.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default Home;
