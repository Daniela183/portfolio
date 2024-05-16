import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Experiencia from "../pages/Experiencia";
import Educacao from "../pages/Educacao";
import Habilidades from "../pages/Habilidades";
import Home from "../home/Home";
import Projetos from "../pages/Projetos";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/experiencia",
        element: <Experiencia />,
    },
    {
        path: "/educacao",
        element: <Educacao />,
    },
    {
        path: "/habilidades",
        element: <Habilidades />,
    },
    {
        path: "/projetos",
        element: <Projetos />,
    },
    {
        path: "/contato",
        element: <Contato />,
    },
    {
        path: "/sobre",
        element: <Sobre />,
    },

]);
function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;