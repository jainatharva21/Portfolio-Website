import React from 'react'
import styles from "../style"
import { layout } from "../style"
import { giphy } from '../constants'

const Projects = () => {
  return (
    <div id = "projects">
        <div className = {`${layout.section}`}>
            <span className = {`text-center ${styles.heading2} ${styles.paddingX}`}>
                Projects
            </span>
        </div>
        <div className = {`${layout.section} ${styles.paddingX} mr-0`}>
            <div className = "w-full mx:w-1/3">
                {/* {giphy.map ((vid) =>(
                    <video className='rounded-xl justify-between space-y-4 w-full mx-auto lg:w-auto h-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400' autoPlay loop muted>
                        <source src = {vid.video} type='video/mp4' key = {vid.id}/>
                    </video>
                ))} */}
                <div className="justify-between space-y-4 w-full lg:w-auto mx-auto h-auto bg-gradient-to-b from-slate-900 to-slate-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 rounded-xl border-2 z-10 px-[1rem] py-[2rem]">
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <span className = "font-poppins font-semibold text-[25px] text-white">
                            SUItoSWE
                        </span>
                    </div>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Worked on implementing a user friendly way to visualize the SUI blockchain data by pulling data from the blockchain in the form of DAG.
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Implemented Dijkstra's algorithm finds the minimum gas value between two given transactions to determine the least expensive way to reach a node from the starting node.
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Implemented topological sort to psuedo-visualize the blockchain dataset after performing DFS and Dijkstra's on the dataset.
                    </p>
                    <button type = "button" className = "bg-secondary font-poppins font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-xl py-1 px-4">
                        <a href = "https://github.com/Sui2SWE/Final-Project">Visit</a>
                    </button>
                </div>
                <div className="sm:mt-[20px] justify-between space-y-4 w-full lg:w-auto mx-auto h-auto bg-gradient-to-b from-blue-900 to-purple-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 rounded-xl border-2 z-10 px-[1rem] py-[2rem]">
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <span className = "font-poppins font-semibold text-[25px] text-white">
                            aura.drnipunjain.in
                        </span>
                    </div>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Created an appointment website that allows patients to book appointments directly, eliminating the need for the middle man.
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Website includes the biography of the doctor along with providing the contact information with the use of icons.
                    </p>
                    <button type = "button" className = "bg-secondary font-poppins font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-xl py-1 px-4">
                        <a href = "https://github.com/jainatharva21/aura-skin-website">Visit</a>
                    </button>
                </div>
                <div className="sm:mt-[20px] justify-between space-y-4 w-full lg:w-auto mx-auto h-auto bg-gradient-to-b from-slate-900 to-slate-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 rounded-xl border-2 z-10 px-[1rem] py-[2rem]">
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <span className = "font-poppins font-semibold text-[25px] text-white">
                            Automated Agriculture System 
                        </span>
                    </div>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Created an Automated agriculture system (Krishi.Cal) for school science fair.
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Implemented Arduino and python integration to provide the software with soil data such as moisture content, salinity etc. to predict how much water the perfect routine for soil management.
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Used the pyfirmata module which made use firmata protocols in the Arduino software.
                    </p>
                </div>
            </div>
            <div className = "w-full mx:w-1/3">
                <div className="justify-between space-y-4 w-full lg:w-auto px-auto h-auto bg-gradient-to-b from-blue-900 to-purple-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 rounded-xl border-2 z-10 px-[1rem] py-[2rem]">
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <span className = "font-poppins font-semibold text-[25px] text-white">
                            Portfolio Website
                        </span>
                    </div>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                        A personal webisite to showcase my developing skills and to highlight my most prominent projects.
                    </p>
                    <button type = "button" className = "bg-secondary font-poppins font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-xl py-1 px-4">
                        <a href = "#">Visit</a>
                    </button>
                </div>
                <div className="sm:mt-[32.5px] justify-between space-y-4 w-full lg:w-auto96 h-auto bg-gradient-to-b from-slate-900 to-slate-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 rounded-xl border-2 z-10 px-[1rem] py-[2rem]">
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <span className = "font-poppins font-semibold text-[25px] text-white">
                            Stock Market Simulator
                        </span>
                    </div>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Created a Stock Market Simulator by implementing .csv files in C++.
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    The program made use of a file stream to read the data of the specified stocks and simulate their closing prices from the years of 2013 to 2018
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    The program performed the specific buy and sell functions along with calculating the daily percentage changes in the pricing to warn
                    the user of decrease or increase in the pricing
                    </p>
                    <button type = "button" className = "bg-secondary font-poppins font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-xl py-1 px-4">
                        <a href = "https://github.com/jainatharva21/ECE220_Honors_Project">Visit</a>
                    </button>
                </div>
                <div className="sm:mt-[31.5px] h-auto justify-between space-y-4 w-full lg:w-auto bg-gradient-to-b from-blue-900 to-purple-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 rounded-xl border-2 z-10 px-[1rem] py-[2rem]">
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <span className = "font-poppins font-semibold text-[25px] text-white">
                            Smart Bin
                        </span>
                    </div>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Created a smart bin for special needs people which allowed them to throw away their garbage without having to unnecessarily exert themselves.
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Implemented Arduino program and PCBs to open and close the bin along with displaying whether it was full or empty. The bin did not open automatically when it was full. Consisted of an LCD display and ultrasound emitters to calculate the distance between the garbage and the lid
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Implemented Node.js to send emails to concerned authorities so they would know when to pick up the garbage
                    </p>
                </div>
            </div>
            <div className = "w-full mx:w-1/3">
                <div className="justify-between space-y-4 w-full lg:w-auto h-auto bg-gradient-to-b from-slate-900 to-slate-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 rounded-xl border-2 z-10 px-[1rem] py-[2rem]">
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <span className = "font-poppins font-semibold text-[25px] text-white">
                            Forex vs Market Analyser
                        </span>
                    </div>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Created a Machine learning model which disproved the claim that global forex markets influence the domestic equities in
                    the market.
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    The initial correlation analysis of market involved using the various python libraries to plot the roll over graph of the forex market with the domestic to establish whether the market is influenced or not.
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    The secondary part involved creating a Machine learning model with LSTM algorithm to predict the future values based on sequential data based in correlation to forex and the domestic market, disproving the claim.
                    </p>
                    <button type = "button" className = "bg-secondary font-poppins font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-xl py-1 px-4">
                        <a href = "https://github.com/jainatharva21/Forex-vs.-Market-Analyzer">Visit</a>
                    </button>
                </div>
                <div className="sm:mt-[92px] justify-between space-y-4 w-full lg:w-auto h-auto bg-gradient-to-b from-blue-900 to-purple-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 rounded-xl border-2 z-10 px-[1rem] py-[2rem]">
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <span className = "font-poppins font-semibold text-[25px] text-white">
                            Mediclada
                        </span>
                    </div>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Created a full - fledged, Computer Vision based, AI model which helps detect skin diseases and lists the symptoms for the same using data provided by the patient.
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    The dataset for this project consisted of 80,000 to 100,000 images picked up from google and cleaned by hand.
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Implemented fastAi to train the AI, as it came with pre trained neural networks.
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Also implemented an Image transform code to improve the accuracy of the AI.
                    </p>
                    <p className = {`${styles.paragraph} sm:text-[16px]`}>
                    Designed the front end for the AI using streamlit which takes the image from patient to display the disease and the symptoms in Hindi and English.
                    </p>
                    <button type = "button" className = "bg-secondary font-poppins font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-xl py-1 px-4">
                        <a href = "https://github.com/jainatharva21/Mediclada-Skin-Diseases-Prediction">Visit</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects


{/* <div className = {`${layout.section} ${styles.paddingX}`}>
<div className = "w-full mx:w-1/3">
</div>
<div className = "w-full mx:w-1/3">
</div>
<div className = "w-full mx:w-1/3">
</div>
</div>
<div className = {`${layout.section} ${styles.paddingX}`}>
<div className = "w-full mx:w-1/3">
</div>
<div className = "w-full mx:w-1/3">
</div>
<div className = "w-full mx:w-1/3">
    <video className='justify-between space-y-4 w-full lg:w-96 h-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400' autoPlay loop muted>
        <source src = "src/assets/website-gif.mp4"type='video/mp4'/>
    </video>
</div>
</div>    */}

{/* <video className='rounded-xl justify-between space-y-4 w-full lg:w-96 h-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400' autoPlay loop muted>
<source src = "src/assets/website-gif.mp4"type='video/mp4'/>
</video> */}

