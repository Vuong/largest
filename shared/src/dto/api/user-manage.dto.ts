import { z } from 'zod';
import { EUserSchema, SimpleUserSchema } from '../../entities/user.entity.js';
import { createZodDto } from '../../util/create-zod-dto.js';
import { IsPosInt } from '../../validators/positive-int.validator.js';
import { IsStringList } from '../../validators/string-list.validator.js';
import { EntityIDObjectSchema } from '../id-object.dto.js';

// UserList
export let UserListRequestSchema = z.object({
  count: IsPosInt(),
  page: IsPosInt(),
});
export class UserListRequest extends createZodDto(UserListRequestSchema) {}

export let UserListResponseSchema = z.object({
  results: z.array(EUserSchema),
  page: IsPosInt(),
  pages: IsPosInt(),
  total: IsPosInt(),
});
export class UserListResponse extends createZodDto(UserListResponseSchema) {}

// UserCreate
export let UserCreateRequestSchema = SimpleUserSchema;
export class UserCreateRequest extends createZodDto(UserCreateRequestSchema) {}

export let UserCreateResponseSchema = EUserSchema;
export class UserCreateResponse extends createZodDto(
  UserCreateResponseSchema,
) {}

// UserDelete
export let UserDeleteRequestSchema = EntityIDObjectSchema;
export class UserDeleteRequest extends createZodDto(UserDeleteRequestSchema) {}

export let UserDeleteResponseSchema = EUserSchema.partial({ id: true });
export class UserDeleteResponse extends createZodDto(
  UserDeleteResponseSchema,
) {}

// UserInfo
export let UserInfoRequestSchema = EntityIDObjectSchema;
export class UserInfoRequest extends createZodDto(UserInfoRequestSchema) {}

export let UserInfoResponseSchema = EUserSchema;
export class UserInfoResponse extends createZodDto(UserInfoResponseSchema) {}

// UserUpdate
export let UserUpdateRequestSchema = EntityIDObjectSchema.merge(
  SimpleUserSchema.partial(),
);
export class UserUpdateRequest extends createZodDto(UserUpdateRequestSchema) {}

export let UserUpdateResponseSchema = EUserSchema;
export class UserUpdateResponse extends createZodDto(
  UserUpdateResponseSchema,
) {}

// GetSpecialUsers
export let GetSpecialUsersResponseSchema = z.object({
  UndeletableUsersList: IsStringList(),
  ImmutableUsersList: IsStringList(),
  LockedLoginUsersList: IsStringList(),
});
export class GetSpecialUsersResponse extends createZodDto(
  GetSpecialUsersResponseSchema,
) {}
