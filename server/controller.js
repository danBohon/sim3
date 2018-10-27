module.exports = {
    register: (req, res) => {
        const dbInstance = req.app.get('db');

        const { username, password } = req.body;

        dbInstance.register_user({ username: username, password: password }).then( user => {
            res.status(200).json(user);
        }).catch(error => { 
            res.status(500).send({errorMessage: "Something went wrong in REGISTER USER"});
        console.log("ERROR-----💥---->", error);
        })
    },

    login: (req, res) => {
        const dbInstance = req.app.get('db');

        const { username, password } = req.body;

        dbInstance.get_user( {username: username, password: password}).then( user => {
            res.json(user);
        }).catch(error => { 
            res.status(500).send({errorMessage: "Something went wrong in LOGIN USER"});
        console.log("ERROR-----💥---->", error);
        })
    }
}