import React from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ShowAllSegments from "./ShowAllSegments";
import TargetSegments from "./TargetSegments";
import ICP from "./ICP";
import { FaCrown } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const Navbar = () => {
  return (
    <Tabs isFitted variant="enclosed" colorScheme="white">
      <TabList>
        <Tab
          _selected={{
            borderTop: "3px solid red",
            color: "black",
            fontWeight: "500",
          }}
          _focus={{ boxShadow: "md" }}
          borderColor="white"
          borderTop="3px solid transparent"
        >
          Show All Segments
        </Tab>
        <Tab
          _selected={{
            borderTop: "3px solid red",
            color: "black",
            fontWeight: "500",
          }}
          _focus={{ boxShadow: "md" }}
          borderColor="white"
          borderTop="3px solid transparent"
        >
          Target Segments
        </Tab>
        <Tab
          _selected={{
            borderTop: "3px solid red",
            color: "black",
            fontWeight: "500",
          }}
          _focus={{ boxShadow: "md" }}
          borderColor="white"
          borderTop="3px solid transparent"
        >
          <Box marginRight="10px" fontSize="20px">
            <FaCrown color="gold" />
          </Box>
          ICP
        </Tab>
        <Tab
          _selected={{
            borderTop: "3px solid red",
            color: "black",
            fontWeight: "500",
            opacity: 1,
          }}
          _focus={{ boxShadow: "md" }}
          borderColor="white"
          borderTop="3px solid transparent"
          opacity="0.5"
        >
          <Box fontSize="25px">
            <GoPlus />
          </Box>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ShowAllSegments />
        </TabPanel>
        <TabPanel>
          <TargetSegments />
        </TabPanel>
        <TabPanel>
          <ICP />
        </TabPanel>
        <TabPanel>
          <p>four!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Navbar;
