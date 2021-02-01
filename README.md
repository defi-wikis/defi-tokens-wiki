[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/defi-wikis/defi-tokens-wiki)

![Banner](https://dharma-assets.s3-us-west-2.amazonaws.com/defi-asset-wiki-banner.png)
# DeFi Tokens Wiki

## Overview

There are thousands of assets in AMMs & DEXs on Ethereum, and that number will rapidly trend towards infinity.  The DeFi Tokens Wiki is a an attempt to categorize those tokens into high-signal lists and enrich them with up-to-date metadata, including:

- 💅🏻 **Logos**
- ✅ **Verification Statuses** (i.e. is this *the* $UNI token or a copy-cat?)
- 🗒 **Short-Form Descriptions**
- 🔮 **Tags**
- 🌏 **Social Links**
- Much more!

**Our goal is to create the most comprehensive, collaborative corpus of information about tokens on the Ethereum blockchain (and perhaps beyond!)**

[Dharma](https://dharma.io/) pulls from this repository in their [mobile app](https://apps.apple.com/us/app/dharma-save-send-globally/id1495144415) on a regular basis, but any project is welcome to do the same — this data is non-proprietary and open-source. Tokens added to this repository are also regularly published in the Dharma token list on the [Uniswap](https://uniswap.org/) UI.

Such a large collection can be maintained only through a community effort, so *contributions are welcome*.


## How To Suggest An Addition / Edit To The Wiki

1. Familiarize yourself with the [repository structure and schema with this guide](https://github.com/defi-wikis/defi-tokens-wiki/blob/master/documentation/REPOSITORY_LAYOUT_SCHEMA.md).
2. Submit a pull request with your proposed changes.
3. Answer any follow-up questions in the PR from Dharma admins.
4. Once your PR is merged by an admin, the Dharma app, Dharma Uniswap list, and any applications referencing this repo will be updated instantly


## Submitting A Suggestion From Command Line

- Fork the repository to your own GitHub account
- Clone fork and create new branch:

```
git clone git@github.com:YOUR_HANDLE/defi-tokens-wiki.git
cd defi-tokens-wiki
git checkout -b <branch_name>
```

- Add or edit tokens, tags, logos, or metadata in the appropriate directory. The [repository structure & schema](https://github.com/defi-wikis/defi-tokens-wiki/blob/master/documentation/REPOSITORY_LAYOUT_SCHEMA.md) documentation will help you
- Commit and push to your fork

```
git add -A
git commit -m “Add <token_name>”
git push origin <branch_name>
```

- From your repo clone page make a new PR (pull request)
- If you PR doesn't pass the automated test suite, please update your PR and push again
- Once the automated test suite passes, a Dharma admin will be notified to approve the PR


### Running the test suite locally
- Install dependencies with `npm i`
- Then run `jest`
- Note: Non-admins can only merge PR's if the test suite passes.


## Disclaimer
The Dharma team allows anyone to submit new assets to this repository. However, this does not mean that we are in direct partnership with all of the projects.

The Dharma team will reject projects that are deemed as scam or fraudulent after careful review.
The Dharma team reserves the right to change the terms of asset submissions at any time due to changing market conditions, risk of fraud, or any other factors we deem relevant.

Documentation format inspired by [TrustWallet](https://github.com/trustwallet/assets)
