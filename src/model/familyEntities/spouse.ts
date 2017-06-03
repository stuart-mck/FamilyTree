class Spouse extends Relationship {
    public DateOfMarriage: Date;
    constructor(entityId: number, husband: Person, wife: Person, dateOfMarriage: Date){
        super(entityId, husband, wife);
        this.DateOfMarriage = dateOfMarriage;
    }
}