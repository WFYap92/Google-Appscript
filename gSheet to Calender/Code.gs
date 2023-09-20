// Creates a menu item within gsheet that runs the function
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Calendar')
      .addItem('Save', 'convertSheetToCalendarEvents')
      .addToUi();
}

function convertSheetToCalendarEvents() {
  // Get the active spreadsheet.
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  // Get the sheet that contains the event details.
  const sheet = SpreadsheetApp.getActiveSheet();


  // Loop through the rows in the sheet.
  // Remember on cell D2 in the gSheet and below use "=TO_DATE(B2+C2)"
  for (let i = 2; i <= sheet.getLastRow(); i++) {
    // Get the event details from the current row.
    const title = sheet.getRange(i, 1).getValue();
    const startString = sheet.getRange(i, 2).getValue();
    const endString = sheet.getRange(i, 4).getValue();
    const description = sheet.getRange(i, 5).getValue();
    const location = sheet.getRange(i, 6).getValue();

    // converts the strings into dates
    const start = new Date(startString);
    const end = new Date(endString);

    // Create a new calendar event.
    const event = CalendarApp.createEvent(title, start, end, {
      description,
      location,
      });

    //event.save('c45970f421de7716f7fcd4636ce2d140b6180e50eda347becbeac00819cc85b1@group.calendar.google.com');

  }
}
