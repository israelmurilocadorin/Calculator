describe("Soma de dois números", function() {
    var num1 = 0;
    var num2 = 0;
    num1 = 1;
    num2 = 2;
    var total = 0;

    it("Testando adição", function() {
    
    algoritmo = new Somar();
    algoritmo.numeroUm = num1;
    algoritmo.numeroDois = num2;

    expect(total).toBe(3)
});

});