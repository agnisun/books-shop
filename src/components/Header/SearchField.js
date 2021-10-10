import React, { useState } from "react";
import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import searchMagnifier from "../../img/search.png";
import noImage from "../../img/no-image.png";
import { useDispatch } from "react-redux";
import { search, clearSearch, filterCards } from "../../features/booksSlice";

export const SearchField = () => {
  const [query, setQuery] = useState("");
  const [selectCategory, setSelectCategory] = useState("all");
  const [selectSort, setSelectSort] = useState("new");
  const dispatch = useDispatch();

  const handleBook = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleCategory = (e) => {
    setSelectCategory(e.target.value);
  };

  const handleSort = (e) => {
    setSelectSort(e.target.value);
  };

  const handleSearch = () => {
    if (query) {
      setQuery("");
      dispatch(clearSearch());
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
      )
        .then((res) => res.json())
        .then((data) => dispatch(search(cleanData(data.items))))
        .catch((err) => console.log(err));
    }

    const cleanData = (cards) => {
      return cards.map((card) => {
        if (card.volumeInfo.hasOwnProperty("publishedDate") === false) {
          card.volumeInfo.publishedDate = "0000";
        } else if (card.volumeInfo.hasOwnProperty("imageLinks") === false) {
          card.volumeInfo.imageLinks = {
            thumbnail: noImage,
          };
        }

        return card;
      });
    };
  };

  return (
    <Flex flexDirection={"column"} alignItems={"center"} w={"100%"}>
      <InputGroup mb={"15px"}>
        <Input
          onKeyDown={(e) => handleKeyDown(e)}
          value={query}
          onChange={(e) => handleBook(e)}
          _focus={{ outline: 0 }}
          p={"0 70px 0 15px"}
          color={"#000"}
          fontFamily={"inherit"}
          bg={"#fff"}
          placeholder="Введите название книги"
        />
        <InputRightElement width="60px">
          <Button
            onClick={handleSearch}
            _focus={{ outline: 0 }}
            borderRadius={0}
            borderTopRightRadius={"6.75px"}
            borderBottomRightRadius={"6.75px"}
          >
            <Image src={searchMagnifier} alt={""} />
          </Button>
        </InputRightElement>
      </InputGroup>
      <Flex w={"100%"}>
        <Flex flex={"1 1 auto"}>
          <label style={{ width: "100%", marginRight: "30px" }}>
            Categories:
            <Select
              value={selectCategory}
              bg={"#fff"}
              color={"#000"}
              onChange={(e) => handleCategory(e)}
            >
              <option value="all">all</option>
              <option value="art">art</option>
              <option value="biography">biography</option>
              <option value="computers">computers</option>
              <option value="history">history</option>
              <option value="medical">medical</option>
              <option value="poetry">poetry</option>
            </Select>
          </label>
        </Flex>
        <Flex flex={"1 1 auto"}>
          <label style={{ width: "100%" }}>
            Sorting by:
            <Select
              value={selectSort}
              bg={"#fff"}
              color={"#000"}
              onChange={(e) => handleSort(e)}
            >
              <option value="new">newest</option>
              <option value="old">oldest</option>
            </Select>
          </label>
        </Flex>
      </Flex>
    </Flex>
  );
};
