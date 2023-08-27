import { Container, useMediaQuery, Box } from "@chakra-ui/react";
import ReportAuthorization from "./ReportAuthorization";
import StatisticsOutput from "./StatisticsOutput";

function Statistics() {
  const [isSmallerThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <Container bg="#F9F9F9" m="0 auto">
      <Box maxW="1180px" m="0 auto">
        <Box
          display="flex"
          align-items="center"
          justify-content="center"
          m="0 auto"
        >
          <Box
            fontFamily="Unbounded"
            fontSize={isSmallerThan700 ? "26" : "44"}
            fontWeight="600"
            margin="0 auto"
          >
            ВАША СТАТИСТИКА
          </Box>
        </Box>
        <ReportAuthorization />
        <StatisticsOutput />
      </Box>
    </Container>
  );
}
export default Statistics;
