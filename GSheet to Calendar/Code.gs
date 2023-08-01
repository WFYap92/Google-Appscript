// Creates a menu item within gsheet that runs the function
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Calendar')
      .addItem('Save', 'convertSheetToCalendarEvents')
      .addToUi();
}

function convertSheetToCalendarEvents() {
  // Get the active spreadsheet.
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  // Get the sheet that contains the event details.
  var sheet = spreadsheet.getSheetByName("Events");

  // Loop through the rows in the sheet.
  for (var i = 2; i <= sheet.getLastRow(); i++) {
    // Get the event details from the current row.
    var title = sheet.getRange(i, 1).getValue();
    var start = sheet.getRange(i, 2).getValue();
    var end = sheet.getRange(i, 4).getValue();
    var description = sheet.getRange(i, 5).getValue();

    // Create a new calendar event.
    var event = CalendarApp.createEvent(title, start, end);

    // Set the event description.
    event.setDescription(description);

    // remove comment to save to dnd calendar
    //event.save('c45970f421de7716f7fcd4636ce2d140b6180e50eda347becbeac00819cc85b1@group.calendar.google.com');

  }
}
