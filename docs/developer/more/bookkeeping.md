---
title: Bookkeeping
---

## Bookkeeping

Bookkeeping is a GraphQL web interface for reward distributions, which collects voting status and calculates corresponding voters' reward for a given delegate within a certain epoch range.

**\*While we keep bookkeeping for analytics, we recommend delegates use [Hermes](http://hermes.to) for auto-distribute voters' rewards.**

### Get Voters' Rewards Given A Delegate Name

Usage: Please refer to [Analytics Documentations](https://github.com/iotexproject/iotex-docs#bookkeeping).

### Send Out Voters' Rewards

The generated bytecode can be used by `ioctl` to actually send out the voters' rewards, i.e.,

```
ioctl action invoke io1sesxdghz93f4sadhu6a7242m22gphmc2aucz4g <total-amount> -l <gas-limit> -p <gas-price> -s <signer> -b <bytecode>`
```

Note that `io1sesxdghz93f4sadhu6a7242m22gphmc2aucz4g` is the pre-deployed contract for sending IOTX coins to multiple addresses.
