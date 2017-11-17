chai.should();
describe("Decrit le jeu du FizzBuzz", () => {
    
    let monFizzBuzz;
    let resulat;

    beforeEach(() => {
         monFizzBuzz = new FizzBuzz();
         resulat = monFizzBuzz.calcul();
    });
    
    it('Generer un monFizzBuzz de 0 a 100', ()=>{
        
        resulat.length.should.equal(101);
    });

    // les testes statique

    it('doit avoir le valeur 2 a la position 2',() => {
        resulat[2].should.equal(2);
    })

    it('doit afficher Fizz pour les multipes de 3 (valeur 3)', () => {
        resulat[3].should.equal('Fizz');
    });

    it('doit afficher Fizz pour les multipes de 6 (valeur 6)', () => {
        resulat[6].should.equal('Fizz');
    });

    it('doit afficher Fizz pour les multipes de 5 (valeur 5)', () => {
        resulat[5].should.equal('Buzz');
    });

    // automatisation des tests 

    it("doit avoir dans les multiples de 3 et 5  des FizzBuzz", () => {
        for(let index=0;index <= 100;index++)
        {
            if(index % 3 === 0 && index % 5 === 0)
            {
                resulat[index].should.equal("FizzBuzz");
            }
        }
    }); 

    it("doit avoir dans les multiples de 3 des Fizz", () => {
        for(let index=0;index <= 100;index++)
        {
            if(index % 3 === 0 && index % 5 != 0)
            {
                resulat[index].should.equal("Fizz");
            }
        }
    }); 

    it("doit avoir dans les multiples de 5 des Buzz", () => {
        for(let index=0;index <= 100;index++)
        {
            if(index % 5 === 0 && index % 3 != 0)
            {
                resulat[index].should.equal("Buzz");
            }
        }
    }); 
});