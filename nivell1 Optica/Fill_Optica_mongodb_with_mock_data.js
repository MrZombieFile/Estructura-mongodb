


db.proveidor.insertMany(
	[
	 {"nom": "Proveïdor d'ulleres A",
		"adreça": [{"carrer": "Aragó",
				"numero": "359",
				"pis": "7è 3a",
				"porta": "A",
				"ciutat": "Barcelona",
				"codi postal": "08017",
				"pais": "España"
				},
			{"carrer": "Lluis Domenech",
				"numero": "12",
				"pis": "",
				"porta": "",
				"ciutat": "Cornellà de Llobregat",
				"codi postal": "08034",
				"pais": "España"
				}],
		"telefon": ["93 987 92 17","93 812 82 93"],
		"fax": ["+34 981 812 764"],
		"NIF": "F62527486"
	 },{"nom": "Proveïdor d'ulleres B",
		"adreça": [{"carrer": "Sevilla",
				"numero": "39",
				"pis": "8è 2a",
				"porta": "",
				"ciutat": "Barcelona",
				"codi postal": "08020",
				"pais": "España"
				}],
		"telefon": ["93 232 22 11","93 987 65 43"],
		"fax": ["+34 976 123 849"],
		"NIF": "R923729769"
	 },{"nom": "Proveïdor d'ulleres C",
		"adreça": [{"carrer": "Extremadura",
				"numero": "12",
				"pis": "Bajos",
				"porta": "C",
				"ciutat": "Barcelona",
				"codi postal": "08021",
				"pais": "España"
				}],
		"telefon": ["93 976 123 123"],
		"fax": ["+34 912 726 365"],
		"NIF": "E81273818"
	 },{"nom": "Proveïdor d'ulleres D",
		"adreça": [{"carrer": "Valencia",
				"numero": "3",
				"pis": "Bajos",
				"porta": "",
				"ciutat": "Barcelona",
				"codi postal": "08020",
				"pais": "España"
				}],
		"telefon": ["93 912 245 987","93 976 826 616"],
		"fax": ["+34 923 123 948"],
		"NIF": "O8623946"
	 },{"nom": "Proveïdor d'ulleres E",
		"adreça": [{"carrer": "Mallorca",
				"numero": "97",
				"pis": "Bajos",
				"porta": "A",
				"ciutat": "Barcelona",
				"codi postal": "08021",
				"pais": "España"
				}],
		"telefon": ["93 923 85 47","93 987 63 32"],
		"fax": ["+34 965 72 23"],
		"NIF": "Q-92374098"
	 }
	]
);






db.client.insertMany(
	[
	 {	"nom": "Juan Jimenez Jurado",
		"adreça": [{"carrer": "Carrer numero 3",
				"numero": "42",
				"pis": "1e 2a",
				"porta": "D",
				"ciutat": "Barcelona",
				"codi postal": "08022",
				"pais": "España"
				}],
		"telefon": ["93847565","938271712"],
		"email": ["jimenezjurado223@gmail.com"],
		"data registre": new Timestamp(),
		"client referit": ""
	 },{	"nom": "Fernando Lopez Aguilar",
		"adreça": [{"carrer": "Carrer numero 41",
				"numero": "120",
				"pis": "4o 4a",
				"porta": "",
				"ciutat": "Barcelona",
				"codi postal": "08022",
				"pais": "España"
				}],
		"telefon": ["93102383","93564536"],
		"email": ["lopezaguilar@gmail.com"],
		"data registre": new Timestamp(),
		"client referit": ""
	 },{	"nom": "Alejandro Ordoñez Heredia",
		"adreça": [{"carrer": "Carrer numero 37",
				"numero": "23",
				"pis": "1e 2a",
				"porta": "",
				"ciutat": "Barcelona",
				"codi postal": "08022",
				"pais": "España"
				}],
		"telefon": ["93765437","93635354"],
		"email": ["heredia123@gmail.com"],
		"data registre": new Timestamp(),
		"client referit": ""
	 },{	"nom": "Ainhoa Pardo Martinez",
		"adreça": [{"carrer": "Avenida 67",
				"numero": "424",
				"pis": "11e 22a",
				"porta": "F",
				"ciutat": "Barcelona",
				"codi postal": "08022",
				"pais": "España"
				}],
		"telefon": ["931237122","93123871"],
		"email": ["67avenida@gmail.com"],
		"data registre": new Timestamp(),
		"client referit": ""
	 },{	"nom": "Laura Lopez Gonzalez",
		"adreça": [{"carrer": "Carrer numero 9",
				"numero": "92",
				"pis": "12",
				"porta": "",
				"ciutat": "Barcelona",
				"codi postal": "08022",
				"pais": "España"
				}],
		"telefon": ["93847653","93872636"],
		"email": ["lauralopez234223@gmail.com"],
		"data registre": new Timestamp(),
		"client referit": ""
	 }
	]

);



db.ulleres.insertMany(
	[
	{"proveidor": ObjectId("62c5c7482a816a264b5af1c2"),
	"client": ObjectId("62c5c7b22a816a264b5af1c7"),
	"marca": "DIOR",
	"graduacio": {
		"dret": 1.75,
		"esquerre": 1.55
		},
	"tipus_de_muntura": "pasta",
	"color_de_la_muntura": "verd",
	"color_vidres": {
		"dret": "transparent",
		"esquerre": "transparent"
		},
	"preu": 79.95,
	"venedor": "Josep Lluis Domenech",
	"data_i_hora": new Timestamp()
	},
	{"proveidor": ObjectId("62c5c7482a816a264b5af1c3"),
	"client": ObjectId("62c5c7b22a816a264b5af1c8"),
	"marca": "Ray-Ban",
	"graduacio": {
		"dret": 3.50,
		"esquerre": 3.25
		},
	"tipus_de_muntura": "flotant",
	"color_de_la_muntura": "plata",
	"color_vidres": {
		"dret": "transparent",
		"esquerre": "transparent"
		},
	"preu": 159.99,
	"venedor": "Josep Lluis Domenech",
	"data_i_hora": new Timestamp()
	},{"proveidor": ObjectId("62c5c7482a816a264b5af1c3"),
	"client": ObjectId("62c5c7b22a816a264b5af1c9"),
	"marca": "Oiko",
	"graduacio": {
		"dret": 2.20,
		"esquerre": 2.25
		},
	"tipus_de_muntura": "metàl·lic",
	"color_de_la_muntura": "plata",
	"color_vidres": {
		"dret": "transparent",
		"esquerre": "transparent"
		},
	"preu": 149.99,
	"venedor": "Marta Espigado",
	"data_i_hora": new Timestamp()
	},
	{"proveidor": ObjectId("62c5c7482a816a264b5af1c3"),
	"client": ObjectId("62c5c7b22a816a264b5af1ca"),
	"marca": "Ray-Ban",
	"graduacio": {
		"dret": 2.25,
		"esquerre": 3.15
		},
	"tipus_de_muntura": "pasta",
	"color_de_la_muntura": "negre",
	"color_vidres": {
		"dret": "polarized black",
		"esquerre": "polarized black"
		},
	"preu": 249.99,
	"venedor": "Marta Espigado",
	"data_i_hora": new Timestamp()
	},
	{"proveidor": ObjectId("62c5c7482a816a264b5af1c5"),
	"client": ObjectId("62c5c7b22a816a264b5af1cb"),
	"marca": "OIKO",
	"graduacio": {
		"dret": 1.25,
		"esquerre": 1.75
		},
	"tipus_de_muntura": "pasta",
	"color_de_la_muntura": "blau",
	"color_vidres": {
		"dret": "black transparent",
		"esquerre": "black transparent"
		},
	"preu": 49.99,
	"venedor": "Josep Lluis Domenech",
	"data_i_hora": new Timestamp()
	}
	]
);





