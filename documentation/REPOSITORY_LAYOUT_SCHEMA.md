# Repository Structure

There are three directories in the token wiki:

- `tags`
- `token-list`
- `token-metadata`

```jsx
.
├── tags
│   └──tags.json
│
├── token-list
│   └──tokenlist.json
│
│
├── token-metadata
│   └──<tokenAddress>
│   │   └──logo.png
│   │   └──metadata.json
|   |
|   |
│   └──<tokenAddress>
│   │   └──logo.png
│   │   └──metadata.json
│   │   
│   └──<tokenAddress>
│   │   └──logo.png
│   │   └──metadata.json
...
```

# Directories

## `token-metadata`

The `token-metadata` directory contains a folder for each token. The name of the token folders is the checksum address.  In order to add a token, one adds a folder to the directory.

Each `<tokenAddress>` folder can contain two files: `logo.png` and `metadata.json`.

The `logo.png` file must meet the following requirements:

- File extension: `png`. Uppercase `PNG` is considered invalid.
- File name：`logo.png`, all lowercase.
- Dimension: `256 x 256 pixels` or `512 x 512 pixels`.
- Background: preferably transparent (should fit dark mode as well; deny logos need light border/background).
- File size: maximum 100kB. Tip: optimize image size, e.g. using simple drag-and-drop online service [tinypng](https://tinypng.com/).
 (e.g., PNG format, max. pixel size of 512x512 and max. file size of 100kB). This logo will appear as the token icon inside the [Dharma](https://dharma.io) app and [Uniswap](https://app.uniswap.org/#/swap).

The `metadata.json` file has up to eight fields:

- `name`
- `symbol`
- `address` (checksummed)
- `decimals`
- `description` (an explainer on the token)
- `dharmaVerificationStatus` (this indicates whether a token is the primary token for that symbol — can be either `VERIFIED`, `UNVERIFIED`, or `BANNED`)
- `socialLinks` (each has a `type` field and `value` field).  The following are the permitted types:
    - `discord`
    - `twitter`
    - `telegram`
    - `website`
- `tags` (ar array of relevant tags for the token, referenced by the corresponding key in the `tags.json` file described below)

Example:

```json
{
    "name": "Compound",
    "symbol": "COMP",
    "address": "0xc00e94Cb662C3520282E6f5717214004A7f26888",
    "decimals": 18,
    "dharmaVerificationStatus": "VERIFIED",
    "description": "Compound is an algorithmic money market protocol on Ethereum that lets users earn interest or borrow assets against collateral. Anyone can supply assets to Compound's liquidity pool and immediately begin earning continuously-compounding interest. Rates adjust automatically based on supply and demand.",
    "socialLinks": [
        {
            "type": "Twitter",
            "value": "https://twitter.com/compoundfinance"
        },
        {
            "type": "Website",
            "value": "https://compound.finance"
        },
        {
            "type": "Discord",
            "value": "https://discord.com/invite/cU7vmVW"
        }
    ],
    "tags": [
        "defi",
        "yield-farming",
        "lending"
    ]
}
```

## `tags`

The `tags` directory contains one file: `tags.json`. This file contains a JSON object of tags with a mapping to it's `name` and `description`.

Example:

```json
{
    "stablecoin": {
        "name": "Stablecoin",
        "description": "Tokens that are fixed to an external asset, e.g. the US dollar"
    },
    "defi": {
        "name": "DeFi",
        "description": "Tokens that enable financial services using smart contracts"
    },
    "yield-farming": {
        "name": "Yield Farming",
        "description": "Tokens that earn rewards using permissionless liquidity protocols"
    }
}
```

There are two ways to add a tag:

1. Directly to the `tags.json` file
2. When a tag is added to the `tags` array in a token's `metadata.json` file, the `tags.json` file is updated programmatically

When a tag is added to  the wiki, it will appear in the list of tags at the top of the **Search** tab in the Dharma app, and can be referenced by third party applications as well.

There is no limit on the number of tags that can exist in the Dharma app, and we are excited about the possibility of thoroughly and comprehensively categorizing all of Ethereum's assets under relevant, high-signal tags.

## `token-list`

The `token-list` directory contains one file: `tokenlist.json`. This file contains a JSON object that adheres to Uniswap's token list standard. [See here](https://github.com/Uniswap/token-lists) for more information on the standard.

**Important note** - all updates to the `tokenlist.json` file are done programmatically or by a Dharma admin.

There are three ways the `tokenlist.json` file is updated:

1. Any time a token's `metadata.json` file is created or updated, the `tokenlist.json` file is updated programmatically
2. When a valid logo is uploaded as a `logo.png` file, the `tokenlist.json` file is updated programmatically
3. Directly by a Dharma (e.g., adding a tag / keyword or bumping the major version number)

This token list is consumed by Uniswap so all added tokens will show up in the Uniswap interface under the **Dharma** list.
