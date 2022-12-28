import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  color: ${(props) => props.theme.textColor};

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }

  transition: all 0.3s ease-in-out;
  display: block;
  text-shadow: 1px 1px 1px #000;
`;

export default (props: any) => <StyledLink {...props} />;
