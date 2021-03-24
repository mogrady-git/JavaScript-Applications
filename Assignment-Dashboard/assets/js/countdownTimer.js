// 20-21: Higher Diploma in Science – Computing / Software Development (2020 -2021)
// MODULES       #                                                              DEADLINE               VARIABLE NAME                        ID#                                         ID#
// 20-21: 51309 -1- COMPUTER ARCHITECTURE AND TECHNOLOGY CONVERGENCE    —     12-APR-2021*             catcDeadline             *=approx    catcDay catcHour catcMinute catcSecond      catcEnd      
// 20-21: 51314 -2- DATABASE DESIGN AND DEVELOPMENT                     —     12-APR-2021*             dddDeadline              *=approx    dddDay dddHour dddMinute dddSecond         dddEnd
// 20-21: 51307 -3- OBJECT ORIENTED SOFTWARE DEVELOPMENT                —     31-AUG-2021              oosdDeadline                         oosdDay oosdHour oosdMinute oosdSecond      osdEnd
// 20-21: 51317 -4- WEB APPLICATION DEVELOPMENT                         —     19-MAY-2021              wadDeadline                          wadDay wadHour wadMinute wadSecond          wadEnd
// 20-21: 46887 -5- COMPUTATIONAL THINKING WITH ALGORITHMS              —     14-MAY-2021              ctaDeadline                          ctaDay ctaHour ctaMinute ctaSecond          ctaEnd



// 1
var catcDeadline = new Date("apr 12, 2021 23:59:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    var t = catcDeadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("catcDay").innerHTML = days;
    document.getElementById("catcHour").innerHTML = hours;
    document.getElementById("catcMinute").innerHTML = minutes;
    document.getElementById("catcSecond").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("catcEnd").innerHTML = "TIME IS UP!";
        document.getElementById("catcDay").innerHTML = '0';
        document.getElementById("catcHour").innerHTML = '0';
        document.getElementById("catcMinute").innerHTML = '0';
        document.getElementById("catcSecond").innerHTML = '0';
    }
}, 1000);
2
var dddDeadline = new Date("apr 12, 2021 23:59:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    var t = dddDeadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("dddDay").innerHTML = days;
    document.getElementById("dddHour").innerHTML = hours;
    document.getElementById("dddMinute").innerHTML = minutes;
    document.getElementById("dddSecond").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("dddEnd").innerHTML = "TIME IS UP!";
        document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0';
    }
}, 1000);
// 3
var oosdDeadline = new Date("aug 31, 2021 23:59:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    var t = oosdDeadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("oosdDay").innerHTML = days;
    document.getElementById("oosdHour").innerHTML = hours;
    document.getElementById("oosdMinute").innerHTML = minutes;
    document.getElementById("oosdSecond").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("osdEnd").innerHTML = "TIME IS UP!";
        document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0';
    }
}, 1000);
// 4
var wadDeadline = new Date("may 19, 2021 23:59:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    var t = wadDeadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("wadDay").innerHTML = days;
    document.getElementById("wadHour").innerHTML = hours;
    document.getElementById("wadMinute").innerHTML = minutes;
    document.getElementById("wadSecond").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("wadEnd").innerHTML = "TIME IS UP!";
        document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0';
    }
}, 1000);
// 5
var ctaDeadline = new Date("may 14, 2021 23:59:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    var t = ctaDeadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("ctaDay").innerHTML = days;
    document.getElementById("ctaHour").innerHTML = hours;
    document.getElementById("ctaMinute").innerHTML = minutes;
    document.getElementById("ctaSecond").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("ctaEnd").innerHTML = "TIME IS UP!";
        document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0';
    }
}, 1000);