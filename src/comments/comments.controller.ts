import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlaceDto } from '../places/dtos/place.dto';
import { PlaceCommentDto } from '../places/dtos/place_comment.dto';
import { Place } from '../places/entities/place.entity';
import { currentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/user.entity';
import { CommentDto } from './comment.dto';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private commentsService: CommentsService){}

    @Post()
    async userComment(@currentUser() user: User, @Body() commentDto: CommentDto, @Body() placeId: PlaceCommentDto){
        return this.commentsService.userComment(user, placeId, commentDto);
    }

    @Get('/:place_id')
    async getComments(@Param('place_id') placeId: number) {
        console.log(placeId);
        return this.commentsService.getComments(placeId);
    }
}
