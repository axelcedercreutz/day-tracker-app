import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarView = () => {
  var calendar = undefined;
  useEffect(() => {
    var calendarEl = document.getElementById('calendar');

    if (calendarEl) {
      calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin],
        dateClick: function (info) {
          alert('Clicked on: ' + info.dateStr);
          alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
          alert('Current view: ' + info.view.type);
          // change the day's background color just for fun
          info.dayEl.style.backgroundColor = 'red';
        },
      });
      calendar.render();
    }
  }, []);
  return <div id="calendar"></div>;
};

export default CalendarView;
