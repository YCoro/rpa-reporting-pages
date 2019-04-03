import React from "react";
import Button from '@material-ui/core/Button';
import "./LoaderButton.css";
import { Spinner } from 'reactstrap';

export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    variant="contained" color="secondary"
    disabled={disabled || isLoading}
    {...props}>
    {!isLoading ? text : loadingText}
    {isLoading &&  <Spinner size="sm" color="secondary" /> }
    {console.log(isLoading)}
  </Button>;
