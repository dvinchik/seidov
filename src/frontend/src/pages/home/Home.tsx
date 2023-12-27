import React, { useEffect, useState } from 'react';
import Api from '../../services/Api';
import NewsItem from '../../dto/NewsItem';
import NewsItemComponent from '../../components/news-item/NewsItem';
import './Home.css';

const Home: React.FC = () => {
    const [items, setItems] = useState<NewsItem[]>([]);
    useEffect(() => {
        async function fetchNews() {
            try {
                const data = await Api.getNewsList();
                setItems(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchNews()
    }, [])
  return (
    <>
        <h1>Home</h1>
        {items.map((item, index) => (
            <NewsItemComponent key={index} item={item} />
        ))}
    </>
  )
}

export default Home
