import { ADDTODO, DELETETODO, DONETODO, EDITTODO } from "../types";

const initialState={
    todos:[
        {
            id:1, 
            task:"Lister les courses.",
            done:false
        },
        { 
        id:2,
        task:"Préparer les menus de la semaine.",
        done:false
        },
        { 
            id:3,
            task:"Faire les courses et les ranger.",
            done:false
        },
        { 
            id:4,
            task:"Faire les repas / cuisiner.",
            done:false
        },
        { 
            id:5,
            task:"Préparer la table pour le repas.",
            done:false
        },
        { 
            id:6,
            task:"Ranger la table.",
            done:false
        },
        { 
            id:7,
            task:"Laver et ranger la vaisselle.",
            done:false
        },
        { 
            id:8,
            task:"Nettoyer la cuisine (Plan de travail, évier … )",
            done:false
        },
        
    ] 
}
const todosReducer=(state=initialState,action)=>{
    switch (action.type) {
        case DELETETODO:
            return{
                ...state,todos:state.todos.filter((todo) => todo.id!==action.payload),
            };
        case DONETODO:
            return{
                ...state,todos:state.todos.map((todo) => todo.id === action.payload? { ...todo, done: !todo.done } : todo),
            };
         case EDITTODO:
            return{
                ...state,todos:state.todos.map((todo) => todo.id === action.payload.id? { ...todo, task: action.payload.task } : todo),
                };
        case ADDTODO:
            return{
            ...state,
            todos: [...state.todos,{id:Math.random(),task:action.payload,done:false}],
            };
    default : return state;
    }
}
export default todosReducer;