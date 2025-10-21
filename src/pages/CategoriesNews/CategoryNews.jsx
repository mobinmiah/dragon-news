import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../components/homelayout/newsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);
  return (
    <div>
      <h2 className="font-semibold text-xl text-primary">
        Dragon News Home <span className="font-medium">| Total News</span>{" "}
        <span className="text-secondary">{categoryNews.length}</span>
        <div className="space-y-4 mt-5">
          {categoryNews.map((news) => (
            <NewsCard key={news.id} news={news}></NewsCard>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default CategoryNews;
