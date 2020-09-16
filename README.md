# DeFi Tokens Wiki

## Overview

DeFi Tokens Wiki is a comprehensive collection of metadata on thousands of DeFi tokens.

[Dharma](https://dharma.io/) displays this metadata in their [mobile app](https://apps.apple.com/us/app/dharma-save-send-globally/id1495144415). Tokens added to this repository are also indexed on [Uniswap](https://uniswap.org/).

Such a large collection can be maintained only through a community effort, so *contributions are welcome*,
primarily from token projects.


## Contribution Quick Start

Details of the repository structure and contribution guidelines are listed on the
[DeFi Token Wiki site](https://www.notion.so/teamdharma/DeFi-Token-Wiki-ae228157933d40a7a956ae51ccfa1337).
Here is a quick starter summary for common use cases.


## How to add files

- Fork the repository to your own GitHub account
- Clone fork and create new branch:

```
git clone git@github.com:YOUR_HANDLE/defi-tokens-wiki.git
cd defi-tokens-wiki
git checkout -b <branch_name>
```

- Add token to appropriate directory, the [folder structure](https://www.notion.so/teamdharma/Repository-Details-b96fbfa6973d449e8526aef323b16c88#6c63d3c92fea44c4acf9a3a499cbf946) documentation will help you
- Commit and push to your fork

```
git add -A
git commit -m “Add <token_name>”
git push origin <branch_name>
```

- From your repo clone page make a new PR (pull request)
- If you PR doesn't pass the automated test suite, please update your PR and push again
- Once the automated test suite passes, a Dharma admin will be notified to approve the PR

## Adding Token Metadata
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
- If you PR doesn't pass the automated test suite, please update your PR and push again
- Wait for your PR to be approved by an admin


## Image Requirements

- File location: must be placed in the correct folder and subfolder within the [folder structure](https://www.notion.so/teamdharma/Repository-Details-b96fbfa6973d449e8526aef323b16c88#6c63d3c92fea44c4acf9a3a499cbf946).
- File extension: `png`. Uppercase `PNG` is considered invalid.
- File name：`logo.png`, all lowercase.
- Dimension: `256 x 256 pixels` or `512 x 512 pixels`.
- Background: preferably transparent (should fit dark mode as well; deny logos need light border/background).
- File size: maximum 100kB. Tip: optimize image size, e.g. using simple drag-and-drop online service [tinypng](https://tinypng.com/).


### Running the test suite locally
- Install dependencies with `npm i`
- Then run `jest`
- Note: Non-admins can only merge PR's if the test suite passes.


## Disclaimer
The Dharma team allows anyone to submit new assets to this repository. However, this does not mean that we are in direct partnership with all of the projects.

The Dharma team will reject projects that are deemed as scam or fraudulent after careful review.
The Dharma team reserves the right to change the terms of asset submissions at any time due to changing market conditions, risk of fraud, or any other factors we deem relevant.

Documentation format inspired by [TrustWallet](https://github.com/trustwallet/assets)
