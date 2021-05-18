import React from "react";

import { Link as RouterLink } from "react-router-dom";

const Link = ({
  color = "#FFFFFF",
  className = {},
  onClick = () => {},
  children,
  to,
}) => (
  <RouterLink
    style={{ textDecoration: "none", color }}
    className={className}
    onClick={onClick}
    to={to}
    exact
  >
    {children}
  </RouterLink>
);

export default Link;