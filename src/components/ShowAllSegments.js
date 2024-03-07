import { Box, Checkbox, HStack, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import data from "../data/data";
import { FaEarthAmericas } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const ShowAllSegments = () => {
  return (
    <div>
      <HStack bgColor="grey" display="flex" justifyContent={"space-between"}>
        <Checkbox marginRight="20px"></Checkbox>
        <Box h="40px" width="150px">
          <FaEarthAmericas />
        </Box>
        <Box h="40px" width="150px">
          <GoPersonFill />
        </Box>
        <Box h="40px" width="150px">
          <HiOutlineEmojiHappy />
        </Box>
        <Box h="40px" width="150px">
          Name
        </Box>
        <Box h="40px" width="250px">
          Feedback
        </Box>
        <Box h="40px" width="250px">
          Flow
        </Box>
        <Box h="40px" width="150px">
          Date
        </Box>
      </HStack>

      {data.map((c) => {
        return (
          <HStack display="flex" justifyContent="space-between">
            <Checkbox marginRight="20px"></Checkbox>
            <Box h="40px" textAlign="start" width="150px">
              {c.logo}
            </Box>
            <Box h="40px" textAlign="start" width="150px">
              {c.Img}
            </Box>
            <Box h="40px" textAlign="start" width="150px">
              {c.emoji}
            </Box>
            <Box h="40px" textAlign="start" width="150px">
              {c.Name}
            </Box>
            <Box h="40px" textAlign="start" width="250px">
              {c.FeedBack}
            </Box>
            <Box h="40px" textAlign="start" width="250px">
              {c.Flow}
            </Box>
            <Box h="40px" textAlign="start" width="150px">
              {c.date}
            </Box>
          </HStack>
        );
      })}
    </div>
  );
};

export default ShowAllSegments;
