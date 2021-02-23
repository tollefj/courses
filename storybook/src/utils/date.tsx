import moment from 'moment';

export function getShortDate(date: Date) : String {
    return moment(date).format('DD.MM.YYYY');
}

export function getLongDate(date: Date) : String {
    return moment(date).format('LLLL'); // Tuesday, February 23, 2021 1:40 PM
}

/*
Dates:
moment().format('MMMM Do YYYY, h:mm:ss a'); // August 16th 2015, 4:17:24 pm
moment().format('dddd');                    // Sunday
moment().format("MMM Do YY");               // Aug 16th 15
moment().format('YYYY [escaped] YYYY');     // 2015 escaped 2015
moment("20111031", "YYYYMMDD").fromNow(); // 4 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 3 years ago
moment().startOf('day').fromNow();        // 16 hours ago
moment().endOf('day').fromNow();          // in 8 hours

Relative time:
moment("20111031", "YYYYMMDD").fromNow(); // 9 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 9 years ago
moment().startOf('day').fromNow();        // 14 hours ago
moment().endOf('day').fromNow();          // in 10 hours
moment().startOf('hour').fromNow();

Calendar time:
moment().subtract(10, 'days').calendar(); // 02/13/2021
moment().subtract(6, 'days').calendar();  // Last Wednesday at 1:40 PM
moment().subtract(3, 'days').calendar();  // Last Saturday at 1:40 PM
moment().subtract(1, 'days').calendar();  // Yesterday at 1:40 PM
moment().calendar();                      // Today at 1:40 PM
moment().add(1, 'days').calendar();       // Tomorrow at 1:40 PM
moment().add(3, 'days').calendar();       // Friday at 1:40 PM
moment().add(10, 'days').calendar();      // 03/05/2021

Multiple locales:
moment.locale();         // en
moment().format('LT');   // 1:40 PM
moment().format('LTS');  // 1:40:53 PM
moment().format('L');    // 02/23/2021
moment().format('l');    // 2/23/2021
moment().format('LL');   // February 23, 2021
moment().format('ll');   // Feb 23, 2021
moment().format('LLL');  // February 23, 2021 1:40 PM
moment().format('lll');  // Feb 23, 2021 1:40 PM
moment().format('LLLL'); // Tuesday, February 23, 2021 1:40 PM
moment().format('llll'); // Tue, Feb 23, 2021 1:40 PM
*/