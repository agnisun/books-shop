import {Header} from "./components/Header/Header";
import {useState} from "react";
import {Main} from "./components/Main/Main";
import noImage from './img/no-image.png'


function App() {
  const [query, setQuery] = useState('')
  const [cards, setCards] = useState([])
  const [selectCategory, setSelectCategory] = useState("all")
  const [selectSort, setSelectSort] = useState("new")
  
  const handleSearch = () => {
    if (query) {
      setQuery('')
      setSelectCategory('all')
      setSelectSort("new")
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`)
        .then(res => res.json())
        .then(data => setCards(cleanData(data.items)))
        .catch(err => console.log(err))
    }
  }
  
  const filterCards = (cards) => {
    return cards ? cards.filter(card => {
      if (selectCategory === "all") {
        return card
      } else {
        return card.volumeInfo.categories !== undefined && card.volumeInfo.categories.map(el => el.toLowerCase()).indexOf(selectCategory) > -1
      }
    }) : false
  }
  
  const cleanData = (cards) => {
    return cards.map(card => {
      if (card.volumeInfo.hasOwnProperty('publishedDate') === false) {
        card.volumeInfo.publishedDate = '0000'
      } else if (card.volumeInfo.hasOwnProperty('imageLinks') === false) {
        card.volumeInfo.imageLinks = {
          thumbnail: noImage
        }
      }
      
      return card
    })
  }
  
  const sortCards = (cards) => {
    return cards.sort((a, b) => {
      if (selectSort === "new") {
        return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
      } else if (selectSort === "old") {
        return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
      }
    })
  }
  
  
  return (
    <div className="app">
      <Header setSelectCategory={setSelectCategory} selectCategory={selectCategory}
              setSelectSort={setSelectSort} selectSort={selectSort}
              query={query} setQuery={setQuery}
              handleSearch={handleSearch}/>
      <Main cards={filterCards(sortCards(cards))}/>
    </div>
  );
}

export default App;
