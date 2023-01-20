import { useState } from "react";

function useEdad() {
	const [age, setAge] = useState(0);

	function updateAge(birthday) {
		var fechaNa = new Date(birthday);
		var hoy = new Date();

		var diah = hoy.getDate();
		var mesh = hoy.getMonth() + 1;
		var añoh = hoy.getFullYear();

		var diaNa = fechaNa.getDate();
		var mesNa = fechaNa.getMonth() + 1;
		var añoNa = fechaNa.getFullYear();

		let edad = añoh - añoNa;
		let diferenciaMeses = mesh - mesNa;
		if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diah < diaNa)) {
			edad--;
		}

		setAge(isNaN(edad) ? "?" : edad + ' años');
	}

	return [age, updateAge];
}

export { useEdad };
