import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Quiz = () => {
  const { store, actions } = React.useContext(Context);
  const [question, setQuestion] = React.useState("");
  function getQuestion() {
    setQuestion(store.questionList.results[1].question);
  }

  return (
    <div>
      <p>{question}</p>
      <button onClick={getQuestion}>Next Question</button>
    </div>
  );
};
