const fs = require("fs");
const { Base64 } = require("js-base64");

describe("tokenlist.json", () => {
    const file = JSON.parse(fs.readFileSync(`token-list/tokenlist.json`, 'utf8'));
    
    it("should be able to be decoded from base 64 format", () => {
        const base64String = Base64.encode(JSON.stringify(file));

        const json = JSON.parse(Base64.decode(base64String));

        expect(JSON.stringify(file)).toEqual(JSON.stringify(json));
    })
})