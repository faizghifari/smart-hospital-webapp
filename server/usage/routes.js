const booking = require('./booking');
const open_booking = require('./open_booking');
const usage = require('./usage');

module.exports = (app) => {
    app.get('/booking', booking.list);

    app.post('/:hospital_id/booking',          booking.receive_booking);
    app.get('/:hospital_id/booking',           booking.list_hospital);
    app.get('/:hospital_id/booking/used',      booking.list_hospital_used);
    app.get('/:hospital_id/booking/unused',    booking.list_hospital_unused);
    app.get('/:hospital_id/booking/closed',    booking.list_hospital_closed);

    app.post('/:hospital_id/open/booking', open_booking.create);
    app.get('/:hospital_id/open/booking/', open_booking.list_open);
    app.get('/:hospital_id/open/booking/closed', open_booking.list_closed);

    app.get('/:hospital_id/:booking_id/booking',       booking.retrieve);
    app.put('/:hospital_id/:booking_id/booking',       booking.update);
    app.put('/:hospital_id/:booking_id/booking/use',   usage.receive_usage);
    app.put('/:hospital_id/:booking_id/booking/close', usage.receive_closed_usage);
    app.delete('/:hospital_id/:booking_id/booking',    booking.destroy);

    app.get('/:hospital_id/:booking_id/open/booking/', open_booking.retrieve);
    app.put('/:hospital_id/:booking_id/open/booking/', open_booking.close);
    app.delete('/:hospital_id/:booking_id/open/booking/', open_booking.destroy);

    app.get('/:hospital_id/booking/:equipment_id',     booking.retrieve_bookings);
};