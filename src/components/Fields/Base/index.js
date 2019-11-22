import React, {useState,useContext} from 'react';
import clsx from 'clsx';
import scss from './Base.module.scss';
// import { List } from 'immutable';

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { faScroll } from '@fortawesome/free-solid-svg-icons';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {PageDispatches} from '../../Contexts/PageContext';
import {pageList} from '../../Contexts/PageContext';

function Base(props) {

    let {updateCurrentPage} = useContext(PageDispatches);

    console.log('updating Base');
  return (
	<div className={scss.mainContent}>
        <Grid
            container
            direction="row"
            justify="space-between"
            // alignItems="flex-start"
        >
            <Grid item xs={12} sm={5} md={4} className={clsx(scss.CardGrid)}>
                <Card raised className={clsx(scss.Card)}>
                    {/* <CardContent>
                        <FontAwesomeIcon icon={faCubes} size="3x" />
                    </CardContent>
                     */}
                    <CardContent>
                        <FontAwesomeIcon icon={faScroll} color="transparent" size={'3x'}/>
                        <span className="fa-layers fa-fw">
                          <FontAwesomeIcon icon={faScroll} color="#cfaf7d" size={'3x'} transform="left-17 up-2"/>
                          <FontAwesomeIcon icon={faFeatherAlt} transform="left-2 up-14" size={'2x'}/>
                          <FontAwesomeIcon icon={faGripLines} transform="left-17 up-8" size={'2x'}/>
                        </span>
                    </CardContent>
                    <CardActions>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                        >
                            <Grid item></Grid>
                            <Grid item>
                                <Button color={'primary'} onClick={()=>updateCurrentPage(pageList.testfield)}variant={'outlined'}>
                                    Test
                                </Button>
                            </Grid>
                            <Grid item></Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={false} sm={false} md={4} >
            </Grid>
            <Grid item xs={12} sm={5} md={4} >
                <Card raised className={clsx(scss.Card)}>
                    <CardContent>
                        <FontAwesomeIcon icon={faScroll} color="transparent" size={'3x'}/>
                        <span className="fa-layers fa-fw">
                          <FontAwesomeIcon icon={faBullseye} color="tomato" size={'3x'} transform="left-15 up-2"/>
                          <FontAwesomeIcon icon={faLongArrowAltRight} transform="rotate-332 left-24" size={'2x'}/>
                        </span>
                    </CardContent>
                    <CardActions>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                        >
                            <Grid item></Grid>
                            <Grid item>
                                <Button color={'primary'} onClick={()=>updateCurrentPage(pageList.hunt)}variant={'outlined'}>
                                    Hunt
                                </Button>
                            </Grid>
                            <Grid item></Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
	</div>
  );
}

export default Base;
