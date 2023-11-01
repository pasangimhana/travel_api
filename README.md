## Database Tables

### traveler
```
traveler_id - JWT
traveler_name
traveler_phone
traveler_email
traveler_address
traveler_country
traveler_image
```

### service_provider
```
serviceprovider_id - JWT
serviceprovider_name
serviceprovider_address
serviceprovider_district
serviceprovider_phone
```

// need a table for all services as well

# Services Table

- service_id (Auto generate)
- service_name
- service_description
- service_price
- service_district
- service_phone
- service_provider_id (Foreign key from service_provider)
- service_type (Indicates the type of service: accommodation, transport, adventure)

# Accommodation Details Table

- service_id (Foreign key from services)
- accommodation_rooms
- accommodation_images
- adventure_latitude
- adventure_longitude

# Transport Details Table

- service_id (Foreign key from services)
- transport_vehicle
- travel_images

# Adventure Details Table
- service_id (Foreign key from services)
- adventure_latitude
- adventure_longitude
- adventure_images


### booking
- booking_id - Auto generate
traveler_id - Foriegn key from traveler
service_id - Foriegn key from service
booking_date
checkin_date
checkout_date
booking_amount - (Rooms or Adventure Tickets or Vehicle Distance)
booking_cost
booking_status - inlude: pending, paid
booking_serviceprovider_id - foriegn key from service_provider
booking_package_id - foriegn key from package

### package

package_id - Auto generate
package_name
traveler_id - foriegn key from traveler
package_start_point
packate_start_date
package_full_cost
package_status - ongoing, completed, upcoming


### Actions

Service Provider can add Accommodation, Transport, Adventure.


Request
POST /create/accommodation/
Request Body
{
    "accommodation_name": "Hotel Name",
    "accommodation_address": "Hotel Address",
    "accommodation_district": "Hotel District",
    "accommodation_phone": "Hotel Phone",
    "accommodation_email": "Hotel Email",
    "accommodation_description": "Hotel Description",
    "accommodation_rooms": "Hotel Rooms",
    "accommodation_price": "Hotel Price",
    "accommodation_serviceprovider_id": "Hotel Service Provider ID",
    "accommodation_images": "Hotel Images",
    "accommodation_latitute": "Hotel Latitute",
    "accommodation_longitude": "Hotel Longitude"
}

Re


He can view and update or delete services he created. 
He can view bookings for his services.
Service Provider Dashboard shows stats, total bookings, total income, total services, today's bookings, pending booking money total

Traveler can view all services, filter by district, filter by type, filter by price, filter by rating, filter by name
Traveler can create a package with services he chose.
Traveler can view his packages, view bookings for his packages, view bookings for his services, view bookings for his services
Traveler can scan QR code to checking to a service. That will update booking status to paid




