function multipleemails() {
  

  
  
  var ss = SpreadsheetApp.openById('1chULjNVMNbZ-IOpzivP9UD-UJLwpa1FfTyNNexIlt6g');
  var sheet = ss.getActiveSheet();
  var range = sheet.getDataRange();
  
  var values = range.getValues();
    
    for(i=1;i<values.length; i++) {
  
      var email = values[i][0];
      var name = values[i][1];
      var subject = values[i][2];
      var body = values[i][3];
      
      MailApp.sendEmail(email, subject, 'Hi '+name+',' +body);
      
    }
  
}


