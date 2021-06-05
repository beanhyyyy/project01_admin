import {
  Button,
  Card,
  CardContent,
  Drawer,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import SelectCommon from "components/SelectCommon";
import AddIcon from "@material-ui/icons/Add";
import SectionTemplate from "components/SectionTemplate";
import PaginationCommon from "components/PaginationCommon";
import ButtonUpload from "components/ButtonUpload";
import DrawerCommon from "components/DrawerCommon";
import CardMenuProducts from "components/CardMenuProducts";
import CardItemProducts from "components/CardItemProducts";

function Products() {
  const [state, setState] = React.useState(false);

  const handleDrawer = () => {
    setState(!state);
  };
  return (
    <SectionTemplate spacing={4}>
      <Grid container spacing={2}>
        <Grid item xs={true}>
          <Typography style={{ color: "rgb(54, 74, 99)" }} variant="h5">
            <b>Products</b>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <SelectCommon
            label="Select"
            textfieldprops={{ variant: "outlined", size: "small" }}
          />
        </Grid>
        <Grid item xs="auto">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleDrawer}
          >
            Add Products
          </Button>
        </Grid>
        <Drawer anchor="right" open={state} onClose={handleDrawer}>
          <DrawerCommon
            onClose={handleDrawer}
            content={
              <React.Fragment>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography variant="h6">New Product</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography color="textSecondary">
                      Add information and add new product.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Products Title"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Regular Price"
                          variant="outlined"
                          fullWidth
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Sale Price"
                          variant="outlined"
                          fullWidth
                          size="small"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Stock"
                          variant="outlined"
                          fullWidth
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="SKU"
                          variant="outlined"
                          fullWidth
                          size="small"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Category"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Tags"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Card variant="outlined">
                      <CardContent>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <ButtonUpload />
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justify="center">
                      <Grid item xs="auto">
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<AddIcon />}
                        >
                          Add Orders
                        </Button>{" "}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </React.Fragment>
            }
          />
        </Drawer>
      </Grid>

      <SectionTemplate>
        <CardMenuProducts />

        <CardItemProducts />
      </SectionTemplate>

      <PaginationCommon />
    </SectionTemplate>
  );
}

export default Products;
