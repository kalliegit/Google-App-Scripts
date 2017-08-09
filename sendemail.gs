function sendEmail() {
  
  
  var ss = SpreadsheetApp.openById('1chULjNVMNbZ-IOpzivP9UD-UJLwpa1FfTyNNexIlt6g');
  var sheet = ss.getActiveSheet();
  var range = sheet.getDataRange();
  
  var values = range.getValues();
  
  var email = values[1][0];
  var name = values[1][1];
  var subject = values[1][2];
  var body = values[1][3];
  
  MailApp.sendEmail(email, subject, 'Hi '+name+',' +body);
  
}
