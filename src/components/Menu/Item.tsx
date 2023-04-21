import {FC} from "react";
import {Product} from "../../types/types";
import {WrapperItem} from "./style";

type Props = {
    item: Product
}
const Item: FC<Props> = ({item}) => {
    const {name} = item;
    return (
        <WrapperItem>{name}</WrapperItem>
    )
}
export default Item;