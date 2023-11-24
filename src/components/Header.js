import logojpg from "../assets/logo.jpg"
import Button from "./UI/Buttons";
export default function Header(){
    return (
    <header id="main-header">
        <div id="title">
            <img src={logojpg} alt="" />
            <h1>React Food</h1>           
        </div>
        <nav>
            <Button >Cart(0)</Button>
        </nav>
    </header>
    );
}