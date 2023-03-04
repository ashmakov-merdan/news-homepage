import future from "../images/image-1.jpg";
import laptops from "../images/image-2.jpg";
import retro from "../images/image-3.jpg";
import gaming from "../images/image-4.jpg";

const articles = [
    {
        id: 1,
        title: "Reviving Retro PCs",
        description: "When happend when old PCs are given modern upgrades?",
        category: "top",
        image: retro
    },
    {
        id: 2,
        title: "Top 10 Laptops of 2022",
        description: "Our best picks for various needs and budgets.",
        category: "top",
        image: laptops
    },
    {
        id: 3,
        title: "The Growth of Gaming",
        description: "How the pandemic has sparked fresh opportunities",
        category: "top",
        image: gaming
    },
    {
        id: 4,
        title: "Hydrogen VS Electic Cars",
        description: "Will hydrogen-fueled cars ever catch up to EVs",
        category: "new"
    },
    {
        id: 5,
        title: "The Downsides of AI Artistry",
        description: "What are the possible adverse effects of on-demand AI image generation?",
        category: "new"
    },
    {
        id: 6,
        title: "Is VC Funding Drying Up?",
        description: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
        category: "new"
    },
    {
        id: 8,
        title: "The Bright Future of Web 3.0?",
        description: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promises?",
        category: "trending",
        image: future
    }
]

export default articles;