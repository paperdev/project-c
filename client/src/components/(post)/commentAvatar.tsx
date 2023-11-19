import React, { useState } from 'react';
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { iComment } from '@/shared/interface/post';
import dataProfile from '@/shared/data/json/profile.json'; // TODO:
import { LuLink, LuUnlink, LuMessagesSquare } from 'react-icons/lu';

let follow = 6;
let follower = 339;

export function CommentAvatar({
  dataComment
}: {
  dataComment: iComment,
}) {
  const [isFollowed, setIsFollowed] = useState(false);

  const onClickFollow = () => {
    setIsFollowed(!isFollowed);
    isFollowed ? follower++ : follower--;
  }

  return (
    <Card shadow='none' className='max-w-[300px] border-none bg-transparent'>
      <CardHeader className='justify-between'>
        <div className='flex gap-3'>
          <Avatar isBordered radius='full' size='md' src={dataComment.avatarSrc} />
          <div className='flex flex-col items-start justify-center'>
            <h4 className='text-small font-semibold leading-none text-default-600'>{dataProfile.profile.name}</h4>
            <h5 className='text-small tracking-tight text-default-500'>{dataProfile.profile.email}</h5>
          </div>
        </div>
        <Button
          isIconOnly
          className={`ml-2 ${isFollowed ? 'bg-transparent text-foreground border-default-200' : ''}`}
          color='primary'
          radius='full'
          size='sm'
          variant={isFollowed ? 'bordered' : 'solid'}
          onPress={onClickFollow}
        >
          {isFollowed ? <LuUnlink className='w-5 h-5' /> : <LuLink className='w-5 h-5' />}
        </Button>
      </CardHeader>
      <CardBody className='px-3 py-0'>
        <div className='text-small pl-px text-default-500'>
          {dataProfile.profile.jobTitle}
          <span aria-label='confetti' role='img'>
            🎉🎉🎉
          </span>
        </div>
      </CardBody>
      <CardFooter className='gap-3'>
        <div className='flex gap-1'>
          <div className='font-semibold text-default-600 text-small'>{follow}</div>
          <div className=' text-default-500 text-small'>Following</div>
        </div>
        <div className='flex gap-1'>
          <div className='font-semibold text-default-600 text-small'>{follower}</div>
          <div className='text-default-500 text-small'>Followers</div>
        </div>
        <div>
          <Button
            isIconOnly
            color='success'
            radius='full'
            size='sm'
            variant='light'
          >
            <LuMessagesSquare className='w-6 h-6' />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
