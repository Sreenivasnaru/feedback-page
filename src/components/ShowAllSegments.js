import { Box, Checkbox, HStack } from "@chakra-ui/react";
import data from "../data/data";
import { FaEarthAmericas } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";

const ShowAllSegments = () => {
  const [currData, setCurrData] = useState(data);

  const handleDelete = (key) => {
    const newdata = data.filter((item) => {
      return item.key !== key;
    });

    setCurrData(newdata);
  };

  return (
    <div>
      <HStack
        bgColor="grey"
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Checkbox marginRight="20px"></Checkbox>
        <Box h="40px" width="150px" display="flex" alignItems="center">
          <FaEarthAmericas />
        </Box>
        <Box h="40px" width="150px" display="flex" alignItems="center">
          <GoPersonFill />
        </Box>
        <Box h="40px" width="150px" display="flex" alignItems="center">
          <HiOutlineEmojiHappy />
        </Box>
        <Box h="40px" width="150px" display="flex" alignItems="center">
          Name
        </Box>
        <Box h="40px" width="250px" display="flex" alignItems="center">
          Feedback
        </Box>
        <Box h="40px" width="250px" display="flex" alignItems="center">
          Flow
        </Box>
        <Box h="40px" width="150px" display="flex" alignItems="center">
          Date
        </Box>
        <Box h="40px" width="40px" display="flex" alignItems="center">
          <IoIosArrowForward />
        </Box>
      </HStack>

      {currData.map((c) => {
        return (
          <HStack
            display="flex"
            justifyContent="space-between"
            colorScheme="blue"
            key={c.key}
            borderBottom="2px solid grey"
          >
            <Checkbox marginRight="20px"></Checkbox>
            <Box h="40px" textAlign="start" width="150px" marginTop="10px">
              <a href="/calender">{c.logo}</a>
            </Box>
            <Box h="40px" textAlign="start" width="150px" marginTop="10px">
              <a href="/calender">{c.Img}</a>
            </Box>
            <Box h="40px" textAlign="start" width="150px" marginTop="10px">
              <a href="/calender">{c.emoji}</a>
            </Box>
            <Box h="40px" textAlign="start" width="150px" marginTop="10px">
              <a href="/calender">{c.Name}</a>
            </Box>
            <Box h="40px" textAlign="start" width="250px" marginTop="10px">
              <a href="/calender">{c.Feedback}</a>
            </Box>
            <Box h="40px" textAlign="start" width="250px" marginTop="10px">
              <a href="/calender">{c.Flow}</a>
            </Box>
            <Box h="40px" textAlign="start" width="150px" marginTop="10px">
              <a href="/calender">{c.date}</a>
            </Box>
            <Box
              h="30px"
              textAlign="start"
              width="30px"
              color="white"
              bgColor="grey"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => handleDelete(c.key)}
            >
              <RxCross2 />
            </Box>
          </HStack>
        );
      })}
    </div>
  );
};

export default ShowAllSegments;
