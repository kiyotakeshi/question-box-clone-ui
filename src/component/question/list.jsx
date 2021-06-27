import React, { useEffect, useState } from "react";
import { For } from "react-loops";
import { Card } from "semantic-ui-react";
import Question from "./question";
import axios from "axios";

const List = () => {
  const initState = {
    list: [],
    showingDetail: false,
    detail: null,
  };

  const [state, setState] = useState(initState);
  const { list, showingDetail, detail } = state;

  useEffect(() => {
    axios.get(`/list?answer=false&archived=false/`).then((res) => {
      setState({ ...state, list: res.data });
    });
  }, []);

  const changeView = (key) => {
    setState({
      ...state,
      showingDetail: !showingDetail,
      detail: list.filter((i) => i.id === key).pop(),
    });
  };

  return (
    <>
      {showingDetail && (
        <Question item={detail} onClick={changeView.bind(this, detail.id)} />
      )}
      {!showingDetail && (
        <Card.Group>
          <For of={list}>
            {(question) => (
              <Question
                key={question.id}
                item={question}
                onClick={changeView.bind(this, question.id)}
              />
            )}
          </For>
        </Card.Group>
      )}
    </>
  );
};

export default List;
