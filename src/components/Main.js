import React, { Component } from 'react';
import MoreButton from './MoreButton';
import SourcesBar from './SourcesBar';
import SearchBar from "./SearchBar";
import APIManager from "./APIManager";
import ContentWrapper from "./ContentWrapper";
import Spinner from "./Spinner";
import ErrorDetiles from "./ErrorBoundary";
import "../style.css";

class Main extends Component {

    constructor(props) {
        super(props);  
        this.state = {
            sources: [],
            articles: [],
            content: [],
            query: "top-headlines?country=ru", 
            newsDisplayed: 0,
            hasError: false,
            error: null,
            errorInfo: null,
        };
        this.PAGE_CAPACITY = APIManager.PAGE_CAPACITY;
        this.CHUNK_SIZE = APIManager.CHUNK_SIZE;
        this.loadMoreClick = this.loadMoreClick.bind(this);
        this.sourceClick = this.sourceClick.bind(this);
        this.filterClick = this.filterClick.bind(this);
    }

    loadMoreClick() {
        this.setState({
            content: this.state.content.concat(this.state.articles.slice(this.state.newsDisplayed,
                this.state.newsDisplayed + this.CHUNK_SIZE)),
            newsDisplayed: this.state.newsDisplayed + this.CHUNK_SIZE,
        });
    }

    sourceClick(event) {
        this.setState({ query: `everything?sources=${event.target.id}` }, () => {
            this.performRequest();
        });
    }

    filterClick() {
        const newQuery = document.querySelector('#search-field').value;
        if (newQuery.length > 0) {
            this.setState({ query: `everything?q=${newQuery}` }, () => {
                this.performRequest();
            });
        } else {
            this.setState({ query: `top-headlines?country=ru` }, () => {
                this.performRequest();
            });
        }
    }

    componentDidMount() {
        APIManager.loadSources().then(data => {
            this.setState({
                sources: data.sources
            });
        });


        this.performRequest();
    }

    componentDidCatch(error, errorInfo){  
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo,
          });
          console.error("ErrorBound : ", error);
          console.error("ErrorBound info: ", errorInfo);
    }

    performRequest() {
        APIManager.loadRequest(this.state.query).then(data => {
            this.setState({ newsDisplayed: 0 });
            if (data.articles.length) {
                this.setState({
                    articles: data.articles,
                    content: data.articles.slice(this.state.newsDisplayed, this.state.newsDisplayed + this.CHUNK_SIZE),
                    newsDisplayed: this.state.newsDisplayed + this.CHUNK_SIZE,
                });
            } else {
                this.setState({
                    articles: [],
                    content: []
                });
            }
        });
    }

    render() {
        if (this.state.hasError) {
            return (
              <div className="error-message">
                <h2>Something went wrong.</h2>
                <div className="error-text">
                  {this.state.error && this.state.error.toString()}
                  <hr />
                  {this.state.errorInfo && (
                    <ErrorDetiles errInfo={JSON.stringify(this.state.errorInfo)} />
                  )}
                </div>
              </div>
            );
          }
        return (
            <main>
                <div className="header">
                    <div className="header-text">
                        <h1>NewsAPI</h1>
                    </div>
                    <SourcesBar sources={this.state.sources} clickHandler={this.sourceClick} />
                    <SearchBar queryHandler={this.filterClick} />
                </div>

                <div className="main">

                    <ContentWrapper articles={this.state.content} />
                    <Spinner visible={this.state.newsDisplayed < 1} />
                    <MoreButton clickHandler={this.loadMoreClick}
                        visible={this.state.newsDisplayed < this.PAGE_CAPACITY
                            && this.state.newsDisplayed < this.state.articles.length
                            && this.state.newsDisplayed > 0} />
                </div>
            </main>
        );
    }
}

export default Main