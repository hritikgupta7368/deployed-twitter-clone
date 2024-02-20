"use client"
import { useModal } from "@/app/providers/contextprovider"
import PremiumModal from "./premiumModal";
import PostButtonModal from "./postButtonModal";
import Edit_profile_Modal from "./editprofile";


const Modals= () => {
    const { isModalOpen , handleModal ,modalType} = useModal();
    const renderModal = () => {
       
        switch (modalType) {
            case 'premium':
                return <PremiumModal />;
            case 'createPost':
                return < PostButtonModal />;
            case 'editprofile':
                return <Edit_profile_Modal />;
            default:
                return null;
        }
       
    };

    if(isModalOpen){
        return <div  className="fixed inset-0 bg-slate-700/60 z-50 "> {renderModal()}</div>
    }
}

export default Modals
