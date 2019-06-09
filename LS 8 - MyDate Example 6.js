 let d1 = new MyDate(2017, 5, 30),
     d2 = new MyDate(2017, 6, 2);

 d1.addDays(3);

 if ( d1._value !== d2._value ) {
      console.log("Not working!");
     }
