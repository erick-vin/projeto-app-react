import { Link } from "react-router-dom";
import Icon from "../Icons";
import NavigationItem from "../NavigationItem";
import SideBar from "../SideBar";
import BodyPage from "../BodyPage";
import { DarkThemeToggle } from "flowbite-react";

const Navigation = ({ children }) => {
    return (
        <div>
            <SideBar>
                <Link to="/">
                    <NavigationItem icon={<Icon ativo={true} Icon="dashboard"/>} text="dashboard" />
                </Link>
                <Link to="/">
                    <NavigationItem icon={<Icon ativo={false} Icon="file"/>} text="Pedidos" />
                </Link>
                <DarkThemeToggle/>  
            </SideBar>

            <BodyPage>
                {children}
            </BodyPage>
        </div>
    )
}

export default Navigation