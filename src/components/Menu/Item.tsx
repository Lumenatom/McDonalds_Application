import {FC, useState} from "react";
import {Product} from "../../types/types";
import {Basket, DescriptionItem, OptionBlockItem, PriceBlock, WrapperItem} from "./style";
import {IoBagAddOutline, CiCirclePlus, CiCircleMinus} from "react-icons/all";

type Props = {
    item: Product
    setItemsBasket: (el: (prev: Product[]) => (Product | Product)[]) => void;
}
const Item: FC<Props> = ({item, setItemsBasket}) => {
    const {name, image} = item;
    const [count, setCount] = useState(1)
    const handleCountItem = (e: string) => {
        if (e === 'plus') {
            setCount(prev => prev + 1)
        } else {
            if (count > 1) {
                setCount(prev => prev - 1)
            }
        }
    }

    return (
        <WrapperItem>
            <img src={image} alt={name}/>
            <DescriptionItem>
                {name}
            </DescriptionItem>
            <PriceBlock>
                {/*<span>last</span>*/}
                <p>$5.50</p>
            </PriceBlock>
            <OptionBlockItem>
                <span>
                    <CiCircleMinus onClick={() => handleCountItem('minus')}/>
                    <p>{count}</p>
                    <CiCirclePlus onClick={() => handleCountItem('plus')}/>
                </span>
                <Basket>
                    <IoBagAddOutline onClick={() => setItemsBasket((prev: Product[]) => [...prev, item])}/>
                </Basket>
            </OptionBlockItem>

        </WrapperItem>
    )
}
export default Item;