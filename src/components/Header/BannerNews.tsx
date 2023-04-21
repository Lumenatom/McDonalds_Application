import {FC, useState} from "react";
import {ActiveBanner, WrapperBannerNews} from "./style";
import BannerOne from "../../assets/banerOne.jpeg";
import BannerTwo from "../../assets/banerTwo.jpg";
import BannerThree from "../../assets/banerThree.jpg";
import {IoIosArrowBack, IoIosArrowForward, RxDot, RxDotFilled} from "react-icons/all";
// import {AnimatePresence, motion} from "framer-motion"

const BannerNews: FC = () => {
    const [activeBanner, setActiveBanner] = useState<string>(BannerOne)
    const [visibleBanner, setVisibleBanner] = useState<number>(1)

    const handleActiveBanner = (el: number) => {
        if (el === 1 || el === 2 || el === 3) {
            setVisibleBanner(el)
        }
        switch (el) {
            case 1 :
                setActiveBanner(BannerOne)
                return
            case 2:
                setActiveBanner(BannerTwo)
                return;
            case 3:
                setActiveBanner(BannerThree)
                return;
            default :
                return;
        }
    }

    return (
        <WrapperBannerNews>
            <ActiveBanner bannerImage={activeBanner}>
                <IoIosArrowBack onClick={() => handleActiveBanner(visibleBanner - 1)}/>
                {visibleBanner === 1 ? <RxDotFilled/>
                    : <RxDot/>}
                {visibleBanner === 2 ? <RxDotFilled/>
                    : <RxDot/>}
                {visibleBanner === 3 ? <RxDotFilled/>
                    : <RxDot/>}
                <IoIosArrowForward onClick={() => handleActiveBanner(visibleBanner + 1)}/>
            </ActiveBanner>
        </WrapperBannerNews>
    )
}
export default BannerNews