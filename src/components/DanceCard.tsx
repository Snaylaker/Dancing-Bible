import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";

type Dance = {
  url: string;
  name: string;
  timestamp: string;
  comment: string;
};
export default function DanceCard(props: Dance) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.name}</Heading>
          <Text>{props.comment}</Text>
          <Text color="blue.600" fontSize="2xl">
            {props.url}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
}
