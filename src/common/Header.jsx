import Hero from "../components/Hero";
import News from "../components/News";

export default function Header(){
    return (
        <header role={"banner"}>
            <Hero/>
            <News/>
        </header>
    )
}