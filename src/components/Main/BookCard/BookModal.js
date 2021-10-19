import React from "react";
import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

export const BookModal = ({
  description,
  onClose,
  isOpen,
  title,
  imageSrc,
  authors,
  infoLink,
}) => {
  const filterDescription = (description) => {
    if (!description) {
      return "No description";
    }
    return description.length > 350
      ? description.slice(0, 350) + "..."
      : description;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt={"1.75rem"} bgColor={"#fff"}>
        <ModalHeader py={"40px"}>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            display={"block"}
            as={"a"}
            href={infoLink}
            mx={"auto"}
            mb={"30px"}
            w={"150px"}
            justifyContent={"center"}
            boxShadow={"8px 4px 8px 0px rgba(34, 60, 80, 0.2)"}
          >
            <Image w={"100%"} src={imageSrc} />
          </Box>
          <Text mb={"30px"}>
            {filterDescription(description)}
            {description ? (
              <Box
                display={"inline-flex"}
                as={"a"}
                href={infoLink}
                color={"#4682B4"}
              >
                Read more
              </Box>
            ) : null}
          </Text>
          <Box>
            <Box fontWeight={600}>Author:</Box>
            {authors ? authors.join(", ") : "No author"}
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          <Button as={"a"} colorScheme="blue" href={infoLink}>
            Book page
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
