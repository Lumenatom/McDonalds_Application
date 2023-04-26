import {FC} from "react";
import {Container, WrapperHomePage} from "./style";
import BannerNews from "../components/Header/BannerNews";
import MenuItems from "../components/Menu/MenuItems";
import {Product, PropsSearch} from "../types/types";

type Props = PropsSearch & {
    setItemsBasket: (el: (prev: Product[]) => (Product | Product)[]) => void;
}
const HomePage: FC<Props> = ({value, visibleSearch, setVisibleSearch, setItemsBasket}) => {


    return (
        <WrapperHomePage>
            <BannerNews/>
            <Container>
                <MenuItems value={value} visibleSearch={visibleSearch} setVisibleSearch={setVisibleSearch}
                           setItemsBasket={setItemsBasket}/>
            </Container>
        </WrapperHomePage>
    )
}

export default HomePage