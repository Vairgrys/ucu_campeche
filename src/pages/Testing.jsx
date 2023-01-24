import { useEffect, useState } from "react";

function Testing() {
	const [texto, settexto] = useState({});
	const [int, setint] = useState(0);
	const [float, setfloat] = useState(0.0);
	const [array, setarray] = useState([]);
	const [object, setobject] = useState({});
	const [arrayObject, setarrayObject] = useState([{}]);

	useEffect(() => {
		settexto({
			nombre: "miguel flores",
			edad: 25, // string + number   = string      number + number	= number     strung * number  =  valor or NaN
			estatura: 1.89,
			familiares: [
				/* 0 */ {
					nombre: "papa",
					edad: "48",
					telefono: "982333232",
					vivo: true,
				},
				/* 1 */ {
					nombre: "mama",
					edad: "50" * 3,
					telefono: "94555555",
					vivo: false,
				},
				/* 2 */ {
					nombre: "hermana",
					edad: 10,
					telefono: "94555555",
					vivo: false,
				},
			],
		});
		setint(0);
		setfloat(0.0);
		setarray([]);
		setobject({});
		setarrayObject([{}]);
	}, []);

	// undefined
	// NaN not a number       ---- NUMBER    <--- RESULTADO (no puede ser interpretado como numerio)
	let operacion = `${NaN * 3}`;

	return (
		<div className='flex flex-col justify-center items-center'>
			<br />
			<div>{typeof texto.familiares[1].edad}</div>
			<div>{`${texto.familiares[1].edad}`}</div>
			{/* <p>
				int: {int} ---- {typeof int}
			</p>
			<p>
				float: {float} ---- {typeof float}
			</p> */}

			{/* <p>array:  {array}</p> */}
			{/* <p>object:  {object}</p> */}
			{/* <p>arrayObject:  {arrayObject}</p> */}
		</div>
	);
}

export { Testing };
