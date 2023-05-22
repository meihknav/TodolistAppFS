import UpdateForm from "../UpdateForm/UpdateForm";
import TodoListPage from "../TodoListPage/TodoList";

// route public
const publicRoutes = [
    {path: '/home', component: TodoListPage },
    { path: '/edit', component: UpdateForm }

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };