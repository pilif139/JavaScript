import Card from './Card.jsx'
import Student from './Student.jsx'

function App() {
  return(
      <>
        <Student name="Spongebob" age={30} isStudent={true}></Student>
        <Student name="Patrick" age={14} isStudent={false}></Student>
        <Student name="Mr.Krabs" age={45} isStudent={false}></Student>
        <Student></Student>
      </>
  );
}

export default App
