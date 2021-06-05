import {
  Card,
  Checkbox,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import DropdownPopper from "../components/DropdownPopper";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import NoteIcon from "@material-ui/icons/Note";
import DeleteIcon from "@material-ui/icons/Delete";

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

function CardMenuOrders() {
  return (
    <Card>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1}>
          <Checkbox color="primary" />
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            Orders
          </Typography>
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            Date
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography style={{ color: "rgb(128, 148, 174)" }}>
            Status
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            Customer
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            Purchased
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            Total
          </Typography>{" "}
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

export default CardMenuOrders;
