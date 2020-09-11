# DeFi Tokens Wiki


## Overview
DeFi Tokens Wiki is a comprehensive, up-to-date collection of information about several thousands (!) DeFi tokens.

The repository contains metadata for DeFi tokens on the Ethereum blockchain.

[Dharma](https://dharma.io) displays this metadata in their [mobile app](https://apps.apple.com/us/app/dharma-save-send-globally/id1495144415). Tokens added to this repository are also indexed on Uniswap.

Such a large collection can be maintained only through a community effort, so _contributions are welcome_,
primarily from token projects.


## Contribution Quick Start

Details of the repository structure and contribution guidelines are listed on the
[Developers site](https://developer.trustwallet.com/add_new_asset).
Here is a quick starter summary for the most common use case.

For **adding metadata to a token**:
- Fork the Github repository
- Open the `metadata.json` file in the `tokens/<tokenAddress>/metadata.json` path
- Add token metadata using the following format:
```json
{
    "name": "Maker",
    "symbol": "MKR",
    "address": "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    "decimals": 18,
    "dharmaVerificationStatus": "VERIFIED",
    "description": "The MKR token—the governance token of the Maker Protocol—allows those who hold it to vote on changes to the Maker Protocol. Note that anyone, not only MKR holders, can submit proposals for an MKR vote.",
    "socialLinks": [
        {
            "type": "website",
            "value": "https://makerdao.com/"
        },
        {

            "type": "twitter",
            "value": "https://twitter.com/MakerDAO"
        },
        {
            "type": "telegram",
            "value": "https://t.me/makerdaoOfficial"
        },
				{
            "type": "discord",
            "value": "https://discord.com/makerdao"
        }
    ],
    "tags": ["governance", "defi"]
}
```
- Create a PR to the main repo
- Wait for your PR to be approved by an admin

## Notes
- `dharmaVerificationStatus` indicates whether a token is the most popular token for that token symbol
- any new `tag` can be added in the `tags` array
- the only social links supported are Twitter, Discord, Telegram, and Website

## Disclaimer
The Dharma team allows anyone to submit new assets to this repository. However, this does not mean that we are in direct partnership with all of the projects.

The Dharma team will reject projects that are deemed as scam or fraudulent after careful review.
The Dharma team reserves the right to change the terms of asset submissions at any time due to changing market conditions, risk of fraud, or any other factors we deem relevant.
