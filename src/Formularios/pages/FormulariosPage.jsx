import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {DsLayout} from "../../layout/DsLayout";

export const FormulariosPage = () => {
  return (
    <>
      <DsLayout>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{minHeight: "80vh"}}
        >
          <Grid item>
            <Box
              component="div"
              p={5}
              sx={{
                backgroundColor: "primary.main",
                color: "#fff",
                fontSize: "100px",
                borderRadius: "10px",
                display: "inline-block",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                }}
              >
                MiLogo
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </DsLayout>
    </>
  );
};
