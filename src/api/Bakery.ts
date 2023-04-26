import {Product} from "../types/types";
import {uid} from "uid";

export const Bakery: Product[] = [
    {id: uid(), name: 'Apple Fritter', currentPrice: 0, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202108_0791_AppleFritter_832x472:1-4-product-tile-desktop'},
    {id: uid(), name: 'Blueberry Muffin\n', currentPrice: 0, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202108_6500-001_BlueberryMuffin_832x472:1-4-product-tile-desktop'},
    {id: uid(), name: 'Cinnamon Roll with Cream Cheese Icing\n', currentPrice: 0, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202109_1557_CinnamonRoll_832x472:1-4-product-tile-desktop'},

]