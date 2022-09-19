import React from 'react';

export default class Article extends React.Component{
    render(){
        return(
            <div className="news-item">
                <div className="news-picture" style={{backgroundImage:`url(${this.props.image})`}}>

                </div>
                <div className="news-content">
                    <h2 className="news-title">{this.props.title}</h2>
                    <h3 className="news-source">{this.props.source}</h3>
                    <p className="news-text">{this.props.text}</p>
                    <a className="news-link" href={this.props.link}>Читать дальше </a>
                </div>
            </div>
        );
    }
}