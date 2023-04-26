import {useEffect, useState} from "react";
import useAllMenu from "./useAllMenu";
import {Breakfast} from "../api/Breakfast";
import {Burgers} from "../api/Burgers";
import {Sandwiches} from "../api/Sandwiches";
import {McNuggets} from "../api/McNuggets";
import {Sides} from "../api/Sides";
import {Happy} from "../api/Happy";
import {Coffees} from "../api/Coffees";
import {Bakery} from "../api/Bakery";
import {Sweets} from "../api/Sweets";
import {Beverages} from "../api/Beverages";


const useActiveCategory = () => {
    const [visibleCategory, setVisibleCategory] = useState('Breakfast')
    const [activeCategoryItems, setActiveCategoryItems] = useState(Breakfast)
    const {allMenu} = useAllMenu()
    useEffect(() => {
        switch (visibleCategory ) {
            case 'All menu':
                setActiveCategoryItems(allMenu)
                break;
            case 'Breakfast':
                setActiveCategoryItems(Breakfast)
                break;
            case 'Burgers':
                setActiveCategoryItems(Burgers)
                break;
            case 'Chicken & Fish Sandwiches':
                setActiveCategoryItems(Sandwiches)
                break;
            case 'McNuggets® and Meals':
                setActiveCategoryItems(McNuggets)
                break;
            case 'Fries & Sides':
                setActiveCategoryItems(Sides)
                break;
            case 'Happy Meal®':
                setActiveCategoryItems(Happy)
                break;
            case 'McCafé® Coffees':
                setActiveCategoryItems(Coffees)
                break;
            case 'McCafé® Bakery':
                setActiveCategoryItems(Bakery)
                break;
            case 'Sweets & Treats':
                setActiveCategoryItems(Sweets)
                break;
            case 'Beverages':
                setActiveCategoryItems(Beverages)
                break;
            default :
                break;

        }

    }, [ visibleCategory])


    return {
        visibleCategory, setVisibleCategory, activeCategoryItems
    }

}
export default useActiveCategory;