import {FC} from "react";
import {Product} from "../../types/types";
import {WrapperItem} from "./style";

type Props = {
    item: Product
}
const Item: FC<Props> = ({item}) => {
    const {name, image} = item;
    return (
        <WrapperItem>
            <img src={image} alt={name}/>
            <h3>
                {name}
            </h3>
            <p> PRICE:5$
            </p>
        </WrapperItem>
    )
}
export default Item;