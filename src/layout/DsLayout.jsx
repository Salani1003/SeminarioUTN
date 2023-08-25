import {Toolbar} from "@mui/material";
import {Box} from "@mui/system";
import {Navbar} from "../components/navbar/Navbar";
import {Sidebar} from "../components/Sidebar/Sidebar";

const drawerWidth = 240;

export const DsLayout = ({children}) => {
  return (
    <Box sx={{display: "flex"}}>
      <Navbar drawerWidth={drawerWidth} />

      <Sidebar drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          flex: 1,
          overflowX: "auto",
          flexDirection: "column",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
