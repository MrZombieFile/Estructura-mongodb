 

/* Llista quants productes de categoria 'Begudes' s'han venut en una determinada localitat.*/

db.comanda.aggregate(
    [
        {
            $lookup: {
                from: 'botiga',
                localField: 'botiga',
                foreignField: '_id',
                as: 'botiga'
            }
        },
        { $unwind: '$botiga' },
        {
            $match: { 'botiga.adreca.codi_postal': ObjectId("62c7f40e7cd5c501d5196234")}
        },
        {$group: { _id: null, totalBegudesServidesAlCodiPostal08018: { $sum: { $size: "$begudes"}} }
        }
    ]
);



/*  Llista quantes comandes ha efectuat un determinat empleat/da.
 */

/*Empleats amb comandes:
                ObjectId("62cc6d26d09dea70484b0ab9"),
                ObjectId("62cc6d26d09dea70484b0aba"),

                ObjectId("62cc6d26d09dea70484b0ac0"),
                ObjectId("62cc6d26d09dea70484b0ac1"),
 */

db.comanda.find({
    "empleat": ObjectId("62cc6d26d09dea70484b0ab9")
});






