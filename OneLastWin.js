export default function bot({ history, memory }) {

    let Rounds = history.length;
    let move = "C";


    if (memory == null) {

        memory = {

            IsDefectBot : false,
            IsHalfDefectBot: false,
            IsDefectEveryOtherRound: false,
            IsBullyBot: false,
            OpponentDTimes: 0,
            IC_OD: 0,
            ID_OC: 0,
            ID_OD: 0,
            IC_OC: 0,

            OpponentPoints :0

        };
    }
    if (Rounds > 0) {
        if (history.at(-1).you == "C" ) {

            
        }

    }
    


    if (Rounds > 0) {

        if (CheckIsDefectBot(history)) {

            memory.IsDefectBot = true;

        }
    }

    if (Rounds >= 40) {

        if (CheckIsHalfDefectBot(history)) {

            memory.IsHalfDefectBot = true;

        }
    }
    if (Rounds >= 3) {

        if (CheckIsDefectEveryOtherRound(history)) {

            memory.IsDefectEveryOtherRound = true;

        }
    }
    let OpponentDRate;
    if (Rounds > 0) {

        if (history.at(-1).opponent === "D") {

            memory.OpponentDTimes += 1

        }
        OpponentDRate = memory.OpponentDTimes / Rounds;
    }
    if (Rounds > 6) {
        if (CheckIsBullyBot(OpponentDRate)) {

            memory.IsBullyBot = true;

        }
    }

    if (Rounds > 119) {

        return ["D", memory];

    }


    

    if (memory.IsDefectBot) {

        return ["D", memory];
    }
    else if (memory.IsHalfDefectBot) {

        return ["D", memory];
    }
    else if (memory.IsDefectEveryOtherRound) {

        return ["D", memory];
    }
    else if (memory.IsBullyBot) {

        return ["D", memory];
    }
    else if (history.at(-1).opponent === "D") {

        return ["D", memory];        
    }
    




    return [move, memory]; 
}



 function CheckIsDefectBot(history) {

     return (history.at(0).opponent === "D");
}
function CheckIsHalfDefectBot(history) {

    return (history.at(-1).opponent === "D" && history.at(-2).opponent === "D");
}
function CheckIsDefectEveryOtherRound(history) {

    return ((history.at(0).opponent === "D" && history.at(1).opponent === "C" && history.at(2).opponent === "D") ||
        (history.at(0).opponent === "C" && history.at(1).opponent === "D" && history.at(2).opponent === "C"));
}
function CheckIsBullyBot(OpponentDRate) {

    if (OpponentDRate > 0.3) {


        return true
    }

    return false;
}