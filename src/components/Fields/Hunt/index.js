import React, {useState,useContext} from 'react';
// import clsx from 'clsx';
import scss from './Hunt.module.scss';

import Card from '../../Card';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

/// THESE WILL PROBALBLY MOVE TO SEPARATE FIELDS ///
import {CardListContextData} from '../../Contexts/CardListContext';
import {CardListDispatches} from '../../Contexts/CardListContext';
import {PageDispatches} from '../../Contexts/PageContext';
/// THESE WILL PROBALBLY MOVE TO SEPARATE FIELDS ///

//Fisher-Yates algorithm for shuffling
// function shuffle(array) {
    
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }
function areAllMatched(card) {
    return card.matched === true;
}

function Hunt(props) {
	
	const [firstFlip, setFirstFlip] = useState(null);
    const [victory,setVictory] = useState(false);
    const [theCards, updateTheCards] = useState([]);

    const context = useContext(CardListContextData);
    const {
        // cardListNumber,
        cardArray,
        // numberOfCards
    } = context;
    const dispatches = useContext(CardListDispatches);
    const {
        requestCardListByNumber,
        // updateCardArray,
        updateNumberOfCards
    } = dispatches;

    let {updateCurrentPage} = useContext(PageDispatches);

    // Set the cards from the cardArray
    React.useEffect( () => {
        requestCardListByNumber(3);
        updateNumberOfCards(3);
    },[]); // empty dependency array, should run once

    React.useEffect( () => {
        updateTheCards([...cardArray.map(o=>o)]);
    },[cardArray]);

    const [wait,setWait] = React.useReducer((state = false, action) => {
        if (action.type === 'true') return true;
        return false;
    });
    
    React.useLayoutEffect(()=>{
        const flipTimer = setTimeout(() => {
            if(!wait) return;
            setWait({ type: 'false' }); //this triggers the effect to run a second time.
          }, 500);
        return () => clearTimeout(flipTimer);
    },[wait]);

    let onFlip = React.useCallback((flipIndx) => {
        if(wait) return;
        theCards[flipIndx].flipped=true;
        // toggleForceChange();
		if(firstFlip === null) {
            setFirstFlip(flipIndx);
        } else {
            // setFirstFlip(null); //the below code appears to run before this updates and rerenders.
            setWait({ type: 'true' });
            if(theCards[flipIndx].type === theCards[firstFlip].type) {
                //found match
                setFirstFlip(null);
                theCards[firstFlip].matched = true;
                theCards[flipIndx].matched = true;
                if(theCards.every(areAllMatched) && !victory) setVictory(true);
            } else {
                //no match
                setFirstFlip(null);
                // console.log('NO MATCH',flipIndx,firstFlip);
                setTimeout(() => {
                        if(theCards) {
                            theCards[flipIndx].flipped=false;
                            theCards[firstFlip].flipped=false;
                        }
                }, 400);
            }
        }
    }, [firstFlip, wait,theCards,victory]);
    
    // reset after dialog close
    const handleClose = () => {
        setVictory(false);
        // requestCardListByNumber(shuffle([1,2,3].filter(x=>x!==cardListNumber)).shift());
        // updateNumberOfCards(shuffle([1,2,3].filter(x=>x!==numberOfCards)).shift());
        updateCurrentPage('');
    };
    

    console.log('updating Hunt');
  return (
	<div className={scss.fieldContainer}>
        { victory
        ? 
            <Dialog
              open={victory}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Victory"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    You Win!
                  </DialogContentText>
                </DialogContent>
            </Dialog>
        : 
            cardArray.map( (e,i) => {
                return <Card key={i} handleFlip={onFlip} index={i} flipped={e.flipped} type={e.type} matched={e.matched} />
            })
        }
	</div>
  );
}

export default Hunt;
