import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Group1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 4:1967 */
export const Group1: FC<Props> = memo(function Group1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.rectangle14}></div>
      <div className={classes.image1}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.image2}></div>
      <div className={classes.rectangle6}></div>
      <div className={classes.image3}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.image4}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.image5}></div>
      <div className={classes.rectangle15}></div>
      <div className={classes.callOfDutyModernWarfare}>Call of Duty Modern Warfare</div>
      <div className={classes.starfield}>Starfield</div>
      <div className={classes.callOfDutyBlackOpsColdWar}>Call of Duty Black Ops - Cold War</div>
      <div className={classes.fifa23UltimateEdition}>Fifa 23 - Ultimate Edition</div>
      <div className={classes.grandTheftAutoV}>Grand Theft Auto V</div>
      <div className={classes._42}>4.2 </div>
      <div className={classes._44}>4.4</div>
      <div className={classes._4}>4.0</div>
      <div className={classes._45}>4.5</div>
      <div className={classes._5}>5.0</div>
      <div className={classes.unnamed}>★</div>
      <div className={classes.unnamed2}>★</div>
      <div className={classes.unnamed3}>★</div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle13}></div>
      <div className={classes.rectangle16}></div>
      <div className={classes.free}>Free</div>
      <div className={classes.free2}>Free</div>
      <div className={classes.free3}>Free</div>
      <div className={classes.free4}>Free</div>
      <div className={classes.free5}>Free</div>
    </div>
  );
});
