export const initialStore = () => {
  return {
    message: null,
    pokemons: [],
    items: [],
    favoritos: [],
    locations:[],
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "load_pokemons":
      return {
        ...store,
        pokemons: action.payload
      }
    case 'load_items':
      return {
        ...store,
        items: action.payload
      };
      case 'load_types':
      return {
        ...store,
        types: action.payload
      };
    case "load_favoritos":
      return {
        ...store,
        favoritos: action.payload
      }
    case "añadir_favoritos":
      return {
        ...store,
        favoritos: [
          ...store.favoritos,
          { id: action.payload.id, name: action.payload.name, category: action.payload.category }
        ]
      };
    case "eliminar_favoritos":
      return {
        ...store,
        favoritos: store.favoritos.filter(
          fav => !(fav.id === action.payload?.id && fav.category === action.payload?.category)
        )
      }

    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }
}
