
function MiBoton (props) {
    const {
        text = '',
    } = props;

    return (
            <button className="p-2 text-white font-medium bg-blue-500">{text}</button>
    )            
} 


export default MiBoton