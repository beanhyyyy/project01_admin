import React from "react";

import SectionTemplate from "components/SectionTemplate";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { IOSSwitch } from "components/IOSSwitch";

function Settings() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography style={{ color: "rgb(54, 74, 99)" }} variant="h5">
          <b>Settings</b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <SectionTemplate spacing={4}>
              <Box>
                <Typography style={{ color: "#364a63" }}>
                  <b>Web Store Setting</b>
                </Typography>
                <Typography
                  style={{ color: "rgb(82, 100, 132)" }}
                  variant="body2"
                >
                  Here is your basic store setting of your website.
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography style={{ color: "#364a63" }} variant="body2">
                    <b>Site Email</b>
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    <i>Specify the email address of your website.</i>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="My Store"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography style={{ color: "#364a63" }} variant="body2">
                    <b>Site Copyright</b>
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    <i>Copyright information of your website.</i>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="My Store"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography style={{ color: "#364a63" }} variant="body2">
                    <b>Allow Registration</b>
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    <i>Enable or disable registration from site.</i>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="My Store"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography style={{ color: "#364a63" }} variant="body2">
                    <b>Main Website</b>
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    <i>Specify the URL if your main website is external.</i>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <RadioGroup row value={value} onChange={handleChange}>
                    <FormControlLabel
                      value="female"
                      control={<Radio color="primary" />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio color="primary" />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio color="primary" />}
                      label="Other"
                    />
                    <FormControlLabel
                      value="disabled"
                      disabled
                      control={<Radio color="primary" />}
                      label="(Disabled option)"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography style={{ color: "#364a63" }} variant="body2">
                    <b>Maintanance Mode</b>
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    <i>Enable to make website make offline.</i>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="My Store"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography style={{ color: "#364a63" }} variant="body2">
                    <b>Web Store Setting</b>
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    <i>Specify the name of your website.</i>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControlLabel control={<IOSSwitch />} label="Offline" />
                </Grid>
              </Grid>

              <Box display="flex" justifyContent="center">
                <Button variant="outlined" color="primary">
                  Update
                </Button>
              </Box>
            </SectionTemplate>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Settings;
