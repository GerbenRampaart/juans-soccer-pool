'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TournamentSchema = new Schema({
    "local": [
        {
            "culture": String,
            "short": String,
            "long": String,
            "Location": String
        }
    ],
    "year": Number,
    "teams": [
        {
            "_id": { type: ObjectId, required: true },
            "local": [
                {
                    "culture": String,
                    "name": String,
                    "country": String
                }
            ],
            "group": String,
            "players": [
                {
                    "_id": { type: ObjectId, required: true },
                    "birthDay": Date,
                    "firstName": String,
                    "lastName": String,
                    "position": String,
                    "squadNumber": Number,
                    "isCaptain": Boolean
                }
            ]
        }
    ],
    "matches": [
        {
            "_id": { type: ObjectId, required: true },
            "played": Date,
            "location": String,
            "isLocked": Boolean,
            "homeActualScore": Number,
            "awayActualScore": Number,
            "homeTeamId": { type: ObjectId, required: true },
            "awayTeamId": { type: ObjectId, required: true },
            "roundId": { type: ObjectId, required: true },
            "cards": [
                {
                    "minute": Number,
                    "isYellow": Boolean,
                    "isRed": Boolean,
                    "playerId": { type: ObjectId, required: true }
                }
            ],
            "goals": [
                {
                    "minute": Number,
                    "isPenalty": Boolean,
                    "isFreeKick": Boolean,
                    "isOwnGoal": Boolean,
                    "isDuringPenaltyShootOut": Boolean,
                    "isDuringOvertime": Boolean,
                    "assistPlayerId": { type: ObjectId, required: true },
                    "goalPlayerId": { type: ObjectId, required: true }
                }
            ]
        }
    ],
    "rounds":[
        {
            "_id": { type: ObjectId, required: true },
            "code": Number,
            "local": [
                {
                    "culture": String,
                    "name": String
                }
            ],
            "numberOfSeatedTeamsAllowed": Number,
            "isLocked": Boolean
        }
    ],
    "scoreTypes": [
        {
            "_id": { type: ObjectId, required: true },
            "code": Number,
            "name": String,
            "description": String,
            "isCounted": Boolean,
            "isLocked": Boolean,
            "nearestGetsHalf": Boolean,
            "scoreAmount": Number,
            "entryType": String,
            "roundCode": Number
        }
    ]

});