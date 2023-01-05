import Icon from './Icons.jsx'

function MiBoton (props) {
    const {
        text = '',
        icono = 'user',
        color = 'primary'
    } = props;

    return (
      <>
            {color == 'primary' && <button type="button" className="p-2 px-5 ml-2 border-2 flex focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  bg-blue-600 cursor-pointer text-white hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 hover:text-white rounded-lg dark:border-blue-800 dark:border-2 dark:hover:bg-blue-800 items-center"><Icon icono={icono}></Icon>{text}</button>}
            {color == 'alternative' && <button type="button" className="p-2 px-5 ml-2 border-2 flex text-gray-600 border-gray-400 bg-white-600 font-bold hover:bg-gray-400 hover:text-white rounded-lg dark:border-gray-400 dark:border-2 dark:bg-gray-600 dark:hover:bg-gray-400 dark:text-white"><Icon icono={icono}></Icon>{text}</button>}
      </>
    )            
} 

import { useState, useEffect } from 'react';

function BotonDark (props){
    const {
        text = ''
    } = props;

    const [theme, setTheme] = useState('dark');

    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
  
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
            <button onClick={handleThemeSwitch} className="py-2 p-2 px-2 ml-2 border-2 text-white bg-amber-400 font-bold hover:bg-amber-300 hover:text-white rounded-lg dark:border-2 dark:bg-white dark:hover:bg-amber-300 dark:text-gray-600">{text}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          </button>
    )            
} 

export {MiBoton, BotonDark};
