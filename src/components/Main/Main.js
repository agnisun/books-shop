import React from "react";
import { Grid, Container, Flex } from "@chakra-ui/react";
import { BookCard } from "./BookCard/BookCard";
import { useSelector } from "react-redux";

export const Main = () => {
  const cards = useSelector((state) => state.books.data);

  return (
    <main>
      <Container pt={"20px"} pb={"50px"}>
        {
          <Flex fontWeight={"700"} justifyContent={"center"} mb={"40px"}>
            Found {cards[0] ? cards.length : 0} results
          </Flex>
        }
        <Grid
          mb={"30px"}
          gridTemplateColumns={"repeat(auto-fill, minmax(280px, 1fr))"}
          gridGap={"50px"}
        >
          {cards
            ? cards.map((card) => {
                return <BookCard key={card.id} volumeInfo={card.volumeInfo} />;
              })
            : null}
        </Grid>
      </Container>
    </main>
  );
};
