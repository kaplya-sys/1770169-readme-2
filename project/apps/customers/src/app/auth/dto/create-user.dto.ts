import { ApiProperty } from '@nestjs/swagger';

import { IsEmail, IsString, IsNotEmpty, Length, IsOptional  } from 'class-validator';

import { HasMimeType, MaxFileSize } from 'nestjs-form-data';

import {
  AvatarProperty,
  EMAIL_TYPE_MESSAGE,
  EmailProperty,
  FIELD_TYPE_MESSAGE,
  FORMAT_MESSAGE,
  FULL_NAME_LENGTH_MESSAGE,
  FullNameLength,
  FullNameProperty,
  ImageFormat,
  MAX_SIZE,
  PASSWORD_LENGTH_MESSAGE,
  PasswordLength,
  PasswordProperty,
  REQUIRED_MESSAGE,
  SIZE_MESSAGE
} from '../auth.constant';

export class CreateUserDTO {
  @ApiProperty({
    description: FullNameProperty.DESCRIPTION,
    example: FullNameProperty.EXAMPLE
  })
  @IsString({message: FIELD_TYPE_MESSAGE})
  @Length(FullNameLength.MIN, FullNameLength.MAX, {message: FULL_NAME_LENGTH_MESSAGE})
  @IsNotEmpty({message: REQUIRED_MESSAGE})
  public fullName: string;

  @ApiProperty({
    description: EmailProperty.DESCRIPTION,
    example: EmailProperty.EXAMPLE
  })
  @IsEmail({}, {message: EMAIL_TYPE_MESSAGE})
  @IsNotEmpty({message: REQUIRED_MESSAGE})
  public email: string;

  @ApiProperty({
    description: PasswordProperty.DESCRIPTION,
    example: PasswordProperty.EXAMPLE
  })
  @IsString({message: FIELD_TYPE_MESSAGE})
  @Length(PasswordLength.MIN, PasswordLength.MAX, {message: PASSWORD_LENGTH_MESSAGE})
  @IsNotEmpty({message: REQUIRED_MESSAGE})
  public password: string;

  @ApiProperty({
    description: AvatarProperty.DESCRIPTION,
    example: AvatarProperty.EXAMPLE
  })
  @IsString({message: FIELD_TYPE_MESSAGE})
  @MaxFileSize(MAX_SIZE, {message: SIZE_MESSAGE})
  @HasMimeType([ImageFormat.JPEG, ImageFormat.PNG], {message: FORMAT_MESSAGE})
  @IsOptional()
  public avatar?: string;
}
