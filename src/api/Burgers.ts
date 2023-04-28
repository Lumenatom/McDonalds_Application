import {Product} from "../types/types";
import {uid} from "uid";

export const Burgers: Product[] = [
    {id: uid(), name: 'Big Mac®', currentPrice: 3.75, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:1-4-product-tile-desktop'},
    {id: uid(), name: 'Quarter Pounder®* with Cheese', currentPrice: 4.95, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_0007-005_QuarterPounderwithCheese_832x472:1-4-product-tile-desktop'},
    {id: uid(), name: 'Double Quarter Pounder®* with Cheese', currentPrice: 6.25, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/202201_3426-005_DoubleQuarterPounderwithCheese_832x472:1-4-product-tile-desktop'},
    {id: uid(), name: 'Quarter Pounder®* with Cheese Deluxe', currentPrice: 8, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_4282_QuarterPounderCheeseDeluxe_Shredded_832x472:1-4-product-tile-desktop'},
    {id: uid(), name: 'McDouble®', currentPrice: 3.75, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/202002_0592_McDouble_Alt_832x472:1-4-product-tile-desktop'},
    {id: uid(), name: 'Quarter Pounder®* with Cheese Bacon', currentPrice: 2.25, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_4295-005_BaconQPC_832x472:1-4-product-tile-desktop'},
    {id: uid(), name: 'Cheeseburger', currentPrice: 4.95, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0003_Cheeseburger_StraightBun_832x472:1-4-product-tile-desktop'},
    {id: uid(), name: 'Double Cheeseburger', currentPrice: 3.75, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_0004_DoubleCheeseburger_Alt_832x472:1-4-product-tile-desktop'},
    {id: uid(), name: 'Hamburger: The Classic McDonald\'s Burger', currentPrice: 4, lastPrice: 0, image: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0001_Hamburger_Alt_832x472:1-4-product-tile-desktop'},
]