import { useState } from "react";
import articles from "../assets/data/articles";

const trending = articles.find(article => article.category === "trending");

export default function Hero() {
    const [ news, setNews ] = useState(trending);
    console.log(trending)
    return (
        <div className={"hero-section"}>
            <div className={"hero-image"}>
                <img src={news.image} alt={news.title}/>
            </div>
            <div className={"hero-content"}>
                <h1 className={"hero-title"}>{news.title}</h1>
                <div className={"hero-description"}>
                    <p>{news.description}</p>
                    <button type={"button"} className={"hero-btn"}>Read more</button>
                </div>
            </div>
        </div>
    )
}