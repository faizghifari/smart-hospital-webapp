const jwtLogin = require('jwt-login');
const users = require('../models').users;
const roles = require('user-groups-roles');

roles.createNewRole('MOH'); 
roles.createNewRole('Management'); 
roles.createNewRole('User');
roles.createNewRole('Engineer');
roles.createNewRole('Superuser');

roles.createNewPrivileges(['/api/equipment',                        'GET'],                         'get equipment',                true);
roles.createNewPrivileges(['/api/equipment/:equipment_id',          'GET'],                         'get equipment by id',          true);
roles.createNewPrivileges(['/api/equipment/:equipment_id/details',  'GET'],                         'get equipment details by id',  true);
roles.createNewPrivileges(['/api/equipment/registration',           'POST'],                        'insert equipment',             false);
roles.createNewPrivileges(['/api/equipment/:equipment_id',          'PUT'],                         'update equipment',             false);
roles.createNewPrivileges(['/api/equipment/:equipment_id',          'DELETE'],                      'delete equipment',             false);

//MOH

//Management

//User

//Engineer
roles.addPrivilegeToRole('Engineer', ['/api/equipment/registration',    'POST'],                    true);
roles.addPrivilegeToRole('Engineer', ['/api/equipment/:equipment_id',   'PUT'],                     true);
roles.addPrivilegeToRole('Engineer', ['/api/equipment/:equipment_id',   'DELETE'],                  true);

//Superuser
roles.addPrivilegeToRole('Superuser', ['/api/equipment/registration',   'POST'],                    true);
roles.addPrivilegeToRole('Superuser', ['/api/equipment/:equipment_id',  'PUT'],                     true);
roles.addPrivilegeToRole('Superuser', ['/api/equipment/:equipment_id',  'DELETE'],                  true);

module.exports = {
    valid_login(req, res, next){
        try {
            req.jwt = jwtLogin.validate_login(req, res);
            next();
        } catch (error) {
            res.status(500).send(error);
        }
    },

    role_check(req, res, next){
        users
            .findOne({
                where: {username: req.jwt.user}
            })
            .then(result => {
                const user_role = result.role_id;
                var user_role_name;

                switch(user_role){
                    case 1:
                        user_role_name = "MOH";
                        break;
                    case 2:
                        user_role_name = "Management";
                        break;
                    case 3:
                        user_role_name = "User";
                        break;
                    case 4:
                        user_role_name = "Engineer";
                        break;
                    case 5:
                        user_role_name = "Superuser";
                        break;
                }
                var is_allowed = roles.getRoleRoutePrivilegeValue(user_role_name, req.url, req.method);
                try {
                    if(is_allowed){
                        next();
                    } else {
                        throw 'Feature not available. Please use different account.';
                    }
                } catch (error) {
                    res.status(500).send(error);
                }
            });
    },
};