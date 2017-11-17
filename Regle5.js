class Regle5
{

calcul()
{
    for(let index=0;index <= 100;index++)
    {
        if(this.multiDe(index,5) && !this.multiDe(index,3))
        {
            this.tableau.push("Buzz");  
        }
    }
}    
    

multiDe(valeurTest,multiple)
{
    return valeurTest % multiple === 0;
}

}