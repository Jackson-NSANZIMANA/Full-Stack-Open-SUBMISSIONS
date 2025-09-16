import React from 'react'

const StatisticsLine = ({ name, value }) => {
      return (
            <tr>
                  <td>{name}</td>
                  <td>{value}</td>
            </tr>
      )
}

export default StatisticsLine