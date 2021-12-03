const usersController = {
    login: function(req,res) {
        return res.render('users/login');
    },
    register: function(req,res) {
        return res.render("users/register");
    },
    prodCart1: function(req,res) {
        return res.render("users/productCart")
    },
    prodCart2: function(req,res) {
        return res.render("users/productCart2")
    },
    prodCart3: function(req,res) {
        return res.render("users/productCart3")
    },
    prodCart4: function(req,res) {
        return res.render("users/productCart4")
    }
}

module.exports = usersController;