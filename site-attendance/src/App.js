import {useDispatch, useSelector} from 'react-redux'
import {Field, Form, Formik} from 'formik'

function App() {
  const dispatch = useDispatch()
  // const { user } = useSelector(state => state.user)
  // if (user) {
  //   return (
  //     <div>
  //       Hi, {user.username}!
  //       <button onClick={() => console.log("logout pressed")}>Logout</button>
  //     </div>
  //   )
  // }
  return (
    <div>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => { console.log("login pressed") }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="username" />
            <Field type="password" name="password" />
            <button type="submit" disabled={isSubmitting}>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default App