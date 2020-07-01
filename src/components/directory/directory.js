import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory-selectors'
import MenuItem from '../../components/menu-item/menu-item'
import './directory.scss'

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...sectionProps }) => (
                <MenuItem key={id} {...sectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections   //here state is extracted from global and send as args to this selector
})

export default connect(mapStateToProps)(Directory);