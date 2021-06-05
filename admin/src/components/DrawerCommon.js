import React from "react";
import PropTypes from "prop-types";
import { makeStyles, IconButton, CardContent } from "@material-ui/core";
// icon
import CloseIcon from "@material-ui/icons/Close";

// style
const useStyles = makeStyles((theme) => ({
  styleHeaderDrawer: {
    backgroundColor: theme.palette.background.paper,
    position: "sticky",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "10",
    marginBottom: "1rem",
  },
  styleDrawer: {
    maxWidth: 700,
    overflowX: "hidden",
  },
}));

export default function DrawerCommon({ onClose, content }) {
  const classes = useStyles();

  return (
    <div className={classes.styleDrawer} role="presentation">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "1rem",
          paddingTop: "1rem",
        }}
      >
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>{" "}
      </div>
      <CardContent>{content}</CardContent>
    </div>
  );
}
DrawerCommon.propTypes = {
  onClose: PropTypes.func,
  content: PropTypes.any,
};

// const [state, setState] = React.useState(false);

// const handleDrawer = () => {
//   setState(!state);
// };

// <Button onClick={handleDrawer}>123</Button>
// <Drawer anchor="right" open={state} onClose={handleDrawer}>
//   <DrawerCommon onClose={handleDrawer} />
// </Drawer>
