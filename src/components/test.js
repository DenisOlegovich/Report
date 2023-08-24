import { Box } from "@chakra-ui/react";

function Application() {
  const colors = ["red", "green", "blue"];

  return (
    <div>
      {colors.map((color, index) => (
        <Box key={index} bg={color} width="100px" height="100px" m="1rem"></Box>
      ))}
    </div>
  );
}

export default Application;
