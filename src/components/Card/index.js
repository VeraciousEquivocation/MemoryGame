import React, {useState,useContext} from 'react';
import clsx from 'clsx';
import scss from './Card.module.scss';

import Paper from "@material-ui/core/Paper"
import ReactCardFlip from 'react-card-flip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons';

import { useTheme } from '@material-ui/core/styles';

function FlipCard(props) {
	
    // const [flipped, setFlipped] = useState(false);
    // React.useEffect(()=>{
    //     if(props.flipped !==null || typeof(props.flipped) !== 'undefined')
    //         setFlipped(props.flipped);
    // },[]);
	// const toggleFlipped = React.useCallback((e) => {
    //     e.preventDefault();
	// 	setFlipped(prevBool => !prevBool);
	// }, []);
    // const [flipped, setFlipped] = useState(false);
    // React.useEffect(()=>{
    //     if(props.flipped !==null || typeof(props.flipped) !== 'undefined')
    //         setFlipped(props.flipped);
    // },[]);
	const toggleFlipped = React.useCallback((e) => {
        e.preventDefault();
		props.handleFlip(props.index);
    }, [props]);
    
    const theme = useTheme();
  return (
	<div className={scss.cardContainer}>
    {/* <ReactCardFlip containerStyle={{width:200,height:200}} isFlipped={props.flipped} flipDirection="horizontal"> */}
    <ReactCardFlip isFlipped={props.flipped} flipDirection="horizontal">
        <Paper className={clsx(scss.card,scss.front)} onClick={toggleFlipped}>
            <FontAwesomeIcon icon={faFortAwesomeAlt} size='3x' />
        </Paper>

        <Paper className={scss.card}>
            <FontAwesomeIcon icon={props.type} size='3x' color={props.matched ? theme.palette.primary.main : null}/>
        </Paper>
      </ReactCardFlip>
	</div>
  );
}

export default React.memo(FlipCard);