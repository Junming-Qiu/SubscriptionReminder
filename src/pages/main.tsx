import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CurrSubscriptions from '../components/currSubList';
import FinanceChartsSM from '../components/financeChartsSm';
import PopupMenu from 'src/components/popupMenu';
import DarkModeButton from 'src/components/darkModeButton';
import IndexButton from 'src/components/indexButton';

function Main(){
    const [dark, setDark] = useState(false);
    const darkModeToggle = () => setDark(!dark);

    return(
        <div>
            {/* Centers All content and removes horizontal scroll bar */}
            <Col className='tw-w-[98vw] tw-pl-[2vw]'>

                <Row className='tw-flex tw-flex-row tw-pt-2 tw-px-10'>
                    <div className='tw-flex-1 tw-basis-9/12'>
                        <h3>Subscription Website</h3>
                    </div>
                    
                    <div className='tw-flex tw-flex-row tw-flex-1 tw-gap-1'>
                        <div onClick={() => darkModeToggle()} className='tw-flex-1'>
                            <DarkModeButton darkMode={dark}/>    
                        </div>
                         
                        <div className='tw-flex-1'>
                            <IndexButton/>
                        </div>
                    </div>
                    
                </Row>

                <Row className='tw-pt-2 tw-pl-10 tw-pr-10 tw-h-[85vh]'>
                    <Col className='tw-border-2 tw-rounded-lg'>
                        <h1>Current Subscriptions</h1>
                        <CurrSubscriptions/>
                    </Col>

                    <Col className='tw-border-2 tw-rounded-lg'>
                        <FinanceChartsSM/>
                    </Col>
                </Row>

                <Row className='tw-text-center'>
                    <a className="tw-p-5" href="/">Any issues or concerns? Send us feedback!</a>
                </Row>
            </Col>
        </div>
        
    )
}

export default Main;