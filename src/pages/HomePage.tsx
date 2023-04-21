import {FC} from "react";
import {Container, WrapperHomePage} from "./style";
import BannerNews from "../components/Header/BannerNews";
import MenuItems from "../components/Menu/MenuItems";

const HomePage: FC = () => {
    return (
        <WrapperHomePage>
            <BannerNews/>
            <Container>
                <MenuItems/>
            </Container>
        </WrapperHomePage>
    )
}

export default HomePage