import {FC, useState} from "react";
import {Burgers} from "../../api/Burgers";
import {CategoriesMenu} from "../../api/CategoriesMenu";
import {CategoryName, MenuTitle, WrapperCategories, WrapperItems, WrapperMenu} from "./style";
import Item from "./Item";

const MenuItems: FC = () => {
    const [visibleCategory, setVisibleCategory] = useState('Burgers')
    return (
        <WrapperMenu>
            <MenuTitle>Menu</MenuTitle>
            <WrapperCategories>
                {
                    CategoriesMenu.map((category) => (
                        <CategoryName selected={visibleCategory === category.name && true}
                                      onClick={() => setVisibleCategory(category.name)}
                                      key={category.id}>{category.name}</CategoryName>
                    ))
                }
            </WrapperCategories>
            <WrapperItems>
                {
                    Burgers.map((el) => (
                        <Item key={el.id} item={el}/>
                    ))
                }
            </WrapperItems>

        </WrapperMenu>

    )
}

export default MenuItems