import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Search from './Search';
import Mypage from './Mypage';
import PropTypes from 'prop-types';

const Main = ({ logoutHandler, userdata }) => {

  const [searchValue, setSearchValue] = useState(null);
  const [searchType, setSearchType] = useState('');
  const [title, setTitle] = useState('');
  const [isNext, setIsnext] = useState(true);
  const [nowPages, setNowPages] = useState(1);

  const searchHandler = (data, searchType, searchValue) => {
    setSearchValue(data); //헤더에서 검색한 결과(노래들이 들어있는 배열)
    setSearchType(searchType); //가수 OR 제목
    setTitle(searchValue); //헤더에서 검색한 검색어
    setIsnext(data.page.isNext);//헤더에서 처음 검색했을 때 가지고 오는 next값
    setNowPages(data.page.nowPages); //헤더에서 처음 검색했을 때 가지고 오는 nowpages값
  };
  return (
    <Router>
      <Header logoutHandler={logoutHandler} searchHandler={searchHandler} />
      <Switch>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/search">
          <Search searchValue={searchValue} searchType={searchType} title={title} userdata={userdata} isNext={isNext} nowPages={nowPages} />
        </Route>
      </Switch >
    </Router >
  );
};

Main.propTypes = {
  logoutHandler: PropTypes.func,
  userdata: PropTypes.object
};

export default Main;