import React from 'react';
import '../../library/res/css/Why.css'
import individualImage from '../../library/res/images/individual.svg'
import researcherImage from '../../library/res/images/researchers.svg'
import firmImage from '../../library/res/images/firms.svg'
import '../../library/res/css/Home.css'
import '../../library/res/css/What.css'

interface IWhyProps {

}

export default (props: IWhyProps) => {
    return (
        <div>
            <div className='what-text'>For whom is healio beneficial?</div>

            <div className='who' >
                <div className='singleWho'>
                    <img className='singleImage' src={individualImage} />
                    <div className='singleHeading'>
                        Individuals

                    <div className='singleText'>
                            Everyone on healio get built-in <b>security and privacy</b> features saving time and money. 
                            Users do not have to worry about their data security and privacy concerns.
                            All of their research data is stored on the <b>Matic network's</b> secure blockchain.
                            Users also get paid a <b>fair cut</b> for their participation in various research programmes. 
                        </div>
                    </div>
                </div>
                <div className='singleWho'>
                    <div className='singleHeading'>
                        Researchers

                    <div className='singleText'>
                        Researchers do not have to worry about selling their data to third parties
                        ever again. All researcher's data will be kept in
                        secure <b>smart contracts</b> so they do not get <b>tampered</b> or deleted. Researchers 
                        would not have to worry about keeping their data <b>secure</b> as the buying firms
                        will be bound under <b>strict policies</b> of usage of their research data.
                        </div>
                    </div>
                    <img className='singleImageLeft' src={researcherImage} />
                </div>
                <div className='singleWho'>
                    <img className='singleImage' src={firmImage} />
                    <div className='singleHeading'>
                        Firms

                    <div className='singleText'>
                        Firms on the other hand can simply work on<b> focusing more on their products </b>
                         rather than buying or ownership of the research data. 
                        Product teams can avoid the headache of storing and messaging users
                        about medical research data as it will all be done through Healio.

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
