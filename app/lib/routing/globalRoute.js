import {ROUTE} from './routes'
import CryptoMarket from '../../containers/CryptoMarket'
import CryptoDetails from '../../containers/CryptoDetails'

//App main routing screens
export const globalRoutes = [
  {
    route: ROUTE.INDEX,
    component: CryptoDetails
  },
  {
    route: ROUTE.CRYPTO_DETAILS,
    component: CryptoDetails
  }
]
