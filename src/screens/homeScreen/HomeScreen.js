import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Video from '../../components/video/Video'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../../redux/actions/videos.action'

const HomeScreen = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getPopularVideos())
   }, [dispatch])

   const { videos } = useSelector(state => state.homeVideos)

   return (
      <Container>
         <CategoriesBar />
         <Row>
            {videos.map(video => (
               <Col lg={3} md={4}>
                  <Video video={video} key={video.id} />
               </Col>
            ))}
         </Row>
      </Container>
   )
}

export default HomeScreen
