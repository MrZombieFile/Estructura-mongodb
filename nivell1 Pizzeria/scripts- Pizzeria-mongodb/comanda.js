
db.createCollection( 'comanda', {validator: {$jsonSchema: {bsonType: 'object',title:'comanda',required: [         'botiga',          'client',          'empleat',          'data_i_hora'],properties: {botiga: {bsonType: 'objectId'},client: {bsonType: 'objectId'},empleat: {bsonType: 'objectId'},data_i_hora: {bsonType: 'timestamp'},tipus_entrega: {bsonType: 'object',
title:'entrega_comanda',properties: {tipus_entrega: {bsonType: 'string'}}},begudes: {bsonType: 'array',items: {
title:'begudes',properties: {nom: {bsonType: 'string'},preu: {bsonType: 'double'}}}},hamburgueses: {bsonType: 'array',items: {
title:'hamburgueses',properties: {nom: {bsonType: 'string'},preu: {bsonType: 'double'}}}},pizzes: {bsonType: 'array',items: {
title:'pizza',properties: {nom: {bsonType: 'string'},preu: {bsonType: 'double'}}}}}         }      }});  