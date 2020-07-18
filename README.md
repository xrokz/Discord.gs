# Discord.gs
Work-In-Progress Discord API library in NodeJS
---
## Example
```js
    const Discord = require("../src/index");
    const token = "YOURTOKEN";
    const client = new Discord.Client(token)

    client.on("ready", () => {
        console.log("I AM READYYYYYY !!");
    })

    client.run()
```
you can check more examples in [examples](examples)
