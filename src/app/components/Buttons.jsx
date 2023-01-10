import Icon from './Icons.jsx'

function MiBoton (props) {
    const {
        text = '',
        icono = 'user',
        color = 'primary'
    } = props;

    return (
      <>
            {color == 'primary' && <button type="button" className="p-2 px-5 ml-2 place-items-start border-2 flex focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  bg-blue-600 cursor-pointer text-white hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 hover:text-white rounded-lg dark:border-blue-800 dark:border-2 dark:hover:bg-blue-800 items-center"><Icon icono={icono}></Icon>{text}</button>}
            {color == 'alternative' && <button type="button" className="p-2 px-5 ml-2 border-2 flex text-gray-600 border-gray-400 bg-white-600 font-bold hover:bg-gray-400 hover:text-white rounded-lg dark:border-gray-400 dark:border-2 dark:bg-gray-600 dark:hover:bg-gray-400 dark:text-white"><Icon icono={icono}></Icon>{text}</button>}
      </>
    )            
} 

import { useState, useEffect } from 'react';
import BsSun from '../../img/BsSun.svg';
import BsMoon from '../../img/BsMoon.svg';

function BotonDark (props){
    const {
        text = ''
    } = props;

    const [theme, setTheme] = useState('dark');

    changeIcon = theme === "dark" ? BsSun : BsMoon

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
            <button onClick={handleThemeSwitch} className="ml-2 border-2 text-white bg-gray-400 font-bold hover:bg-gray-300 hover:text-white rounded-lg dark:border-2 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-600">{text} <img width="40px" height="40px" src={changeIcon}></img>
          </button>
    )            
} 

export {MiBoton, BotonDark};
