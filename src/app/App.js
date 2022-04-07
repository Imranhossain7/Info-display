import React from "react";
import Header from "../components/header";
import News, { newsCategory } from "../news";
import NewsList from "../components/newsList";
import Pagination from "../components/pagination";
import Loading from "../components/loading";

const news = new News(newsCategory.technology);
class App extends React.Component {
  state = {
    data: {},
    isLoading: true,
  };

  componentDidMount() {
    news
      .getNews()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  }

  next = () => {
    if (this.state.data.isNext) {
      this.setState({ isLoading: true });
    }
    news
      .next()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  };

  prev = () => {
    if (this.state.data.isPrevious) {
      this.setState({ isLoading: true });
    }
    news
      .prev()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  };

  goToPage = () => {
    this.setState({ isLoading: true });
    news
      .setCurrentPage(this.state.data.currentPage)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  };

  changeCategory = (category) => {
    this.setState({ isLoading: true });
    news
      .changeCategory(category)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  };

  search = (searchTerm) => {
    this.setState({ isLoading: true });
    news
      .search(searchTerm)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  };

  handlePageChange = (value) => {
    this.setState({
      data: {
        ...this.state.data,
        currentPage: Number.parseInt(value),
      },
    });
  };

  render() {
    const {
      article,
      isNext,
      isPrevious,
      currentPage,
      category,
      totalResults,
      totalPage,
    } = this.state.data;

    return (
      <div className="container">
        <div classNam="row">
          <div className="col-sm-6 offset-md-3">
            <Header
              category={category}
              changeCategory={this.changeCategory}
              search={this.search}
            />

            <div className="d-flex">
              <p className="text-black-50">
                About {totalResults} result found.
              </p>
              <p className="text-black-50 ms-auto">
                {currentPage} of {totalPage} pages.
              </p>
            </div>

            {this.state.isLoading ? (
              <Loading />
            ) : (
              <div>
                <NewsList news={this.state.data.article} />
                <Pagination
                  next={this.next}
                  prev={this.prev}
                  isPrevious={isPrevious}
                  isNext={isNext}
                  totalPage={totalPage}
                  currentPage={currentPage}
                  handlePageChange={this.handlePageChange}
                  goToPage={this.goToPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
