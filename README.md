## Tenant's relationship details

Exemplifies how you can consume [License Manager's native API](https://github.com/vtex/node-vtex-api/blob/master/src/clients/janus/LicenseManager.ts) to programatically verify whether the store your instance's at is of main- or sub-account type.

curl https://workspace--store.myvtex.com/_v/vtex.main-account-reader/

This sketch has demo purposes and is NOT intended to be replicated in production environments. Always [protect your services' routes](https://developers.vtex.com/docs/guides/vtex-io-documentation-vrn).