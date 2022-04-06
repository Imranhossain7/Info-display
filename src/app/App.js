import React from "react";
import axios from "axios";
import Header from "../components/header";
import News, { newsCategory } from "../news";
import NewsList from "../components/newsList";
import Pagination from "../components/pagination";
import About from "../components/searchAbout";
import Loading from "../components/loading";

class App extends React.Component {
  state = {
    news: [],
    category: newsCategory.technology,
  };

  changeCategory = (category) => {
    this.setState({ category });
  };

  componentDidMount() {
    // const url = `${process.env.React_APP_NEWS_URL}?apiKey=${process.env.React_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=10`;
    // axios
    //   .get(url)
    //   .then((response) => {
    //     this.setState({ news: response.data.articles });
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    const news = new News(newsCategory.technology);
    news.getNews().then((data) => {
      console.log(data);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.category !== this.state.category) {
    //   const url = `${process.env.React_APP_NEWS_URL}?apiKey=${process.env.React_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=10`;
    //   axios
    //     .get(url)
    //     .then((response) => {
    //       this.setState({ news: response.data.articles });
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // }
  }
  render() {
    return (
      <div className="container">
        <div classNam="row">
          <div className="col-sm-6 offset-md-3">
            <Header
              category={this.state.category}
              changeCategory={this.changeCategory}
            />
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
