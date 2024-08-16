import type { ParamsContext, ServiceContext, RecorderState, } from '@vtex/api'
import { IOClients, Service } from '@vtex/api'

import { details } from './middlewares'

const seg =  1000 //ms
declare global {
    type Context = ServiceContext<IOClients>
}

export default new Service<IOClients, RecorderState, ParamsContext>({
    clients: {
      implementation: IOClients,
      options: {
        default: {
          retries: 2,
          timeout: 180 * seg,
        }
      },
    },
    routes: {
      details,
    },
  })
  