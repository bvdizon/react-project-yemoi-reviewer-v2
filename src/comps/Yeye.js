import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import NavButtons from './NavButtons';

const gsheetID = process.env.REACT_APP_GSHEET_ID;
const gsheetNum = process.env.REACT_APP_GSHEET_NUM;

const url = `https://spreadsheets.google.com/feeds/list/${gsheetID}/${gsheetNum}/public/values?alt=json`;

const Yeye = () => {
  const { data, isPending, error } = useFetch(url);
  const [num, setNum] = useState('1');

  let decks = [];

  if (data) {
    decks = [...new Set(data.feed.entry.map((item) => item.gsx$deck.$t))];
  }

  return (
    <>
      <h1 className='my-lg'>Ayesha's Review Topics</h1>
      <div className='underline'></div>
      <div className='collection'>
        {isPending && <Loading />}

        {decks &&
          decks.map((deck, index) => {
            return (
              <Link key={index} to={`/review/yeye/${deck}`} className='btn'>
                {deck}
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Yeye;
