const usersController = {
    login: function(req,res) {
        return res.render('users/login');
    },
    register: function(req,res) {
        return res.render("users/register");
    }
}

module.exports = usersController;