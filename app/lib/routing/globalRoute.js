import {ROUTE} from './routes'
import CryptoMarket from '../../containers/CryptoMarket'
import CryptoDetails from '../../containers/CryptoDetails'

//App main routing screens
export const globalRoutes = [
  {
    route: ROUTE.INDEX,
    component: CryptoMarket
  },
  {
    route: ROUTE.CRYPTO_DETAILS,
    component: CryptoDetails
  }
]
