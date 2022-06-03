import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import TacheCard from './TacheCard'

const Accueille = (props) => {
    console.log(props);
    const inputef = useRef(" ");

    const deleteTacheHander = (id) => {
        props.gettacheId(id);
    }
    const tacheList = props.taches.map((tache) => {
        return (
            <TacheCard tache={tache} clickHander={deleteTacheHander} key={tache.id} />
        )
    });

    const getSearchTerm = () => {
        // console.log(inputef.current.value);
        props.searchKeyword(inputef.current.value);
    }
    return (
        
        <div class="contain">
             <div class="espace">

              </div>
            <div class="innercontain">

            <div class="btnsin">
                <Link to="/Login">
                    <button class="btn" > Sign In </button>
                </Link>
            </div> 
            <div class="espace">

            </div>
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        ref={inputef}
                        type="text" className="prompt" placeholder="search"
                        value={props.term} onChange={getSearchTerm}
                    />
                    <i className="search icon"></i>
                </div>
            </div>
            <div  class="espace">

            </div>

            <h1> Liste des taches </h1>
           
            <div >{tacheList}</div>
            <div class="espace">

            </div>
            <div id="btnaddtache"> 
                <Link to="/AddTache">
                    <button > Go to addTache </button>
                </Link>
            </div>
        </div>
            <div class="espaces">

            </div>
           
        </div>

    )
}



export default Accueille;
