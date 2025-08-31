import { Card, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" width="100%" marginBottom={2} />
      <Stack gap="4" padding={2}>
        <SkeletonText noOfLines={1} width="60%" />
        <SkeletonText noOfLines={1} width="40%" />
        <SkeletonText noOfLines={1} width="30%" />
      </Stack>
      <Card.Footer gap="2" padding={2}>
        <Skeleton height="20px" width="50px" />
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCardSkeleton;
