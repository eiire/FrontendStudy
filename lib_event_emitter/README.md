****A library that allows you to subscribe to events and receive notifications about them.****

`Method 'on'`: Signs up for an event. A subscriber can subscribe to any event an unlimited number of times.

`Method 'off'`: 
Unsubscribe from an event subscription. After unsubscribing, when this event occurs, no handlers associated with this subscriber should be called. You can re-subscribe and receive events again.

`Method 'emit'`: 
Notification to all subscribers (not unsubscribed). Calls all handler functions in subscription order.