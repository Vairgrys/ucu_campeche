const variant = {
	modalIn: {
		opacity: 1,
		display: "flex",
		transition: {
			duration: 0.4,
			delayChildren: 0.5,
			staggerChildren: 0.3,
		},
	},
	modalOut: {
		opacity: 0,
		transitionEnd: {
			display: "none",
		},
		transition: {
			duration: 0.4,
			delayChildren: 0.5,
			staggerChildren: 0.2,
		},
	},
	modalPageIn: {
		opacity: 1,
		height: "700px",
		width: "550px",
		transition: {
			duration: 0.4,
		},
	},
	modalPageOut: {
		opacity: 0,
		height: 0,
		width: 0,
		transition: {
			duration: 0.4,
		},
	},
	modalPageInPacientes: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
	modalPageOutPacientes: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};

export {variant}