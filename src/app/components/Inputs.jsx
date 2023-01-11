import Icon from './Icons.jsx'

function MiInput (props) {
    const {
        placeholder = '',
        icono = 'user',
        type = 'text'
    } = props;

    return ( 
        <>
        <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <Icon icono={icono}></Icon>
        </div>
            <input type={type} placeholder={placeholder} className="rounded-lg border-1 border-gray-400 pl-10 p-2.5 w-full dark:bg-gray-600 dark:text-blue"/>
            </div>
        </>

    )            
} 

export default MiInput;