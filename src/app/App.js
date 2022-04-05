import React from "react";
import axios from "axios";
import Header from "../components/header";
import { newsCategory } from "../news";
import NewsList from "../components/newsList";
import Pagination from "../components/pagination";
import About from "../components/searchAbout";
import Loading from "../components/loading";

class App extends React.Component {
  state = {
    news: [],
  };
  componentDidMount() {
    const url = `${process.env.React_APP_NEWS_URL}?apiKey=${process.env.React_APP_NEWS_API_KEY}&category=technology&pageSize=10`;
    axios
      .get(url)
      .then((response) => {
        this.setState({ news: response.data.articles });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    return (
      <div className="container">
        <div classNam="row">
          <div className="col-sm-6 offset-md-3">
            <Header category={newsCategory.technology} />
            <About />
            <NewsList news={this.state.news} />
            <Pagination />
            <Loading />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
