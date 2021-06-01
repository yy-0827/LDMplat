


//121.39548872073314,31.3160772002364
const pointarr1 = ["121.39591538658384,31.31687324075552",
    "121.39588171250311,31.31822824786765",
    "121.39545915115002,31.320384823813985",
    "121.39504414596391,31.321379335979763",
    "121.39716608552402,31.321493967541322",
    "121.39925193767657,31.321717033959825",
    "121.40098380573886,31.3196494207571"];//由路径点坐标字符组成
const timearr1 = ["2021-05-01 08:01:00","2021-05-01 08:02:00","2021-05-01 08:02:20","2021-05-01 08:03:10","2021-05-01 08:05:02","2021-05-01 08:07:33"]



let createlist = (function() {
    const alarmlist = [{
        di: 20210061,
        aln: 12020001,
        tt: "2021-05-01 08:00:00",
        ct: "2021-05-02 16:00:00",
        alc: 200,
        mt: 1,
        rcs: "121.5,31.242",
        rp: 10,
        ss: 3,
        als: 1
    }];
    let point = function (di, aln, rcs,tt) {
        let data = {
            di,
            aln,
            tt,
            ct: "2021-05-02 16:00:00",
            alc: 100,
            mt: 0,
            rcs,
            rp: 80,
            ss: 3,
            als: 1
        }
        return data
    };
    let lowbat = function (di, aln, rp) {
        let data = {
            di,
            aln,
            tt: "2021-05-01 08:00:00",
            ct: "2021-05-02 16:00:00",
            alc: 200,
            mt: 1,
            rcs: "121.5,31.242",
            rp,
            ss: 3,
            als: 1
        }
        return data
    }
    let weaksign = function (di, aln, ss) {
        let data = {
            di,
            aln,
            tt: "2021-05-01 08:00:00",
            ct: "2021-05-02 16:00:00",
            alc: 300,
            mt: 1,
            rcs: "121.5,31.242",
            rp: 60,
            ss,
            als: 1
        }
        return data
    }
    for (let i = 0; i < pointarr1.length - 1; i++) {
        alarmlist.push(point("20210001", alarmlist[0].aln + 1 + i + "", pointarr1[i],timearr1[i]))
    };
    let index = alarmlist[alarmlist.length - 1].aln;

    alarmlist.push(lowbat("20210003", ++index + "", 15));
    alarmlist.push(lowbat("20210004", ++index + "", 5));
    alarmlist.push(weaksign("20210005", ++index + "", 2));
    alarmlist.push(weaksign("20210008", ++index + "", 1));
    return alarmlist
})();

module.exports = {
    createlist
}