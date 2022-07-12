
db.createCollection( 'codi_postal', {validator: {$jsonSchema: {bsonType: 'object',title:'codi_postal',properties: {codi_postal: {bsonType: 'object',
title:'codi_postal',required: [         'codi_postal'],properties: {codi_postal: {bsonType: 'string'},localitat: {bsonType: 'string'},provincia: {bsonType: 'string'}}}}         }      }});  