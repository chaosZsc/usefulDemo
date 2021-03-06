function countdownShow(conf) {
    // conf: {
    //     id: 'xxx', // 元素ID
    //     active: 'xxxx/xx/xx xx:xx:xx', // 结束时间
    //     server: 'xxxx/xx/xx xx:xx:xx' // 开始时间
    // }
    function judgeTime(time) {
        return time.map(function(v, i) {
            return v > 9 ? '' + v : '0' + v;
        });
    }
    function countdown(time) {
        let hours = parseInt(time / 3600);
        let minutes = parseInt(time / 60) % 60;
        let seconds = time % 60;
        let cdTime = judgeTime([hours, minutes, seconds]);
        document.getElementById(conf.id || 'time').innerHTML = cdTime[0] + ':' + cdTime[1] + ':' + cdTime[2];
    }
    let serverTime = conf.server ? new Date(conf.server) : new Date();
    let activeTime = conf.active ? new Date(conf.active) : new Date();
    var cdTime = parseInt((activeTime.getTime() - serverTime.getTime()) / 1000);
    countdown(cdTime);
    var cd = setInterval(function() {
        cdTime --;
        countdown(cdTime);
        if (cdTime == 0) clearInterval(cd);
    }, 1000);
}