import { useRecoilState } from "recoil";
import { isVisibleLogin } from "../store/atomModal";
import { BotonDark } from "./Buttons";

function ComponenteFalso () {
    const [isModalVisible, setModalVisible] = useRecoilState(isVisibleLogin)


    function toggleModal(){
        setModalVisible(!isModalVisible);
    }

    return (
        <div className="absolute bottom-3 left-3 w-24 h-24">
           <button className="bg-blue-400 w-full h-full rounded-sm" onClick={ () => { toggleModal() }}>Togglear modal</button>
        </div>
    )
}

export {ComponenteFalso}