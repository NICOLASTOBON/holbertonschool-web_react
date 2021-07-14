import React from 'react'
import PropTypes from 'prop-types'

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {  
  return (
    <tr>
      {
        isHeader
          ? (
              !textSecondCell
                ? <th colSpan={2}>{textFirstCell}</th>
                : (
                  <>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                  </>
                )
          )
          : (
            <>
              <td>{textFirstCell}</td>
              <td>{textSecondCell}</td>
            </>
          )
      }
    </tr>
  )
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}

CourseListRow.propTypes = {
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string
}

export default CourseListRow