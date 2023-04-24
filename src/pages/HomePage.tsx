import {FC} from "react";
import {Container, WrapperHomePage} from "./style";
import BannerNews from "../components/Header/BannerNews";
import MenuItems from "../components/Menu/MenuItems";
import {PropsSearch} from "../types/types";

const HomePage: FC<PropsSearch> = ({value, visibleSearch,setVisibleSearch}) => {


    return (
        <WrapperHomePage>
            <BannerNews/>
            <Container>
                <MenuItems value={value} visibleSearch={visibleSearch} setVisibleSearch={setVisibleSearch}/>
            </Container>
        </WrapperHomePage>
    )
}

export default HomePage