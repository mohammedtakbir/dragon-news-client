import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../../Hooks/UseTitle';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const allNews = useLoaderData();
    useTitle('Category')
    return (
        <div>
            {
                allNews.map(news => <NewsSummeryCard news={news} key={news._id}/>)
            }
        </div>
    );
};

export default Category;