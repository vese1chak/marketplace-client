import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import { ACCOUNT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, FAVORITE_ROUTE, GOOD_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts";
import GoodPage from "./pages/GoodPage";
import Favorite from "./pages/Favorite";
import Orders from "./pages/Orders";
import Account from "./pages/Account";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: FAVORITE_ROUTE,
        Component: Favorite
    },
    {
        path: ORDERS_ROUTE,
        Component: Orders
    },
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    }
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: GOOD_ROUTE + '/:id',
        Component: GoodPage
    }
];