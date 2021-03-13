import Menu from "./components/menu";
import List from "./components/lists";

function Inbox(){
    return(
        <div className="flex flex-row w-screen h-screen">
            <Menu/>
            <List/>
        </div>
    )
}

export default Inbox;