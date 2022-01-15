import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Main(props){
    return(
        <div className='tw-w-[99vw]'>
            <Row className='tw-p-10 tw-h-[99vh]'>
                <Col className='tw-border-2 '>
                    <h1>1</h1>
                </Col>
                <Col className='tw-border-2'>
                    <h1>2</h1>
                </Col>
            </Row>
        </div>
    )
}

export default Main;