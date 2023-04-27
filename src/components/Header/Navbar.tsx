import {FC, useState} from "react";
import {WrapperNavbar, NavbarSearch, NavbarContent, BasketBlock} from "./style";
import Logo from "../../assets/logo.jpg"
import {AiOutlineSearch, AiOutlineShopping} from "react-icons/all";
import {AnimatePresence, motion} from "framer-motion"
import {Product, PropsSearch} from "../../types/types";
import ModalBasket from "../ModalBasket/ModalBasket";

type Props = PropsSearch & {
    itemsBasket: Product[];
    setItemsBasket: (el: Product[]) => void;
}

const Navbar: FC<Props> = ({value, setValue, visibleSearch, setVisibleSearch, itemsBasket, setItemsBasket}) => {
    const [visibleBasket, setVisibleBasket] = useState(false)

    return (
        <WrapperNavbar>
            <NavbarContent>
                <NavbarSearch>
                    <img src={Logo} alt="McDonald's"/>
                    <AiOutlineSearch onClick={() => {
                        setVisibleSearch ? setVisibleSearch(!visibleSearch) : visibleSearch;
                        setValue ? setValue('') : '';
                    }}/>
                    <AnimatePresence>
                        {
                            visibleSearch &&
                            <motion.input type="text" value={value}
                                          onChange={(e) => setValue ? setValue(e.target.value) : ''}
                                          autoFocus={visibleSearch} initial={{opacity: 0}}
                                          animate={{opacity: 1}}
                                          exit={{opacity: 0}}/>
                        }
                    </AnimatePresence>
                </NavbarSearch>
                <BasketBlock>
                    <AiOutlineShopping onClick={() => setVisibleBasket(!visibleBasket)}/>
                    {
                        itemsBasket.length > 0 &&  <span>{itemsBasket.length}</span>
                    }
                </BasketBlock>
            </NavbarContent>
            <AnimatePresence>
                {visibleBasket && <ModalBasket itemsBasket={itemsBasket} setItemsBasket={setItemsBasket}/>}
            </AnimatePresence>
        </WrapperNavbar>
    )
}

export default Navbar