import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

// const Lazy1 = lazy(() => import( /*webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import( /*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import( /*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));


const shoppingLazy = lazy(() => import( /*webpackChunkName: "LazyPage2"*/'../02-component-patterns/pages/ShoppingPage'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: shoppingLazy,
        name: 'Shopping'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'About'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Users'
    },
];