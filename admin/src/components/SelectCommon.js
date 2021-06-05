import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const sampleData = [
  { label: "Option 1", value: 0 },
  { label: "Option 2", value: 1 },
];

/* select sử dụng autocomplete */
export default function SelectCommon(props) {
  const { options, label, textfieldprops, AutocompleteProps } = props;
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} fullWidth label={label} {...textfieldprops} />
      )}
      {...AutocompleteProps}
    />
  );
}
SelectCommon.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  textfieldprops: PropTypes.object,
  AutocompleteProps: PropTypes.object,
};
SelectCommon.defaultProps = {
  options: sampleData,
};
