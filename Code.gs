function onSelectionChange(e) {

  var ss = e.source;
  var sheet = ss.getActiveSheet();
  var cell = ss.getCurrentCell();
  var row = cell.getRow();
  var column = cell.getColumn();
  var sheetName = sheet.getSheetName();
  var scriptProperties = PropertiesService.getScriptProperties();

  scriptProperties.setProperty('row', row);
  scriptProperties.setProperty('column', column);
  scriptProperties.setProperty('sheet name', sheetName);
}

function onOpen(e) {

  var properties = PropertiesService.getScriptProperties();

  var ss = e.source;
  var sheetName = properties.getProperty('sheet name');
  var sheet = ss.getSheetByName(sheetName);
  var row = parseInt(properties.getProperty('row'));
  var column = parseInt(properties.getProperty('column'));
  var cell = sheet.getRange(row, column);

  ss.setActiveSheet(sheet);
  ss.setActiveRange(cell);  
}