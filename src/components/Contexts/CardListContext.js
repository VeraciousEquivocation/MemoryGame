// List of individual cards by type, like material, invaders, exploring, hunting etc
// used to grab random number of cards, and build match arrays

import React, { useState } from "react";

// const InvasionCards = React.lazy(() => import('./Cards/testCards'));
// const CollectCards = React.lazy(() => import('./Cards/testCards2'));
// const HuntCards = React.lazy(() => import('./Cards/testCards3'));
import InvasionCards from './Cards/testCards';
import HuntCards from './Cards/testCards2';
import CollectCards from './Cards/testCards3';

export const CardListContextData = React.createContext();
export const CardListDispatches = React.createContext();

// const cardListsByNumbers = {
//     0: '',
//     1: 'base',
//     2: 'hunt',
//     3: 'collect',
//     4: 'invasion',
//     5: 'craft',
//     6: 'skills',
//     7: 'store',
// }

//Fisher-Yates algorithm for shuffling
function shuffle(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function CardListContextProvider(props) {

    const [cardListNumber, requestCardListByNumber] = useState(0);
    const [numberOfCards, updateNumberOfCards] = useState(0);
    const [cardArray, updateCardArray] = useState([]);

    React.useEffect(() => {
        let selectedCards;
        switch (cardListNumber) {
            case 1:
                selectedCards = InvasionCards;
                break;
            case 2:
                selectedCards = CollectCards;
                break;
            case 3:
                selectedCards = HuntCards;
                break;
        
            default:
                selectedCards = [];
                break;
        }

        let pickedCards = [];

        // Get random selection of card icons, then double them, shuffle, and construct card obj array.
        if(selectedCards.length > 0) {
            pickedCards = shuffle([...selectedCards.map(o=>o)]).slice(0,numberOfCards).reduce((res, current, index, array) => {
                return res.concat([current, current]);
            }, []);
            pickedCards = shuffle([...pickedCards.map(o=>o)]);
            pickedCards = pickedCards.map(component => { return { type:component, flipped: false, matched: false }; })
        }
        updateCardArray(pickedCards);
        // return () => {
        //     cleanup
        // };
    }, [cardListNumber,numberOfCards])

    const contextMemoData = React.useMemo(() => (
        {
            cardListNumber,
            cardArray,
            numberOfCards
        }), 
        [
            cardListNumber,
            cardArray,
            numberOfCards
        ]
    );
    const contextMemoDispatches = React.useMemo(() => (
        {
            requestCardListByNumber,
            updateCardArray,
            updateNumberOfCards
        }), 
        [
            //I dont think this needs to change ???
        ]
    );

    return (
        <CardListContextData.Provider value={contextMemoData}>
            <CardListDispatches.Provider value={contextMemoDispatches}>
                {props.children}
            </CardListDispatches.Provider>
        </CardListContextData.Provider>
    )
}

export default React.memo(CardListContextProvider);