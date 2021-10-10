import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  const filterCards = (cards) => {
    // return cards ? cards.filter(card => {
    //   if (selectCategory === "all") {
    //     return card
    //   } else {
    //     return card.volumeInfo.categories !== undefined && card.volumeInfo.categories.map(el => el.toLowerCase()).indexOf(selectCategory) > -1
    //   }
    // }) : false
  };

  const sortCards = (cards) => {
    // return cards.sort((a, b) => {
    //   return selectSort === "new" ? parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4)) : parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
    // })
  };

  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
