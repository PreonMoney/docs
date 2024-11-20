---
sidebar_position: 2
---


# How the Preon AMO Works

## Dynamic Operations:

The AMO counts the assets on each side of the pool to determine the current market state. If the STAR side is underweight compared to USDC, the protocol mints additional STAR and deploys it into the LP. Conversely, when the pool contains more STAR than USDC, the protocol removes STAR and burns the excess entirely to restore balance, ensuring the system remains fully collateralized and contained.


## Liquidity Management:

The AMO utilizes concentrated liquidity pools to provide tighter price control and greater capital efficiency compared to traditional liquidity pools. This strategy allows the AMO to adjust supply dynamically, maintaining a stable peg while maximizing rewards for farmers.

## Excess Burn Mechanism:

At every rebalance, the AMO ensures that any unbacked STAR is immediately burned, guaranteeing that no unbacked tokens ever leave the closed system. This mechanism reinforces the integrity of the STAR ecosystem and maintains its long-term stability.

## Earned Rewards:

The AMO collects rewards from trading fees or protocol incentives, such as protocol-owned USDC. These rewards are reinvested, benefiting the community.

## Collateralization and Protocol-Owned Liquidity:

Remaining 100% collateralized is a foundational principle of the Preon AMO. The STAR held by the AMO is fully controlled by the protocol, ensuring that no tokens enter circulation without being collateralized. This system maintains user confidence and ensures that all circulating STAR remains redeemable at any time for USDC on a 1:1 basis.

## How Collateralization Works:

Although the AMO operates dynamically by minting STAR and deploying it into liquidity pools, it achieves full collateralization even while using unbacked STAR temporarily. Here's how:

Example: Imagine the AMO deploys 1,000 STAR and USDC into the USDC-STAR liquidity pool. This means the protocol owns 500 USDC and 500 unbacked STAR. Now, a user swaps 100 USDC for 99.9 STAR from the liquidity pool. Due to trading fees and slippage, the user receives slightly less than 100 STAR. After this transaction:

The protocol holds 600 USDC and 400.1 unbacked STAR.
The user holds 99.9 STAR, **backed** by the USDC in the pool.

As soon as the user transfers USDC to the pool in exchange for STAR, the previously unbacked STAR **becomes fully collateralized** as part of the transaction. Any remaining excess STAR that cannot be backed is **immediately burned**, ensuring the system remains **fully collateralized**.
