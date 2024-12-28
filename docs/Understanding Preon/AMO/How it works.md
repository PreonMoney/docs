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


## Here are some examples of how the AMO works:

The AMO can mint “initial STAR” when a user swaps USDC for STAR. When this swap happens, the AMO can also mint “additional STAR” at a predefined ratio inside the AMO LP position. “Initial STAR” is collateralized just like STAR minted by borrowing against Nebula vaults, swapped via the PSM etc.

“Initial STAR” = is collateralized by USDC (1:1 - fee). It does enter circulation.
“Additional STAR” = is not collateralized by USDC, is isolated and can only exist inside the AMO LP position. It cannot enter circulation.

When USDC is swapped out of the LP, the “initial STAR” and all the “additional STAR” associated with the USDC is burned on rebalancing. This ensures that all circulating STAR always remains overcollateralized.

A rebalancing is the above process of minting and burning STAR based on ratios supplied, as determined by the team, and executed via multi-sig. There are numerous metrics considered for rebalancing and ratio calculations. Which can include peg stability, sustainability of incentivization of a given liquidity option, current requirements for external liquidity etc. These calculations can and will vary across protocols and implementations.

Here is a simplified example explaining the AMO, with rebalances occurring at each step of the way. In this example, the AMO ratio is 7:1. Which means for every $1 of USDC swapped into the LP, $7 STAR is minted in total($1 of initial STAR and $6 of additional STAR).

1. User swaps $100 USDC into the CLP
2. The AMO mints $100 of “initial STAR” (1:1 - fees), this keeps all circulating STAR collateralized.
3. At the same time, the AMO also mints $600 worth of “additional STAR” This STAR will stay inside the LP
4. The User decides to swap $100 STAR for USDC
5. The User receives the USDC and the AMO burns all the associated STAR ($100 of initial STAR & $600 of additional STAR)
6. STAR remains over collateralized 

What if a user decided to swap all the remaining USDC in the CLP with STAR? In this example, the LP consists of $100k USDC and $700k STAR (7:1 ratio)

1. User swaps $100k STAR for $100k of USDC
2. The AMO burns ($100k of “initial STAR” and $600k of “additional STAR”)
3. All the remaining circulating STAR remains overcollateralized 
