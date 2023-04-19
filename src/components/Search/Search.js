import { SearchWrapper, SearchBtn } from './Search.styled';
// import { toast } from 'react-hot-toast';

import { FiSearch } from 'react-icons/fi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  // const notify = () => {
  //   if (!/^[a-zA-Z]+$/.test(searchTerm)) {
  //     toast.warn('Please enter a valid English word.');
  //     return;
  //   }
  //   // if (!/^[a-zA-Z\u00C0-\u024F]+$/.test(searchTerm)) {
  //   //   toast.warn('Please enter a valid word.');
  //   //   return;
  //   // }
  // };

  return (
    <SearchWrapper>
      <h1>The New York Times</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search ..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <SearchBtn type="submit" onClick={handleSearch}>
          <FiSearch size="18" />
          Search
        </SearchBtn>
      </form>
      <ToastContainer />
    </SearchWrapper>
  );
};
