import { FirebaseError } from '@firebase/util';
/**
 * An error returned by the Firebase Storage SDK.
 * @public
 */
export declare class StorageError extends FirebaseError {
    private readonly _baseMessage;
    /**
     * Stores custom error data unque to StorageError.
     */
    customData: {
        serverResponse: string | null;
    };
    /**
     * @param code - A StorageErrorCode string to be prefixed with 'storage/' and
     *  added to the end of the message.
     * @param message  - Error message.
     */
    constructor(code: StorageErrorCode, message: string);
    /**
     * Compares a StorageErrorCode against this error's code, filtering out the prefix.
     */
    _codeEquals(code: StorageErrorCode): boolean;
    /**
     * Optional response message that was added by the server.
     */
    get serverResponse(): null | string;
    set serverResponse(serverResponse: string | null);
}
export declare const errors: {};
/**
 * @public
 * Error codes that can be attached to `StorageError`s.
 */
export declare const enum StorageErrorCode {
    UNKNOWN = "unknown",
    OBJECT_NOT_FOUND = "object-not-found",
    BUCKET_NOT_FOUND = "bucket-not-found",
    PROJECT_NOT_FOUND = "project-not-found",
    QUOTA_EXCEEDED = "quota-exceeded",
    UNAUTHENTICATED = "unauthenticated",
    UNAUTHORIZED = "unauthorized",
    UNAUTHORIZED_APP = "unauthorized-app",
    RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded",
    INVALID_CHECKSUM = "invalid-checksum",
    CANCELED = "canceled",
    INVALID_EVENT_NAME = "invalid-event-name",
    INVALID_URL = "invalid-url",
    INVALID_DEFAULT_BUCKET = "invalid-default-bucket",
    NO_DEFAULT_BUCKET = "no-default-bucket",
    CANNOT_SLICE_BLOB = "cannot-slice-blob",
    SERVER_FILE_WRONG_SIZE = "server-file-wrong-size",
    NO_DOWNLOAD_URL = "no-download-url",
    INVALID_ARGUMENT = "invalid-argument",
    INVALID_ARGUMENT_COUNT = "invalid-argument-count",
    APP_DELETED = "app-deleted",
    INVALID_ROOT_OPERATION = "invalid-root-operation",
    INVALID_FORMAT = "invalid-format",
    INTERNAL_ERROR = "internal-error",
    UNSUPPORTED_ENVIRONMENT = "unsupported-environment"
}
export declare function prependCode(code: StorageErrorCode): string;
export declare function unknown(): StorageError;
export declare function objectNotFound(path: string): StorageError;
export declare function bucketNotFound(bucket: string): StorageError;
export declare function projectNotFound(project: string): StorageError;
export declare function quotaExceeded(bucket: string): StorageError;
export declare function unauthenticated(): StorageError;
export declare function unauthorizedApp(): StorageError;
export declare function unauthorized(path: string): StorageError;
export declare function retryLimitExceeded(): StorageError;
export declare function invalidChecksum(path: string, checksum: string, calculated: string): StorageError;
export declare function canceled(): StorageError;
export declare function invalidEventName(name: string): StorageError;
export declare function invalidUrl(url: string): StorageError;
export declare function invalidDefaultBucket(bucket: string): StorageError;
export declare function noDefaultBucket(): StorageError;
export declare function cannotSliceBlob(): StorageError;
export declare function serverFileWrongSize(): StorageError;
export declare function noDownloadURL(): StorageError;
/**
 * @internal
 */
export declare function invalidArgument(message: string): StorageError;
export declare function invalidArgumentCount(argMin: number, argMax: number, fnName: string, real: number): StorageError;
export declare function appDeleted(): StorageError;
/**
 * @param name - The name of the operation that was invalid.
 *
 * @internal
 */
export declare function invalidRootOperation(name: string): StorageError;
/**
 * @param format - The format that was not valid.
 * @param message - A message describing the format violation.
 */
export declare function invalidFormat(format: string, message: string): StorageError;
/**
 * @param message - A message describing the internal error.
 */
export declare function unsupportedEnvironment(message: string): StorageError;
/**
 * @param message - A message describing the internal error.
 */
export declare function internalError(message: string): StorageError;