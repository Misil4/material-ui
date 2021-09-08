import React from "react";
import { Flag, Segment } from "semantic-ui-react";
export default function FlagExample() {
    return (
    <Segment>
      <Flag name='spain' />
      <Flag name='france' />
      <Flag name='uk' />
    </Segment>
  )
    }