import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            {
                allNews.map(news => <NewsSummeryCard news={news} key={news._id}/>)
            }
        </div>
    );
};

export default Home;