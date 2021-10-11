import React, { useState } from "react";
import { Grid, Container, Flex } from "@chakra-ui/react";
import { BookCard } from "./BookCard/BookCard";
import { useSelector } from "react-redux";

export const Main = () => {
  const cards = useSelector((state) => state.books.data);
  const category = useSelector((state) => state.books.category);
  const sort = useSelector((state) => state.books.sort);
  const [booksLength, setBooksLength] = useState(0);

  return (
    <main>
      <Container pt={"20px"} pb={"50px"}>
        {
          <Flex fontWeight={"700"} justifyContent={"center"} mb={"40px"}>
            Found {booksLength} results
          </Flex>
        }
        <Grid
          mb={"30px"}
          gridTemplateColumns={"repeat(auto-fill, minmax(280px, 1fr))"}
          gridGap={"50px"}
        >
          {cards &&
            [...cards]
              .filter((card) => {
                if (category === "all") {
                  return card;
                } else {
                  return (
                    card.volumeInfo.categories !== undefined &&
                    card.volumeInfo.categories
                      .map((el) => el.toLowerCase())
                      .indexOf(category) > -1
                  );
                }
              })
              .sort((a, b) => {
                return sort === "new"
                  ? parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
                      parseInt(a.volumeInfo.publishedDate.substring(0, 4))
                  : parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
                      parseInt(b.volumeInfo.publishedDate.substring(0, 4));
              })
              .map((card) => {
                return <BookCard key={card.id} volumeInfo={card.volumeInfo} />;
              })}
        </Grid>
      </Container>
    </main>
  );
};
