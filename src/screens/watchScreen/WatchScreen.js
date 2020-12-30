import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Comments from '../../components/comments/Comments'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import './watchScreen.scss'

const WatchScreen = () => {
   return (
      <Row>
         <Col lg={8}>
            <div className='watchScreen__player'>
               <iframe
                  src='https://www.youtube.com/embed/tgbNymZ7vqY'
                  frameBorder='0'
                  title='MY VIDEO'
                  allowFullScreen
                  width='100%'
                  height='100%'></iframe>
            </div>

            <VideoMetaData />
            <Comments />
         </Col>
         <Col lg={4}>
            {[...Array(10)].map(() => (
               <VideoHorizontal />
            ))}
         </Col>
      </Row>
   )
}

export default WatchScreen
