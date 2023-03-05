import { useState } from "react";
import articles from "../assets/data/articles";

const topArticles = articles.filter(article => article.category === "top");

export default function TopNews() {
    const [ news, setNews ] = useState(topArticles);

    return (
        <div className={"top-section"}>
            <div className={"top-news"}>
                {
                    news.map((article, index) => {
                        const { id, title, description, image } = article;
                        return (
                            <div key={id} className={"top-newsItem"}>
                                <img src={image} alt={title}/>
                                <div className={"top-newsContent"}>
                                    <span className={"top-newsCount"}>{index < 10 ? `0${index + 1}` : index + 1}</span>
                                    <h3 className={"top-newsTitle"}>{title}</h3>
                                    <p className={"top-newsParagraph"}>{description}</p>
                                </div>
                            </div>
                        )
                    })
                }            
            </div>
        </div>
    )
}