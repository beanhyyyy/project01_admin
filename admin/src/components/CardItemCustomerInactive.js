/* eslint-disable no-dupe-keys */
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Grid,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import DropdownPopper from "./DropdownPopper";
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

function CardItemCustomerInactive() {
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
            <Avatar />
            &emsp;
            <ListItem>
              <ListItemText
                primary={
                  <Typography style={{ color: "#364a63" }}>
                    Abu Bin Ishtiyak
                  </Typography>
                }
                secondary="info@softnio.com"
              />
            </ListItem>
          </Box>
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "#364a63" }}>
            <b>35,040.34</b>{" "}
            <Typography
              component="span"
              style={{ color: "rgb(128, 148, 174)" }}
            >
              USD
            </Typography>
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            +811 847-4958
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            United State
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            10 Feb 2020
          </Typography>{" "}
        </Grid>
        <Grid item xs={1}>
          <Typography align="center" style={{ color: "#09c2de" }}>
            <b>Inactive</b>
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

export default CardItemCustomerInactive;
