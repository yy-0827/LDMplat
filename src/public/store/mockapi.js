//const User = require("../services/userServices")
//const Device = require("../services/deviceServices")

const userlist = {
    data: {
        data: {
            count: 20,
            rows: [
                {
                    id: 1,
                    userid: 13204445,
                    name: '彭洋',
                    nick: '识调存',
                    sex: true,
                    bir: '1994-10-11',
                    psw: 'cltseg',
                    ph: '13845621154'
                },
                {
                    id: 2,
                    userid: 13204446,
                    name: '袁刚',
                    nick: '存多改技',
                    sex: true,
                    bir: '1983-01-25',
                    psw: 'etunfu',
                    ph: '13847285332'
                },
                {
                    id: 3,
                    userid: 13204447,
                    name: '马芳',
                    nick: '研约存件则',
                    sex: false,
                    bir: '2001-12-07',
                    psw: 'wlvxdt',
                    ph: '13575134584'
                },
                {
                    id: 4,
                    userid: 13204448,
                    name: '邵桂英',
                    nick: '细工被之到',
                    sex: false,
                    bir: '1987-02-03',
                    psw: 'qfepco',
                    ph: '13292844357'
                },
                {
                    id: 5,
                    userid: 13204449,
                    name: '梁磊',
                    nick: '转车任它',
                    sex: false,
                    bir: '2010-02-27',
                    psw: 'qzobdq',
                    ph: '13533976869'
                },
                {
                    id: 6,
                    userid: 13204450,
                    name: '邵秀兰',
                    nick: '热感四次',
                    sex: true,
                    bir: '1979-11-06',
                    psw: 'vhggqf',
                    ph: '18986840146'
                },
                {
                    id: 7,
                    userid: 13204451,
                    name: '孟芳',
                    nick: '清为红转',
                    sex: true,
                    bir: '2011-10-26',
                    psw: 'nabofv',
                    ph: '13203357466'
                },
                {
                    id: 8,
                    userid: 13204453,
                    name: '测试',
                    nick: '三青便',
                    sex: false,
                    bir: '2015-02-04',
                    psw: 'wzzqcpe',
                    ph: '13594910035'
                },
                {
                    id: 9,
                    userid: 13204455,
                    name: '易丽',
                    nick: '产该术白',
                    sex: false,
                    bir: '1993-09-16',
                    psw: 'updxbm',
                    ph: '13587574850'
                },
                {
                    id: 10,
                    userid: 13204452,
                    name: '戴霞',
                    nick: '三青全便',
                    sex: false,
                    bir: '2015-04-04',
                    psw: 'wzzqcp',
                    ph: '13594910035'
                },

            ]
        }
    }
};
const devicelist = {
    data: {
        data:
        {
            count: 100,
            rows: [
                {
                    id: 1,
                    di: 24358894,
                    st: 1,
                    rt: '2021-05-08 21:05:12',
                    cs: '121.56153855629844,31.928868',
                    pr: '上海',
                    rp: 94,
                    ss: 5,
                    vd: 'HANGTUO',
                    dt: 2,
                    ft: 1,
                    ip: '192.168.56.135',
                    userid: '13204447',
                    aph: '18959379084',
                    cph: '13544462776',
                    drt: '1999-12-12 09:10:48',
                    dav: '1.0.5'
                },
                {
                    id: 2,
                    di: 24358895,
                    st: 1,
                    rt: '2021-05-08 21:05:12',
                    cs: '121.82,31.5',
                    pr: '上海',
                    rp: 14,
                    ss: 4,
                    vd: 'HANGTUO',
                    dt: 1,
                    ft: 1,
                    ip: '192.168.56.146',
                    userid: '13204454',
                    aph: '13583341165',
                    cph: '13893285891',
                    drt: '1979-05-24 12:41:35',
                    dav: '1.0.5'
                },
                {
                    id: 3,
                    di: 24358898,
                    st: 1,
                    rt: '2021-05-08 21:05:12',
                    cs: '121.3,30.437394644613537',
                    pr: '上海',
                    rp: 23,
                    ss: 5,
                    vd: 'HANGTUO',
                    dt: 1,
                    ft: 1,
                    ip: '192.168.56.21',
                    userid: '13204453',
                    aph: '13853638707',
                    cph: '13877523753',
                    drt: '2020-01-05 03:43:25',
                    dav: '1.0.5'
                },
                {
                    id: 4,
                    di: 24358896,
                    st: 3,
                    rt: '2021-05-08 21:05:12',
                    cs: '121.63,31.2217',
                    pr: '上海',
                    rp: 24,
                    ss: 4,
                    vd: 'HANGTUO',
                    dt: 2,
                    ft: 1,
                    ip: '192.168.56.104',
                    userid: '13204455',
                    aph: '18910254248',
                    cph: '13565950340',
                    drt: '1997-05-15 22:59:41',
                    dav: '1.0.5'
                },
                {
                    id: 5,
                    di: 24358897,
                    st: 2,
                    rt: '2021-05-08 21:05:12',
                    cs: '121.339628462814,31.85',
                    pr: '上海',
                    rp: 53,
                    ss: 4,
                    vd: 'HANGTUO',
                    dt: 1,
                    ft: 1,
                    ip: '192.168.56.156',
                    userid: '13204448',
                    aph: '18954051561',
                    cph: '13554172853',
                    drt: '2000-08-09 15:47:51',
                    dav: '1.0.5'
                },
                {
                    id: 6,
                    di: 24358899,
                    st: 2,
                    rt: '2021-05-08 21:05:12',
                    cs: '121.43448,31.873174238725337',
                    pr: '上海',
                    rp: 84,
                    ss: 3,
                    vd: 'HANGTUO',
                    dt: 2,
                    ft: 1,
                    ip: '192.168.56.65',
                    userid: '13204450',
                    aph: '18955100822',
                    cph: '18970472886',
                    drt: '1971-12-23 18:07:42',
                    dav: '1.0.5'
                },
                {
                    id: 7,
                    di: 24358900,
                    st: 2,
                    rt: '2021-05-08 21:05:12',
                    cs: '121.38146663576,31.74',
                    pr: '上海',
                    rp: 34,
                    ss: 3,
                    vd: 'HANGTUO',
                    dt: 1,
                    ft: 1,
                    ip: '192.168.56.12',
                    userid: '13204449',
                    aph: '13554937054',
                    cph: '13868795687',
                    drt: '1999-05-18 16:17:34',
                    dav: '1.0.5'
                },
                {
                    id: 8,
                    di: 24358901,
                    st: 1,
                    rt: '2021-05-08 21:05:12',
                    cs: '121.473,30.9658',
                    pr: '上海',
                    rp: 65,
                    ss: 5,
                    vd: 'HANGTUO',
                    dt: 1,
                    ft: 1,
                    ip: '192.168.56.175',
                    userid: '13204448',
                    aph: '13248855075',
                    cph: '13817747553',
                    drt: '1980-03-01 21:19:17',
                    dav: '1.0.5'
                },
                {
                    id: 9,
                    di: 24358902,
                    st: 1,
                    rt: '2021-05-08 21:05:12',
                    cs: '121.53515,30.4432748',
                    pr: '上海',
                    rp: 100,
                    ss: 3,
                    vd: 'HANGTUO',
                    dt: 1,
                    ft: 1,
                    ip: '192.168.56.106',
                    userid: '13204462',
                    aph: '18955585768',
                    cph: '13541847714',
                    drt: '1974-11-30 00:28:28',
                    dav: '1.0.5'
                },
                {
                    id: 10,
                    di: 24358903,
                    st: 3,
                    rt: '2021-05-08 21:05:12',
                    cs: '121.869939112,30.583106267836225',
                    pr: '上海',
                    rp: 26,
                    ss: 4,
                    vd: 'HANGTUO',
                    dt: 1,
                    ft: 1,
                    ip: '192.168.56.250',
                    userid: '13204448',
                    aph: '13841596206',
                    cph: '13531867205',
                    drt: '2007-06-26 17:06:20',
                    dav: '1.0.5'
                },

            ]
        }
    }
};

const useritem = {
    data: {
        data:
            [{
                id: 1,
                userid: 13204445,
                name: '彭洋',
                nick: '识调存',
                sex: true,
                bir: '1994-10-11',
                psw: 'cltseg',
                ph: '13845621154'
            }]

    }
};

const deitem = {
    data: {
        data:
            [{
                id: 1,
                di: 24358894,
                st: 1,
                rt: '2021-05-08 21:05:12',
                cs: '121.56153855629844,31.928868',
                pr: '上海',
                rp: 94,
                ss: 5,
                vd: 'HANGTUO',
                dt: 2,
                ft: 1,
                ip: '192.168.56.135',
                userid: '13204447',
                aph: '18959379084',
                cph: '13544462776',
                drt: '1999-12-12 09:10:48',
                dav: '1.0.5'
            }]

    }
};


const beiyonguser = [{
    id: 11,
    userid: 13204457,
    name: '戴秀英',
    nick: '局体己',
    sex: true,
    bir: '1996-05-16',
    psw: 'kpbcum',
    ph: '13874482644'
},
{
    id: 12,
    userid: 13204454,
    name: '孟秀英',
    nick: '与点张分',
    sex: false,
    bir: '1974-10-01',
    psw: 'bmsklh',
    ph: '13804583581'
},
{
    id: 13,
    userid: 13204458,
    name: '魏秀兰',
    nick: '们程发华听',
    sex: false,
    bir: '1977-09-17',
    psw: 'ptvepn',
    ph: '13800040355'
},
{
    id: 14,
    userid: 13204456,
    name: '测试二',
    nick: '三青芙蓉王',
    sex: false,
    bir: '1988-06-01',
    psw: 'hrnptt',
    ph: '13594910135'
},
{
    id: 15,
    userid: 13204459,
    name: '贾芳',
    nick: '住党装物正',
    sex: false,
    bir: '2003-12-25',
    psw: 'triolc',
    ph: '18935022107'
},
{
    id: 16,
    userid: 13204460,
    name: '赖磊',
    nick: '受都且品候',
    sex: false,
    bir: '1980-10-08',
    psw: 'syjvum',
    ph: '13821101687'
},
{
    id: 17,
    userid: 13204461,
    name: '唐军',
    nick: '团白究',
    sex: false,
    bir: '2014-01-07',
    psw: 'jsieno',
    ph: '13537401485'
},
{
    id: 18,
    userid: 13204462,
    name: '汤静',
    nick: '查者提',
    sex: false,
    bir: '1977-04-01',
    psw: 'gdjbeu',
    ph: '13220351280'
},
{
    id: 19,
    userid: 13204463,
    name: '傅明',
    nick: '细眼间面',
    sex: false,
    bir: '2018-05-04',
    psw: 'axkozq',
    ph: '13836663376'
},
{
    id: 20,
    userid: 13204464,
    name: '曾勇',
    nick: '活传八军',
    sex: true,
    bir: '1978-05-01',
    psw: 'vcjqpb',
    ph: '13810772846'
}];

const bieyongde = [{
    id: 11,
    di: 24358904,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.28486,31.94153837771721',
    pr: '上海',
    rp: 93,
    ss: 4,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.184',
    userid: '13204454',
    aph: '13562117638',
    cph: '13232575265',
    drt: '2016-02-05 14:38:50',
    dav: '1.0.5'
},
{
    id: 12,
    di: 24358905,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.05503658094322,31.556615498622623',
    pr: '上海',
    rp: 69,
    ss: 5,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.242',
    userid: '13204463',
    aph: '13888187642',
    cph: '13588982458',
    drt: '2013-08-27 07:53:01',
    dav: '1.0.5'
},
{
    id: 13,
    di: 24358906,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.0457522059,30.329852',
    pr: '上海',
    rp: 51,
    ss: 3,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.81',
    userid: '13204445',
    aph: '18927984328',
    cph: '13232953146',
    drt: '2015-09-07 01:03:18',
    dav: '1.0.5'
},
{
    id: 14,
    di: 24358907,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.34375235,31.722',
    pr: '上海',
    rp: 70,
    ss: 5,
    vd: 'HANGTUO',
    dt: 2,
    ft: 1,
    ip: '192.168.56.151',
    userid: '13204463',
    aph: '13837054528',
    cph: '13553942834',
    drt: '2008-07-20 04:17:49',
    dav: '1.0.5'
},
{
    id: 15,
    di: 24358908,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.14062,30.0279773',
    pr: '上海',
    rp: 26,
    ss: 4,
    vd: 'HANGTUO',
    dt: 2,
    ft: 1,
    ip: '192.168.56.66',
    userid: '13204453',
    aph: '13596402375',
    cph: '13852236074',
    drt: '2004-11-19 20:15:41',
    dav: '1.0.5'
},
{
    id: 16,
    di: 24358909,
    st: 3,
    rt: '2021-05-08 21:05:12',
    cs: '121.74,30.59143',
    pr: '上海',
    rp: 91,
    ss: 3,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.148',
    userid: '13204457',
    aph: '13817820416',
    cph: '13563785271',
    drt: '2016-09-18 02:53:23',
    dav: '1.0.5'
},
{
    id: 17,
    di: 24358910,
    st: 3,
    rt: '2021-05-08 21:05:12',
    cs: '121.2724,30.822761324831323',
    pr: '上海',
    rp: 86,
    ss: 4,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.49',
    userid: '13204450',
    aph: '13871563494',
    cph: '18933616329',
    drt: '2009-08-17 09:33:09',
    dav: '1.0.5'
},
{
    id: 18,
    di: 24358911,
    st: 3,
    rt: '2021-05-08 21:05:12',
    cs: '121.28742817,30.511334',
    pr: '上海',
    rp: 12,
    ss: 4,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.158',
    userid: '13204456',
    aph: '13867762685',
    cph: '13252256412',
    drt: '1979-01-08 21:03:09',
    dav: '1.0.5'
},
{
    id: 19,
    di: 24358912,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.04082,31.95',
    pr: '上海',
    rp: 100,
    ss: 5,
    vd: 'HANGTUO',
    dt: 2,
    ft: 1,
    ip: '192.168.56.242',
    userid: '13204449',
    aph: '13569432897',
    cph: '13521713045',
    drt: '1990-04-08 10:37:17',
    dav: '1.0.5'
},
{
    id: 20,
    di: 24358913,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121,31.23906722523',
    pr: '上海',
    rp: 25,
    ss: 3,
    vd: 'HANGTUO',
    dt: 2,
    ft: 1,
    ip: '192.168.56.2',
    userid: '13204454',
    aph: '13554361289',
    cph: '18965102624',
    drt: '1988-07-07 07:23:00',
    dav: '1.0.5'
},
{
    id: 21,
    di: 24358914,
    st: 3,
    rt: '2021-05-08 21:05:12',
    cs: '121,30.3459613',
    pr: '上海',
    rp: 69,
    ss: 4,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.182',
    userid: '13204452',
    aph: '18958955658',
    cph: '13865524808',
    drt: '1997-08-04 09:23:12',
    dav: '1.0.5'
},
{
    id: 22,
    di: 24358915,
    st: 3,
    rt: '2021-05-08 21:05:12',
    cs: '121.718967126014,31.539224743614',
    pr: '上海',
    rp: 20,
    ss: 4,
    vd: 'HANGTUO',
    dt: 2,
    ft: 1,
    ip: '192.168.56.242',
    userid: '13204457',
    aph: '13576568898',
    cph: '13564503334',
    drt: '1989-03-15 09:27:04',
    dav: '1.0.5'
},
{
    id: 23,
    di: 24358916,
    st: 3,
    rt: '2021-05-08 21:05:12',
    cs: '121.6813897853035,30.36518136',
    pr: '上海',
    rp: 69,
    ss: 5,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.136',
    userid: '13204455',
    aph: '13817032330',
    cph: '13868237307',
    drt: '1991-10-24 05:29:53',
    dav: '1.0.5'
},
{
    id: 24,
    di: 24358917,
    st: 1,
    rt: '2021-05-08 21:05:12',
    cs: '121.18,30.62',
    pr: '上海',
    rp: 27,
    ss: 5,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.252',
    userid: '13204452',
    aph: '18987388354',
    cph: '13860414669',
    drt: '1990-11-30 12:37:16',
    dav: '1.0.5'
},
{
    id: 25,
    di: 24358918,
    st: 1,
    rt: '2021-05-08 21:05:12',
    cs: '121.4654238782,30.8711435',
    pr: '上海',
    rp: 24,
    ss: 3,
    vd: 'HANGTUO',
    dt: 2,
    ft: 1,
    ip: '192.168.56.61',
    userid: '13204452',
    aph: '13246843242',
    cph: '13896327842',
    drt: '2012-03-28 06:23:57',
    dav: '1.0.5'
},
{
    id: 26,
    di: 24358919,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.83289791,31.354222561711087',
    pr: '上海',
    rp: 53,
    ss: 3,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.177',
    userid: '13204449',
    aph: '13552753238',
    cph: '13260346721',
    drt: '2019-12-27 15:08:57',
    dav: '1.0.5'
},
{
    id: 27,
    di: 24358920,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.3426351517,31',
    pr: '上海',
    rp: 78,
    ss: 4,
    vd: 'HANGTUO',
    dt: 2,
    ft: 1,
    ip: '192.168.56.90',
    userid: '13204457',
    aph: '13846891346',
    cph: '13542687684',
    drt: '2004-09-09 14:49:01',
    dav: '1.0.5'
},
{
    id: 28,
    di: 24358921,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.614434,30.60176790865',
    pr: '上海',
    rp: 92,
    ss: 3,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.37',
    userid: '13204448',
    aph: '18971591334',
    cph: '13874182336',
    drt: '2006-09-07 12:20:13',
    dav: '1.0.5'
},
{
    id: 29,
    di: 24358922,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.36187,31.755',
    pr: '上海',
    rp: 68,
    ss: 3,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.245',
    userid: '13204455',
    aph: '13299501861',
    cph: '13501128865',
    drt: '1972-10-08 03:00:49',
    dav: '1.0.5'
},
{
    id: 30,
    di: 24358923,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.913,30.51851751857',
    pr: '上海',
    rp: 89,
    ss: 5,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.196',
    userid: '13204453',
    aph: '13267401848',
    cph: '18916215882',
    drt: '2007-02-20 13:07:55',
    dav: '1.0.5'
},
{
    id: 31,
    di: 24358924,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.0987728,30.72725918464',
    pr: '上海',
    rp: 17,
    ss: 3,
    vd: 'HANGTUO',
    dt: 2,
    ft: 1,
    ip: '192.168.56.59',
    userid: '13204451',
    aph: '13823454375',
    cph: '13592437665',
    drt: '2018-11-14 11:27:16',
    dav: '1.0.5'
},
{
    id: 32,
    di: 24358925,
    st: 3,
    rt: '2021-05-08 21:05:12',
    cs: '121.30030867755974,30.8',
    pr: '上海',
    rp: 38,
    ss: 4,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.205',
    userid: '13204450',
    aph: '13569825875',
    cph: '13505511555',
    drt: '1991-10-04 06:46:45',
    dav: '1.0.5'
},
{
    id: 33,
    di: 24358926,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.4126585,30.48',
    pr: '上海',
    rp: 98,
    ss: 4,
    vd: 'HANGTUO',
    dt: 2,
    ft: 1,
    ip: '192.168.56.105',
    userid: '13204446',
    aph: '18910705757',
    cph: '13215417683',
    drt: '2010-03-04 02:19:54',
    dav: '1.0.5'
},
{
    id: 34,
    di: 24358927,
    st: 3,
    rt: '2021-05-08 21:05:12',
    cs: '121.3301015,31.6575',
    pr: '上海',
    rp: 69,
    ss: 5,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.252',
    userid: '13204451',
    aph: '13825971349',
    cph: '13850546520',
    drt: '2017-03-28 06:15:16',
    dav: '1.0.5'
},
{
    id: 35,
    di: 24358928,
    st: 1,
    rt: '2021-05-08 21:05:12',
    cs: '121.1523,30.182',
    pr: '上海',
    rp: 30,
    ss: 3,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.169',
    userid: '13204462',
    aph: '13584907297',
    cph: '13858751237',
    drt: '2004-12-28 15:03:13',
    dav: '1.0.5'
},
{
    id: 36,
    di: 24358929,
    st: 3,
    rt: '2021-05-08 21:05:12',
    cs: '121.76272493320522,30.227',
    pr: '上海',
    rp: 14,
    ss: 4,
    vd: 'HANGTUO',
    dt: 2,
    ft: 1,
    ip: '192.168.56.230',
    userid: '13204448',
    aph: '13847198888',
    cph: '13891358784',
    drt: '1981-10-27 16:46:28',
    dav: '1.0.5'
},
{
    id: 37,
    di: 24358930,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.58481113266333,31',
    pr: '上海',
    rp: 32,
    ss: 5,
    vd: 'HANGTUO',
    dt: 2,
    ft: 1,
    ip: '192.168.56.223',
    userid: '13204460',
    aph: '13597586643',
    cph: '13293124286',
    drt: '2020-03-19 00:43:55',
    dav: '1.0.5'
},
{
    id: 38,
    di: 24358931,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.606026,31.26359431505253',
    pr: '上海',
    rp: 80,
    ss: 4,
    vd: 'HANGTUO',
    dt: 1,
    ft: 1,
    ip: '192.168.56.121',
    userid: '13204464',
    aph: '13826207552',
    cph: '13838463774',
    drt: '2001-08-05 05:03:52',
    dav: '1.0.5'
},
{
    id: 39,
    di: 24358932,
    st: 2,
    rt: '2021-05-08 21:05:12',
    cs: '121.64742025486144,31.084406624490818',
    pr: '上海',
    rp: 60,
    ss: 3,
    vd: 'HANGTUO',
    dt: 2,
    ft: 1,
    ip: '192.168.56.156',
    userid: '13204463',
    aph: '13513880757',
    cph: '13830630613',
    drt: '1993-10-31 15:32:56',
    dav: '1.0.5'
},
{
    id: 40,
    di: 24358933,
    st: 3,
    rt: '2021-05-08 21:05:12',
    cs: '121.15,31.0214',
    pr: '上海',
    rp: 52,
    ss: 3,
    vd: 'HANGTUO',
    dt: 2,
    ft: 1,
    ip: '192.168.56.150',
    userid: '13204446',
    aph: '13574070467',
    cph: '13842967595',
    drt: '1988-04-19 11:33:08',
    dav: '1.0.5'
}];

async function getUserList(page, limit) {
    console.log(`mock-getuserlist传参page${page}limit${limit}`)
    return userlist
}

async function searchUser(item) {
    console.log(`mock-searchuser传参item:${JSON.stringify(item)}`)
    return useritem
}

async function addUser(item) {
    console.log(`mock-adduser传参item:${JSON.stringify(item)}`)
    return true
}

async function delUser(userid) {
    console.log(`mock-deluser传参userid:${userid}`)
    return true
}

async function updateUser(userid, obj) {
    console.log(`mock-updateuser传参userid:${userid}obj:${JSON.stringify(obj)}`)
    return true
}


//设备操作
async function getDeviceList(page, limit) {
    console.log(`mock-getdevicelist传参page:${page}limit:${limit}`)
    return devicelist
}

async function searchDevice(item) {
    console.log(`mock-searchdevice传参item:${JSON.stringify(item)}`)
    return deitem
}

async function addDevice(item) {
    console.log(`mock-adddevice传参item:${JSON.stringify(item)}`)
    return true
}

async function delDevice(di) {
    console.log(`mock-deldevice传参di:${di}`)
    return true
}

async function updateDevice(di, obj) {
    console.log(`mock-updatedevice传参di:${di}obj:${JSON.stringify(obj)}`)
    return true
}

export default {
    getUserList,
    searchUser,
    addUser, delUser, updateUser,
    getDeviceList,
    searchDevice,
    addDevice, delDevice, updateDevice
}