import React from 'react'
import IApartment from '../../app/models/IApartment';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ApartmentView : React.FC<{apartment: IApartment}>= ({apartment}) => {
    return (
        <div>
            {apartment.description}
            <Button 
                content="View apartment details"
                color="green"
                onClick={() => alert('am clicked')}
                as={Link} 
                to={`/apartments/${apartment.id}`}
                />
        </div>
    )
}

export default ApartmentView;