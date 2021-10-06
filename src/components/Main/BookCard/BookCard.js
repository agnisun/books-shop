import React from 'react';
import {Box, Flex, GridItem, Heading, Image, useDisclosure} from "@chakra-ui/react";
import {BookModal} from "./BookModal";

export const BookCard = ({
                           volumeInfo: {
                             authors,
                             categories,
                             title,
                             imageLinks,
                             readingModes,
                             publishedDate,
                             description,
                             infoLink
                           }
                         }) => {
  
  const filterText = (title, length) => {
    if (typeof title === "string") {
      return title.length > length ? title.slice(0, length) + '...' : title
    } else if (typeof title === "object") {
      return title.length > 2 ? [].concat(title[0], title[1]).join(', ') + '...' : title.join(', ')
    }
  }
  
  const {isOpen, onOpen, onClose} = useDisclosure()
  const correctDate = publishedDate === "0000" ? "Not available" : publishedDate
  const correctAuthors = authors ? filterText(authors) : "No author"
  const correctCategories = categories ? categories.join(', ') : "No categories"
  
  return (
    <>
      <GridItem cursor={"pointer"} p={"20px 15px"} bgColor={"#b6713724"} h={"430px"} onClick={onOpen}>
        <Flex flexDirection={"column"}>
          <Box w={"170px"} h={"235px"} alignSelf={"center"} mb={"20px"}
               boxShadow={"8px 4px 8px 0px rgba(34, 60, 80, 0.2)"}>
            <Image h={"100%"} w={"100%"} src={imageLinks.thumbnail} alt={title}/>
          </Box>
          <Flex justifyContent={"space-between"} fontSize={"14px"}
               mb={"5px"}>
            <Box textDecoration={"underline"}>{correctCategories}</Box>
            <Box>{correctDate}</Box>
          </Flex>
          <Heading flexBasis={"40px"} mb={"5px"} fontSize={"17px"}>{filterText(title, 40)}</Heading>
          <Box fontSize={"14px"}>{correctAuthors}</Box>
        </Flex>
      </GridItem>
      <BookModal infoLink={infoLink} authors={authors} imageSrc={imageLinks.thumbnail} onClose={onClose} isOpen={isOpen}
                 description={description} title={title}/>
    </>
  );
};