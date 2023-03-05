import { useState } from "react";
import articles from "../assets/data/articles";

const newArticles = articles.filter(article => article.category === "new");

export default function News() {
    const [ news, setNews ] = useState(newArticles);

    return (
        <div className={"aside"}>
            <h1 className={"news-heading"}>New</h1>
            <div className={"news-list"}>
                {
                    news.slice(0, 3).map(article => {
                        const { id, title, description } = article;
                        return (
                            <div key={id} className={"news-item"}>
                                <h2 className={"news-title"}>{title}</h2>
                                <p className={"news-paragraph"}>{description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}