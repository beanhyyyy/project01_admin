import {
  Card,
  Checkbox,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import DropdownPopper from "./DropdownPopper";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import NoteIcon from "@material-ui/icons/Note";
import DeleteIcon from "@material-ui/icons/Delete";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const dropboxData = [
  {
    icon: NoteIcon,
    primaryText: "Update",
  },
  {
    icon: DeleteIcon,
    primaryText: "Delete",
  },
];

function CardMenuProducts() {
  return (
    <Card>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1}>
          <Checkbox color="primary" />
        </Grid>
        <Grid item xs={3}>
          <Typography style={{ color: "rgb(128, 148, 174)" }}>Name</Typography>
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            SKU{" "}
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            Price
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            Stock
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            Category
          </Typography>{" "}
        </Grid>
        <Grid item xs={1}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StarBorderIcon color="error" />{" "}
          </div>
        </Grid>
        <Grid item xs={1}>
          <DropdownPopper
            dropdownBtn={
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            }
            options={dropboxData}
            optionSize
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default CardMenuProducts;
