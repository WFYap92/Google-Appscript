function createEvent(title, start, end, description, location, attendees) {
    // Create a new event object.
    var event = {
      title: title,
      start: start,
      end: end,
      description: description,
      location: location,
      attendees: attendees
    };
  
    // Save the event to the calendar.
    var calendar = CalendarApp.getActiveCalendar();
    calendar.insertEvent(event);
  }
  
  function getEvents(start, end) {
    // Get all events that occur between the start and end dates.
    var events = CalendarApp.getEvents(start, end);
  
    // Return the events.
    return events;
  }
  
  function updateEvent(eventId, title, start, end, description, location, attendees) {
    // Get the event object.
    var event = CalendarApp.Events.getById(eventId);
  
    // Update the event's properties.
    event.title = title;
    event.start = start;
    event.end = end;
    event.description = description;
    event.location = location;
    event.attendees = attendees;
  
    // Save the event.
    event.save();
  }
  
  function deleteEvent(eventId) {
    // Delete the event with the given ID.
    var event = CalendarApp.Events.getById(eventId);
    event.delete();
  }
