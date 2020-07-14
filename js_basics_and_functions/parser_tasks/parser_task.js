let tasks = [{"fio": "Clint Eastwood","task": "Купить револьвер","complete": 1},
    {"fio": "Nikola Tesla","task": "Купить револьвер","complete": 0},
    {"fio": "Nikola Tesla","task": "Переменный ток","complete": 1}]
let mode = 'fio'

console.log(function parseTasks(taskArray,mode){
    let res = {}

    switch (mode) {
        case 'task':
            tasks.forEach(function (task) {
                if (!res.hasOwnProperty(task.task))
                    res[task.task] = []

                res[task.task].push({'fio': task.fio, 'complete': task.complete})
            })
            break
        case 'fio':
            tasks.forEach(function (task) {
                if (!res.hasOwnProperty(task.fio))
                    res[task.fio] = []

                res[task.fio].push({'task': task.task, 'complete': task.complete})
            })
    }

    return res
}(tasks, mode))
