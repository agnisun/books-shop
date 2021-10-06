import React from 'react';
import {Box, Container, Flex, Heading} from '@chakra-ui/react'
import {SearchField} from "./SearchField";
import bg from '../../img/bg.jpg'

export const Header = ({setSelectCategory, selectCategory, handleSearch, setQuery, query, setSelectSort, selectSort}) => {
  
  return (
    
    <header style={{
      backgroundImage: `url(${bg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      color: "#fff",
    }}>
      <Box pos={"relative"} zIndex={2} w={"100%"} height={"100%"} backgroundColor={"rgba(55, 55, 55, 0.3)"}>
        <Container p={"50px 15px 40px"}
        >
          <Flex mx={"auto"} justifyContent={"center"} alignItems={"center"} maxW={"700px"} flexDirection={"column"}
                minH={"500px"}
          >
            <Heading fontSize={"50px"} mb={"40px"}>Search for books</Heading>
            <SearchField setSelectCategory={setSelectCategory} selectCategory={selectCategory}
                         setSelectSort={setSelectSort} selectSort={selectSort}
                         query={query} setQuery={setQuery}
                         handleSearch={handleSearch}/>
          </Flex>
        </Container>
      </Box>
    </header>
  );
};