import Part from './Part'
const Content = ({ parts }) => {

      return (
            <>
                  {parts.map((part) => {
                        return <Part name={part.name} key={part.id} exercises={part.exercises} />
                  })}
                  <h4>
                        Total of {parts.reduce((sum, currentPart) => {
                              return sum + currentPart.exercises
                        }, 0)}
                  </h4>
            </>
      )
}

export default Content