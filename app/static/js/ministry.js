
$(document).ready(function(){
    //connect to the socket server.
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/ministry');
    var numbers_received = [];

    //receive details from server
    socket.on('newnumber', function(msg) {
        console.log("Received number" + msg.number);
        //maintain a list of ten numbers
        if (numbers_received.length >= 10){
            numbers_received.shift()
        }            
        numbers_received.push(msg.number);
        numbers_string = '';
        for (var i = 0; i < numbers_received.length; i++){
            numbers_string = numbers_string + '<p>' + numbers_received[i].toString() + '</p>';
        }
        $('#log').html(numbers_string);
    });

});
// $(document).ready(function(){
//     var socket = io.connect('http://' + document.domain + ':' + location.port + '/ministry');
//     var safety_num_rcv = [];
//     var security_num_rcv = [];
//     var productivity_num_rcv = [];

//     socket.on('safety_num', function(msg) {
//         console.log("Safety Number Received : ", msg.safety_num);

//         if (safety_num_rcv.length >= 10){
//             safety_num_rcv.shift()
//         }
//         safety_num_rcv.push(msg.safety_num);
//         safety_num_str = '';
//         for (var i = 0; i < safety_num_rcv.length; i++){
//             safety_num_str = safety_num_str + '<p>' + safety_num_rcv[i].toString() + '</p>';
//         }
//         $('#safety_num').html(safety_num_str);
//     });

//     socket.on('security_num', function(msg) {
//         console.log("Security Number Received : ", msg.security_num);

//         if (security_num_rcv.length >= 10){
//             security_num_rcv.shift()
//         }
//         security_num_rcv.push(msg.security_num);
//         security_num_str = '';
//         for (var i = 0; i < security_num_rcv.length; i++){
//             security_num_str = security_num_str + '<p>' + security_num_rcv[i].toString() + '</p>';
//         }
//         $('#security_num').html(security_num_str);
//     });

//     socket.on('productivity_num', function(msg) {
//         console.log("Productivity Number Received : ", msg.productivity_num);

//         if (productivity_num_rcv.length >= 10){
//             productivity_num_rcv.shift()
//         }
//         productivity_num_rcv.push(msg.productivity_num);
//         productivity_num_str = '';
//         for (var i = 0; i < productivity_num_rcv.length; i++){
//             productivity_num_str = productivity_num_str + '<p>' + productivity_num_rcv[i].toString() + '</p>';
//         }
//         $('#productivity_num').html(productivity_num_str);
//     })
// });