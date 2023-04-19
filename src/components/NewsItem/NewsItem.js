import { NewsItemCard, Image, Content } from './NewsItem.styled';

export const NewsItem = ({ title, image, description, link, pubDate }) => {
  return (
    <NewsItemCard>
      <div>
        {image?.length > 0 ? (
          <Image src={`https://www.nytimes.com/${image}`} alt={title} />
        ) : (
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt={title}
          />
        )}
        <h2>{title}</h2>
      </div>

      <Content>
        <p>{description}</p>
        <p>{pubDate}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </Content>
    </NewsItemCard>
  );
};
