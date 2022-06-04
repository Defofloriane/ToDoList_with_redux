import React, { useCallback, useRef, useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import './Sign_up.css';
import store, { selectTodos, addTodo, removeTodo } from "./store";
import { useTodos } from "./userTodo";
import "./App.css";
import Connexion from "./Connexion";
import './bootstrap.min.css';
import { setSyntheticLeadingComments } from "typescript";
import todoimg from './images/todoimg.png';



const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

// function tache (props:Object){

//       //  const [tache,setTache] =useState<string>('');

//        return (
//               <p>Nombre de taches: {nombretache}</p>
//        );
// }
const Box: React.FunctionComponent = (children) => (
  <div
    style={{
      padding: "1rem",
      fontWeight: "bold",
    }}
  >
    children
  </div>
);

const Button: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title?: string;
  }
> = ({ title, children, style, ...rest }) => (
  <button
    {...rest}

  >
    {title ?? children}
  </button>
);

function UL<T>({
  items,
  render,
  itemClick,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  items: T[];
  render: (item: T) => React.ReactNode;
  itemClick: (item: T) => void;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li onClick={() => itemClick(item)} key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
}

function App() {

  const [user, setUser] = useState(null);
  const todos = useSelector(selectTodos);

  const [nombretache, setNombretache] = useState(0);
  // const todo = useSelector(TotalcompleceItems);

  const dispatch = useDispatch();
  // const storage = localStorage.getItem(newTodoRef);
  // const taches:any[] = JSON.parse(storage);



  const newTodoRef = useRef<HTMLInputElement>(null);
  // const sencondRef = useRef<HTMLInputElement>(null);

  const onAddTodo = () => {
    if (newTodoRef.current) {
      dispatch(
        addTodo(newTodoRef.current.value),
      );
      newTodoRef.current.value = "";
      // 

    }
    up()



  };
  const up = () => {
    setNombretache(nombretache + 1)
  }


  return (



    <div>
      <Heading title="Todo List" />

      <div className="connexion">

        <Connexion setUser={setUser} />

      </div>
      <br />
      {
        user ? <div className="tache">

          <p>Nombre total de taches:{nombretache}</p>
          <div className="btn">
            <label htmlFor="">Nom de la tache:</label>

            <input type="text" ref={newTodoRef} /><br />
            {/* <label htmlFor="">Description</label>
        <input type="text" ref={newTodoRef} /><br/> */}

            <Button className="btn btn-success btn-lg btn-block buttonConnect" onClick={onAddTodo}>ADD</Button>



          </div>
          <div className='sign-card'>
            <UL
              items={todos}
              itemClick={(item) => alert(item.id)}
              render={(todo) => (
                <>
                  <div className="btnremov">
                    {todo.text}
                   
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                      Remove
                    </button>
                    {/* <button onClick={() => dispatch(changeTodo(todo.id))}>
                modifier
              </button> */}
                  </div>
                </>
              )}
            />
          </div>
        </div> : ''
      }

    </div>


    //  
    // user ?  <div className="tache">

    // <TacheToDo  setListe={setListe} ListeTaches={ListeTaches} setTache={setTabListe}/>
    // </div> : ''
    // }
    // <br />
    // {
    // liste === true ?  <div className="tache">


    // <Viewliste TabListe={[]} />

    // </div> : ''
  );
}




const JustTheTodos = () => {
  const todos = useSelector(selectTodos);
  return (
    <UL
      items={todos}
      itemClick={() => { }}
      render={(todo) => <>{todo.text}</>}
    />
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <div

      style={{
        display: "grid",
        gridTemplateColumns: "45% 50%",
      }}
    >
      <App />
      <div className="">
          
      <JustTheTodos /> <img src={todoimg}  alt="img" />
      </div>
     

    </div>
  </Provider>

);

export default AppWrapper;


// import React from "react";
// import "./App.css";
// import Store from "./store";


// interface ButtonProps
//   extends React.DetailedHTMLProps<
//     React.HTMLAttributes<HTMLButtonElement>,
//     HTMLButtonElement
//   > {
//   title?: string;
// }

// class Button extends React.Component<ButtonProps> {
//   render() {
//     return (
//       <button
//         style={{
//           background: "red",
//           color: "white",
//           fontSize: "1.5em",
//           padding: 10,
//           borderRadius: 5,
//           border: "none",
//         }}
//         {...this.props}
//       >
//         {this.props.title ?? this.props.children}
//       </button>
//     );
//   }
// }

// interface TimerProps {
//   duration: number;
// }

// class Timer extends React.Component<
//   TimerProps,
//   {
//     currentTime: number;
//     timer: NodeJS.Timeout | null;
//   }
// > {
//   static defaultProps = {
//     duration: 120,
//   };

//   startTime: number = 0;

//   constructor(props: TimerProps) {
//     super(props);
//     this.state = {
//       currentTime: 0,
//       timer: null,
//     };

//     this.onTick = this.onTick.bind(this);
//     this.onStop = this.onStop.bind(this);
//     this.onRestart = this.onRestart.bind(this);
//   }

//   componentDidMount() {
//     this.onRestart();
//   }

//   componentWillUnmount() {
//     if (this.state.timer) {
//       clearInterval(this.state.timer);
//     }
//   }

//   onTick() {
//     this.setState({
//       currentTime: Math.max(
//         Math.floor(this.props.duration - (Date.now() - this.startTime) / 1000),
//         0
//       ),
//     });
//   }

//   onRestart() {
//     this.startTime = Date.now();
//     this.setState({
//       timer: setInterval(this.onTick, 200),
//     });
//   }

//   onStop() {
//     if (this.state.timer) {
//       clearInterval(this.state.timer);
//     }
//     this.setState({
//       timer: null,
//     });
//   }

//   render() {
//     return (
//       <>
//         <p>Current time: {this.state.currentTime}</p>
//         <p>Duration: {this.props.duration}</p>
//         {this.state.timer ? (
//           <Button onClick={this.onStop}>Stop</Button>
//         ) : (
//           <Button onClick={this.onRestart}>Restart</Button>
//         )}
//       </>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <Timer />,
//       {/* <store/> */}
//     </div>
//   );
// }

// export default App;
