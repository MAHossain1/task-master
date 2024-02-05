import { Box, Card, Flex, Heading } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const IssueLoadingDetails = () => {
  return (
    <Box>
      <Heading className="max-w-xl">
        <Skeleton />
      </Heading>
      <Flex gap="3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="mt-4 prose">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default IssueLoadingDetails;
