class Clock {
    timer

    constructor({template}) {
        this.template = {template}
    }

    stop() {
        clearInterval(this.timer)
    }

    static render({template}={template: 'h:m:s'}) {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;


        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)

        console.log(output);
    }

    start() {
        this.timer = setInterval(Clock.render, 1000, this.template)
    }
}

test = new Clock({template: 'h:m:s'})
Clock.render()
test.start()
test.stop()


// task 2
// console.log(ExtendedClock.prototype.__proto__) // === Clock.prototype

class Clock2 {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock2 {
    constructor(template) {
        super(template);
        this.precision = template.precision || 1000
    }
    start() {
        this.render();
        // not closure
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 2000
});

lowResolutionClock.start();
