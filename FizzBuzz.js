class FizzBuzz{
    
    constructor(){
        this._tableau = [];
    }

    calcul()
    {
        for(let index=0;index <= 100;index++)
        {
            if(this.multiDe(index,3) && this.multiDe(index,5))
            {
                this._tableau.push("FizzBuzz");  
            }
            else if(this.multiDe(index,3))
            {
                this._tableau.push("Fizz");
            }
            else if(this.multiDe(index,5))
            {
                this._tableau.push("Buzz");   
            }
            else
            this._tableau.push(index);
        }

        return this._tableau;
    }

    multiDe(valeurTest,multiple)
    {
        return valeurTest % multiple === 0;
    }
}