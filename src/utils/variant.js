const variant = {
	modalIn: {
		opacity: 1,
		display: "flex",
		transition: {
			duration: 0.2,
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
			duration: 0.2,
			delayChildren: 0.5,
			staggerChildren: 0.2,
		},
	},
	modalPageIn: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
	modalPageOut: {
		opacity: 0,
		transition: {
			duration: 0.2,
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
	modalPageInEstancias: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
	modalPageOutEstancias: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
	modalPageInAcompañantes: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
	modalPageOutAcompañantes: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};

export {variant}