import React from "react";
import { Avatar, Flex, Layout, Typography } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  BellOutlined,
  QuestionOutlined,
} from "@ant-design/icons";
import { RiMenuSearchLine } from "react-icons/ri";
import { StyledAvatar } from "./styled";

const TopBar = ({ background }) => {
  return (
    <div style={{ background: background, padding: "20px 40px" }}>
      <Flex justify="space-between" align="center">
        <Flex justify={"space-between"} align={"center"} gap={12}>
          <UserOutlined
            style={{
              color: "#81A7AE",
              fontSize: "30px",
              borderRadius: "5px",
              backgroundColor: "#F3F3F3",
              padding: "5px",
            }}
          />
          <Typography style={{ fontWeight: "bold" }}>My Profile</Typography>
          <TeamOutlined
            style={{
              color: "#81A7AE",
              fontSize: "30px",
              borderRadius: "5px",
              backgroundColor: "#F3F3F3",
              padding: "5px",
            }}
          />
          <Typography style={{ fontWeight: "bold" }}>My Team</Typography>

          <RiMenuSearchLine
            style={{
              color: "#81A7AE",
              fontSize: "40px",
              borderRadius: "5px",
              backgroundColor: "#F3F3F3",
              padding: "5px",
            }}
          />
          <Typography style={{ fontWeight: "bold" }}>
            Search & Subscribe
          </Typography>
        </Flex>

        <Flex justify={"space-between"} align="center" gap={20}>
          <BellOutlined
            style={{
              fontSize: "25px",
            }}
          />
          <Flex gap={10} align="center">
            <Flex vertical={true} align="flex-end">
              <h3 style={{ padding: 0, margin: 0 }}>Stieve Wozniak</h3>
              <p style={{ margin: 0, padding: 0 }}>Admin</p>
            </Flex>
            <StyledAvatar
              size={50}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              style={{
                backgroundColor: "lightblue",
                color: "lightblue",
              }}
            />
          </Flex>

          <Flex gap={10} align="center">
            <QuestionOutlined
              style={{
                background: "#dcf0fa",
                borderRadius: "50%",
                padding: "8px",
                color: "blue",
              }}
            />
            <Typography>Help</Typography>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default TopBar;
