import {
  Card,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root margin={4} w={320} overflow={"hidden"}>
      <Skeleton height="200px" marginBottom={5} variant={"shine"} />
      <Stack gap="4" width={"100%"} padding={2}>
        <SkeletonText variant={"shine"} noOfLines={2} />
        <SkeletonText variant={"shine"} width={32} noOfLines={1} />
        <SkeletonText variant={"shine"} width={20} height={6} noOfLines={1} />
      </Stack>
    </Card.Root>
  );
};

export default GameCardSkeleton;
