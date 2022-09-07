import styles from '../style';
import { skills, frame, ide } from '../constants';

const Skill = () => {
  return (
    <div id = "skill">
      <div className = "w-auto flex justify-center items-center">
        <span className = "relative font-semibold font-poppins text-[40px] mx:text-[35px] text-white">Languages</span>
      </div>
      <div className="w-full my-[3rem] flex flex-wrap mx:w-[80%] mx-auto mx:space-y-0 mx:space-x-6 mx:justify-center items-center">
          {skills.map((skill) => (
            <div className="w-1/2 mx:w-auto anima">
              <div className="relative w-[120px] h-[120px] mx-auto text-center p-4 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full border-4 border-blue-700 mt-4" key={skill.title}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img src={skill.icon} alt={skill.title} className="w-14 mx:w-14 mx-auto " />
                  <div className={`${styles.paragraph} text-white`}>{skill.title}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className = "w-auto flex justify-center items-center">
        <span className = "relative font-semibold font-poppins text-[40px] mx:text-[35px] text-white">Tools</span>
      </div>
      <div className="w-full my-[3rem] flex flex-wrap mx:w-[80%] mx-auto mx:space-y-0 mx:space-x-6 mx:justify-center items-center">
          {frame.map((frames) => (
            <div className="w-1/2 mx:w-auto anima">
              <div className="relative w-[120px] h-[120px] mx-auto text-center p-4 bg-gradient-to-b from-slate-600 to-slate-700 border-4 border-purple-700 rounded-full mt-4" key={frames.title}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img src={frames.icon} alt={frames.title} className="w-14 mx:w-14 mx-auto " />
                  <div className={`${styles.paragraph} text-white`}>{frames.title}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className = "w-auto flex justify-center items-center">
        <span className = "relative font-semibold font-poppins text-[40px] mx:text-[35px] text-white">Environments</span>
      </div>
      <div className="w-full my-[3rem] flex flex-wrap mx:w-[80%] mx-auto mx:space-y-0 mx:space-x-6 mx:justify-center items-center">
          {ide.map((ides) => (
            <div className="w-1/2 mx:w-auto anima">
              <div className="relative w-[120px] h-[120px] mx-auto text-center p-4 bg-gradient-to-b from-slate-600 to-slate-700 border-4 border-green-700 rounded-full mt-4" key={ides.title}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img src={ides.icon} alt={ides.title} className="w-14 mx:w-14 mx-auto " />
                  <div className={`${styles.paragraph} text-white`}>{ides.title}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Skill;