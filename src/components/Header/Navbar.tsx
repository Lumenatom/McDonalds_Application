import {FC} from "react";
import {WrapperNavbar, NavbarSearch} from "./style";
import Logo from "../../assets/logo.jpg"
import {AiOutlineSearch, AiOutlineShopping} from "react-icons/all";
import {AnimatePresence, motion} from "framer-motion"
import {PropsSearch} from "../../types/types";

const Navbar: FC<PropsSearch> = ({value, setValue, visibleSearch, setVisibleSearch}) => {

    return (
        <WrapperNavbar>
            <NavbarSearch>
                <img src={Logo} alt="McDonald's"/>
                <AiOutlineSearch onClick={() =>{
                    setVisibleSearch ? setVisibleSearch(!visibleSearch) : visibleSearch;
                    setValue ? setValue('') :'';
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
            <AiOutlineShopping/>
        </WrapperNavbar>
    )
}

export default Navbar