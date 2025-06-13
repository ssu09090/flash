import "./App.scss";
import { useState } from "react";
import mockData from "./Data/mockData";
import Category from "./Components/Category";
import Flashcards from "./Components/Flashcards";
import CardLearn from "./Components/CardLearn";
import Result from "./Components/Result";

const App = () => {
  const [category, setCategory] = useState(null);
  const [learningMode, setLearningMode] = useState(false);
  const [exitMode,setExitMode] = useState(false);
  //cartegory 정보 가져오기
  const handleCategory = (obj) => {
    setCategory(obj);
  };
  const handleLearn = (data) => {
    setLearningMode(data);
  };
  const handleExit = (mode) => {
    setExitMode(mode);
  };
  return (
    <div className="app">
      {!category && (
        <Category cardData={mockData.categories} onSelected={handleCategory} />
      )}
      {category && !learningMode && (
        <Flashcards
          cardData={category}
          onSelected={handleCategory}
          onLearn={handleLearn}
        />
      )}
      {learningMode && !exitMode && (
        <CardLearn cardData={category.flashcards} onExit={handleExit} />
      )}
      {exitMode && <Result onExit={()=>{
        setCategory(null);
        setLearningMode(false);
        setExitMode(false);
      }}/>}
    </div>
  );
};

export default App;
