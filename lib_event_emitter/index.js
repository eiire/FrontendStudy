module.exports = {
    event_subscribe: [],
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        this.event_subscribe.push({
            event: event,
            subscriber: subscriber,
            handler: {
                status: 'on',
                func:handler
            }
        })

        return this
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        this.event_subscribe.forEach(_subscriber => {
            if (_subscriber.subscriber == subscriber && event === _subscriber.event)
                _subscriber.handler.status = 'off'
        })

        return this
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        this.event_subscribe.forEach(subscriber => {
            if (subscriber.event === event && subscriber.handler.status === 'on')
                subscriber.handler.func.call(subscriber.subscriber)
        })

        return this
    }
};