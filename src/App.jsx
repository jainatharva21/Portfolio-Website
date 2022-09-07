import styles from "./style"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skill from "./components/Skill"
import Footer from "./components/Footer"


const App = () => (
  <div className = "bg-primary w-full overflow-hidden">
    <div className = {`${styles.boxWidth}, ${styles.flexCenter}`}>
      <div className = {`${styles.boxWidth} text-white`}>
        <Navbar/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    <div className = {`bg-dimBlue ${styles.paddingX} ${styles.flexCenter}`}>
      <div className = {`${styles.boxWidth}`}>
        <About />
      </div>
    </div>
    <div className = {`bg-primary`}>
      <Projects />
      <Skill />
    </div>
    <div>
      <Footer />
    </div>
  </div>

)

export default App