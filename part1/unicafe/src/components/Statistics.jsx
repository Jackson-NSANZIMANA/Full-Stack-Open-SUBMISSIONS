import React from 'react'
import StatisticsLine from './StatisticsLine'
const Statistics = ({ goods, neutrals, bads }) => {
      const total = goods + neutrals + bads
      const average = (goods - bads) / total
      const positives = (goods * 100) / total

      return (
            <>

                  {total ?
                        <>
                              <h1>Statistics</h1>
                              <table>
                                    <tbody>
                                          <StatisticsLine name={'goods'} value={goods} />
                                          <StatisticsLine name={'neutrals'} value={neutrals} />
                                          <StatisticsLine name={'bads'} value={bads} />
                                          <StatisticsLine name={'total'} value={total} />
                                          <StatisticsLine name={'average'} value={average} />
                                          <StatisticsLine name={'positives'} value={positives} />
                                    </tbody>
                              </table>
                        </>
                        :
                        <p>No feedback given !</p>}
            </>
      )
}

export default Statistics