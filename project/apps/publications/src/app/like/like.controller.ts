import { Controller, HttpStatus, Param, Post } from '@nestjs/common';

import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { LikeService } from './like.service';
import {
  LIKE_STATUS_UPDATE_RESPONSE,
  NOT_AUTHORIZED_RESPONSE,
  ROUTE_PREFIX,
  TAG
} from './like.constant';
import { Route } from '@project/lib/shared/app/types';

@ApiTags(TAG)
@Controller(ROUTE_PREFIX)
export class LikeController {
  constructor(
    private readonly likeService: LikeService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: LIKE_STATUS_UPDATE_RESPONSE
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: NOT_AUTHORIZED_RESPONSE
  })
  @Post(Route.Param)
  public async toggle(
    @Param('id') userId: string,
    @Param('postId') postId: string
  ) {
    await this.likeService.togglePostLike(postId, userId);
  }
}
