

class database{

    private _family: Family;

    constructor(family: Family){
        this._family = family;
    }

    public getFamily(): Family{
        return this._family;
    }

}