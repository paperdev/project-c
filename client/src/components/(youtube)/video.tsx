'use client';

import ComponentPostImage from '@/components/(post)/postImage';
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from '@nextui-org/react';
import { LuShare2, LuBookmark } from 'react-icons/lu';

const URL_CHANNEL = 'https://www.youtube.com/channel/'

export default function ComponentVideo({
  dataVideo
}: {
  dataVideo: any[]
}) {
  const iconWeight = 'w-7';
  const iconHeight = 'h-7';

  const onClickShare = async (event: React.MouseEvent) => {
    if (!event.currentTarget) {
      return;
    }

    // const channelId = event.currentTarget.getAttribute('data-channelid');
  }

  return (
    <div className='flex flex-col gap-1 pt-0.5'>
      {
        dataVideo.map((video, index) => {
          return (
            <Card key={index} isBlurred shadow='none' >
              <CardHeader>
                <div>
                  <div className='text-2xl font-bold text-primary-500'>{video.snippet.title}</div>
                  <span className='text-xs ml-2 text-default-500'>{video.snippet.publishedAt}</span>
                  <div className='flex mt-2 gap-1'>
                    {video.snippet.description}
                  </div>
                </div>
              </CardHeader>

              <CardBody>
                <ComponentPostImage imgUrls={[video.snippet.thumbnails.high.url]}></ComponentPostImage>
              </CardBody>

              <CardFooter className="grid">
                <div className='flex justify-start'>
                  <div className='flex space-x-4'>
                    <LuBookmark className={`${iconHeight} ${iconWeight} text-gray-600 cursor-pointer`}></LuBookmark>
                    <Link isExternal href={URL_CHANNEL + video.snippet.channelId}>
                      <LuShare2 data-channelid={video.snippet.channelId} className={`${iconHeight} ${iconWeight} text-gray-600 cursor-pointer`} onClick={(event: React.MouseEvent) => { onClickShare(event); }}></LuShare2>
                    </Link>
                  </div>
                </div>
              </CardFooter>

              <Divider className="my-2" />
            </Card>
          )
        })
      }
    </div>
  )
}
