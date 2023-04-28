import toast from 'react-hot-toast';
import { COLOR, FONTS } from "../assets/CONSTANTS.ts";


const useNotifications = () => {


    const handleNotifications = (title: string) => {
        toast(title, {
            icon:'✅',
            style: {
                fontFamily:FONTS.rubik,
                fontSize:FONTS.size16,
                fontWeight:FONTS.weight400,
                color:COLOR.gray
            },
        })
    }

    return {
        handleNotifications
    }
}

export default useNotifications