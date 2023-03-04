import "../assets/css/main.css";

// components
import Header from "../common/Header";
import Navigation from "../common/Navigation";
import TopNews from "../components/TopNews";

export default function Home() {
    return (
        <>
            <Navigation/>
            <Header/>
            <TopNews/>
        </>
    )
}