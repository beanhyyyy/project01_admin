/* eslint-disable no-dupe-keys */
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

function CardItemOrdersWarning() {
  return (
    <Card variant="outlined">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1}>
          <Checkbox color="primary" />
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(157, 114, 255)" }}>
            #95954
          </Typography>
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            Jun 4, 2020{" "}
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <span
            style={{
              color: "rgb(128, 148, 174)",
              borderRadius: "10px",
              backgroundColor: "rgba(244, 189, 14, 0.15)",
              color: "rgb(244, 189, 14)",
              padding: "5px",
            }}
          >
            <b>&#9679;&nbsp;On Hold</b>
          </span>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(128, 148, 174)" }}>
            Arnold Armstrong
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center" style={{ color: "rgb(157, 114, 255)" }}>
            3 Items
          </Typography>{" "}
        </Grid>
        <Grid item xs={true}>
          <Typography align="center">
            <b>$ 249.75</b>
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

export default CardItemOrdersWarning;
