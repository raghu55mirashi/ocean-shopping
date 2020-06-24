import React from 'react'
import './form-input.scss'

const FormInput = ({ handlechange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input
                className="form-input"
                onChange={handlechange}
                {...otherProps} />
            {label && (
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            )

            }
        </div>
    )
}

export default FormInput