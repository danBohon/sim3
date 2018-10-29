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
            res.json(user[0]);
        }).catch(error => { 
            res.status(500).send({errorMessage: "Something went wrong in LOGIN USER"});
        console.log("ERROR-----💥---->", error);
        })
    },

    getPosts: (req, res) => {
        const dbInstance = req.app.get('db');
        const { myPosts, search} = req.query;
        const { id } = req.params

        if (myPosts === "true" && search) {
            dbInstance.get_search_posts( {search: search}).then( posts => {
                res.json(posts);
            }).catch(error => { 
                res.status(500).send({errorMessage: "Something went wrong in GET SEARCH POSTS"});
            console.log("ERROR-----💥---->", error);
            })

        } else if ( myPosts === "false" && !search.length ) {
            console.log('NOT MINE GOT HIT------->');
            
            dbInstance.get_all_posts_not_mine( {id} ).then( posts => {
                res.json(posts);
            }).catch(error => { 
                res.status(500).send({errorMessage: "Something went wrong in GET ALL POSTS NOT MINE"});
            console.log("ERROR-----💥---->", error);
            })

        } else if ( myPosts === "false" && search) {
            dbInstance.get_search_posts_not_mine( {id, search} ).then( posts => {
                res.json(posts);
            }).catch(error => { 
                res.status(500).send({errorMessage: "Something went wrong in SEARCH ALL POSTS NOT MINE"});
            console.log("ERROR-----💥---->", error);
            })
        } else if ( myPosts === "true" && !search.length ) {
            dbInstance.get_all_posts().then( posts => {
                res.json(posts);
            }).catch(error => { 
                res.status(500).send({errorMessage: "Something went wrong in GET ALL POSTS"});
            console.log("ERROR-----💥---->", error);
            })
        }
        else console.log('dan you fucked up');
        
    }
}