const calAverage = (scoreOne, scoreTwo, scoreThree) => {
    return (scoreOne + scoreTwo + scoreThree) / 2;
}

const dolphinsAvg = calAverage(96, 108, 89);
const koalasAvg = calAverage(7, 8, 10);

const checkWinner = function(dolphinAvg, koalasAvg)
{
    if (dolphinAvg >= 2* koalasAvg)
    {
        console.log(`dolphin wins (${dolphinAvg} v/s ${koalasAvg})`);
    }
    else if (koalasAvg >= 2*dolphinAvg)
    {
        console.log(`koalas wins (${koalasAvg} v/s ${dolphinAvg})`);
    }
    else
    {
        console.log(`no teams wins`)
    }
}

checkWinner(dolphinsAvg, koalasAvg);
