const fs = require("fs");
const web3 = require("web3-utils");
const Ajv = require("ajv");
const { Base64 } = require("js-base64");

const metadataSchema = require("../../schemas/metadata.json");
const { isValidSize, isValidDimension } = require("../../utils");

const ajv = new Ajv({allErrors: true}); 

const TOKEN_METADATA_PATH = "token-metadata";

const VALID_METADATA_FIELDS = ["name", "symbol", "address", "decimals", "dharmaVerificationStatus", "socialLinks", "description", "tags"];

const VALID_VEFICATION_STATUSES = ["VERIFIED", "BANNED", "UNVERIFIED"];

const VALID_SOCIAL_LINK_FIELDS = ["twitter", "discord", "website", "telegram"];

const VALID_TOKEN_METADATA_FILES = {
    METADATA: "metadata.json",
    LOGO: "logo.png"
}

const failingTokens = require('./failing-tokens.json');
const invalidSizeTokens = failingTokens.invalidSize;
const invalidDimensionsTokens = failingTokens.invalidDimensions;

describe("metadata.json", () => {
    const tokenDirectories = fs.readdirSync(TOKEN_METADATA_PATH);
    
    for (const tokenDirectory of tokenDirectories) {
        describe(tokenDirectory, () => {
            const files = fs.readdirSync(`${TOKEN_METADATA_PATH}/${tokenDirectory}`);

            it("should only have valid files", () => {
                const validFiles = Object.values(VALID_TOKEN_METADATA_FILES);
                expect(files.every(file => validFiles.includes(file))).toBe(true);
            })

            for (const file of files) {
                describe(file, () => {
                    if (file === VALID_TOKEN_METADATA_FILES.METADATA) {
                        const metadata = JSON.parse(fs.readFileSync(`${TOKEN_METADATA_PATH}/${tokenDirectory}/${file}`, 'utf8'));

                        it("should have a valid JSON schema", () => {
                            const valid = ajv.validate(metadataSchema, metadata);

                            if (!valid) {
                                console.log(`JSON schema validation error: ${ajv.errors}`);
                            }

                            expect(valid).toBe(true);
                        });

                        it("should be able to be decoded from base 64 format", () => {
                            const base64String = Base64.encode(JSON.stringify(metadata));
            
                            const json = JSON.parse(Base64.decode(base64String));
            
                            expect(JSON.stringify(metadata)).toEqual(JSON.stringify(json));
                        })

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
                                expect(fields.every(field => VALID_SOCIAL_LINK_FIELDS.includes(field.toLowerCase()))).toBe(true);
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
                    } else if (file === VALID_TOKEN_METADATA_FILES.LOGO) {
                        const logoPath = `${TOKEN_METADATA_PATH}/${tokenDirectory}/${file}`;

                        it("should have valid dimensions", () => {
                            const validDimension = isValidDimension(logoPath);
                            if (!invalidDimensionsTokens.includes(tokenDirectory)) {
                              expect(validDimension).toBe(true);
                            }
                        });

                        it("should have a valid size", () => {
                            const validSize = isValidSize(logoPath);
                            if (!invalidSizeTokens.includes(tokenDirectory)) {
                              expect(validSize).toBe(true);
                            }
                        })
                    }
                })
            }
        })
    }
})