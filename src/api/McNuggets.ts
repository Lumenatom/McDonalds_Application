import {Product} from "../types/types";
import {uid} from "uid";

export const McNuggets: Product[] = [
    {id: uid(), name: 'Chicken McNuggets®', currentPrice: 0, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0483_4McNuggets_Stacked_832x472:1-4-product-tile-desktop'},
    {id: uid(), name: '10 Piece Chicken McNuggets®', currentPrice: 0, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202208_5280_10McNuggets_Stacked_832x472:1-4-product-tile-desktop'},
]