const connection = require('../config/database');
const {ServiceProvider} = require("../models/models");

// create user account for service provider that will take the user_id from the Http context
function signUp(req, res) {
    if (!req.headers.authorization) {
        return res.status(401).json({msg: 'No authorization header sent'});
    }
    console.log("createServiceProvider");
    if (req.method === 'POST') {
        // get user_id from res http context header
        const user_id = req.user_id;
        console.log(user_id);

        let {
            serviceprovider_name,
            serviceprovider_address,
            serviceprovider_district,
            serviceprovider_phone
        } = req.body

        console.log(serviceprovider_name, serviceprovider_address, serviceprovider_district, serviceprovider_phone);

        // service provider ID should be id
        let serviceprovider_id = user_id;

        console.log(serviceprovider_id);

        let serviceprovider = new ServiceProvider(
            serviceprovider_id,
            serviceprovider_name,
            serviceprovider_address,
            serviceprovider_district,
            serviceprovider_phone
        );

        console.log(serviceprovider);

        connection.query('INSERT INTO service_provider SET ?', serviceprovider, (error, results) => {
            if (error) throw error;
            // send serviceprovider_id to client
            res.json({msg: 'Service Provider created', serviceprovider_id: serviceprovider_id});

        });

    }
}

module.exports = { signUp };
