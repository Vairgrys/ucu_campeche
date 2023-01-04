
function MiInput (props) {
    const {
        placeholder = '',
    } = props;

    return (
            <input type="text" placeholder={placeholder} className="p-2 text-white font-medium bg-slate-200"/>
    )            
} 

export default MiInput;