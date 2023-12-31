import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const DelayedAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowAlert(true);
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      {showAlert && (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Application submitted!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for submitting your application. Our team will get back to
            you soon.
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default DelayedAlert;
