/* eslint-disable no-dupe-keys */
import {
  Avatar,
  Box,
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

function CardItemProducts() {
  return (
    <Card variant="outlined">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1}>
          <Checkbox color="primary" />
        </Grid>
        <Grid item xs={3}>
          <Box
            display="flex"
            alignItems="center"
            style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
          >
            <Avatar variant="square" />
            &emsp;
            <Typography align="center" style={{ color: "#364a63" }}>
              Pink Fitness Tracker
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            UY3749
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center">
            <b>$ 249.75</b>
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            49
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            Fitbit, Tracker
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

export default CardItemProducts;
