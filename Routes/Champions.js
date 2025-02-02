import Champion from "../Schemas/ChampionSchema.js";
import {faker, tr} from "@faker-js/faker"
import express, {json} from "express";

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const champions = await Champion.find({}, 'year name id');
        const championCollections = {
            "items": champions,
            "_links": {
                "self": {
                    "href": process.env.BASE_URL + "/champions"
                },
                "collection": {
                    "href": process.env.BASE_URL + "/champions"
                },
            }
        }
        res.status(200).json(championCollections);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.post('/', async (req, res) => {
    const f1ChampionsDetailed = [
        {
            year: 1950,
            name: "Giuseppe Farina",
            age: 44,
            chassis: "Alfa Romeo 158",
            motor: "Alfa Romeo",
            team: "Alfa Romeo",
            tyres: "Pirelli",
            poles: 3,
            wins: 3,
            podiums: 5,
            points: 30,
            pointsClear: 3,
            fastestLaps: 2,
            number: 2,
        },
        {
            year: 1951,
            name: "Juan Manuel Fangio",
            age: 40,
            chassis: "Alfa Romeo 159",
            motor: "Alfa Romeo",
            team: "Alfa Romeo",
            tyres: "Pirelli",
            poles: 4,
            wins: 3,
            podiums: 5,
            points: 31,
            pointsClear: 6,
            fastestLaps: 1,
            number: 10,
        },
        {
            year: 1952,
            name: "Alberto Ascari",
            age: 34,
            chassis: "Ferrari 500",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Pirelli",
            poles: 5,
            wins: 6,
            podiums: 6,
            points: 54,
            pointsClear: 12,
            fastestLaps: 5,
            number: 101,
        },
        {
            year: 1953,
            name: "Alberto Ascari",
            age: 35,
            chassis: "Ferrari 500",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Pirelli",
            poles: 3,
            wins: 5,
            podiums: 6,
            points: 34.5,
            pointsClear: 6.5,
            fastestLaps: 2,
            number: 101,
        },
        {
            year: 1954,
            name: "Juan Manuel Fangio",
            age: 43,
            chassis: "Maserati 250F / Mercedes W196",
            motor: "Maserati / Mercedes",
            team: "Mercedes-Benz",
            tyres: "Continental",
            poles: 6,
            wins: 6,
            podiums: 8,
            points: 42,
            pointsClear: 16,
            fastestLaps: 3,
            number: 18,
        },
        {
            year: 1955,
            name: "Juan Manuel Fangio",
            age: 44,
            chassis: "Mercedes W196",
            motor: "Mercedes",
            team: "Mercedes-Benz",
            tyres: "Continental",
            poles: 4,
            wins: 4,
            podiums: 6,
            points: 40,
            pointsClear: 16,
            fastestLaps: 3,
            number: 10,
        },
        {
            year: 1956,
            name: "Juan Manuel Fangio",
            age: 45,
            chassis: "Ferrari D50",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Englebert",
            poles: 5,
            wins: 3,
            podiums: 5,
            points: 30,
            pointsClear: 3,
            fastestLaps: 2,
            number: 34,
        },
        {
            year: 1957,
            name: "Juan Manuel Fangio",
            age: 46,
            chassis: "Maserati 250F",
            motor: "Maserati",
            team: "Maserati",
            tyres: "Englebert",
            poles: 4,
            wins: 4,
            podiums: 5,
            points: 40,
            pointsClear: 15,
            fastestLaps: 4,
            number: 1,
        },
        {
            year: 1958,
            name: "Mike Hawthorn",
            age: 29,
            chassis: "Ferrari 246",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Englebert",
            poles: 3,
            wins: 1,
            podiums: 7,
            points: 42,
            pointsClear: 1,
            fastestLaps: 5,
            number: 4,
        },
        {
            year: 1959,
            name: "Jack Brabham",
            age: 33,
            chassis: "Cooper T51",
            motor: "Climax",
            team: "Cooper-Climax",
            tyres: "Dunlop",
            poles: 2,
            wins: 2,
            podiums: 5,
            points: 31,
            pointsClear: 4,
            fastestLaps: 2,
            number: 8,
        },
        {
            year: 1960,
            name: "Jack Brabham",
            age: 34,
            chassis: "Cooper T53",
            motor: "Climax",
            team: "Cooper-Climax",
            tyres: "Dunlop",
            poles: 5,
            wins: 5,
            podiums: 6,
            points: 43,
            pointsClear: 9,
            fastestLaps: 4,
            number: 4,
        },
        {
            year: 1961,
            name: "Phil Hill",
            age: 34,
            chassis: "Ferrari 156",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Dunlop",
            poles: 5,
            wins: 2,
            podiums: 5,
            points: 34,
            pointsClear: 1,
            fastestLaps: 0,
            number: 4,
        },
        {
            year: 1962,
            name: "Graham Hill",
            age: 33,
            chassis: "BRM P57",
            motor: "BRM",
            team: "BRM",
            tyres: "Dunlop",
            poles: 5,
            wins: 4,
            podiums: 6,
            points: 42,
            pointsClear: 12,
            fastestLaps: 2,
            number: 7,
        },
        {
            year: 1963,
            name: "Jim Clark",
            age: 27,
            chassis: "Lotus 25",
            motor: "Climax",
            team: "Lotus-Climax",
            tyres: "Dunlop",
            poles: 7,
            wins: 7,
            podiums: 7,
            points: 54,
            pointsClear: 25,
            fastestLaps: 6,
            number: 4,
        },
        {
            year: 1964,
            name: "John Surtees",
            age: 30,
            chassis: "Ferrari 158",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Dunlop",
            poles: 3,
            wins: 2,
            podiums: 6,
            points: 40,
            pointsClear: 1,
            fastestLaps: 2,
            number: 7,
        },
        {
            year: 1965,
            name: "Jim Clark",
            age: 29,
            chassis: "Lotus 33",
            motor: "Climax",
            team: "Lotus-Climax",
            tyres: "Dunlop",
            poles: 6,
            wins: 6,
            podiums: 6,
            points: 54,
            pointsClear: 14,
            fastestLaps: 6,
            number: 4,
        },
        {
            year: 1966,
            name: "Jack Brabham",
            age: 40,
            chassis: "Brabham BT19",
            motor: "Repco",
            team: "Brabham-Repco",
            tyres: "Goodyear",
            poles: 2,
            wins: 4,
            podiums: 6,
            points: 42,
            pointsClear: 14,
            fastestLaps: 3,
            number: 6,
        },
        {
            year: 1967,
            name: "Denny Hulme",
            age: 31,
            chassis: "Brabham BT24",
            motor: "Repco",
            team: "Brabham-Repco",
            tyres: "Goodyear",
            poles: 1,
            wins: 2,
            podiums: 6,
            points: 51,
            pointsClear: 5,
            fastestLaps: 1,
            number: 2,
        },
        {
            year: 1968,
            name: "Graham Hill",
            age: 39,
            chassis: "Lotus 49B",
            motor: "Ford Cosworth",
            team: "Lotus-Ford",
            tyres: "Firestone",
            poles: 2,
            wins: 3,
            podiums: 6,
            points: 48,
            pointsClear: 12,
            fastestLaps: 2,
            number: 10,
        },
        {
            year: 1969,
            name: "Jackie Stewart",
            age: 30,
            chassis: "Matra MS80",
            motor: "Ford Cosworth",
            team: "Matra-Ford",
            tyres: "Dunlop",
            poles: 4,
            wins: 6,
            podiums: 10,
            points: 63,
            pointsClear: 26,
            fastestLaps: 6,
            number: 5,
        },
        {
            year: 1970,
            name: "Jochen Rindt",
            age: 28,
            chassis: "Lotus 72",
            motor: "Ford Cosworth",
            team: "Lotus-Ford",
            tyres: "Firestone",
            poles: 3,
            wins: 5,
            podiums: 6,
            points: 45,
            pointsClear: 5,
            fastestLaps: 3,
            number: 22,
        },
        {
            year: 1971,
            name: "Jackie Stewart",
            age: 32,
            chassis: "Tyrrell 003",
            motor: "Ford Cosworth",
            team: "Tyrrell-Ford",
            tyres: "Goodyear",
            poles: 6,
            wins: 6,
            podiums: 10,
            points: 62,
            pointsClear: 29,
            fastestLaps: 6,
            number: 11,
        },
        {
            year: 1972,
            name: "Emerson Fittipaldi",
            age: 25,
            chassis: "Lotus 72D",
            motor: "Ford Cosworth",
            team: "Lotus-Ford",
            tyres: "Goodyear",
            poles: 6,
            wins: 5,
            podiums: 8,
            points: 61,
            pointsClear: 16,
            fastestLaps: 3,
            number: 6,
        },
        {
            year: 1973,
            name: "Jackie Stewart",
            age: 34,
            chassis: "Tyrrell 006",
            motor: "Ford Cosworth",
            team: "Tyrrell-Ford",
            tyres: "Goodyear",
            poles: 5,
            wins: 5,
            podiums: 10,
            points: 71,
            pointsClear: 16,
            fastestLaps: 4,
            number: 5,
        },
        {
            year: 1974,
            name: "Emerson Fittipaldi",
            age: 27,
            chassis: "McLaren M23",
            motor: "Ford Cosworth",
            team: "McLaren-Ford",
            tyres: "Goodyear",
            poles: 2,
            wins: 3,
            podiums: 7,
            points: 55,
            pointsClear: 3,
            fastestLaps: 3,
            number: 5,
        },
        {
            year: 1975,
            name: "Niki Lauda",
            age: 26,
            chassis: "Ferrari 312T",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Goodyear",
            poles: 9,
            wins: 5,
            podiums: 9,
            points: 64.5,
            pointsClear: 19.5,
            fastestLaps: 2,
            number: 12,
        },
        {
            year: 1976,
            name: "James Hunt",
            age: 29,
            chassis: "McLaren M23",
            motor: "Ford Cosworth",
            team: "McLaren-Ford",
            tyres: "Goodyear",
            poles: 8,
            wins: 6,
            podiums: 8,
            points: 69,
            pointsClear: 1,
            fastestLaps: 3,
            number: 11,
        },
        {
            year: 1977,
            name: "Niki Lauda",
            age: 28,
            chassis: "Ferrari 312T2",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Goodyear",
            poles: 4,
            wins: 3,
            podiums: 10,
            points: 72,
            pointsClear: 17,
            fastestLaps: 2,
            number: 11,
        },
        {
            year: 1978,
            name: "Mario Andretti",
            age: 38,
            chassis: "Lotus 79",
            motor: "Ford Cosworth",
            team: "Lotus-Ford",
            tyres: "Goodyear",
            poles: 8,
            wins: 6,
            podiums: 7,
            points: 64,
            pointsClear: 13,
            fastestLaps: 2,
            number: 5,
        },
        {
            year: 1979,
            name: "Jody Scheckter",
            age: 29,
            chassis: "Ferrari 312T4",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Michelin",
            poles: 3,
            wins: 3,
            podiums: 7,
            points: 51,
            pointsClear: 4,
            fastestLaps: 1,
            number: 11,
        },
        {
            year: 1980,
            name: "Alan Jones",
            age: 34,
            chassis: "Williams FW07B",
            motor: "Ford Cosworth",
            team: "Williams-Ford",
            tyres: "Goodyear",
            poles: 1,
            wins: 5,
            podiums: 10,
            points: 67,
            pointsClear: 13,
            fastestLaps: 4,
            number: 27,
        },
        {
            year: 1981,
            name: "Nelson Piquet",
            age: 29,
            chassis: "Brabham BT49C",
            motor: "Ford Cosworth",
            team: "Brabham-Ford",
            tyres: "Goodyear",
            poles: 3,
            wins: 3,
            podiums: 7,
            points: 50,
            pointsClear: 1,
            fastestLaps: 2,
            number: 5,
        },
        {
            year: 1982,
            name: "Keke Rosberg",
            age: 33,
            chassis: "Williams FW08",
            motor: "Ford Cosworth",
            team: "Williams-Ford",
            tyres: "Goodyear",
            poles: 1,
            wins: 1,
            podiums: 6,
            points: 44,
            pointsClear: 5,
            fastestLaps: 2,
            number: 6,
        },
        {
            year: 1983,
            name: "Nelson Piquet",
            age: 31,
            chassis: "Brabham BT52",
            motor: "BMW",
            team: "Brabham-BMW",
            tyres: "Michelin",
            poles: 3,
            wins: 3,
            podiums: 6,
            points: 59,
            pointsClear: 2,
            fastestLaps: 2,
            number: 5,
        },
        {
            year: 1984,
            name: "Niki Lauda",
            age: 35,
            chassis: "McLaren MP4/2",
            motor: "TAG Porsche",
            team: "McLaren-TAG",
            tyres: "Michelin",
            poles: 0,
            wins: 5,
            podiums: 7,
            points: 72,
            pointsClear: 0.5,
            fastestLaps: 1,
            number: 8,
        },
        {
            year: 1985,
            name: "Alain Prost",
            age: 30,
            chassis: "McLaren MP4/2B",
            motor: "TAG Porsche",
            team: "McLaren-TAG",
            tyres: "Michelin",
            poles: 3,
            wins: 5,
            podiums: 11,
            points: 73,
            pointsClear: 20,
            fastestLaps: 4,
            number: 2,
        },
        {
            year: 1986,
            name: "Alain Prost",
            age: 31,
            chassis: "McLaren MP4/2C",
            motor: "TAG Porsche",
            team: "McLaren-TAG",
            tyres: "Goodyear",
            poles: 2,
            wins: 4,
            podiums: 11,
            points: 72,
            pointsClear: 2,
            fastestLaps: 1,
            number: 1,
        },
        {
            year: 1987,
            name: "Nelson Piquet",
            age: 35,
            chassis: "Williams FW11B",
            motor: "Honda",
            team: "Williams-Honda",
            tyres: "Goodyear",
            poles: 4,
            wins: 3,
            podiums: 11,
            points: 73,
            pointsClear: 12,
            fastestLaps: 4,
            number: 6,
        },
        {
            year: 1988,
            name: "Ayrton Senna",
            age: 28,
            chassis: "McLaren MP4/4",
            motor: "Honda",
            team: "McLaren-Honda",
            tyres: "Goodyear",
            poles: 13,
            wins: 8,
            podiums: 11,
            points: 94,
            pointsClear: 3,
            fastestLaps: 3,
            number: 12,
        },
        {
            year: 1989,
            name: "Alain Prost",
            age: 34,
            chassis: "McLaren MP4/5",
            motor: "Honda",
            team: "McLaren-Honda",
            tyres: "Goodyear",
            poles: 2,
            wins: 4,
            podiums: 13,
            points: 81,
            pointsClear: 16,
            fastestLaps: 4,
            number: 2,
        },
        {
            year: 1990,
            name: "Ayrton Senna",
            age: 30,
            chassis: "McLaren MP4/5B",
            motor: "Honda",
            team: "McLaren-Honda",
            tyres: "Goodyear",
            poles: 10,
            wins: 6,
            podiums: 11,
            points: 78,
            pointsClear: 7,
            fastestLaps: 3,
            number: 27,
        },
        {
            year: 1991,
            name: "Ayrton Senna",
            age: 31,
            chassis: "McLaren MP4/6",
            motor: "Honda",
            team: "McLaren-Honda",
            tyres: "Goodyear",
            poles: 6,
            wins: 7,
            podiums: 12,
            points: 96,
            pointsClear: 24,
            fastestLaps: 3,
            number: 1,
        },
        {
            year: 1992,
            name: "Nigel Mansell",
            age: 39,
            chassis: "Williams FW14B",
            motor: "Renault",
            team: "Williams-Renault",
            tyres: "Goodyear",
            poles: 14,
            wins: 9,
            podiums: 11,
            points: 108,
            pointsClear: 52,
            fastestLaps: 8,
            number: 5,
        },
        {
            year: 1993,
            name: "Alain Prost",
            age: 38,
            chassis: "Williams FW15C",
            motor: "Renault",
            team: "Williams-Renault",
            tyres: "Goodyear",
            poles: 13,
            wins: 7,
            podiums: 12,
            points: 99,
            pointsClear: 26,
            fastestLaps: 4,
            number: 2,
        },
        {
            year: 1994,
            name: "Michael Schumacher",
            age: 25,
            chassis: "Benetton B194",
            motor: "Ford",
            team: "Benetton-Ford",
            tyres: "Goodyear",
            poles: 6,
            wins: 8,
            podiums: 10,
            points: 92,
            pointsClear: 1,
            fastestLaps: 3,
            number: 5,
        },
        {
            year: 1995,
            name: "Michael Schumacher",
            age: 26,
            chassis: "Benetton B195",
            motor: "Renault",
            team: "Benetton-Renault",
            tyres: "Goodyear",
            poles: 4,
            wins: 9,
            podiums: 11,
            points: 102,
            pointsClear: 33,
            fastestLaps: 7,
            number: 1,
        },
        {
            year: 1996,
            name: "Damon Hill",
            age: 36,
            chassis: "Williams FW18",
            motor: "Renault",
            team: "Williams-Renault",
            tyres: "Goodyear",
            poles: 9,
            wins: 8,
            podiums: 10,
            points: 97,
            pointsClear: 19,
            fastestLaps: 3,
            number: 5,
        },
        {
            year: 1997,
            name: "Jacques Villeneuve",
            age: 26,
            chassis: "Williams FW19",
            motor: "Renault",
            team: "Williams-Renault",
            tyres: "Goodyear",
            poles: 10,
            wins: 7,
            podiums: 11,
            points: 81,
            pointsClear: 3,
            fastestLaps: 3,
            number: 3,
        },
        {
            year: 1998,
            name: "Mika Hakkinen",
            age: 29,
            chassis: "McLaren MP4/13",
            motor: "Mercedes",
            team: "McLaren-Mercedes",
            tyres: "Bridgestone",
            poles: 9,
            wins: 8,
            podiums: 11,
            points: 100,
            pointsClear: 14,
            fastestLaps: 5,
            number: 8,
        },
        {
            year: 1999,
            name: "Mika Hakkinen",
            age: 30,
            chassis: "McLaren MP4/14",
            motor: "Mercedes",
            team: "McLaren-Mercedes",
            tyres: "Bridgestone",
            poles: 11,
            wins: 5,
            podiums: 11,
            points: 76,
            pointsClear: 2,
            fastestLaps: 4,
            number: 1,
        },
        {
            year: 2000,
            name: "Michael Schumacher",
            age: 31,
            chassis: "Ferrari F1-2000",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Bridgestone",
            poles: 9,
            wins: 9,
            podiums: 12,
            points: 108,
            pointsClear: 19,
            fastestLaps: 3,
            number: 3,
        },
        {
            year: 2001,
            name: "Michael Schumacher",
            age: 32,
            chassis: "Ferrari F2001",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Bridgestone",
            poles: 11,
            wins: 9,
            podiums: 13,
            points: 123,
            pointsClear: 58,
            fastestLaps: 3,
            number: 1,
        },
        {
            year: 2002,
            name: "Michael Schumacher",
            age: 33,
            chassis: "Ferrari F2002",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Bridgestone",
            poles: 7,
            wins: 11,
            podiums: 17,
            points: 144,
            pointsClear: 67,
            fastestLaps: 6,
            number: 1,
        },
        {
            year: 2003,
            name: "Michael Schumacher",
            age: 34,
            chassis: "Ferrari F2003-GA",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Bridgestone",
            poles: 5,
            wins: 6,
            podiums: 8,
            points: 93,
            pointsClear: 2,
            fastestLaps: 5,
            number: 1,
        },
        {
            year: 2004,
            name: "Michael Schumacher",
            age: 35,
            chassis: "Ferrari F2004",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Bridgestone",
            poles: 8,
            wins: 13,
            podiums: 15,
            points: 148,
            pointsClear: 34,
            fastestLaps: 10,
            number: 1,
        },
        {
            year: 2005,
            name: "Fernando Alonso",
            age: 24,
            chassis: "Renault R25",
            motor: "Renault",
            team: "Renault",
            tyres: "Michelin",
            poles: 6,
            wins: 7,
            podiums: 15,
            points: 133,
            pointsClear: 21,
            fastestLaps: 2,
            number: 5,
        },
        {
            year: 2006,
            name: "Fernando Alonso",
            age: 25,
            chassis: "Renault R26",
            motor: "Renault",
            team: "Renault",
            tyres: "Michelin",
            poles: 6,
            wins: 7,
            podiums: 14,
            points: 134,
            pointsClear: 13,
            fastestLaps: 5,
            number: 1,
        },
        {
            year: 2007,
            name: "Kimi Raikkonen",
            age: 28,
            chassis: "Ferrari F2007",
            motor: "Ferrari",
            team: "Ferrari",
            tyres: "Bridgestone",
            poles: 3,
            wins: 6,
            podiums: 12,
            points: 110,
            pointsClear: 1,
            fastestLaps: 6,
            number: 6,
        },
        {
            year: 2008,
            name: "Lewis Hamilton",
            age: 23,
            chassis: "McLaren MP4-23",
            motor: "Mercedes",
            team: "McLaren-Mercedes",
            tyres: "Bridgestone",
            poles: 7,
            wins: 5,
            podiums: 10,
            points: 98,
            pointsClear: 1,
            fastestLaps: 1,
            number: 22,
        },
        {
            year: 2009,
            name: "Jenson Button",
            age: 29,
            chassis: "Brawn BGP 001",
            motor: "Mercedes",
            team: "Brawn-Mercedes",
            tyres: "Bridgestone",
            poles: 4,
            wins: 6,
            podiums: 9,
            points: 95,
            pointsClear: 11,
            fastestLaps: 3,
            number: 22,
        },
        {
            year: 2010,
            name: "Sebastian Vettel",
            age: 23,
            chassis: "Red Bull RB6",
            motor: "Renault",
            team: "Red Bull-Renault",
            tyres: "Bridgestone",
            poles: 10,
            wins: 5,
            podiums: 10,
            points: 256,
            pointsClear: 4,
            fastestLaps: 3,
            number: 5,
        },
        {
            year: 2011,
            name: "Sebastian Vettel",
            age: 24,
            chassis: "Red Bull RB7",
            motor: "Renault",
            team: "Red Bull-Renault",
            tyres: "Pirelli",
            poles: 15,
            wins: 11,
            podiums: 17,
            points: 392,
            pointsClear: 122,
            fastestLaps: 3,
            number: 1,
        },
        {
            year: 2012,
            name: "Sebastian Vettel",
            age: 25,
            chassis: "Red Bull RB8",
            motor: "Renault",
            team: "Red Bull-Renault",
            tyres: "Pirelli",
            poles: 6,
            wins: 5,
            podiums: 10,
            points: 281,
            pointsClear: 3,
            fastestLaps: 6,
            number: 1,
        },
        {
            year: 2013,
            name: "Sebastian Vettel",
            age: 26,
            chassis: "Red Bull RB9",
            motor: "Renault",
            team: "Red Bull-Renault",
            tyres: "Pirelli",
            poles: 9,
            wins: 13,
            podiums: 16,
            points: 397,
            pointsClear: 155,
            fastestLaps: 7,
            number: 1,
        },
        {
            year: 2014,
            name: "Lewis Hamilton",
            age: 29,
            chassis: "Mercedes W05",
            motor: "Mercedes",
            team: "Mercedes",
            tyres: "Pirelli",
            poles: 7,
            wins: 11,
            podiums: 16,
            points: 384,
            pointsClear: 67,
            fastestLaps: 7,
            number: 44,
        },
        {
            year: 2015,
            name: "Lewis Hamilton",
            age: 30,
            chassis: "Mercedes W06",
            motor: "Mercedes",
            team: "Mercedes",
            tyres: "Pirelli",
            poles: 11,
            wins: 10,
            podiums: 17,
            points: 381,
            pointsClear: 59,
            fastestLaps: 8,
            number: 44,
        },
        {
            year: 2016,
            name: "Nico Rosberg",
            age: 31,
            chassis: "Mercedes W07",
            motor: "Mercedes",
            team: "Mercedes",
            tyres: "Pirelli",
            poles: 8,
            wins: 9,
            podiums: 16,
            points: 385,
            pointsClear: 5,
            fastestLaps: 6,
            number: 6,
        },
        {
            year: 2017,
            name: "Lewis Hamilton",
            age: 32,
            chassis: "Mercedes W08",
            motor: "Mercedes",
            team: "Mercedes",
            tyres: "Pirelli",
            poles: 11,
            wins: 9,
            podiums: 13,
            points: 363,
            pointsClear: 46,
            fastestLaps: 3,
            number: 44,
        },
        {
            year: 2018,
            name: "Lewis Hamilton",
            age: 33,
            chassis: "Mercedes W09",
            motor: "Mercedes",
            team: "Mercedes",
            tyres: "Pirelli",
            poles: 11,
            wins: 11,
            podiums: 17,
            points: 408,
            pointsClear: 88,
            fastestLaps: 3,
            number: 44,
        },
        {
            year: 2019,
            name: "Lewis Hamilton",
            age: 34,
            chassis: "Mercedes W10",
            motor: "Mercedes",
            team: "Mercedes",
            tyres: "Pirelli",
            poles: 5,
            wins: 11,
            podiums: 17,
            points: 413,
            pointsClear: 87,
            fastestLaps: 6,
            number: 44,
        },
        {
            year: 2019,
            name: "Lewis Hamilton",
            age: 34,
            chassis: "Mercedes W10",
            motor: "Mercedes",
            team: "Mercedes",
            tyres: "Pirelli",
            poles: 5,
            wins: 11,
            podiums: 17,
            points: 413,
            pointsClear: 87,
            fastestLaps: 6,
            number: 44,
        },
        {
            year: 2020,
            name: "Lewis Hamilton",
            age: 35,
            chassis: "Mercedes W11",
            motor: "Mercedes",
            team: "Mercedes",
            tyres: "Pirelli",
            poles: 10,
            wins: 11,
            podiums: 14,
            points: 347,
            pointsClear: 124,
            fastestLaps: 6,
            number: 44,
        },
        {
            year: 2021,
            name: "Max Verstappen",
            age: 24,
            chassis: "Red Bull RB16B",
            motor: "Honda",
            team: "Red Bull-Honda",
            tyres: "Pirelli",
            poles: 10,
            wins: 10,
            podiums: 18,
            points: 395.5,
            pointsClear: 8,
            fastestLaps: 6,
            number: 33,
        },
        {
            year: 2022,
            name: "Max Verstappen",
            age: 25,
            chassis: "Red Bull RB18",
            motor: "Red Bull Powertrains",
            team: "Red Bull Racing",
            tyres: "Pirelli",
            poles: 7,
            wins: 15,
            podiums: 17,
            points: 454,
            pointsClear: 146,
            fastestLaps: 5,
            number: 1,
        },
        {
            year: 2023,
            name: "Max Verstappen",
            age: 26,
            chassis: "Red Bull RB19",
            motor: "Red Bull Powertrains",
            team: "Red Bull Racing",
            tyres: "Pirelli",
            poles: 11,
            wins: 19,
            podiums: 21,
            points: 575,
            pointsClear: 227,
            fastestLaps: 7,
            number: 1,
        },
        {
            year: 2024,
            name: "Max Verstappen",
            age: 27,
            chassis: "Red Bull RB20",
            motor: "Red Bull Powertrains",
            team: "Red Bull Racing",
            tyres: "Pirelli",
            poles: 9,
            wins: 12,
            podiums: 18,
            points: 437,
            pointsClear: 63,
            fastestLaps: 5,
            number: 1,
        },
    ];
    const seedAmount = req.body.amount;
    const method = req.body.method;
    console.log(req.body)

    if (method === "SEED") {
        try {
            const reset = req.body.clean;
            if (reset === true) {
                await Champion.deleteMany({});
                console.log("Database has been cleared")
            } else {
                console.log("Databse is niet geleegd")
            }
            for (let i = 0; i < seedAmount; i++) {
                const {
                    year,
                    name,
                    age,
                    chassis,
                    motor,
                    team,
                    tyres,
                    poles,
                    wins,
                    podiums,
                    points,
                    pointsClear,
                    fastestLaps,
                    number,
                } = f1ChampionsDetailed[i];
                const yearStr = String(year);
                const nameStr = String(name);
                const ageStr = String(age);
                const chassisStr = String(chassis);
                const motorStr = String(motor);
                const teamStr = String(team);
                const tyresStr = String(tyres);
                const polesStr = String(poles);
                const winsStr = String(wins);
                const podiumsStr = String(podiums);
                const pointsStr = String(points);
                const pointsClearStr = String(pointsClear);
                const fastestLapsStr = String(fastestLaps);
                const numberStr = String(number);
                await Champion.create({
                    year: yearStr,
                    name: nameStr,
                    age: ageStr,
                    chassis: chassisStr,
                    motor: motorStr,
                    team: teamStr,
                    tyres: tyresStr,
                    poles: polesStr,
                    wins: winsStr,
                    podiums: podiumsStr,
                    points: pointsStr,
                    pointsClear: pointsClearStr,
                    fastestLaps: fastestLapsStr,
                    number: numberStr,
                })
            }
            res.status(201).json({message: "Champions seeded successfully"});

        } catch (error) {
            res.status(500).json({error: error.message})
        }
    } else {
        const {
            year,
            name,
            age,
            chassis,
            motor,
            team,
            tyres,
            poles,
            wins,
            podiums,
            points,
            pointsClear,
            fastestLaps,
            number
        } = req.body;
        if (!year || !name || !age || !chassis || !motor || !team || !tyres || !poles || !wins || !podiums || !points || !pointsClear || !fastestLaps || !number) {
            return res.status(400).json({message: "Velden zijn leeg"})
        }
        try {
            const yearStr = String(year);
            const nameStr = String(name);
            const ageStr = String(age);
            const chassisStr = String(chassis);
            const motorStr = String(motor);
            const teamStr = String(team);
            const tyresStr = String(tyres);
            const polesStr = String(poles);
            const winsStr = String(wins);
            const podiumsStr = String(podiums);
            const pointsStr = String(points);
            const pointsClearStr = String(pointsClear);
            const fastestLapsStr = String(fastestLaps);
            const numberStr = String(number);
            const addChampions = await Champion.create(
                {
                    year: yearStr,
                    name: nameStr,
                    age: ageStr,
                    chassis: chassisStr,
                    motor: motorStr,
                    team: teamStr,
                    tyres: tyresStr,
                    poles: polesStr,
                    wins: winsStr,
                    podiums: podiumsStr,
                    points: pointsStr,
                    pointsClear: pointsClearStr,
                    fastestLaps: fastestLapsStr,
                    number: numberStr,
                }
            )
            console.log("body="+ JSON.stringify(req.body, null, 4))
            console.log("createChampion="+ addChampions)
            res.status(201).json(addChampions + {message: "Champion created"})
        } catch
            (error) {
            console.error(error);
            res.status(500).json({error: error.message});
        }
    }

});

router.options('/', async (req, res) => {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    res.send();
});

router.get('/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const seasonYear = req.params.id;
        const champion = await Champion.findById(seasonYear);
        if (!champion) {
            return res.status(404).json({message: "This driver is no champion"})
        }
        res.status(200).json(champion)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
});

router.put('/:id', async (req, res) => {
    try {
        const championId = req.params.id;
        const {year, name, age, chassis, motor, team, tyres, poles, wins, podiums, points, pointsClear, fastestLaps, number
        } = req.body;
        if (!year || !name || !age || !chassis || !motor || !team || !tyres || !poles || !wins || !podiums || !points || !pointsClear || !fastestLaps || !number) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const yearStr =String(year);
        const nameStr = String(name);
        const ageStr = String(age);
        const chassisStr = String(chassis);
        const motorStr = String(motor);
        const teamStr = String(team);
        const tyresStr = String(tyres);
        const polesStr = String(poles);
        const winsStr = String(wins);
        const podiumsStr = String(podiums);
        const pointsStr = String(points);
        const pointsClearStr =String(pointsClear);
        const fastestLapsStr = String(fastestLaps);
        const numberStr = String(number);
        await inputChecker(championId, res, req, yearStr, nameStr, ageStr, chassisStr, motorStr, teamStr, tyresStr, polesStr, winsStr, podiumsStr, pointsStr, pointsClearStr, fastestLapsStr, numberStr)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const championId = req.params.id;
        await Champion.findByIdAndDelete(championId);
        res.status(204).json("Champion deleted")
    } catch (error) {
        req.status(400).json({error: error.message})
    }
});

router.options('/:id', async (req, res) => {
    res.setHeader('Allow', 'GET,PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');

    res.send();
});


async function inputChecker(championId, res, req, year, name, age, chassis, motor, team, tyres, poles, wins, podiums, points, pointsClear, fastestLaps, number) {
    const updateChampionInfo = await Champion.findByIdAndUpdate(
        championId, {
            year,
            name,
            age,
            chassis,
            motor,
            team,
            tyres,
            poles,
            wins,
            podiums,
            points,
            pointsClear,
            fastestLaps,
            number,
        }, {new: true, runValidators: true}
    );
    if (!updateChampionInfo) {
        res.status(404).json({error: "This driver is No champion!"})
    }
    res.status(201).json({message: "Champion updated", data: updateChampionInfo})}

export default router
