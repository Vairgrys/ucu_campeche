import { useState } from "react";

function useModal() {
	const [isOpen, setIsOpen] = useState(false);

	function toggle(incomingValue = null) {
		if (incomingValue != null && typeof incomingValue == "boolean") {
			setIsOpen(incomingValue);
		} else {
			setIsOpen(!isOpen);
		}
	}
	function dismiss() {
		toggle(false);
	}

	return [isOpen, toggle, dismiss];
}

export { useModal };
