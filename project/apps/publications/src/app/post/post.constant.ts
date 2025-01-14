import { SortType } from '@project/lib/shared/app/types';

export const DEFAULT_MAX_POST_COUNT = 25;
export const DEFAULT_SORT_TYPE = SortType.Desc;
export const NOT_FOUND_BY_ID_MESSAGE = 'The publication with this id: %id% not found.';
export const REPOST_ERROR_MESSAGE = 'Allowed to repost the publication can be done once';

export const POST_CREATED_RESPONSE = 'The publication was successfully created.';
export const POST_REPOSTED_RESPONSE = 'The publication was successfully reposted.';
export const POSTS_FOUND_RESPONSE = 'The publications were successfully found.';
export const POST_FOUND_RESPONSE = 'The publication were successfully found.';
export const POST_UPDATE_RESPONSE = 'The publication was successfully update.';
export const POST_DELETE_RESPONSE = 'The publication was successfully deleted.';
export const POST_NOT_FOUND_RESPONSE = 'The publication with this id not found.'
export const VALIDATION_RESPONSE = 'Validation error.';
export const NOT_AUTHORIZED_RESPONSE = 'The user is not logged in.';

export const USER_ID_TYPE_MESSAGE = 'The Id must be of the MongoId type.';
export const REQUIRED_MESSAGE = 'The field should not be empty.';
export const DATE_TYPE_MESSAGE = 'The field must be one of the ISO8601 type.';
export const POST_STATUS_MESSAGE = 'The field must be one of the types: "published" or "draft".';
export const POST_TYPE_MESSAGE = 'The field must be one of the types: "link", "photo", "quote", "text" or "video".';

export const ROUTE_PREFIX = 'posts';
export const TAG = 'Publications';

export const TypeProperty = {
  DESCRIPTION: 'The type of blog post is one of five types: video, text, quote, photo, link.',
  EXAMPLE: 'video'
}

export const StatusProperty = {
  DESCRIPTION: 'The publication status is one of two states: published or draft.',
  EXAMPLE: 'published'
}

export const UserIdProperty = {
  DESCRIPTION: 'A unique user ID.',
  EXAMPLE: '667c673deb3171fbdaa4ce26'
}

export const URLProperty = {
  DESCRIPTION: 'Valid URL.',
  EXAMPLE: 'https://nestjs.com/'
}

export const DescriptionProperty = {
  DESCRIPTION: 'Description of the content.',
  EXAMPLE: 'A progressive framework for creating efficient, reliable and scalable server applications.'
}

export const ImageProperty = {
  DESCRIPTION: 'Image in jpg or png format.',
  EXAMPLE: 'upload/cat.jpg'
}

export const AuthorProperty = {
  DESCRIPTION: 'The author of the quote.',
  EXAMPLE: 'Fyodor Dostoevsky'
}

export const ContentProperty = {
  DESCRIPTION: 'The contents of the publication.',
  EXAMPLE: 'One must love life more than the very meaning of life!'
}

export const TitleProperty = {
  DESCRIPTION: 'Title of the publication',
  EXAMPLE: 'Artificial intelligence still deprives people of work.'
}

export const PreviewProperty = {
  DESCRIPTION: 'Announcement of the publication.',
  EXAMPLE: 'The scientific journal has used AI to create scientific articles.'
}

export const TagsProperty = {
  DESCRIPTION: 'List of publication tags.',
  EXAMPLE: '#city#japan#sunrise#tokio'
}

export const PublishedDateProperty = {
  DESCRIPTION: 'The publication publication date.',
  EXAMPLE: '2022-01-18T17:36:34.064Z'
}

export enum Route {
  Root = '/',
  PostParam = ':id',
  Draft = 'draft',
  Repost = ':id/repost'
}

export const CommentLength = {
  MIN: 10,
  MAX: 300
}
