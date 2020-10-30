import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Link from '@material-ui/core/Link';

function ExperienceList() {
    return (
        <React.Fragment>
                <Typography variant="h5" component="h2" gutterBottom>
                    Chief Operating Officer
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    <Link href="https://devxpart.com/">
                        DevXpart - Full-time
                    </Link>
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                    Jan 2019 - Jan 2020 - 1 yr 1 mo
                </Typography>
            <Divider />
               
              
                
            <Divider />
        </React.Fragment>
    )
}

export default ExperienceList
