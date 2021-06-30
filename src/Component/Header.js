import {Icon} from '@iconify/react'
import locationicon from '@iconify/icons-mdi/fire-alert'

const Header = () => {
    return (
        <div>
            <header className="header">
                <h1>
                    <Icon icon={locationicon} />
                    WildFire Tracker
                </h1>

            </header>
        </div>
    )
}

export default Header
