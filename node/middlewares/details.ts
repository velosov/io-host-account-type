export async function details(ctx: Context) {
    const { clients: { licenseManager } , vtex: { authToken, logger } } = ctx

    try {
        const details = await licenseManager.getAccountData(authToken) //https://github.com/vtex/node-vtex-api/blob/bfe0cae9247be60df7261dd37639e2e5a61deee1/src/clients/janus/LicenseManager.ts#L21
        // const attempt = await licenseManager.getTopbarData(authToken) //https://github.com/vtex/node-vtex-api/blob/bfe0cae9247be60df7261dd37639e2e5a61deee1/src/clients/janus/LicenseManager.ts#L37
        ctx.body = details
    } catch(e) { logger.error(e); throw new Error(`${e}`) }
    return
}