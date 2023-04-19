import { NewsItem } from '../NewsItem/NewsItem';
import { NewsListWrapper } from './NewsList.styled';

export const NewsItemList = ({ newsItems }) => {
  const formatDate = date => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <NewsListWrapper>
      {newsItems.map(item => (
        <NewsItem
          key={item.web_url}
          title={item.headline.main}
          image={item.multimedia?.[0]?.url}
          description={item.abstract}
          link={item.web_url}
          pubDate={formatDate(item.pub_date)}
        />
      ))}
    </NewsListWrapper>
  );
};
