import {eventType} from './../eventEntities/event';

export class mockFamily{
    
    public getMockData(): any {
    return { "Families": [ 
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
            }]}, 
            {   "EntityId" : 1,
                "ClanName" : "Bryce",
                "FamilyMembers" : [
                {
                "EntityId" : 7,
                "FirstName" : "Brian",
                "MiddleName" : ["something"],
                "LastName" : "Rowe",
                "DateOfBirth": "18041221",
                "DateOfDeath": "19020821"
            },
            {
                "EntityId" : 8,
                "FirstName" : "Samantha",
                "MiddleName" : ["something"],
                "LastName" : "Rowe",
                "DateOfBirth": "18041221",
                "DateOfDeath": "19020821"
            }]}],
            "Relationships" : [
                { "EntityId" : 7,
                    "EndOne" : 2,
                    "EndTwo" : 3,
                    "RelationshipType" : 2, //spouse
                    "Events" : [
                        {"EntityId" : 8,
                        "EventType": 0, // married
                        "EventDate" : "18340504"
                        }
                    ]},
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
                }],
                "Events" : [{
                    "EventId": 11,
                    "Title": "Family Renunion",
                    "Dates" : {
                           "StartDate" : "20180301T10:00z",
                           "EndDate": "20180305T10:00z"
                    },
                    "Location" : {
                        "Location" : "Halls Gap Holiday Park",
                        "Address1" : "1 Smith Street",
                        "Address2": "",
                        "City": "Halls Gap",
                        "State": "Victoria",
                        "PostCode": 5033,
                        "PhoneNumber": "03 55102232"
                    },
                    "Details" : "<p>Here is some information about the gathering</p>",
                    "EventType": eventType.Gathering,
                    "OrganiserId": 8
                }]
            };
    }
}


