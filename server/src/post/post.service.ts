import { Injectable } from '@nestjs/common';
import { iPost } from '@/shared/interface/post';
import { postList } from '@/shared/data/post';

@Injectable()
export class PostService {
  private postList: iPost[] = postList;

  create(postData: iPost): iPost {
    const localTime = new Date();
    const localTimeFormat = localTime.getFullYear() 
      + '-' + localTime.getMonth() 
      + '-' + localTime.getDate()
      + ' ' + localTime.getHours()
      + ':' + localTime.getMinutes()
      + ':' + localTime.getSeconds();
    postData.time = localTimeFormat;
    
    postData.likeCount = 0;
    postData.comments = [];
    postData.urls = ['https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_1280.jpg'];

    // TODO: 
    const resPostData: iPost = {
      title: postData.title,
      time: localTimeFormat,
      tags: postData.tags,
      urls: postData.urls,
      likeCount: postData.likeCount,
      comments: postData.comments,
    };
    
    this.postList.push(postData);
    return resPostData;
  }

  findAll(): iPost[] {
    return this.postList;
  }
}
