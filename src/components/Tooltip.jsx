import "react";
import PropTypes from 'prop-types'

export default function Tooltip({ message, children, rotate }) {
    return (
    <div className="group contents flex">
        {children}
        <span className={`absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ${rotate}`}>{message}</span>
    </div>
    )
}

Tooltip.propTypes = {
  message: PropTypes.string,
  children: PropTypes.element,
  rotate: PropTypes.string
}
