import {Product} from "../types/types";
import {uid} from "uid";

export const Happy: Product[] = [
    {id: uid(), name: 'Hamburger Happy Meal®', currentPrice: 15, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202103_6975_HamburgerHappyMeal_AppleSlices_WhiteMilkJug_Left_832x472:1-4-product-tile-desktop'},
    {id: uid(), name: '4 Piece Chicken McNuggets® Happy Meal', currentPrice: 15.75, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202103_7002_4McNuggetsHappyMeal_AppleSlices_WhiteMilkJug_Left_832x472:1-4-product-tile-desktop'},
    {id: uid(), name: '6 Piece Chicken McNuggets® Happy Meal®', currentPrice: 19.5, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202103_7780_6McNuggetsHappyMeal_AppleSlices_WhiteMilkJug_Left_832x472:1-4-product-tile-desktop'},
]