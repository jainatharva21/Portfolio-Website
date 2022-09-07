import styles from "../style"

const Hero = () => (
    <div className = "text-center text-[20px] flex-row mt-40 mb-64">
        <span className = "font-poppins first-letter font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400">HEY! I AM</span>
        <span className = {`${styles.heading2} flex justify-center`}>Atharva Jain</span>
        <div className = "main-container">
            <h1 className="font-poppins ss:text-[25px] text-gray-100 mb-2 m-2 w-full typewriter-text">
                I am a Computer Engineering Major at UIUC   
            </h1>
            <div className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 font-semibold md:text-3xl">An Upcoming Web-Developer</div>
        </div>
    </div>
)

export default Hero