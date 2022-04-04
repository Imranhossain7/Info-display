import React from "react";
import Header from "../components/header";
import { newsCategory } from "../news";
import NewsList from "../components/newsList";
import Pagination from "../components/pagination";
import About from "../components/searchAbout";
import Loading from "../components/loading";

const fakeNews = [
  {
    title: "first one",
    content: "lorem10",
    url: "https://linktonews.com",
    urlToImage: "https://linktonews.com",
    publishedAt: "published date and time",
    source: {
      name: "cnn",
    },
  },
  {
    title: "first one",
    content: "lorem10",
    url: "https://linktonews.com",
    urlToImage: "https://linktonews.com",
    publishedAt: "published date and time",
    source: {
      name: "cnn",
    },
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div classNam="row">
          <div className="col-sm-6 offset-md-3">
            <Header category={newsCategory.technology} />
            <About />
            <NewsList news={fakeNews} />
            <Pagination />
            <Loading />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
