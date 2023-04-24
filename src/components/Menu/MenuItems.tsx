import {FC} from "react";
import useActiveCategory from "../../hooks/useActiveCategory";
import {CategoriesMenu} from "../../api/CategoriesMenu";
import {CategoryName, MenuCategory, MenuTitle, WrapperCategories, WrapperItems, WrapperMenu} from "./style";
import Item from "./Item";
import {PropsSearch} from "../../types/types";
import useAllMenu from "../../hooks/useAllMenu";

const MenuItems: FC<PropsSearch> = ({value, visibleSearch, setVisibleSearch}) => {
    const {
        visibleCategory,
        setVisibleCategory,
        activeCategoryItems,
    } = useActiveCategory()
    const {allMenu} = useAllMenu()

    const findProduct = () => {
        if (visibleSearch) {
            return allMenu.filter(({name}) =>
                name.toLowerCase().includes(value.toLowerCase())
            )
        }
        return activeCategoryItems.filter(({name}) =>
            name.toLowerCase().includes(value.toLowerCase())
        )
    }

    return (
        <WrapperMenu>
            <MenuTitle>Menu</MenuTitle>
            <WrapperCategories>
                {
                    CategoriesMenu.map((category) => (
                        <MenuCategory key={category.id} onClick={() => {
                            setVisibleCategory(category.name)
                            setVisibleSearch ? setVisibleSearch(false) : false;

                        }

                        }>
                            <img src={category.image} alt={category.name}/>
                            <CategoryName selected={visibleCategory === category.name && true}
                            >{category.name}</CategoryName>
                        </MenuCategory>

                    ))
                }
            </WrapperCategories>
            <WrapperItems>
                {
                    findProduct().map((el) => (
                        <Item key={el.id} item={el}/>
                    ))
                }
            </WrapperItems>
        </WrapperMenu>

    )
}

export default MenuItems