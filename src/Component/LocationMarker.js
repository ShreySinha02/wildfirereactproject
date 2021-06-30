import {Icon} from '@iconify/react'
import locationicon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({lat,lng,onClick}) => {
    return (
        <div className='location-marker' >
            <Icon icon={locationicon} className="location-icon"/>
            
        </div>
    )
}

export default LocationMarker
