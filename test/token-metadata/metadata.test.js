const fs = require("fs");
const web3 = require("web3-utils");
const Ajv = require('ajv');
const metadataSchema = require("../../schemas/metadata.json");

const ajv = new Ajv({allErrors: true}); 

const TOKEN_METADATA_PATH = "token-metadata";

const VALID_METADATA_FIELDS = ["name", "symbol", "address", "decimals", "dharmaVerificationStatus", "socialLinks", "description", "tags"];

const VALID_VEFICATION_STATUSES = ["VERIFIED", "BANNED", "UNVERIFIED"];

const VALID_SOCIAL_LINK_FIELDS = ["twitter", "discord", "website", "telegram"];

describe("metadata.json", () => {
    const tokenDirectories = fs.readdirSync(TOKEN_METADATA_PATH);
    
    for (const tokenDirectory of tokenDirectories) {
        describe(tokenDirectory, () => {
            const files = fs.readdirSync(`${TOKEN_METADATA_PATH}/${tokenDirectory}`);

            for (const file of files) {
                describe(file, () => {
                    if (file === "metadata.json") {
                        const metadata = JSON.parse(fs.readFileSync(`${TOKEN_METADATA_PATH}/${tokenDirectory}/${file}`, 'utf8'));

                        it("should have a valid JSON schema", () => {
                            const valid = ajv.validate(metadataSchema, metadata);

                            if (!valid) {
                                console.log(`JSON schema validation error: ${ajv.errors}`);
                            }

                            expect(valid).toBe(true);
                        });

                        it("should only have valid fields", () => {
                            const fields = Object.keys(metadata);
                            expect(fields.every(field => VALID_METADATA_FIELDS.includes(field))).toBe(true);
                        })

                        it("should be a valid address", () => {
                            expect(web3.isAddress(metadata.address)).toBe(true);
                            expect(web3.checkAddressChecksum(metadata.address)).toBe(true);
                        })

                        if (metadata.dharmaVerificationStatus) {
                            it("should have a valid status", () => {
                                expect(VALID_VEFICATION_STATUSES.includes(metadata.dharmaVerificationStatus)).toBe(true);
                            })
                        }

                        if (metadata.socialLinks) {
                            it("should only have valid fields", () => {
                                const fields = metadata.socialLinks.map(({ type }) => type);
                                expect(fields.every(field => VALID_SOCIAL_LINK_FIELDS.includes(field))).toBe(true);
                            })

                            if (metadata.twitter) {
                                it("should be a valid Twitter link", () => {
                                    const TWITTER_URL = "https://twitter.com/";
                                    const [twitterUrl] = metadata.twitter.slice(TWITTER_URL);
                                    expect(twitterUrl).toEqual(TWITTER_URL);
                                })

                                it("should be a valid Discord link", () => {
                                    const DISCORD_URL = "https://discord";
                                    const [url] = metadata.discord.slice(DISCORD_URL);
                                    expect(url).toEqual(DISCORD_URL);
                                })
                            }
                        }
                    }
                })
            }
        })
    }
})