module.exports = function main(inputs) {
    var moeny = 0;
    //1接续输入成对象
    // var taxi = JSON.parse(inputs);
    //2计算公里价格
    var mdistance = getDistanceMoney(inputs.distance);
    //3计算停车时间及停车价格
    var mparktime = getParkMoney(inputs.parkTime);
    //４计算总价(四舍五入)
    moeny += mdistance + mparktime;
    // write your code here...
    return Math.round(moeny);
};

function getDistanceMoney(distance) {
    var money = 0;
    if(distance<=2)
    {
        money = 6;
    }
    else if(distance<=8)
    {
        money += 6 + (distance-2)*0.8;
    }
    else if(distance>8)
    {
        money += 6 + 6*0.8 + (distance-8)*1.2;
    }
    return money;
}

function getParkMoney(parktime) {
    return  0.25 * parktime;
}
