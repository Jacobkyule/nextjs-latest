import styles from '../page.module.css'
import GoogleSignInButton from '../components/GoogleSignInButton'


const SignInPage = () => {
  return (
    <section className={styles.containerSignIn}>
    <div>
        <h1 className={styles.signInHeading}>Sign In</h1>
        <GoogleSignInButton />
    </div>
    </section>
  )
}

export default SignInPage