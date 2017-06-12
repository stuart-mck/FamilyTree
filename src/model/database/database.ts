class database{

    private _family: Family;

    constructor(){
        this._family = new Family();
        
    }

    public getFamily(): Family{
        return this._family;
    }

}