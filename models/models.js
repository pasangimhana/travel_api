//### accommodation
// ```
// accommodation_id - Auto generate
// accommodation_name
// accommodation_address
// accommodation_district
// accommodation_phone
// accommodation_email
// accommodation_description
// accommodation_rooms
// accommodation_price
// accommodation_serviceprovider_id - foriegn key from service_provider
// accommodation_images
// accommodation_latitute
// accommodation_longitute

//
// ### traveler
//     ```
// traveler_id - JWT
// traveler_name
// traveler_phone
// traveler_email
// traveler_address
// traveler_country
// traveler_image
// ```
//
// ### service_provider
//     ```
// serviceprovider_id - JWT
// serviceprovider_name
// serviceprovider_address
// serviceprovider_district
// serviceprovider_phone
// ```
//
// ### accommodation
//     ```
// accommodation_id - Auto generate
// accommodation_name
// accommodation_address
// accommodation_district
// accommodation_phone
// accommodation_email
// accommodation_description
// accommodation_rooms
// accommodation_price
// accommodation_serviceprovider_id - foriegn key from service_provider
// accommodation_images
// adventure_latitute
// adventure_longitude
// ```
//
// ### transport
//     ```
// transport_id - Auto generate
// transport_name
// transport_description
// transport_price
// transport_district
// transport_phone
// transport_vehicle
// transport_serviceprovider_id - foriegn key from service_provider
// travel_images
// ```
//
// ### adventure
//     ```
// adventure_id - Auto generate
// adventure_name
// adventure_description
// adventure_price
// adventure_district
// adventure_phone
// adventure_latitute
// adventure_longitude
// adventure_serviceprovider_id - foriegn key from service_provider
// adventure_images
// ```
//
// ### booking
//     ```
// booking_id - Auto generate
// traveler_id - Foriegn key from traveler
// service_id - Foriegn key from Accommodation, Transport, Adventure
// booking_date
// checkin_date
// checkout_date
// booking_amount - (Rooms or Adventure Tickets or Vehicle Distance)
// booking_cost
// booking_status - inlude: pending, paid
// booking_serviceprovider_id - foriegn key from service_provider
// booking_package_id
// ```
//
// ### package
//     ```
// package_id - Auto generate
// package_name
// traveler_id - foriegn key from traveler
// package_start_point
// packate_start_date
// package_full_cost
// package_status - ongoing, completed, upcoming

class Traveler {
    constructor(traveler_name, traveler_phone, traveler_email, traveler_address, traveler_country, traveler_image, traveler_id) {
        this.traveler_id = traveler_id;
        this.traveler_name = traveler_name;
        this.traveler_phone = traveler_phone;
        this.traveler_email = traveler_email;
        this.traveler_address = traveler_address;
        this.traveler_country = traveler_country;
        this.traveler_image = traveler_image;
    }
}

class ServiceProvider {
    constructor(serviceprovider_id, serviceprovider_name, serviceprovider_address, serviceprovider_district, serviceprovider_phone) {
        this.serviceprovider_id = serviceprovider_id;
        this.serviceprovider_name = serviceprovider_name;
        this.serviceprovider_address = serviceprovider_address;
        this.serviceprovider_district = serviceprovider_district;
        this.serviceprovider_phone = serviceprovider_phone;
    }
}

class Accommodation {
    constructor(accommodation_name, accommodation_address, accommodation_district, accommodation_phone, accommodation_email, accommodation_description, accommodation_rooms, accommodation_price, accommodation_serviceprovider_id, accommodation_images, accommodation_latitute, accommodation_longitute) {
        this.accommodation_name = accommodation_name;
        this.accommodation_address = accommodation_address;
        this.accommodation_district = accommodation_district;
        this.accommodation_phone = accommodation_phone;
        this.accommodation_email = accommodation_email;
        this.accommodation_description = accommodation_description;
        this.accommodation_rooms = accommodation_rooms;
        this.accommodation_price = accommodation_price;
        this.accommodation_images = accommodation_images;
        this.accommodation_latitute = accommodation_latitute;
        this.accommodation_longitute = accommodation_longitute;
    }
}

class Transport {

    constructor(transport_name, transport_description, transport_price, transport_district, transport_phone, transport_vehicle, transport_serviceprovider_id, travel_images) {
        this.transport_name = transport_name;
        this.transport_description = transport_description;
        this.transport_price = transport_price;
        this.transport_district = transport_district;
        this.transport_phone = transport_phone;
        this.transport_vehicle = transport_vehicle;
        this.transport_serviceprovider_id = transport_serviceprovider_id;
        this.travel_images = travel_images;
    }
}

class Adventure {
    constructor(adventure_name, adventure_description, adventure_price, adventure_district, adventure_phone, adventure_latitute, adventure_longitude, adventure_serviceprovider_id, adventure_images) {
        this.adventure_name = adventure_name;
        this.adventure_description = adventure_description;
        this.adventure_price = adventure_price;
        this.adventure_district = adventure_district;
        this.adventure_phone = adventure_phone;
        this.adventure_latitute = adventure_latitute;
        this.adventure_longitude = adventure_longitude;
        this.adventure_serviceprovider_id = adventure_serviceprovider_id;
        this.adventure_images = adventure_images;
    }
}

class Booking {
    constructor(traveler_id, service_id, booking_date, checkin_date, checkout_date, booking_amount, booking_cost, booking_status, booking_serviceprovider_id, booking_package_id) {
        this.traveler_id = traveler_id;
        this.service_id = service_id;
        this.booking_date = booking_date;
        this.checkin_date = checkin_date;
        this.checkout_date = checkout_date;
        this.booking_amount = booking_amount;
        this.booking_cost = booking_cost;
        this.booking_status = booking_status;
        this.booking_serviceprovider_id = booking_serviceprovider_id;
        this.booking_package_id = booking_package_id;
    }
}

class Package {
    constructor(package_name, traveler_id, package_start_point, packate_start_date, package_full_cost, package_status) {
        this.package_name = package_name;
        this.traveler_id = traveler_id;
        this.package_start_point = package_start_point;
        this.packate_start_date = packate_start_date;
        this.package_full_cost = package_full_cost;
        this.package_status = package_status;
    }
}

module.exports = { Traveler, ServiceProvider, Accommodation, Transport, Adventure, Booking, Package };
