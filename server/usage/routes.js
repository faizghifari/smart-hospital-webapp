const booking = require('./booking');
const usage = require('./usage');

module.exports = (app) => {
    app.get('/bookings', booking.list);

    app.get('/:hospital_id/bookings',           booking.list_hospital);
    app.get('/:hospital_id/bookings/used',      booking.list_hospital_used);
    app.get('/:hospital_id/bookings/unused',    booking.list_hospital_unused);
    app.get('/:hospital_id/bookings/closed',    booking.list_hospital_closed);

    app.get('/:hospital_id/:booking_id/bookings',       booking.retrieve);
    app.put('/:hospital_id/:booking_id/bookings',       booking.update);
    app.put('/:hospital_id/:booking_id/bookings/use',   usage.receive_usage);
    app.put('/:hospital_id/:booking_id/bookings/close', usage.receive_closed_usage);
    app.delete('/:hospital_id/:booking_id/bookings',    booking.destroy);

    app.get('/:hospital_id/bookings/:equipment_id',     booking.retrieve_bookings);
};