import React from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'

import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'
const VideoMetaData = () => {
   return (
      <div className='videoMetaData py-2'>
         <div className='videoMetaData__top'>
            <h5>Video Title</h5>
            <div className='d-flex justify-content-between align-items-center py-1'>
               <span>
                  {numeral(10000).format('0.a')} Views •
                  {moment('2020-06-6').fromNow()}
               </span>

               <div>
                  <span className='mr-3'>
                     <MdThumbUp size={26} />
                     {numeral(10000).format('0.a')}
                  </span>
                  <span className='mr-3'>
                     <MdThumbDown size={26} />
                     {numeral(10000).format('0.a')}
                  </span>
               </div>
            </div>
         </div>
         <div className='videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3'>
            <div className='d-flex'>
               <img
                  src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                  alt=''
                  className='rounder-circle mr-3'
               />
               <div className='d-flex flex-column'>
                  <span>Backbench Coder</span>
                  <span> {numeral(10000).format('0.a')} Subscribers</span>
               </div>
            </div>

            <button className='btn border-0 p-2 m-2'>Subscribe</button>
         </div>
         <div className='videoMetaData__description'>
            <ShowMoreText
               lines={3}
               more='SHOW MORE'
               less='SHOW LESS'
               anchorClass='showMoreText'
               expanded={false}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Doloremque cupiditate, aspernatur a modi, nostrum porro suscipit
               vero est ratione pariatur eos atque dignissimos tempora autem
               corporis officia optio, distinctio nisi in id? Eaque consectetur,
               quas quaerat magni dicta qui non? Quod fugit inventore rem porro
               quis, error quos qui nulla! Lorem ipsum dolor sit amet
               consectetur adipisicing elit. Doloremque cupiditate, aspernatur a
               modi, nostrum porro suscipit vero est ratione pariatur eos atque
               dignissimos tempora autem corporis officia optio, distinctio nisi
               in id? Eaque consectetur, quas quaerat magni dicta qui non? Quod
               fugit inventore rem porro quis, error quos qui nulla! Lorem ipsum
               dolor sit amet consectetur adipisicing elit. Doloremque
               cupiditate, aspernatur a modi, nostrum porro suscipit vero est
               ratione pariatur eos atque dignissimos tempora autem corporis
               officia optio, distinctio nisi in id? Eaque consectetur, quas
               quaerat magni dicta qui non? Quod fugit inventore rem porro quis,
               error quos qui nulla!
            </ShowMoreText>
         </div>
      </div>
   )
}

export default VideoMetaData
