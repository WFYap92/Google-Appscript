function onEdit(e) {
  // Get the active sheet and range of the edited cell
  var sheet = e.source.getActiveSheet();
  var editedRange = e.range;

  var formattedDate = Utilities.formatDate(new Date(), "GMT+8", "dd-MM-yyyy");
  var formattedTime = Utilities.formatDate(new Date(), "GMT+8", "h:mm a");



  // Check if the edited cell is in Column D (4) and has a value
  if (editedRange.getColumn() === 4 && e.value ) {
    // Get the row of the edited cell
    var editedRow = editedRange.getRow();

    // Get the current datestamp
    var datestamp = formattedDate;

    // Get the current timestamp
    var timestamp = formattedTime;

    // Set the timestamp value in Column B (2) of the edited row if the cell is empty.
    if (!sheet.getRange(editedRow, 2).getValue()) {
    sheet.getRange(editedRow, 2).setValue(datestamp);
    }

    // Set the timestamp value in Column C (3) of the edited row if the cell is empty.
    if (!sheet.getRange(editedRow, 3).getValue()) {
    sheet.getRange(editedRow, 3).setValue(timestamp);
  }
  }
}
