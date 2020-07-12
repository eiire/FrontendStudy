console.log(function getWeekDay(date){
    switch (new Date(Date.parse(date)).getDay()) {
        case 1: return 'Понедельник';
        case 2: return 'Вторник';
        case 3: return 'Среда';
        case 4: return 'Четверг';
        case 5: return 'Пятница';
        case 6: return 'Суббота';
        case 0: return 'Воскресенье';
    }
}(1))