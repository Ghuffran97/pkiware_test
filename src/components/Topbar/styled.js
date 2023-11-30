import { BellOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import styled from "styled-components";

export const StyledAvatar = styled(Avatar)`
  position: relative;
  overflow: unset;
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: lightgreen;
    border-radius: 50%;
    border: 2px solid white;
    bottom: -0px;
    right: -5px;
  }
`;


