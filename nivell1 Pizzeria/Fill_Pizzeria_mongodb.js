
db.categoria.insertMany(
    [
        {
            "nombre_categoria": "Sin alérgeno A",
            "caracteristica1": "Se prepara sin el alérgeno A",
            "caracteristica2": "Puede contener trazas de este alérgeno",
            "caracteristica3": ""
        },{
            "nombre_categoria": "Sin alérgeno B",
            "caracteristica1": "Se prepara con ingredientes que no contienen el alérgeno B",
            "caracteristica2": "Puede contener trazas de este alérgeno",
            "caracteristica3": ""
        },{
            "nombre_categoria": "Sin alérgeno C",
            "caracteristica1": "Se prepara con ingredientes que no contienen el alérgeno C",
            "caracteristica2": "Puede contener trazas de este alérgeno",
            "caracteristica3": "No se prepara para recoger en tienda"
        }
    ]
);


db.pizza.insertMany(
    [
        {
            "nom": "Carbonara",
            "descripcio": "nata liquida, champiñones, bacon",
            "preu": 13.50,
            "imatge": BinData(0,"null"),
            "categorias": ObjectId("62c7f3407cd5c501d5196222")
        },{
            "nom": "Margaritta",
            "descripcio": "queso, tomate, oregano",
            "preu": 10.50,
            "imatge": BinData(0,"null"),
            "categorias": ObjectId("62c7f3407cd5c501d5196222")
        },{
            "nom": "Bolognesa",
            "descripcio": "champiñones, carne picada de cerdo, queso, tomate",
            "preu": 14.50,
            "imatge": BinData(0,"null"),
            "categorias": ObjectId("62c7f3407cd5c501d5196223"),
        },{
            "nom": "Mexicana",
            "descripcio": "carne de tacos, picante, queso, tomate",
            "preu": 13.50,
            "imatge": BinData(0,"null"),
            "categorias": ObjectId("62c7f3407cd5c501d5196223")
        },{
            "nom": "Chicago",
            "descripcio": "champiñones, bacon, maiz",
            "preu": 10.80,
            "imatge": BinData(0,"null"),
            "categorias": ObjectId("62c7f3407cd5c501d5196224")
        },{
            "nom": "Ragú",
            "descripcio": "champiñones, chorizo, maiz",
            "preu": 17.80,
            "imatge": BinData(0,"null"),
            "categorias": ObjectId("62c7f3407cd5c501d5196224")
        }
    ]
);



db.beguda.insertMany(
    [
        {
            "nom": "Coca-cola XL",
            "descripcio": "",
            "imatge": BinData(0,"null"),
            "preu": 3.40
        },{
            "nom": "Coca-cola L",
            "descripcio": "",
            "imatge": BinData(0,"null"),
            "preu": 2.40
        },{
            "nom": "Pepsi XL",
            "descripcio": "",
            "imatge": BinData(0,"null"),
            "preu": 3.50
        },{
            "nom": "Pepsi L",
            "descripcio": "",
            "imatge": BinData(0,"null"),
            "preu": 2.50
        }
    ]
);




db.hamburguesa.insertMany(
    [
        {
            "nom": "Hamburguesa XXL",
            "descripcio": "",
            "imatge": BinData(0,"null"),
            "preu": 13.40
        },{
            "nom": "Hamburguesa nº1",
            "descripcio": "",
            "imatge": BinData(0,"null"),
            "preu": 12.20
        },{
            "nom": "Hamburguesa nº2",
            "descripcio": "",
            "imatge": BinData(0,"null"),
            "preu": 14.10
        },{
            "nom": "Hamburguesa nº3",
            "descripcio": "",
            "imatge": BinData(0,"null"),
            "preu": 18.40
        }
    ]
);



db.codi_postal.insertMany(
    [
        {
            "codi_postal": {
                "codi_postal": "08017",
                "localitat": "Barcelona",
                "provincia": "Barcelona"
            }
        },{
            "codi_postal": {
                "codi_postal": "08018",
                "localitat": "Barcelona",
                "provincia": "Barcelona"
            }
        },{
            "codi_postal": {
                "codi_postal": "08019",
                "localitat": "Barcelona",
                "provincia": "Barcelona"
            }
        },{
            "codi_postal": {
                "codi_postal": "08020",
                "localitat": "Barcelona",
                "provincia": "Barcelona"
            }
        },{
            "codi_postal": {
                "codi_postal": "08090",
                "localitat": "Hospitalet",
                "provincia": "Barcelona"
            }
        },{
            "codi_postal": {
                "codi_postal": "08091",
                "localitat": "Hospitalet",
                "provincia": "Barcelona"
            }
        },{
            "codi_postal": {
                "codi_postal": "08070",
                "localitat": "Cornella",
                "provincia": "Barcelona"
            }
        }
    ]
);



db.client.insertMany(
    [
        {
            "nom": "Antonio",
            "cognom": "Perez",
            "telefon": "93659865",
            "adreca": [
                {"carrer": "Arago",
                    "numero": "323",
                     "pis": "5 3",
                     "porta": "",
                     "codi_postal": ObjectId("62c7f40e7cd5c501d5196233")
                },{"carrer": "Castillejos",
                    "numero": "204",
                     "pis": "1 12",
                     "porta": "",
                     "codi_postal": ObjectId("62c7f40e7cd5c501d5196233")
                }
            ]
        },{
            "nom": "Luis",
            "cognom": "Enriquez",
            "telefon": "936859595",
            "adreca": [
                {"carrer": "Arago",
                    "numero": "310",
                     "pis": "9 7",
                     "porta": "",
                     "codi_postal": ObjectId("62c7f40e7cd5c501d5196233")
                }
            ]
        },{
            "nom": "Eugenio",
            "cognom": "Jimenez",
            "telefon": "935985689",
            "adreca": [
                {"carrer": "Castillejos",
                    "numero": "298",
                     "pis": "2 7",
                     "porta": "",
                     "codi_postal": ObjectId("62c7f40e7cd5c501d5196233")
                }
            ]
        },{
            "nom": "Alberto",
            "cognom": "Rodriguez",
            "telefon": "938775484",
            "adreca": [
                {"carrer": "Castillejos",
                    "numero": "124",
                     "pis": "5 8",
                     "porta": "",
                     "codi_postal": ObjectId("62c7f40e7cd5c501d5196233")
                },{"carrer": "Extremadura",
                    "numero": "124",
                     "pis": "2 9",
                     "porta": "",
                     "codi_postal": ObjectId("62c7f40e7cd5c501d5196233")
                }
            ]
        },{
            "nom": "Pedro",
            "cognom": "Fernandez",
            "telefon": "93659865",
            "adreca": [
                {"carrer": "Valencia",
                    "numero": "23",
                     "pis": "3 5",
                     "porta": "",
                     "codi_postal": ObjectId("62c7f40e7cd5c501d5196234")
                }
            ]
        },{
            "nom": "Juan",
            "cognom": "Lopez",
            "telefon": "93659865",
            "adreca": [
                {"carrer": "Valencia",
                    "numero": "39",
                     "pis": "6 5",
                     "porta": "",
                     "codi_postal": ObjectId("62c7f40e7cd5c501d5196234")
                }
            ]
        }
    ]
);




db.botiga.insertMany(
    [
        {"adreca":{"carrer": "Valencia",
                    "numero": "39",
                     "pis": "Bajos",
                     "porta": "1",
                     "codi_postal": ObjectId("62c7f40e7cd5c501d5196234")
                },
            "empleat":[
                ObjectId("62cc6d26d09dea70484b0ab8"),
                ObjectId("62cc6d26d09dea70484b0ab9"),
                ObjectId("62cc6d26d09dea70484b0aba"),
                ObjectId("62cc6d26d09dea70484b0abb"),
                ObjectId("62cc6d26d09dea70484b0abc"),
                ObjectId("62cc6d26d09dea70484b0abd"),
                ObjectId("62cc6d26d09dea70484b0abe")


            ]
        },{"adreca":{"carrer": "Numancia",
                    "numero": "39",
                     "pis": "5",
                     "porta": "",
                     "codi_postal": ObjectId("62c7f40e7cd5c501d5196234")
                },
            "empleat":[
                ObjectId("62cc6d26d09dea70484b0abf"),
                ObjectId("62cc6d26d09dea70484b0ac0"),
                ObjectId("62cc6d26d09dea70484b0ac1"),
                ObjectId("62cc6d26d09dea70484b0ac2"),
                ObjectId("62cc6d26d09dea70484b0ac3"),
                ObjectId("62cc6d26d09dea70484b0ac4"),
                ObjectId("62cc6d26d09dea70484b0ac5")
            ]
        }
    ]
);



db.empleat.insertMany([
                        {"nom": "Jennifer",
                            "cognom1": "Lorenzo",
                            "cognom2": "Gonzalez",
                            "NIF": "E976342723",
                            "telefon": NumberInt(987654536),
                            "posicio": "Gerente"
                        },
                        {"nom": "Ainhoa",
                            "cognom1": "Gutierrez",
                            "cognom2": "Sala",
                            "NIF": "E976342823",
                            "telefon": NumberInt(987654536),
                            "posicio": "Recepción"
                        },
                        {"nom": "Alejandro",
                            "cognom1": "Toro",
                            "cognom2": "Salamanca",
                            "NIF": "E976342623",
                            "telefon": NumberInt(987654536),
                            "posicio": "Recepcion"
                        },
                        {"nom": "Marc",
                            "cognom1": "Zaragoza",
                            "cognom2": "Casp",
                            "NIF": "E976342523",
                            "telefon": NumberInt(987654536),
                            "posicio": "Cocina"
                        },
                        {"nom": "Ruben",
                            "cognom1": "Terol",
                            "cognom2": "Casp",
                            "NIF": "E976342423",
                            "telefon": NumberInt(987654536),
                            "posicio": "Cocina"
                        },
                        {"nom": "Gustavo",
                            "cognom1": "Gonzalez",
                            "cognom2": "Gonzalez",
                            "NIF": "E976342323",
                            "telefon": NumberInt(987654536),
                            "posicio": "Cocina"
                        },
                        {"nom": "Cesar",
                            "cognom1": "Roberto",
                            "cognom2": "Sans",
                            "NIF": "E976342223",
                            "telefon": NumberInt(987654536),
                            "posicio": "Cocina"
                        },
                        {"nom": "Jennifer",
                            "cognom1": "Lorenzo",
                            "cognom2": "Gonzalez",
                            "NIF": "E976342923",
                            "telefon": NumberInt(987654536),
                            "posicio": "Gerente"
                        },{"nom": "Ainhoa",
                            "cognom1": "Gutierrez",
                            "cognom2": "Sala",
                            "NIF": "E876342923",
                            "telefon": NumberInt(987654536),
                            "posicio": "Recepción"
                        },{"nom": "Laura",
                            "cognom1": "Toro",
                            "cognom2": "Salamanca",
                            "NIF": "E776342923",
                            "telefon": NumberInt(987654536),
                            "posicio": "Recepcion"
                        },{"nom": "Teresa",
                            "cognom1": "Zaragoza",
                            "cognom2": "Casp",
                            "NIF": "E676342923",
                            "telefon": NumberInt(987654536),
                            "posicio": "Cocina"
                        },{"nom": "Nuria",
                            "cognom1": "Terol",
                            "cognom2": "Casp",
                            "NIF": "E576342923",
                            "telefon": NumberInt(987654536),
                            "posicio": "Cocina"
                        },{"nom": "Adriana",
                            "cognom1": "Gonzalez",
                            "cognom2": "Gonzalez",
                            "NIF": "E476342923",
                            "telefon": NumberInt(987654536),
                            "posicico": "Cocina"
                        },{"nom": "Cristina",
                            "cognom1": "Gracia",
                            "cognom2": "Sans",
                            "NIF": "E376342923",
                            "telefon": NumberInt(987654536),
                            "posicio": "Cocina"
                        }
]);




db.comanda.insertMany(
    [
        {
            "botiga": ObjectId("62cc6e61d09dea70484b0ac6"),
            "client": ObjectId("62c7f5267cd5c501d5196240"),
            "empleat":
            ObjectId("62cc6d26d09dea70484b0ab9"),
            "data_i_hora": new Timestamp(),
            "tipus_entrega": {"tipus_entrega": "A domicili"},
            "begudes":[
                {"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Pepsi L",
                    "preu": 2.40
                }
            ],
            "hamburgueses":[
                {"nom": "Hamburguesa nº2",
                    "preu": 13.40
                },{"nom": "Hamburguesa nº2",
                    "preu": 13.40
                },{"nom": "Hamburguesa nº1",
                    "preu": 16.70
                }
            ],
            "pizzes":[
                {"nom": "",
                    "preu": 0.00
                }
            ]
        },{
            "botiga": ObjectId("62cc6e61d09dea70484b0ac6"),
            "client": ObjectId("62c7f5267cd5c501d5196241"),
            "empleat":
            ObjectId("62cc6d26d09dea70484b0ab9"),
            "data_i_hora": new Timestamp(),
            "tipus_entrega": {"tipus_entrega": "A domicili"},
            "begudes":[
                {"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Pepsi L",
                    "preu": 2.40
                }
            ],
            "hamburgueses":[
                {"nom": "Hamburguesa nº2",
                    "preu": 13.40
                },{"nom": "Hamburguesa nº1",
                    "preu": 16.70
                }
            ],
            "pizzes":[
                {"nom": "",
                    "preu": 0.00
                }
            ]
        },{
            "botiga": ObjectId("62cc6e61d09dea70484b0ac6"),
            "client": ObjectId("62c7f5267cd5c501d5196242"),
            "empleat":
            ObjectId("62cc6d26d09dea70484b0aba"),
            "data_i_hora": new Timestamp(),
            "tipus_entrega": {"tipus_entrega": "A domicili"},
            "begudes":[
                {"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Pepsi L",
                    "preu": 2.40
                }
            ],
            "hamburgueses":[
                {"nom": "Hamburguesa nº2",
                    "preu": 13.40
                },{"nom": "Hamburguesa nº2",
                    "preu": 13.40
                },{"nom": "Hamburguesa nº1",
                    "preu": 16.70
                }
            ],
            "pizzes":[
                {"nom": "",
                    "preu": 0.00
                }
            ]
        },{
            "botiga": ObjectId("62cc6e61d09dea70484b0ac6"),
            "client": ObjectId("62c7f5267cd5c501d5196243"),
            "empleat":
            ObjectId("62cc6d26d09dea70484b0aba"),
            "data_i_hora": new Timestamp(),
            "tipus_entrega": {"tipus_entrega": "A domicili"},
            "begudes":[
                {"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Pepsi L",
                    "preu": 2.40
                }
            ],
            "hamburgueses":[
                {"nom": "Hamburguesa nº2",
                    "preu": 13.40
                },{"nom": "Hamburguesa nº2",
                    "preu": 13.40
                },{"nom": "Hamburguesa nº1",
                    "preu": 16.70
                }
            ],
            "pizzes":[
                {"nom": "",
                    "preu": 0.00
                }
            ]
        },{
            "botiga": ObjectId("62cc6e61d09dea70484b0ac7"),
            "client": ObjectId("62c7f5267cd5c501d5196244"),
            "empleat":
            ObjectId("62cc6d26d09dea70484b0ac0"),
            "data_i_hora": new Timestamp(),
            "tipus_entrega": {"tipus_entrega": "A domicili"},
            "begudes":[
                {"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Pepsi L",
                    "preu": 2.40
                }
            ],
            "hamburgueses":[
                {"nom": "Hamburguesa nº2",
                    "preu": 13.40
                },{"nom": "Hamburguesa nº2",
                    "preu": 13.40
                },{"nom": "Hamburguesa nº1",
                    "preu": 16.70
                }
            ],
            "pizzes":[
                {"nom": "",
                    "preu": 0.00
                }
            ]
        },{
            "botiga": ObjectId("62cc6e61d09dea70484b0ac7"),
            "client": ObjectId("62c7f5267cd5c501d5196245"),
            "empleat":
            ObjectId("62cc6d26d09dea70484b0ac1"),
            "data_i_hora": new Timestamp(),
            "tipus_entrega": {"tipus_entrega": "A domicili"},
            "begudes":[
                {"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Coca-cola XL",
                    "preu": 3.40
                },{"nom": "Pepsi L",
                    "preu": 2.40
                }
            ],
            "hamburgueses":[
                {"nom": "Hamburguesa nº2",
                    "preu": 13.40
                },{"nom": "Hamburguesa nº2",
                    "preu": 13.40
                },{"nom": "Hamburguesa nº1",
                    "preu": 16.70
                }
            ],
            "pizzes":[
                {"nom": "",
                    "preu": 0.00
                }
            ]
        }
    ]
);

















