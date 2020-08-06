                                                        //เพิ่มรายละเอียดการสมัคร


//ตำแหน่ง
$(document).ready(function(){
    $('#submit1').click(function(){
      
        var Position = $('#checkPosition').val();
        if(Position == ""){
          $('#showtextPosition').html('กรุณาเลือก');
          $('#showtextPosition').css('color','red');
          return false;
        }
    });
  });

//วันที่เริ่ม
$(document).ready(function(){
    $('#submit1').click(function(){
      
        var Firstday = $('#checkFirstday').val();
        if(Firstday == ""){
          $('#showtextFirstday').html('กรุณากรอกข้อมูล');
          $('#showtextFirstday').css('color','red');
          return false;
        }
    });
  });

//วันที่สิ้นสุด
$(document).ready(function(){
    $('#submit1').click(function(){
      
        var Lastday = $('#checkLastday').val();
        if(Lastday == ""){
          $('#showtextLastday').html('กรุณากรอกข้อมูล');
          $('#showtextLastday').css('color','red');
          return false;
        }
    });
  });
//สาขาที่ฝึกงาน
$(document).ready(function(){
    $('#submit1').click(function(){
      
        var Subsidiary = $('#checkSubsidiary').val();
        if(Subsidiary == ""){
          $('#showtextSubsidiary').html('กรุณาเลือก');
          $('#showtextSubsidiary').css('color','red');
          return false;
        }
    });
  });



                                                        //ประวัติส่วนตัวเเละที่อยู่
//ชื่อ
$(document).ready(function(){
    $('#submit1').click(function(){
      
        var Name1 = $('#checkName1').val();
        if(Name1 == ""){
          $('#showtextName1').html('กรุณากรอกข้อมูล');
          $('#showtextName1').css('color','red');
          return false;
        }
    });
  });

//นามสกุล
  $(document).ready(function(){
    $('#submit1').click(function(){
      
        var Surname1 = $('#checkSurname1').val();
        if(Surname1 == ""){
          $('#showtextSurname1').html('กรุณากรอกข้อมูล');
          $('#showtextSurname1').css('color','red');
          return false;
        }
    });
  });

//Name
$(document).ready(function(){
    $('#submit1').click(function(){
      
        var Name2 = $('#checkName2').val();
        if(Name2 == ""){
          $('#showtextName2').html('กรุณากรอกข้อมูล');
          $('#showtextName2').css('color','red');
          return false;
        }
    });
  });

  //Surname
  $(document).ready(function(){
    $('#submit1').click(function(){
      
        var Surname2 = $('#checkSurname2').val();
        if(Surname2 == ""){
          $('#showtextSurname2').html('กรุณากรอกข้อมูล');
          $('#showtextSurname2').css('color','red');
          return false;
        }
    });
  });

  //ว/ด/ป เกิด
  $(document).ready(function(){
    $('#submit1').click(function(){
      
        var Birthday = $('#checkBirthday').val();
        if(Birthday == ""){
          $('#showtextBirthday').html('กรุณากรอกข้อมูล');
          $('#showtextBirthday').css('color','red');
          return false;
        }
    });
  });

  //มือถือ
  $(document).ready(function(){
    $('#submit1').click(function(){
      
        var Mobile1 = $('#checkMobile1').val();
        if(Mobile1 == ""){
          $('#showtextMobile1').html('กรุณากรอกข้อมูล');
          $('#showtextMobile1').css('color','red');
          return false;
        }
    });
  });

  //ที่อยู่อีเมล
  $(document).ready(function(){
    $('#submit1').click(function(){
      
        var Email1 = $('#checkEmail1').val();
        if(Email1 == ""){
          $('#showtextEmail1').html('กรุณากรอกข้อมูล');
          $('#showtextEmail1').css('color','red');
          return false;
        }
    });
  });

  //เลขบัตรปชช
  $(document).ready(function(){
    $('#submit1').click(function(){
      
        var IDnumber = $('#checkIDnumber').val();
        if(IDnumber == ""){
          $('#showtextIDnumber').html('กรุณากรอกข้อมูล');
          $('#showtextIDnumber').css('color','red');
          return false;
        }
    });
  });

  //ธนาคาร
  $(document).ready(function(){
    $('#submit1').click(function(){
      
        var Bank = $('#checkBank').val();
        if(Bank == ""){
          $('#showtextBank').html('กรุณาเลือก');
          $('#showtextBank').css('color','red');
          return false;
        }
    });
  });

  //เลขบัญชีธนาคาร
  $(document).ready(function(){
    $('#submit1').click(function(){
      
        var Bankaccount = $('#checkBankaccount').val();
        if(Bankaccount == ""){
          $('#showtextBankaccount').html('กรุณากรอกข้อมูล');
          $('#showtextBankaccount').css('color','red');
          return false;
        }
    });
  });



  

//                                                     //ประวัติการศึกษา
// //ปีการศึกษา
// $(document).ready(function(){
//     $('#submit2').click(function(){
      
//         var Schoolyear1 = $('#checkSchoolyear1').val();
//         if(Schoolyear1 == ""){
//           $('#showtextSchoolyear1').html('กรุณากรอกข้อมูล');
//           $('#showtextSchoolyear1').css('color','red');
//           return false;
//         }
//     });
//   });

// //ระดับการศึกษา
// $(document).ready(function(){
//     $('#submit2').click(function(){
      
//         var Educationlvl = $('#checkEducationlvl').val();
//         if(Educationlvl == ""){
//           $('#showtextEducationlvl').html('กรุณาเลือก');
//           $('#showtextEducationlvl').css('color','red');
//           return false;
//         }
//     });
//   });

// //ชื่อสถาบัน
// $(document).ready(function(){
//     $('#submit2').click(function(){
      
//         var Institute1 = $('#checkInstitute1').val();
//         if(Institute1 == ""){
//           $('#showtextInstitute1').html('กรุณากรอกข้อมูล');
//           $('#showtextInstitute1').css('color','red');
//           return false;
//         }
//     });
//   });

//   //วิชาที่ศึกษา/วุฒิที่ได้รับ
//   $(document).ready(function(){
//     $('#submit2').click(function(){
      
//         var Qualification1 = $('#checkQualification1').val();
//         if(Qualification1 == ""){
//           $('#showtextQualification1').html('กรุณากรอกข้อมูล');
//           $('#showtextQualification1').css('color','red');
//           return false;
//         }
//     });
//   });

//   //วิชาเอก
//   $(document).ready(function(){
//     $('#submit2').click(function(){
      
//         var Major = $('#checkMajor').val();
//         if(Major == ""){
//           $('#showtextMajor').html('กรุณากรอกข้อมูล');
//           $('#showtextMajor').css('color','red');
//           return false;
//         }
//     });
//   });

//                                                     //ประวัติการฝึกอบรม

// //ชื่อหัวข้อฝึกอบรม
// $(document).ready(function(){
//     $('#submit3').click(function(){
      
//         var Topic = $('#checkTopic').val();
//         if(Topic == ""){
//           $('#showtextTopic').html('กรุณากรอกข้อมูล');
//           $('#showtextTopic').css('color','red');
//           return false;
//         }
//     });
//   });

// //ชื่อสถาบัน
// $(document).ready(function(){
//     $('#submit3').click(function(){
      
//         var Institute2 = $('#checkInstitute2').val();
//         if(Institute2 == ""){
//           $('#showtextInstitute2').html('กรุณากรอกข้อมูล');
//           $('#showtextInstitute2').css('color','red');
//           return false;
//         }
//     });
//   });

// //ปีการศึกษา
// $(document).ready(function(){
//     $('#submit3').click(function(){
      
//         var Schoolyear2 = $('#checkSchoolyear2').val();
//         if(Schoolyear2 == ""){
//           $('#showtextSchoolyear2').html('กรุณากรอกข้อมูล');
//           $('#showtextSchoolyear2').css('color','red');
//           return false;
//         }
//     });
//   });
// //วิชาที่ศึกษา/วุฒิที่ได้รับ              
// $(document).ready(function(){
//     $('#submit3').click(function(){
      
//         var Qualification2 = $('#checkQualification2').val();
//         if(Qualification2 == ""){
//           $('#showtextQualification2').html('กรุณากรอกข้อมูล');
//           $('#showtextQualification2').css('color','red');
//           return false;
//         }
//     });
//   });                                      


                                                //ประวัติอาจารย์ที่ปรึกษา/บุคคลอ้างอิง
                            
//ความสัมพันธ์
$(document).ready(function(){
    $('#submit4').click(function(){
      
        var Relation = $('#checkRelation').val();
        if(Relation == ""){
          $('#showtextRelation').html('กรุณาเลือก');
          $('#showtextRelation').css('color','red');
          return false;
        }
    });
  }); 


//ชื่อ
$(document).ready(function(){
    $('#submit4').click(function(){
      
        var Name3 = $('#checkName3').val();
        if(Name3 == ""){
          $('#showtextName3').html('กรุณากรอกข้อมูล');
          $('#showtextName3').css('color','red');
          return false;
        }
    });
  }); 

//นามสกุล  
$(document).ready(function(){
    $('#submit4').click(function(){
      
        var Surname3 = $('#checkSurname3').val();
        if(Surname3 == ""){
          $('#showtextSurname3').html('กรุณากรอกข้อมูล');
          $('#showtextSurname3').css('color','red');
          return false;
        }
    });
  });                                                   



//ที่อยู่อีเมล
$(document).ready(function(){
    $('#submit4').click(function(){
      
        var Email2 = $('#checkEmail2').val();
        if(Email2 == ""){
          $('#showtextEmail2').html('กรุณากรอกข้อมูล');
          $('#showtextEmail2').css('color','red');
          return false;
        }
    });
  }); 

//เบอร์มือถือ
$(document).ready(function(){
    $('#submit4').click(function(){
      
        var Mobile2 = $('#checkMobile2').val();
        if(Mobile2 == ""){
          $('#showtextMobile2').html('กรุณากรอกข้อมูล');
          $('#showtextMobile2').css('color','red');
          return false;
        }
    });
  }); 
