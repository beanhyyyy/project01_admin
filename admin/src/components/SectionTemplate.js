import React from "react";
import PropTypes from "prop-types";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";

const breakpoints = "xl";

/* 
layout cho giao diện có các section cách nhau 1 khoảng 
(ví dụ: Hotel homepage) 
*/
export default function SectionTemplate({ children, ...props }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(breakpoints)); // nếu màn hình 1920 mới spacing 3, còn lại là 2

  return (
    <Grid container spacing={matches ? 3 : 2} {...props}>
      {Array.isArray(children) ? (
        children.map((section, index) => {
          const key = index;
          return (
            section && (
              <Grid key={key} item xs={12}>
                {section}
              </Grid>
            )
          );
        })
      ) : (
        <Grid item xs={12}>
          {children}
        </Grid>
      )}
    </Grid>
  );
}
SectionTemplate.propTypes = {
  children: PropTypes.any,
  spacing: PropTypes.number,
};
