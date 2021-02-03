import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';

const Yeye = () => {
  const { sheetNum, owner } = useHistory().location.state;
  const gsheetID = process.env.REACT_APP_GSHEET_ID;
  const gsheetNum = sheetNum;
  const url = `https://spreadsheets.google.com/feeds/list/${gsheetID}/${gsheetNum}/public/values?alt=json`;

  const { data, isPending } = useFetch(url);

  let decks = [];
  if (data) {
    decks = [...new Set(data.feed.entry.map((item) => item.gsx$deck.$t))];
  }

  return (
    <>
      <h1 className='my-lg' style={{ textTransform: 'capitalize' }}>
        {owner}'s Review Topics
      </h1>
      <div className='underline'></div>
      <div className='collection'>
        {isPending && <Loading />}

        {decks &&
          decks.map((deck, index) => {
            return (
              <Link
                key={index}
                to={{
                  pathname: `/questions/${deck}`,
                  state: {
                    sheetNum,
                    owner,
                  },
                }}
                className='btn'>
                {deck}
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Yeye;
