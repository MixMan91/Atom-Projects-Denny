class MyDate {
   ...
   toString(locale) {
     if ( locale === 'US' ) {
       return this.getMonth() + '/' + this.getDay() + '/' + this.getYear();
     } else {
       return this.getDay() + '/' + this.getMonth() + '/' + this.getYear();
     }
   }
 }
