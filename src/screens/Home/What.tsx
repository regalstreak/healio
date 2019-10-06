import React from 'react';
import '../../library/res/css/Home.css'
import '../../library/res/css/What.css'
import secureImage from "../../library/res/images/secure.svg";
interface IWhatProps {

}

export default (props: IWhatProps) => {
    return (
        <div className='what'>
            <div className='what-text'>What is healio?</div>

            <div className='what-desc'>
                Healio provides a secure marketplace for verified medical research and Electronic Medical Records (EMR) data.
                It acts as a bridge between individuals, medical researchers and data firms. It facilitates the protection of<b> privacy </b>
                and <b>security</b> concerns of health data of the individuals and gives them complete ownership.
                <br/>
                <br/>
                Health research, while necessary, is inefficient and costly. 
                This is mostly because public datasets are not aggregated and key terms are not easily searchable. 
                As much as <b>85%</b> of medical research is redundant, costing us nearly<b> $200 billion </b>annually.
                <br/>
                {/* The only way to get a specific dataset from a scientist is to personally ask researchers. 
                Unfortunately researchers are often reluctant to share their research data because it is highly risky 
                and they are not being compensated. */}
                <br/>
                The privacy and security of health data also poses a large <b>ethical</b> concern. 
                Studies show that more than <b>80%</b> of consumers are willing to share their health data for research—but 
                it must be private and secure.
                Lastly patients have had little <b>control</b> over their health information. 
                In research, participants are paid for their data but are then separated from any <b>future use</b> of that data.
            </div>

            <img src={secureImage} className='secureImage' alt=""/>
        </div>
    )
}
