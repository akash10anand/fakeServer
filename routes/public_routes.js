import { controllers } from "../controllers/user_actions"

const routes = [
    {
        method: 'POST',
        url: "",
        handler: controllers.action1
    },
    {
        method: "GET",
        url: "",
        handler: controllers.action2
    }
]