import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    const filteredNews = data.filter((news) => news.category_id == id);
    setCategoryNews(filteredNews);
  }, [data, id]);
  return (
    <div>
      CategoryNews {id} {categoryNews.length} news found

    </div>
  );
};

export default CategoryNews;
