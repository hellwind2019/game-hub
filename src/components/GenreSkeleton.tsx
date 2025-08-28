import { Box, HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <Box width={"120px"} padding={2}>
      <HStack>
        <SkeletonCircle w={"50px"} h={"50px"} />
        <SkeletonText noOfLines={2} />
      </HStack>
    </Box>
  );
};

export default GenreSkeleton;
