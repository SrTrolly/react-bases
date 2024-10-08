import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import { Suspense } from "react"


export const Navigation = () => {
    return (

        <Suspense>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src="../assets/react.svg" alt="React Logo" />
                        <ul>

                            {
                                routes.map(route => (

                                    <li key={route.to}>
                                        <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''} > {route.name}</NavLink>
                                    </li>

                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>

                        {
                            routes.map(route => (
                                <Route key={route.to} path={route.path} element={<route.Component></route.Component>}></Route>
                            ))
                        }

                        <Route path="/*" element={<Navigate to={routes[0].to} replace></Navigate>}></Route>
                    </Routes>


                </div>
            </BrowserRouter>
        </Suspense>
    )
}
