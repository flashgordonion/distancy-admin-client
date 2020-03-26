import React from 'react';
import { Card, CardHeader } from '@material-ui/core';


const StoreSummary = ({store_name, street_address, city, state, zip_code, ...props}) => {

  return (
    <Card>
        <CardHeader
            title={store_name}
            subheader={`${street_address}, ${city}, ${state}, ${zip_code}`}
        />
    </Card>
        
  )
}

export default StoreSummary