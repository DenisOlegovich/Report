import { Box, Highlight } from "@chakra-ui/react";

function Card(box: { title: string; title2: string; description: string }) {
  return (
    <Box
      minW="380px"
      maxW="570px"
      h="218px"
      bg="#F9F9F9"
      borderRadius="16px"
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)"
      flex="1"
    >
      <Box w="100%" h="120px" bg="white" p="20px" borderRadius="16px">
        <Box fontFamily="Unbounded" fontWeight="600" fontSize="30px">
          {box.title}
        </Box>
        <Box fontFamily="Manrope" fontSize="16px">
          {box.title2}
        </Box>
      </Box>

      <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
        <Highlight
          query={["1 место", "6 суток"]}
          styles={{ py: "1", fontWeight: "bold" }}
        >
          {box.description}
        </Highlight>
      </Box>
    </Box>
  );
}
export default Card;
