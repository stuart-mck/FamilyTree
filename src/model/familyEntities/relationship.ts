class Relationship {
    public EntityId: number;
    public RelationshipType: relationshipType;
    public RelationshipStatus: relationshipStatus;
    public Relationship1: Person;
    public Relationship2: Person;
    public Children : Array<Person>;
    constructor(entityId: number, source: Person, target: Person){
        this.EntityId = entityId;
        this.Relationship1 = source;
        this.Relationship2 = target;
    }
}