import React from "react";
import { Button } from "@mui/material";

export const BasicButton = ({ text = "BUTTON" }: { text: string }) => {
  return <Button variant="contained">{text}</Button>;
};

export const LinkButton = ({
  text = "BUTTON",
  link = "/",
}: {
  text: string;
  link: string;
}) => {
  return (
    <Button variant="contained" href={link}>
      {text}
    </Button>
  );
};
