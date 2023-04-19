import React, { useState } from 'react';
import { Loader } from './Loader/Loader';
import { SearchBar } from './Search/Search';
import { NewsItemList } from './NewsList/NewsList';
import { AppWrapper, TextReportG, TextReportB, Button } from './App.styled';
import axios from 'axios';
import { toast } from 'react-toastify';

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsItems, setNewsItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidSearch, setIsInvalidSearch] = useState(false);

  async function getNews(term) {
    if (!term.trim()) {
      setIsInvalidSearch(true);
      setIsLoading(false);
      return;
    }
    setIsInvalidSearch(false);
    setIsLoading(true);
    const encodedTerm = encodeURIComponent(term);
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodedTerm}&api-key=8N1AbWqRpnQWeV5VdRc9LcAyq1NAOG3p`;
    try {
      const response = await axios.get(URL);
      const data = response.data;
      setIsLoading(false);
      const sortedNewsItems = data.response.docs.sort((a, b) =>
        b.pub_date.localeCompare(a.pub_date)
      );
      setNewsItems(sortedNewsItems);
      setDisplayedItems(sortedNewsItems.slice(0, 4));
      return;
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    // if (!/^[a-zA-Z]+$/.test(searchTerm)) {
    //   toast.warn('Please enter a valid English word.');
    //   return;
    // }
    if (!/^[a-zA-Z\u00C0-\u024F]+$/.test(searchTerm)) {
      toast.warn('Please enter a valid word.');
      return setSearchTerm('');
    }
    getNews(searchTerm);
    setSearchTerm('');
  }

  function handleLoadMore() {
    const currentlyDisplayed = displayedItems.length;
    const nextIndex = currentlyDisplayed + 4;
    setDisplayedItems([
      ...displayedItems,
      ...newsItems.slice(currentlyDisplayed, nextIndex),
    ]);
  }

  return (
    <AppWrapper>
      {!isInvalidSearch && newsItems.length === 0 && (
        <TextReportB>Please enter a valid English word.</TextReportB>
      )}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      {newsItems.length > 0 && (
        <TextReportG>Total articles found: {newsItems.length}</TextReportG>
      )}

      <NewsItemList newsItems={displayedItems} />
      {isLoading && <Loader />}
      {displayedItems.length < newsItems.length && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
    </AppWrapper>
  );
};
