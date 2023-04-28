import { FC } from "react";
import { EmptyBasket, ModalContent, TotalPrice, WrapperModalBasket } from "./style";
import { Product } from "../../types/types";
import { ProductToBasket } from "../../App.tsx";
import { FaRegSadTear, MdOutlineDeleteForever } from "react-icons/all";
import useNotifications from "../../hooks/useNotifications.ts";


type Props = {
    itemsBasket: ProductToBasket[];
    setItemsBasket: (el: Product[]) => void;
    setVisibleBasket: (el: boolean) => void;

}
const ModalBasket: FC<Props> = ({itemsBasket, setItemsBasket, setVisibleBasket}) => {
    const {handleNotifications} = useNotifications()

    const deleteItemBasket = (idItem: string) => {
        const filterItems = itemsBasket.filter(({id}) => id !== idItem);
        setItemsBasket(filterItems)
        handleNotifications('Item removed')
    }

    const handleAllPriceItem = (price: number, count: number): number => {
        return price * count
    }
    const handleAllTotal = (): number => {
        let total = 0
        itemsBasket.forEach((el) => {
            total += ((el.countItem || 1) * (el.currentPrice || 0));
        })
        return Number(total.toFixed(1))
    }

    return (
        <WrapperModalBasket
            initial={{
                opacity: 0,
                width: 0,
                x:0,
            }}
            animate={{
                opacity: 1,
                width: '370px',
                x:0,


            }}
            exit={{
                opacity: 0,
                width: 0,

                x:0,
            }} >
            {
                itemsBasket.length ? <ModalContent>
                        {
                            itemsBasket?.map((el) => (
                                <div className='item' key={el.name}>
                                    <div className='description'>
                                        <h2>{el.name}</h2>
                                        <img src={el.image} alt={el.name}/>
                                    </div>
                                    <div className='price'>
                                        <p>Quantity: <span>{el.countItem}</span></p>
                                        <div className='itemTotal'>
                                            <p>Item:<span className='finalPrice'>${el.currentPrice}</span></p>
                                            <p>Total:<span
                                                className='finalPrice'>${handleAllPriceItem(el.countItem || 1, el.currentPrice || 0)}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <button onClick={() => deleteItemBasket(el.id)}><MdOutlineDeleteForever/></button>
                                </div>
                            ))
                        }
                        <TotalPrice><p>Total:</p> <span>${handleAllTotal()}</span></TotalPrice>
                        <button onClick={() => {
                            setItemsBasket([])
                            setVisibleBasket(false)
                            handleNotifications('Your order is accepted!  Bon appetit :)')
                        }} className='order'>PLACE ORDER
                        </button>
                    </ModalContent>
                    : <EmptyBasket>
                        <FaRegSadTear/>
                        <h2>Sorry, your basket is empty.</h2>
                    </EmptyBasket>
            }
        </WrapperModalBasket>
    )
}

export default ModalBasket;