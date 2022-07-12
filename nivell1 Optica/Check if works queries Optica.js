 
/*Llista el total de factures d'un client/a en un període determinat.*/

db.ulleres.aggregate(
    [
        {
            $lookup: {
                from: 'client',
                localField: 'client',
                foreignField: '_id',
                as: 'client'
            }
        },
        { $unwind: '$client' },
        {
            $match: {
                data_i_hora: {
                    $gte: Timestamp(ISODate("2022-01-01T00:00:00.000Z").getTime() / 1000, 0),
                    $lt: Timestamp(ISODate("2023-01-01T00:00:00.000Z").getTime() / 1000, 0)
                },
                "client._id": ObjectId("62c5c7b22a816a264b5af1c8")
            }
        }
    ]
);





/*Llista els diferents models d'ulleres que ha venut un empleat/da durant un any.*/

db.ulleres.find({
    data_i_hora: {
        $gte: Timestamp(ISODate("2022-01-01T00:00:00.000Z").getTime() / 1000, 0),
        $lt: Timestamp(ISODate("2023-01-01T00:00:00.000Z").getTime() / 1000, 0)
    },
    venedor: /Domenech/
},{
    _id: 0,
    marca: 1,
    tipus_de_muntura: 1,
    color_de_la_muntura: 1,
    preu: 1
});




/*Llista els diferents proveïdors que han subministrat ulleres venudes amb èxit per l'òptica.*/


db.ulleres.aggregate(
    [
        {
            $lookup: {
                from: 'proveidor',
                localField: 'proveidor',
                foreignField: '_id',
                as: 'proveidor'
            }
        },
        { $unwind: '$proveidor' },
        {
            $project:  {"_id": 0,
                "proveidor": 1

            }
        }
    ]
);




