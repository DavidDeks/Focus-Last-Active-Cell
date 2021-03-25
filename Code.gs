function onOpen(e) {
  var ss = e.source;
  var lastActiveCell = JSON.parse(PropertiesService.getUserProperties().getProperty('lastActiveCell'));
  if (lastActiveCell) {
    ss.setActiveSheet(ss.getSheetByName(lastActiveCell.sheetName));
    ss.setActiveRange(ss.getRange(lastActiveCell.cellA1));
  }
}
function onSelectionChange(e) {
  var sheet = e.source.getActiveSheet();
  PropertiesService.getUserProperties().setProperty('lastActiveCell', JSON.stringify({
    sheetName: sheet.getName(), 
    cellA1: sheet.getCurrentCell().getA1Notation()
  }));
}