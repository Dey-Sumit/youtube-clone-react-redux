import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Video from '../../components/video/Video'
import { getChannelDetails } from '../../redux/actions/channel.action'
import { getVideosByChannel } from '../../redux/actions/videos.action'

import numeral from 'numeral'

import './channelScreen.scss'

const ChannelScreen = () => {
   const { channelId } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getVideosByChannel(channelId))
      dispatch(getChannelDetails(channelId))
   }, [dispatch, channelId])

   const { videos, loading } = useSelector(state => state.channelVideos)
   const { snippet, statistics } = useSelector(
      state => state.channelDetails.channel
   )

   return (
      <>
         <div className='px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader'>
            <div className='d-flex align-items-center'>
               <img src={snippet?.thumbnails?.default?.url} alt='' />

               <div className='ml-3 channelHeader__details'>
                  <h3>{snippet?.title}</h3>
                  <span>
                     {numeral(statistics?.subscriberCount).format('0.a')}{' '}
                     subscribers
                  </span>
               </div>
            </div>

            <button>Subscribe</button>
         </div>

         <Container>
            <Row className='mt-2'>
               {!loading
                  ? videos?.map(video => (
                       <Col md={3} lg={3}>
                          <Video video={video} channelScreen />
                       </Col>
                    ))
                  : [...Array(15)].map(() => (
                       <Col md={3} lg={3}>
                          <SkeletonTheme
                             color='#343a40'
                             highlightColor='#3c4147'>
                             <Skeleton width='100%' height='140px' />
                          </SkeletonTheme>
                       </Col>
                    ))}
            </Row>
         </Container>
      </>
   )
}

export default ChannelScreen
