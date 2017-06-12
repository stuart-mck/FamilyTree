var familyTree = function(){
    return [ 
    {
        "EntityId" : 1,
        "ClanName" : "Bryce",
        "FamilyMembers" : [ {
            "EntityId" :2,
            "FirstName" : "George",
            "MiddleName" : ["somegthing"],
            "LastName" : "Bryce",
            "DateOfBirth": "18041221",
            "DateOfDeath": "19020821"
        },
        {
            "EntityId" : 3,
            "FirstName" : "Mildred",
            "MiddleName" : ["something"],
            "LastName" : "Whee",
            "DateOfBirth": "18041221",
            "DateOfDeath": "19020821"
        },
        {
            "EntityId" : 4,
            "FirstName" : "James",
            "MiddleName" : ["something"],
            "LastName" : "Bryce",
            "DateOfBirth": "18041221",
            "DateOfDeath": "19020821"
        }, 
            {
            "EntityId" : 5,
            "FirstName" : "Henry",
            "MiddleName" : ["something"],
            "LastName" : "Bryce",
            "DateOfBirth": "18041221",
            "DateOfDeath": "19020821"
        },
            {
            "EntityId" : 6,
            "FirstName" : "Millicent",
            "MiddleName" : ["something"],
            "LastName" : "Bryce",
            "DateOfBirth": "18041221",
            "DateOfDeath": "19020821"
        },
        ],
        "Relationships" : [
            {
                "EntityId" : 7,
                "EndOne" : 2,
                "EndTwo" : 3,
                "RelationshipType" : 2, //spouse
                "Events" : [
                    {"EntityId" : 8,
                     "EventType": 0, // married
                     "EventDate" : "18340504"
                    }
                ]
            },
            {
                "EntityId" : 8,
                "EndOne" : 7,
                "EndTwo" : 4,
                "RelationshipType" : 0,
            },
             {
                "EntityId" : 9,
                "EndOne" : 7,
                "EndTwo" : 5,
                "RelationshipType" : 0,
            },
              {
                "EntityId" : 10,
                "EndOne" : 7,
                "EndTwo" : 6,
                "RelationshipType" : 0,
            },
        ]
    }]
}

module.exports = familyTree;