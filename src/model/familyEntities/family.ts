class Family{
    public EntityId: number;
    public FamilyMembers: Array<Person>;
    constructor(entityId: number){
        this.EntityId = entityId;
    }
}