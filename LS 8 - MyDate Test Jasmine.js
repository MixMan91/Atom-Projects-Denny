 describe("MyDate.addDays works correctly", () => {
   it("Adds days across months", () => {
     let d1 = new MyDate(2017, 5, 30),
         d2 = new MyDate(2017, 6, 2);

     d1.addDays(3);

     expect(d1._value).toEqual(d2._value);
   });

   it("Adds days across several months", () => {
     let d1 = new MyDate(2017, 5, 30),
         d2 = new MyDate(2017, 7, 2);

     d1.addDays(33);

     expect(d1._value).toEqual(d2._value);
   });
 });
