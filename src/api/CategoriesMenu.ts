import {Category} from "../types/types";
import BreackfastIcon from "../assets/Category/breakfast.jpeg"
import BurgersIcon from "../assets/Category/burgers.jpeg"
import ChickenIcon from "../assets/Category/chickenfishsandwiches.jpeg"
import McNuggetsIcon from "../assets/Category/mcnuggetscombo.jpeg"
import FriesIcon from "../assets/Category/snacks_sides.jpeg"
import HappyIcon from "../assets/Category/happy_meal.jpeg"
import McCaféIcon from "../assets/Category/mccafe.jpeg"
import BakeryIcon from "../assets/Category/mcd.jpeg"
import TreatsIcon from "../assets/Category/desserts_shakes.jpeg"
import BeveragesIcon from "../assets/Category/drinks.jpeg"
import AllMenuIcon from "../assets/Category/all.jpeg"
import {uid} from "uid";

export const CategoriesMenu: Category[] = [
    {id: uid(), name: 'All menu', image: AllMenuIcon},
    {id: uid(), name: 'Breakfast', image: BreackfastIcon},
    {id: uid(), name: 'Burgers', image: BurgersIcon},
    {id: uid(), name: 'Chicken & Fish Sandwiches', image: ChickenIcon},
    {id: uid(), name: 'McNuggets® and Meals', image: McNuggetsIcon},
    {id: uid(), name: 'Fries & Sides', image: FriesIcon},
    {id: uid(), name: 'Happy Meal®', image: HappyIcon},
    {id: uid(), name: 'McCafé® Coffees', image: McCaféIcon},
    {id: uid(), name: 'McCafé® Bakery', image: BakeryIcon},
    {id: uid(), name: 'Sweets & Treats', image: TreatsIcon},
    {id: uid(), name: 'Beverages', image: BeveragesIcon},
]