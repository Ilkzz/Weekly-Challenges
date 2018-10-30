function timeForMilkAndCookies(d) {
    if (d.getMonth() === 11 && d.getDate() === 24) {
        console.log("xmas eve");
        return true;
        
    } else {
        console.log("not xmas eve");
        return false;
    }
}

timeForMilkAndCookies(new Date(2013, 11, 24))
timeForMilkAndCookies(new Date(3000, 11, 24))
timeForMilkAndCookies(new Date(2154, 11, 11))
timeForMilkAndCookies(new Date(2010, 11, 2))
timeForMilkAndCookies(new Date(1980, 9, 24))
