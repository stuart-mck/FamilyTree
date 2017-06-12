class database{

    private _family: Family;

    constructor(){
        this._family = new Family(1);
        
    }

    public getFamily(): Family{
        return this._family;
    }

}