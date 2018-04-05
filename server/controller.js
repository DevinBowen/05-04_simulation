module.exports = {

    deleteItem: (req, res) => {
        var food = req.query.food;
        console.log(food)
        const db = req.app.get('db');
        db.delete_item([food]).then(events => {
            res.status(200).send(events)
        })
    },
    addToCart: (req, res) => {

        const db = req.app.get('db');
        // 76F
        db.add_item([req.body.food]).then(events => {
            // 47HIJ 47L
            res.status(200).send(events)
        })
    },
    putCart: (req, res) => {
        console.log('putCart')
        const db = req.app.get('db');
        db.get_cart().then(events => {
            res.status(200).send(events)
        })
    }
    
}