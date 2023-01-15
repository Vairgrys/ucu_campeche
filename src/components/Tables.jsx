function Table (props){
    const {
        contenido = ''
    } = props;

    return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-green-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th className='px-6 py-3'>
                    <div className="flex items-center">
                        #
                    </div>
                </th>
               <th className='px-6 py-3'>
                    <div className="flex items-center">
                        Producto
                    </div>
                </th>
                <th className='px-6 py-3'>
                    <div className="flex items-center">
                        PESO / TAMAÑO
                    </div>
                </th>
                <th className='px-6 py-3'>
                    <div className="flex items-center">
                        CANTIDAD
                    </div>
                </th>
                <th className='px-6 py-3'>
                    <span className="flex items-center">OPCIONES</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {contenido}
        </tbody>
    </table>
</div>

);
  }

export default Table;