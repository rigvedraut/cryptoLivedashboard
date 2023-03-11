import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Header from "../components/Header";

const News = () => {
  const [articles, setArticles] = useState();

  const threeDaysAgo = moment().subtract(3, "d").format("YYYY-MM-DD");

  const fetchArticles = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=coindesk&from=${threeDaysAgo}&language=en&apiKey=69563e91b17745efad0051f4c02a3f94`
      )
      .then((response) => {
        const data = response.data;
        setArticles(data.articles);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const articlesList = articles?.map((article, index) => {
    if (index < 12) {
      return (
        <div className="article-card" key={Math.floor(Math.random() * 10000)}>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <img src={article.urlToImage} alt="article" />
        </a>
          <div className="article-info">
            <div className="article-title">{article.title}</div>
            <div className="article-source">{article.source.name}</div>
            <div className="article-date">
              {moment(article.publishedAt).format("MMM DD, YYYY")}
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <>
    <Header />
    <div className="news-container">{articlesList}</div>
  </>
  );
}

export default News;