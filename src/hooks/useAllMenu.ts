import {useEffect, useState} from "react";
import {Breakfast} from "../api/Breakfast";
import {Burgers} from "../api/Burgers";
import {Product} from "../types/types";
import {Sandwiches} from "../api/Sandwiches";
import {McNuggets} from "../api/McNuggets";
import {Sides} from "../api/Sides";
import {Happy} from "../api/Happy";
import {Coffees} from "../api/Coffees";
import {Bakery} from "../api/Bakery";
import {Sweets} from "../api/Sweets";
import {Beverages} from "../api/Beverages";

const useAllMenu = () => {
    const [allMenu, setAllMenu] = useState<Product[]>([])

    useEffect(() => {
        const all : Product[] = []

        Breakfast.forEach((el) => all.push(el))
        Burgers.forEach((el) => all.push(el))
        Sandwiches.forEach((el) => all.push(el))
        McNuggets.forEach((el) => all.push(el))
        Sides.forEach((el) => all.push(el))
        Happy.forEach((el) => all.push(el))
        Coffees.forEach((el) => all.push(el))
        Bakery.forEach((el) => all.push(el))
        Sweets.forEach((el) => all.push(el))
        Beverages.forEach((el) => all.push(el))

        setAllMenu(all)
    }, [])

    return {allMenu}
}

export default useAllMenu;