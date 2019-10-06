import React from 'react';
import '../../library/res/css/HFooter.css';
import '../../library/res/css/Home.css';

interface IHFooterProps {

}

export default (props: IHFooterProps) => {
    return (
        <div className='hfooter'>
            <div className='footerContainer'>
                <div className='logo-footer'>healio</div>
                <div className='team-footer'>Team SubmergeConflict</div>
                <div className='place-footer'>Mumbai
                
                <div className='sub-place-footer'>
                    KJSCE Hack
                </div>
                </div>
            </div>
        </div>
    )
}
