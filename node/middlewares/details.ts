export async function details(ctx: Context) {
    const { clients: { licenseManager } , vtex: { authToken, logger } } = ctx

    try {
        const attempt = await licenseManager.getTopbarData(authToken) //https://github.com/vtex/node-vtex-api/blob/bfe0cae9247be60df7261dd37639e2e5a61deee1/src/clients/janus/LicenseManager.ts#L37 ; getAccountData @ #L21 gives 403
        ctx.body = attempt
    } catch(e) { logger.error(e); throw new Error(`${e}`) }
    return
}