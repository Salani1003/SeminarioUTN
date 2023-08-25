import {
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import HomeIcon from "@mui/icons-material/Home";
import {Box} from "@mui/system";
import {Link as RouterLink} from "react-router-dom";

const navlinks = [
  {
    title: "Inicio",
    path: "/",
    icon: <HomeIcon sx={{color: "White"}} />,
  },
  {
    title: "Personas",
    path: "/Personas",
    icon: <PersonSearchIcon sx={{color: "White"}} />,
  },
];

export const Sidebar = ({drawerWidth}) => {
  return (
    <Box
      component="nav"
      sx={{width: {sm: drawerWidth, flexShrink: {sm: 0}}, textAlign: "center"}}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: {xs: "none", sm: "flex"},
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#12416F",
          },
        }}
      >
        <List>
          {navlinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton component={RouterLink} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>

                <Grid container>
                  <ListItemText>
                    <Typography variant="h5" sx={{color: "White"}}>
                      {item.title}
                    </Typography>
                  </ListItemText>
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
