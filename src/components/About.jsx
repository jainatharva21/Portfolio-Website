import styles from "../style"
import { layout } from "../style"
import { Profile } from "../constants";

const About = () => {
  return (
    <section id = "about" className = {`${layout.section}`}>
        <div>
            {Profile.map ((prof) => (
                <img 
                key = {prof.id} 
                src = {prof.image} 
                alt = {prof.id} 
                className = {`${layout.sectionImg} md:w-[600px] w-full`}  
                />
            ))}
        </div>
        <div className = {`md:w-full bg-gradient-to-b from-slate-900 to-slate-700 w-full lg:w-2/3 rounded-xl relative h-auto px-2 py-4`}>
            <span className = {`${styles.heading2} sm:m-4 sm:w-[200px]`}>About Me</span>
            <p className = {`${styles.paragraph} sm:ml-4`}>
                I am an internatonal student from India and am currently a sophomore at University of Illinois Urbana-Champaign, majoring in Computer
                Engineering. I attended summer camps for cloud computing and IoT and have been building projects using Arduino (like the Smart Bin) since I was 15.
                Around that time, I started to develop my interest in Artificial Intelligence and Machine Learning after being selected to 
                participate in the AI4Youth initiative launched by <i>Intel India</i>.
            </p>
            <br/>
            <p className = {`${styles.paragraph} sm:ml-4`}>
                Since then I have come to learn a lot about the field and started building my own AI projects like Mediclada and the Forex Market Analyser.
            </p>
            <br/>
            <p className = {`${styles.paragraph} sm:ml-4`}>
                After experimenting with AI and ML I have started to branch out more towards the Front-End Development and have started creating my own websites (This one included) using modern frameworks such as ReactJS and Tailwind CSS to facilitate a faster devopment.
                
            </p>
        </div>
    </section>
  )
}

export default About


// Add the links to github and shit right beside about me and add the get in touch button below te text in the middle

//<img src = "src/assets/profile.JPG" className = {`${layout.sectionImg} md:w-[600px] w-full`}/>