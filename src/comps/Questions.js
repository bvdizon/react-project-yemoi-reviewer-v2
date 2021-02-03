import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Loading from './Loading';

const ReviewerYeye = () => {
  const { sheetNum, owner } = useHistory().location.state;
  const gsheetID = process.env.REACT_APP_GSHEET_ID;
  const gsheetNum = sheetNum;
  const url = `https://spreadsheets.google.com/feeds/list/${gsheetID}/${gsheetNum}/public/values?alt=json`;
  const { data, isPending } = useFetch(url);
  const { deck } = useParams();

  // component state values
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isShown, setIsShown] = useState(false);

  let questions = [];
  if (data) {
    questions = data.feed.entry.filter((q) => {
      return q.gsx$deck.$t === deck && q;
    });
  }

  const handleClickCorrect = () => {
    setIndex(Math.floor(Math.random() * questions.length));
    setScore(score + 1);
    setIsShown(false);
  };

  const handleClickWrong = () => {
    setIndex(Math.floor(Math.random() * questions.length));
    setScore(score - 2);
    setIsShown(false);
  };

  if (isPending) {
    return <Loading />;
  }
  return (
    <article className='question'>
      <header>
        <h2 style={{ textTransform: 'capitalize' }}>
          {owner}: <span>{deck}</span>{' '}
        </h2>
        <h3>
          Total Questions: <span>{questions.length && questions.length}</span>{' '}
        </h3>
        <div
          className='score'
          style={{ backgroundColor: score > 0 ? '#111e6c' : '#c7331c' }}>
          <span>{score}</span>
        </div>
      </header>

      {isShown ? (
        <div className='answer text-center'>
          {isShown && (
            <div>
              <h3 className='my-lg'>Answer #{index + 1}</h3>
              <h2 className='my-lg'>{questions[index].gsx$answer.$t}</h2>
              <div className='underline'></div>
            </div>
          )}
        </div>
      ) : (
        <div className='qText text-center'>
          <h3>Question #{index + 1}</h3>
          <h2 className='my-lg qText'>
            {questions.length > 0 && questions[index].gsx$question.$t}
          </h2>
        </div>
      )}

      <div className='buttons text-center'>
        <button onClick={handleClickWrong}>
          <AiOutlineMinus />
        </button>
        <button onClick={() => setIsShown(!isShown)}>
          {isShown ? 'Question' : 'Answer'}
        </button>
        <button onClick={handleClickCorrect}>
          <AiOutlinePlus />
        </button>
      </div>
    </article>
  );
};

export default ReviewerYeye;
