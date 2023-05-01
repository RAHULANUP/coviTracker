import React from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
function Infobox(props) {
  return (
    <>
        <Card className='inforBox'>
            <CardContent>
                <Typography color='textSecondary' className='infoBox_title'>{props.title}</Typography>
                <h2 className='infoBox_cases'>{props.cases}</h2>
                <Typography color='textSecondary' className='infoBox_total'>Total {props.total}</Typography>
            </CardContent>
        </Card>

    </>
  );
}

export default Infobox;