import {FC} from "react";
import {ModalContent, WrapperModalBasket} from "./style";
import {Product} from "../../types/types";

type Props = {
    itemsBasket: Product[];
    setItemsBasket: (el: Product[]) => void;
}
const ModalBasket: FC<Props> = ({itemsBasket, setItemsBasket}) => {

    const deleteItemBasket = (idItem: string) => {
        const filterItems = itemsBasket.filter(({id}) => id !== idItem);
        setItemsBasket(filterItems)
    }

    return (
        <WrapperModalBasket initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}} transition={{duration: 0.5}}>
            <ModalContent>
                {
                    itemsBasket?.map((el) => (
                        <div className='item' key={el.name}>
                            <p>{el.name}</p>
                            <p>{el.currentPrice}</p>
                            <div onClick={() => deleteItemBasket(el.id)}>DELETE</div>
                        </div>
                    ))
                }
            </ModalContent>
        </WrapperModalBasket>
    )
}

export default ModalBasket;