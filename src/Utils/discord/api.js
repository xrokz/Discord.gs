const fetch = require('node-fetch');
let API_ENDPOINT = 'https://discordapp.com/api/v6'

module.exports.get = async (url, TOKEN) => {
    let req = await ( await fetch(API_ENDPOINT + url, {method: "get", headers: {
        Authorization: `Bot ${TOKEN}`,
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:69.0) Gecko/20100101 Firefox/69.0ot (https://discord.gs.org, 0.1)"
        }
    })
    )
    return req;
}