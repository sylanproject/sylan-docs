# Sylan Docs

This repository contains the **official documentation** for the [Sylan Protocol](https://sylan.xyz), a decentralized API marketplace powered by the **SYL token**.

## Overview

Sylan enables:
- **API Providers** to publish APIs and set monetization plans (Subscription or PayPerCall).
- **Consumers** to purchase access using SYL tokens via on-chain escrow.
- **Nodes** to fetch provider-signed data, reach consensus, and return results securely.

All payments are in SYL and fees are split among **Providers, Nodes, and the Platform**.

## Repositories

- **Smart Contracts** → [sylanproject/sylan-contracts](https://github.com/sylanproject/sylan-contracts)
- **Docs (this repo)** → [sylanproject/sylan-docs](https://github.com/sylanproject/sylan-docs)
- **Node implementation** → [sylanproject/sylan-node](https://github.com/sylanproject/sylan-node) *(coming soon)*
- **Provider adapter** → [sylanproject/sylan-provider](https://github.com/sylanproject/sylan-provider) *(coming soon)*

## Documentation Structure

The docs are built with **[Nextra](https://nextra.site/)** and organized into:

- **Getting Started** → Quickstart, install guides
- **Core Concepts** → Request lifecycle, pricing, consensus, security
- **Architecture** → Components, events, on-chain vs off-chain
- **Smart Contracts** → AccessRegistry, APIEscrow, APIConsensus, NodeRegistry, SylanToken, SylanStaking, SylanVesting, PresaleContract, EventLogger
- **Integrations** → Frontend (Next.js + Wagmi + viem), EIP-712, provider webhooks, examples
- **Node** → Setup, consensus flow, operations
- **Provider** → API publishing, authentication, best practices
- **Deployments** → Testnet and mainnet instructions
- **Tokenomics** → Allocation, fees, staking
- **Reference** → API reference, errors, events, glossary
- **Community** → Roadmap, contributing, FAQ, changelog

## Running Locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 in your browser.

## Contributing

Contributions are welcome!  
- Submit issues or feature requests.
- Fork and open PRs.
- Follow [conventional commits](https://www.conventionalcommits.org/).

## License

Documentation is licensed under **CC BY 4.0**.  
Contracts in related repositories are licensed under **MIT/Apache-2.0**.

---

💡 For more information, visit the live docs at [docs.sylan.xyz](https://docs.sylan.xyz).

