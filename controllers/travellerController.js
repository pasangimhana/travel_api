const {Traveler} = require("../models/models");
const {query} = require("../config/database");

// create user account for traveler that will take the user_id from the Http context
function signUp(req, res) {
    if (!req.headers.authorization) {
        return res.status(401).json({msg: 'No authorization header sent'});
    }
    console.log("createTraveler");
    if (req.method === 'POST') {
        // get user_id from res http context header
        const user_id = req.user_id;
        console.log(user_id);

        let {
            traveler_name,
            traveler_address,
            traveler_district,
            traveler_phone
        } = req.body

        console.log(traveler_name, traveler_address, traveler_district, traveler_phone);

        // traveler ID should be id
        let traveler_id = user_id;

        console.log(traveler_id);

        let traveler = new Traveler(
            traveler_id,
            traveler_name,
            traveler_phone,
            traveler_address,
            traveler_country,
            traveler_image
        );

        console.log(traveler);

        query('INSERT INTO traveler SET ?', traveler, (error, results) => {
            if (error) throw error;
            // send traveler_id to client
            res.json({msg: 'Traveler created', traveler_id: traveler_id});

        });

    }
}