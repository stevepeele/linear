import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON values as a string */
  JSONObject: any;
  /** The `TimelessDateScalar` scalar type represents Date values without a timestamp. It expects strings in the format YYYY-MM-DD */
  TimelessDateScalar: any;
};

/** An API key. Grants access to the user's resources. */
export type ApiKey = Node & {
  __typename?: "ApiKey";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The label of the API key. */
  label: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

export type ApiKeyConnection = {
  __typename?: "ApiKeyConnection";
  edges: Array<ApiKeyEdge>;
  nodes: Array<ApiKey>;
  pageInfo: PageInfo;
};

export type ApiKeyCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The API key value (format: /^[a-zA-Z0-9]{40}$/). */
  key: Scalars["String"];
  /** The label for the API key. */
  label: Scalars["String"];
};

export type ApiKeyEdge = {
  __typename?: "ApiKeyEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: ApiKey;
};

export type ApiKeyPayload = {
  __typename?: "ApiKeyPayload";
  /** The API key that was created. */
  apiKey: ApiKey;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** Public information of the OAuth application. */
export type Application = {
  __typename?: "Application";
  /** OAuth application's client ID. */
  clientId: Scalars["String"];
  /** Information about the application. */
  description?: Maybe<Scalars["String"]>;
  /** Name of the developer. */
  developer: Scalars["String"];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars["String"];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars["String"]>;
  /** Application name. */
  name: Scalars["String"];
};

export type ArchivePayload = {
  __typename?: "ArchivePayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** Contains requested archived model objects. */
export type ArchiveResponse = {
  __typename?: "ArchiveResponse";
  /** A JSON serialized collection of model objects loaded from the archive */
  archive: Scalars["String"];
  /** The version of the remote database. Incremented by 1 for each migration run on the database. */
  databaseVersion: Scalars["Float"];
  /** The total number of entities in the archive. */
  totalCount: Scalars["Float"];
};

export type AuthResolverResponse = {
  __typename?: "AuthResolverResponse";
  /** Should the signup flow allow access for the domain. */
  allowDomainAccess?: Maybe<Scalars["Boolean"]>;
  /** Organizations this account has access to, but is not yet a member. */
  availableOrganizations?: Maybe<Array<Organization>>;
  /** Email for the authenticated account. */
  email?: Maybe<Scalars["String"]>;
  /** User account ID. */
  id: Scalars["String"];
  /** JWT token for authentication of the account. */
  token?: Maybe<Scalars["String"]>;
  /** Users belonging to this account. */
  users: Array<User>;
};

/** Public information of the OAuth application, plus the authorized scopes for a given user. */
export type AuthorizedApplication = {
  __typename?: "AuthorizedApplication";
  /** OAuth application's ID. */
  appId: Scalars["String"];
  /** OAuth application's client ID. */
  clientId: Scalars["String"];
  /** Information about the application. */
  description?: Maybe<Scalars["String"]>;
  /** Name of the developer. */
  developer: Scalars["String"];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars["String"];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars["String"]>;
  /** Application name. */
  name: Scalars["String"];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars["String"]>;
};

export type BillingDetailsPayload = {
  __typename?: "BillingDetailsPayload";
  /** The customer's email address the invoices are sent to. */
  email?: Maybe<Scalars["String"]>;
  /** List of invoices, if any. */
  invoices: Array<Invoice>;
  /** The payment method. */
  paymentMethod?: Maybe<Card>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type BillingEmailPayload = {
  __typename?: "BillingEmailPayload";
  /** The customer's email address the invoices are sent to. */
  email?: Maybe<Scalars["String"]>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type BillingEmailUpdateInput = {
  /** The email address to which to send invoices. */
  email: Scalars["String"];
};

export type Card = {
  __typename?: "Card";
  /** The brand of the card, e.g. Visa. */
  brand: Scalars["String"];
  /** The last four digits used to identify the card. */
  last4: Scalars["String"];
};

export type CollaborationDocumentUpdateInput = {
  /** Client identifier. */
  clientId: Scalars["String"];
  /** Document identifier. */
  issueId: Scalars["String"];
  /** New document steps from the client. */
  steps: Array<Scalars["JSON"]>;
  /** Client's document version number. */
  version: Scalars["Int"];
};

export type CollaborationDocumentUpdatePayload = {
  __typename?: "CollaborationDocumentUpdatePayload";
  /** Document steps the client has not seen yet and need to rebase it's local steps on. */
  steps?: Maybe<StepsResponse>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** A comment associated with an issue. */
export type Comment = Node & {
  __typename?: "Comment";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The comment content in markdown format. */
  body: Scalars["String"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The time user edited the comment. */
  editedAt?: Maybe<Scalars["DateTime"]>;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The issue that the comment is associated with. */
  issue: Issue;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The user who wrote the comment. */
  user: User;
};

export type CommentConnection = {
  __typename?: "CommentConnection";
  edges: Array<CommentEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
};

export type CommentCreateInput = {
  /** The comment content in markdown format. */
  body?: Maybe<Scalars["String"]>;
  /** The comment content as a Prosemirror document. */
  bodyData?: Maybe<Scalars["JSON"]>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The issue to associate the comment with. */
  issueId: Scalars["String"];
};

export type CommentEdge = {
  __typename?: "CommentEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: Comment;
};

export type CommentPayload = {
  __typename?: "CommentPayload";
  /** The comment that was created or updated. */
  comment: Comment;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type CommentUpdateInput = {
  /** The comment content. */
  body?: Maybe<Scalars["String"]>;
  /** The comment content as a Prosemirror document. */
  bodyData?: Maybe<Scalars["JSON"]>;
};

/** GitHub's commit data */
export type CommitPayload = {
  __typename?: "CommitPayload";
  added: Array<Scalars["String"]>;
  id: Scalars["String"];
  message: Scalars["String"];
  modified: Array<Scalars["String"]>;
  removed: Array<Scalars["String"]>;
  timestamp: Scalars["String"];
  url: Scalars["String"];
};

export type ContactCreateInput = {
  /** User's browser information. */
  browser?: Maybe<Scalars["String"]>;
  /** User's device information. */
  device?: Maybe<Scalars["String"]>;
  /** How disappointed the user would be if they could no longer use Linear. */
  disappointmentRating?: Maybe<Scalars["Int"]>;
  /** The message the user sent. */
  message: Scalars["String"];
  /** User's operating system. */
  operatingSystem?: Maybe<Scalars["String"]>;
  /** The type of support contact. */
  type: Scalars["String"];
};

export type ContactPayload = {
  __typename?: "ContactPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type CreateCsvExportReportPayload = {
  __typename?: "CreateCsvExportReportPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type CreateOrJoinOrganizationResponse = {
  __typename?: "CreateOrJoinOrganizationResponse";
  organization: Organization;
  user: User;
};

export type CreateOrganizationInput = {
  /** Whether the organization should allow email domain access. */
  domainAccess?: Maybe<Scalars["Boolean"]>;
  /** The name of the organization. */
  name: Scalars["String"];
  /** The timezone of the organization, passed in by client. */
  timezone?: Maybe<Scalars["String"]>;
  /** The URL key of the organization. */
  urlKey: Scalars["String"];
  /** JSON serialized UTM parameters associated with the creation of the workspace. */
  utm?: Maybe<Scalars["String"]>;
};

/** A custom view that has been saved by a user. */
export type CustomView = Node & {
  __typename?: "CustomView";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The color of the icon of the custom view. */
  color?: Maybe<Scalars["String"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The user who created the custom view. */
  creator: User;
  /** The description of the custom view. */
  description?: Maybe<Scalars["String"]>;
  /** The filters applied to issues in the custom view. */
  filters: Scalars["JSONObject"];
  /** The icon of the custom view. */
  icon?: Maybe<Scalars["String"]>;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The name of the custom view. */
  name: Scalars["String"];
  /** The organization of the custom view. */
  organization: Organization;
  /** Whether the custom view is shared with everyone in the organization. */
  shared: Scalars["Boolean"];
  /** The team associated with the custom view. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

export type CustomViewConnection = {
  __typename?: "CustomViewConnection";
  edges: Array<CustomViewEdge>;
  nodes: Array<CustomView>;
  pageInfo: PageInfo;
};

export type CustomViewCreateInput = {
  /** The color of the icon of the custom view. */
  color?: Maybe<Scalars["String"]>;
  /** The description of the custom view. */
  description?: Maybe<Scalars["String"]>;
  /** The filters applied to issues in the custom view. */
  filters?: Maybe<Scalars["JSONObject"]>;
  /** The icon of the custom view. */
  icon?: Maybe<Scalars["String"]>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The name of the custom view. */
  name: Scalars["String"];
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: Maybe<Scalars["Boolean"]>;
  /** The id of the team associated with the custom view. */
  teamId?: Maybe<Scalars["String"]>;
};

export type CustomViewEdge = {
  __typename?: "CustomViewEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: CustomView;
};

export type CustomViewPayload = {
  __typename?: "CustomViewPayload";
  /** The custom view that was created or updated. */
  customView: CustomView;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type CustomViewUpdateInput = {
  /** The color of the icon of the custom view. */
  color?: Maybe<Scalars["String"]>;
  /** The description of the custom view. */
  description?: Maybe<Scalars["String"]>;
  /** The filters applied to issues in the custom view. */
  filters?: Maybe<Scalars["JSONObject"]>;
  /** The icon of the custom view. */
  icon?: Maybe<Scalars["String"]>;
  /** The name of the custom view. */
  name?: Maybe<Scalars["String"]>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: Maybe<Scalars["Boolean"]>;
  /** The id of the team associated with the custom view. */
  teamId?: Maybe<Scalars["String"]>;
};

/** A set of issues to be resolved in a specified amount of time. */
export type Cycle = Node & {
  __typename?: "Cycle";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: Maybe<Scalars["DateTime"]>;
  /** The number of completed issues in the cycle after each day. */
  completedIssueCountHistory: Array<Scalars["Float"]>;
  /** The number of completed estimation points after each day. */
  completedScopeHistory: Array<Scalars["Float"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The end time of the cycle. */
  endsAt: Scalars["DateTime"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The total number of issues in the cycle after each day. */
  issueCountHistory: Array<Scalars["Float"]>;
  /** Issues associated with the cycle. */
  issues: IssueConnection;
  /** The custom name of the cycle. */
  name?: Maybe<Scalars["String"]>;
  /** The number of the cycle. */
  number: Scalars["Float"];
  /** The total number of estimation points after each day. */
  scopeHistory: Array<Scalars["Float"]>;
  /** The start time of the cycle. */
  startsAt: Scalars["DateTime"];
  /** The team that the cycle is associated with. */
  team: Team;
  /** Issues that weren't completed when the cycle was closed. */
  uncompletedIssuesUponClose: IssueConnection;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

/** A set of issues to be resolved in a specified amount of time. */
export type CycleIssuesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A set of issues to be resolved in a specified amount of time. */
export type CycleUncompletedIssuesUponCloseArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type CycleConnection = {
  __typename?: "CycleConnection";
  edges: Array<CycleEdge>;
  nodes: Array<Cycle>;
  pageInfo: PageInfo;
};

export type CycleCreateInput = {
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: Maybe<Scalars["DateTime"]>;
  /** The end date of the cycle. */
  endsAt: Scalars["DateTime"];
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The custom name of the cycle. */
  name?: Maybe<Scalars["String"]>;
  /** The start date of the cycle. */
  startsAt: Scalars["DateTime"];
  /** The team to associate the cycle with. */
  teamId: Scalars["String"];
};

export type CycleEdge = {
  __typename?: "CycleEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: Cycle;
};

export type CyclePayload = {
  __typename?: "CyclePayload";
  /** The Cycle that was created or updated. */
  cycle?: Maybe<Cycle>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type CycleUpdateInput = {
  /** The end date of the cycle. */
  completedAt?: Maybe<Scalars["DateTime"]>;
  /** The end date of the cycle. */
  endsAt?: Maybe<Scalars["DateTime"]>;
  /** The custom name of the cycle. */
  name?: Maybe<Scalars["String"]>;
  /** The start date of the cycle. */
  startsAt?: Maybe<Scalars["DateTime"]>;
};

export type DebugPayload = {
  __typename?: "DebugPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type DeleteOrganizationInput = {
  /** The deletion code to confirm operation. */
  deletionCode: Scalars["String"];
};

/** Collaborative editing steps for documents. */
export type DocumentStep = Node & {
  __typename?: "DocumentStep";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** Connected client ID. */
  clientId: Scalars["String"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** Step data. */
  step: Scalars["JSON"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** Step version. */
  version: Scalars["Float"];
};

export type EmailUnsubscribeInput = {
  /** The user's email validation token. */
  token: Scalars["String"];
  /** Email type to unsubscribed from. */
  type: Scalars["String"];
  /** The identifier of the user. */
  userId: Scalars["String"];
};

export type EmailUnsubscribePayload = {
  __typename?: "EmailUnsubscribePayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type EmailUserAccountAuthChallengeInput = {
  /** The email for which to generate the magic login code. */
  email: Scalars["String"];
  /** Whether the login was requested from the desktop app. */
  isDesktop?: Maybe<Scalars["Boolean"]>;
  /** Signup code. */
  signupCode?: Maybe<Scalars["String"]>;
};

export type EmailUserAccountAuthChallengeResponse = {
  __typename?: "EmailUserAccountAuthChallengeResponse";
  /** Supported challenge for this user account. Can be either verificationCode or password. */
  authType: Scalars["String"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** A custom emoji. */
export type Emoji = Node & {
  __typename?: "Emoji";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The user who created the emoji. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The emoji's name. */
  name: Scalars["String"];
  /** The organization that the emoji belongs to. */
  organization: Organization;
  /** The source of the emoji. */
  source: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The emoji image URL. */
  url: Scalars["String"];
};

export type EmojiConnection = {
  __typename?: "EmojiConnection";
  edges: Array<EmojiEdge>;
  nodes: Array<Emoji>;
  pageInfo: PageInfo;
};

export type EmojiCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The name of the custom emoji. */
  name: Scalars["String"];
  /** The URL for the emoji. */
  url: Scalars["String"];
};

export type EmojiEdge = {
  __typename?: "EmojiEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: Emoji;
};

export type EmojiPayload = {
  __typename?: "EmojiPayload";
  /** The emoji that was created. */
  emoji: Emoji;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type EventCreateInput = {
  /** The category of the event to create. */
  category: Scalars["String"];
  /** Additional data of the event, encoded as JSON. */
  data?: Maybe<Scalars["JSON"]>;
  /** The subject of the event. */
  subject: Scalars["String"];
  /** The target identifier of the event. */
  targetId?: Maybe<Scalars["String"]>;
  /** The value of the event. */
  value?: Maybe<Scalars["Float"]>;
};

export type EventPayload = {
  __typename?: "EventPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** User favorites presented in the sidebar. */
export type Favorite = Node & {
  __typename?: "Favorite";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** Favorited cycle. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** Favorited issue. */
  issue?: Maybe<Issue>;
  /** Favorited issue label. */
  label?: Maybe<IssueLabel>;
  /** Favorited project. */
  project?: Maybe<Project>;
  /** Favorited project team. */
  projectTeam?: Maybe<Project>;
  /** The order of the item in the favorites list. */
  sortOrder: Scalars["Float"];
  /** The type of the favorite. */
  type: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The owner of the favorite. */
  user: User;
};

export type FavoriteConnection = {
  __typename?: "FavoriteConnection";
  edges: Array<FavoriteEdge>;
  nodes: Array<Favorite>;
  pageInfo: PageInfo;
};

export type FavoriteCreateInput = {
  /** The identifier of the custom view to favorite. */
  customViewId?: Maybe<Scalars["String"]>;
  /** The identifier of the cycle to favorite. */
  cycleId?: Maybe<Scalars["String"]>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The identifier of the issue to favorite. */
  issueId?: Maybe<Scalars["String"]>;
  /** The identifier of the label to favorite. */
  labelId?: Maybe<Scalars["String"]>;
  /** The identifier of the project to favorite. */
  projectId?: Maybe<Scalars["String"]>;
  /** The identifier of the project team to favorite. */
  projectTeamId?: Maybe<Scalars["String"]>;
  /** The position of the item in the favorites list. */
  sortOrder?: Maybe<Scalars["Float"]>;
};

export type FavoriteEdge = {
  __typename?: "FavoriteEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: Favorite;
};

export type FavoritePayload = {
  __typename?: "FavoritePayload";
  /** The object that was added as a favorite. */
  favorite: Favorite;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type FavoriteUpdateInput = {
  /** The position of the item in the favorites list. */
  sortOrder?: Maybe<Scalars["Float"]>;
};

export type FeedbackCreateInput = {
  /** How disappointed the user would be if he/she could no longer use Linear. */
  disappointmentRating: Scalars["Float"];
  /** The feedback the user sent. */
  feedback: Scalars["String"];
};

export type FeedbackPayload = {
  __typename?: "FeedbackPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** Object representing Figma preview information. */
export type FigmaEmbed = {
  __typename?: "FigmaEmbed";
  /** Date when the file was updated at the time of embedding. */
  lastModified: Scalars["DateTime"];
  /** Figma file name. */
  name: Scalars["String"];
  /** Node name. */
  nodeName?: Maybe<Scalars["String"]>;
  /** Figma screenshot URL. */
  url?: Maybe<Scalars["String"]>;
};

export type FigmaEmbedPayload = {
  __typename?: "FigmaEmbedPayload";
  /** Figma embed information. */
  figmaEmbed?: Maybe<FigmaEmbed>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** A recorded entry of a file uploaded by a user. */
export type FileUpload = {
  __typename?: "FileUpload";
  /** The asset URL this file is available at. */
  assetUrl?: Maybe<Scalars["String"]>;
  /** The MIME type of the uploaded file. */
  contentType?: Maybe<Scalars["String"]>;
  /** The user who uploaded the file. */
  creator?: Maybe<User>;
  /** The name of the uploaded file. */
  filename?: Maybe<Scalars["String"]>;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** Additional metadata of the file. */
  metaData: Scalars["JSON"];
  /** The organization the upload belongs to. */
  organization: Organization;
  /** Size of the uploaded file in bytes. */
  size: Scalars["Float"];
};

/** Google Sheets specific settings. */
export type GoogleSheetsSettings = {
  __typename?: "GoogleSheetsSettings";
  sheetId: Scalars["Float"];
  spreadsheetId: Scalars["String"];
  spreadsheetUrl: Scalars["String"];
  updatedIssuesAt: Scalars["DateTime"];
};

export type GoogleUserAccountAuthInput = {
  /** Code returned from Google's OAuth flow. */
  code: Scalars["String"];
  /** The URI to redirect the user to. */
  redirectUri?: Maybe<Scalars["String"]>;
  /** Signup code. */
  signupCode?: Maybe<Scalars["String"]>;
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: Maybe<Array<Scalars["String"]>>;
  /** The timezone of the user's browser. */
  timezone: Scalars["String"];
};

export type ImageUploadFromUrlPayload = {
  __typename?: "ImageUploadFromUrlPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The URL containing the image. */
  url?: Maybe<Scalars["String"]>;
};

/** An integration with an external service. */
export type Integration = Node & {
  __typename?: "Integration";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The user that added the integration. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The organization that the integration is associated with. */
  organization: Organization;
  /** The integration's type. */
  service: Scalars["String"];
  /** The team that the integration is associated with. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

export type IntegrationConnection = {
  __typename?: "IntegrationConnection";
  edges: Array<IntegrationEdge>;
  nodes: Array<Integration>;
  pageInfo: PageInfo;
};

export type IntegrationEdge = {
  __typename?: "IntegrationEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: Integration;
};

export type IntegrationPayload = {
  __typename?: "IntegrationPayload";
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** An integration resource created by an external service. */
export type IntegrationResource = Node & {
  __typename?: "IntegrationResource";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** Detailed information about the external resource. */
  data: IntegrationResourceData;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The integration that the resource is associated with. */
  integration: Integration;
  /** The issue that the resource is associated with. */
  issue: Issue;
  /** Pull request information for GitHub pull requests and GitLab merge requests. */
  pullRequest: PullRequestPayload;
  /** The external service resource ID. */
  resourceId: Scalars["String"];
  /** The integration's type. */
  resourceType: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

export type IntegrationResourceConnection = {
  __typename?: "IntegrationResourceConnection";
  edges: Array<IntegrationResourceEdge>;
  nodes: Array<IntegrationResource>;
  pageInfo: PageInfo;
};

/** Integration resource's payload */
export type IntegrationResourceData = {
  __typename?: "IntegrationResourceData";
  /** The payload for an IntegrationResource of type 'githubCommit' */
  githubCommit?: Maybe<CommitPayload>;
  /** The payload for an IntegrationResource of type 'githubPullRequest' */
  githubPullRequest?: Maybe<PullRequestPayload>;
  /** The payload for an IntegrationResource of type 'gitlabMergeRequest' */
  gitlabMergeRequest?: Maybe<PullRequestPayload>;
  /** The payload for an IntegrationResource of type 'sentryIssue' */
  sentryIssue?: Maybe<SentryIssuePayload>;
};

export type IntegrationResourceEdge = {
  __typename?: "IntegrationResourceEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: IntegrationResource;
};

/** The integration resource's settings */
export type IntegrationSettings = {
  __typename?: "IntegrationSettings";
  googleSheets?: Maybe<GoogleSheetsSettings>;
  sentry?: Maybe<SentrySettings>;
  slackPost?: Maybe<SlackPostSettings>;
  slackProjectPost?: Maybe<SlackPostSettings>;
};

export type InviteData = {
  __typename?: "InviteData";
  /** Avatar URLs for the invitees. */
  avatarURLs: Array<Scalars["String"]>;
  /** The name of the inviter. */
  inviterName: Scalars["String"];
  /** The domain of the organization the users were invited to. */
  organizationDomain: Scalars["String"];
  /** The logo of the organization the users were invited to. */
  organizationLogoUrl?: Maybe<Scalars["String"]>;
  /** The name of the organization the users were invited to. */
  organizationName: Scalars["String"];
  /** Team identifiers for the invitees. */
  teamIds: Array<Scalars["String"]>;
  /** Team names for the invitees. */
  teamNames: Array<Scalars["String"]>;
  /** The user count of the organization. */
  userCount: Scalars["Float"];
};

export type InvitePagePayload = {
  __typename?: "InvitePagePayload";
  /** Invite data. */
  inviteData?: Maybe<InviteData>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type Invoice = {
  __typename?: "Invoice";
  /** The creation date of the invoice. */
  created: Scalars["TimelessDateScalar"];
  /** The due date of the invoice. */
  dueDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** The status of the invoice. */
  status: Scalars["String"];
  /** The invoice total, in cents. */
  total: Scalars["Float"];
  /** The URL at which the invoice can be viewed or paid. */
  url?: Maybe<Scalars["String"]>;
};

/** An issue. */
export type Issue = Node & {
  __typename?: "Issue";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The user to whom the issue is assigned to. */
  assignee?: Maybe<User>;
  /** The time at which the issue was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the issue was automatically closed by the auto pruning process. */
  autoClosedAt?: Maybe<Scalars["DateTime"]>;
  /** The order of the item in its column on the board. */
  boardOrder: Scalars["Float"];
  /** Suggested branch name for the issue. */
  branchName: Scalars["String"];
  /** The time at which the issue was moved into canceled state. */
  canceledAt?: Maybe<Scalars["DateTime"]>;
  /** Children of the issue. */
  children: IssueConnection;
  /** Comments associated with the issue. */
  comments: CommentConnection;
  /** The time at which the issue was moved into completed state. */
  completedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The user who created the issue. */
  creator?: Maybe<User>;
  /** The cycle that the issue is associated with. */
  cycle?: Maybe<Cycle>;
  /** The issue's description in markdown format. */
  description?: Maybe<Scalars["String"]>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** The estimate of the complexity of the issue.. */
  estimate?: Maybe<Scalars["Float"]>;
  /** History entries associated with the issue. */
  history: IssueHistoryConnection;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** Issue's human readable identifier (e.g. ENG-123). */
  identifier: Scalars["String"];
  /** Integration resources for this issue. */
  integrationResources: IntegrationResourceConnection;
  /** Inverse relations associated with this issue. */
  inverseRelations: IssueRelationConnection;
  /** Labels associated with this issue. */
  labels: IssueLabelConnection;
  /** The issue's unique number. */
  number: Scalars["Float"];
  /** The parent of the issue. */
  parent?: Maybe<Issue>;
  /** Previous identifiers of the issue if it has been moved between teams. */
  previousIdentifiers: Array<Scalars["String"]>;
  /** The priority of the issue. */
  priority: Scalars["Float"];
  /** Label for the priority. */
  priorityLabel: Scalars["String"];
  /** The project that the issue is associated with. */
  project?: Maybe<Project>;
  /** Relations associated with this issue. */
  relations: IssueRelationConnection;
  /** The time at which the issue was moved into started state. */
  startedAt?: Maybe<Scalars["DateTime"]>;
  /** The workflow state that the issue is associated with. */
  state: WorkflowState;
  /** The order of the item in the sub-issue list. Only set if the issue has a parent. */
  subIssueSortOrder?: Maybe<Scalars["Float"]>;
  /** Users who are subscribed to the issue. */
  subscribers: UserConnection;
  /** The team that the issue is associated with. */
  team: Team;
  /** The issue's title. */
  title: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** Issue URL. */
  url: Scalars["String"];
};

/** An issue. */
export type IssueChildrenArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueHistoryArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueIntegrationResourcesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueInverseRelationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueLabelsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueRelationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueSubscribersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type IssueConnection = {
  __typename?: "IssueConnection";
  edges: Array<IssueEdge>;
  nodes: Array<Issue>;
  pageInfo: PageInfo;
};

export type IssueCreateInput = {
  /** The identifier of the user to assign the issue to. */
  assigneeId?: Maybe<Scalars["String"]>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: Maybe<Scalars["Float"]>;
  /** The cycle associated with the issue. */
  cycleId?: Maybe<Scalars["String"]>;
  /** The issue description in markdown format. */
  description?: Maybe<Scalars["String"]>;
  /** The issue description as a Prosemirror document. */
  descriptionData?: Maybe<Scalars["JSON"]>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** The estimated complexity of the issue. */
  estimate?: Maybe<Scalars["Int"]>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: Maybe<Array<Scalars["String"]>>;
  /** The identifier of the parent issue. */
  parentId?: Maybe<Scalars["String"]>;
  /** The priority of the issue. */
  priority?: Maybe<Scalars["Int"]>;
  /** The project associated with the issue. */
  projectId?: Maybe<Scalars["String"]>;
  /** The team state of the issue. */
  stateId?: Maybe<Scalars["String"]>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: Maybe<Scalars["Float"]>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: Maybe<Array<Scalars["String"]>>;
  /** The identifier or key of the team associated with the issue. */
  teamId: Scalars["String"];
  /** The title of the issue. */
  title: Scalars["String"];
};

export type IssueEdge = {
  __typename?: "IssueEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: Issue;
};

/** A record of changes to an issue. */
export type IssueHistory = Node & {
  __typename?: "IssueHistory";
  /** The user who made these changes. If null, possibly means that the change made by an integration. */
  actor?: Maybe<User>;
  /** ID's of labels that were added. */
  addedLabelIds?: Maybe<Array<Scalars["String"]>>;
  /** Whether the issue was archived or un-archived. */
  archived?: Maybe<Scalars["Boolean"]>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  autoArchived?: Maybe<Scalars["Boolean"]>;
  autoClosed?: Maybe<Scalars["Boolean"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The user from whom the issue was re-assigned from. */
  fromAssignee?: Maybe<User>;
  /** The previous cycle of the issue. */
  fromCycle?: Maybe<Cycle>;
  /** What the due date was changed from */
  fromDueDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** What the estimate was changed from. */
  fromEstimate?: Maybe<Scalars["Float"]>;
  /** The previous parent of the issue. */
  fromParent?: Maybe<Issue>;
  /** What the priority was changed from. */
  fromPriority?: Maybe<Scalars["Float"]>;
  /** The previous project of the issue. */
  fromProject?: Maybe<Project>;
  /** The previous workflow state of the issue. */
  fromState?: Maybe<WorkflowState>;
  /** The team from which the issue was moved from. */
  fromTeam?: Maybe<Team>;
  /** What the title was changed from. */
  fromTitle?: Maybe<Scalars["String"]>;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The issue that was changed. */
  issue: Issue;
  /** Changed issue relationships. */
  relationChanges?: Maybe<Array<Scalars["String"]>>;
  /** ID's of labels that were removed. */
  removedLabelIds?: Maybe<Array<Scalars["String"]>>;
  /** Information about the integration or application which created this history entry. */
  source?: Maybe<Scalars["JSONObject"]>;
  /** The user to whom the issue was assigned to. */
  toAssignee?: Maybe<User>;
  /** The new cycle of the issue. */
  toCycle?: Maybe<Cycle>;
  /** What the due date was changed to */
  toDueDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** What the estimate was changed to. */
  toEstimate?: Maybe<Scalars["Float"]>;
  /** The new parent of the issue. */
  toParent?: Maybe<Issue>;
  /** What the priority was changed to. */
  toPriority?: Maybe<Scalars["Float"]>;
  /** The new project of the issue. */
  toProject?: Maybe<Project>;
  /** The new workflow state of the issue. */
  toState?: Maybe<WorkflowState>;
  /** The team to which the issue was moved to. */
  toTeam?: Maybe<Team>;
  /** What the title was changed to. */
  toTitle?: Maybe<Scalars["String"]>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** Whether the issue's description was updated. */
  updatedDescription?: Maybe<Scalars["Boolean"]>;
};

export type IssueHistoryConnection = {
  __typename?: "IssueHistoryConnection";
  edges: Array<IssueHistoryEdge>;
  nodes: Array<IssueHistory>;
  pageInfo: PageInfo;
};

export type IssueHistoryEdge = {
  __typename?: "IssueHistoryEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: IssueHistory;
};

/** An import job for data from an external service */
export type IssueImport = Node & {
  __typename?: "IssueImport";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The id for the user that started the job. */
  creatorId: Scalars["String"];
  /** User readable error message, if one has occurred during the import. */
  error?: Maybe<Scalars["String"]>;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The service from which data will be imported. */
  service: Scalars["String"];
  /** The status for the import job. */
  status: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

export type IssueImportPayload = {
  __typename?: "IssueImportPayload";
  /** The import job that was created or updated. */
  issueImport?: Maybe<IssueImport>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** Labels that can be associated with issues. */
export type IssueLabel = Node & {
  __typename?: "IssueLabel";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The label's color as a HEX string. */
  color: Scalars["String"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The user who created the label. */
  creator?: Maybe<User>;
  /** The label's description. */
  description?: Maybe<Scalars["String"]>;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** Issues associated with the label. */
  issues: IssueConnection;
  /** The label's name. */
  name: Scalars["String"];
  /** The team to which the label belongs to. */
  team: Team;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

/** Labels that can be associated with issues. */
export type IssueLabelIssuesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type IssueLabelConnection = {
  __typename?: "IssueLabelConnection";
  edges: Array<IssueLabelEdge>;
  nodes: Array<IssueLabel>;
  pageInfo: PageInfo;
};

export type IssueLabelCreateInput = {
  /** The color of the label. */
  color?: Maybe<Scalars["String"]>;
  /** The description of the label. */
  description?: Maybe<Scalars["String"]>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The name of the label. */
  name: Scalars["String"];
  /** The team associated with the label. */
  teamId: Scalars["String"];
};

export type IssueLabelEdge = {
  __typename?: "IssueLabelEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: IssueLabel;
};

export type IssueLabelPayload = {
  __typename?: "IssueLabelPayload";
  /** The label that was created or updated. */
  issueLabel: IssueLabel;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type IssueLabelUpdateInput = {
  /** The color of the label. */
  color?: Maybe<Scalars["String"]>;
  /** The description of the label. */
  description?: Maybe<Scalars["String"]>;
  /** The name of the label. */
  name?: Maybe<Scalars["String"]>;
};

export type IssuePayload = {
  __typename?: "IssuePayload";
  /** The issue that was created or updated. */
  issue?: Maybe<Issue>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** A relation between two issues. */
export type IssueRelation = Node & {
  __typename?: "IssueRelation";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The issue whose relationship is being described. */
  issue: Issue;
  /** The related issue. */
  relatedIssue: Issue;
  /** The relationship of the issue with the related issue. */
  type: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

export type IssueRelationConnection = {
  __typename?: "IssueRelationConnection";
  edges: Array<IssueRelationEdge>;
  nodes: Array<IssueRelation>;
  pageInfo: PageInfo;
};

export type IssueRelationCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The identifier of the issue that is related to another issue. */
  issueId: Scalars["String"];
  /** The identifier of the related issue. */
  relatedIssueId: Scalars["String"];
  /** The type of relation of the issue to the related issue. */
  type: IssueRelationType;
};

export type IssueRelationEdge = {
  __typename?: "IssueRelationEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: IssueRelation;
};

export type IssueRelationPayload = {
  __typename?: "IssueRelationPayload";
  /** The issue relation that was created or updated. */
  issueRelation: IssueRelation;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** The type of the issue relation. */
export enum IssueRelationType {
  Blocks = "blocks",
  Duplicate = "duplicate",
  Related = "related",
}

export type IssueRelationUpdateInput = {
  /** The identifier of the issue that is related to another issue. */
  issueId?: Maybe<Scalars["String"]>;
  /** The identifier of the related issue. */
  relatedIssueId?: Maybe<Scalars["String"]>;
  /** The type of relation of the issue to the related issue. */
  type?: Maybe<Scalars["String"]>;
};

export type IssueUpdateInput = {
  /** The identifier of the user to assign the issue to. */
  assigneeId?: Maybe<Scalars["String"]>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: Maybe<Scalars["Float"]>;
  /** The cycle associated with the issue. */
  cycleId?: Maybe<Scalars["String"]>;
  /** The issue description in markdown format. */
  description?: Maybe<Scalars["String"]>;
  /** The issue description as a Prosemirror document. */
  descriptionData?: Maybe<Scalars["JSON"]>;
  /** [DEPRECATED] Document version for backwards compatibility. */
  documentVersion?: Maybe<Scalars["Int"]>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** The estimated complexity of the issue. */
  estimate?: Maybe<Scalars["Int"]>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: Maybe<Array<Scalars["String"]>>;
  /** The identifier of the parent issue. */
  parentId?: Maybe<Scalars["String"]>;
  /** The priority of the issue. */
  priority?: Maybe<Scalars["Int"]>;
  /** The project associated with the issue. */
  projectId?: Maybe<Scalars["String"]>;
  /** The team state of the issue. */
  stateId?: Maybe<Scalars["String"]>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: Maybe<Scalars["Float"]>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: Maybe<Array<Scalars["String"]>>;
  /** The identifier or key of the team associated with the issue. */
  teamId?: Maybe<Scalars["String"]>;
  /** The issue title. */
  title?: Maybe<Scalars["String"]>;
};

export type JoinOrganizationInput = {
  /** The identifier of the organization. */
  organizationId: Scalars["String"];
};

/** A milestone that contains projects. */
export type Milestone = Node & {
  __typename?: "Milestone";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The name of the milestone. */
  name: Scalars["String"];
  /** The organization that the milestone belongs to. */
  organization: Organization;
  /** Projects associated with the milestone. */
  projects: ProjectConnection;
  /** The sort order for the milestone. */
  sortOrder: Scalars["Float"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

/** A milestone that contains projects. */
export type MilestoneProjectsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type MilestoneConnection = {
  __typename?: "MilestoneConnection";
  edges: Array<MilestoneEdge>;
  nodes: Array<Milestone>;
  pageInfo: PageInfo;
};

export type MilestoneCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The name of the milestone. */
  name: Scalars["String"];
  /** The sort order of the milestone. */
  sortOrder?: Maybe<Scalars["Float"]>;
};

export type MilestoneEdge = {
  __typename?: "MilestoneEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: Milestone;
};

export type MilestonePayload = {
  __typename?: "MilestonePayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The milesteone that was created or updated. */
  milestone?: Maybe<Milestone>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type MilestoneUpdateInput = {
  /** The name of the milestone. */
  name?: Maybe<Scalars["String"]>;
  /** The sort order of the milestone. */
  sortOrder?: Maybe<Scalars["Float"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Creates a new API key. */
  apiKeyCreate: ApiKeyPayload;
  /** Deletes an API key. */
  apiKeyDelete: ArchivePayload;
  /** Updates the billing email address for the customer. */
  billingEmailUpdate: BillingEmailPayload;
  /** Update collaborative document with client steps. */
  collaborativeDocumentUpdate: CollaborationDocumentUpdatePayload;
  /** Creates a new comment. */
  commentCreate: CommentPayload;
  /** Deletes a comment. */
  commentDelete: ArchivePayload;
  /** Updates a comment. */
  commentUpdate: CommentPayload;
  /** Saves user message. */
  contactCreate: ContactPayload;
  /** Create CSV export report for the organization. */
  createCsvExportReport: CreateCsvExportReportPayload;
  /** Creates an organization from onboarding. */
  createOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Creates a new custom view. */
  customViewCreate: CustomViewPayload;
  /** Deletes a custom view. */
  customViewDelete: ArchivePayload;
  /** Updates a custom view. */
  customViewUpdate: CustomViewPayload;
  /** Archives a cycle. */
  cycleArchive: ArchivePayload;
  /** Creates a new cycle. */
  cycleCreate: CyclePayload;
  /** Updates a cycle. */
  cycleUpdate: CyclePayload;
  /** Create the SAML test organization in development. */
  debugCreateSAMLOrg: DebugPayload;
  /** Always fails with internal error. Used to debug logging. */
  debugFailWithInternalError: DebugPayload;
  /** Always logs an error to Sentry as warning. Used to debug logging. */
  debugFailWithWarning: DebugPayload;
  /** Authenticates a user account via email and authentication token. */
  emailTokenUserAccountAuth: AuthResolverResponse;
  /** Unsubscribes the user from one type of emails. */
  emailUnsubscribe: EmailUnsubscribePayload;
  /** Finds or creates a new user account by email and sends an email with token. */
  emailUserAccountAuthChallenge: EmailUserAccountAuthChallengeResponse;
  /** Creates a custom emoji. */
  emojiCreate: EmojiPayload;
  /** Deletes an emoji. */
  emojiDelete: ArchivePayload;
  /** [Deprecated] Creates a new event. */
  eventCreate: EventPayload;
  /** Creates a new favorite (project, cycle etc). */
  favoriteCreate: FavoritePayload;
  /** Deletes a favorite reference. */
  favoriteDelete: ArchivePayload;
  /** Updates a favorite. */
  favoriteUpdate: FavoritePayload;
  /** Saves user feedback. */
  feedbackCreate: FeedbackPayload;
  /** XHR request payload to upload an images, video and other attachments directly to Linear's cloud storage. */
  fileUpload: UploadPayload;
  /** Authenticate user account through Google OAuth. This is the 2nd step of OAuth flow. */
  googleUserAccountAuth: AuthResolverResponse;
  /** Upload an image from an URL to Linear. */
  imageUploadFromUrl: ImageUploadFromUrlPayload;
  /** Deletes an integration. */
  integrationDelete: ArchivePayload;
  /** Integrates the organization with Figma. */
  integrationFigma: IntegrationPayload;
  /** Connects the organization with the GitHub App. */
  integrationGithubConnect: IntegrationPayload;
  /** Connects the organization with a GitLab Access Token. */
  integrationGitlabConnect: IntegrationPayload;
  /** Integrates the organization with Google Sheets. */
  integrationGoogleSheets: IntegrationPayload;
  /** Archives an integration resource. */
  integrationResourceArchive: ArchivePayload;
  /** Integrates the organization with Sentry. */
  integrationSentryConnect: IntegrationPayload;
  /** Integrates the organization with Slack. */
  integrationSlack: IntegrationPayload;
  /** Imports custom emojis from your Slack workspace. */
  integrationSlackImportEmojis: IntegrationPayload;
  /** Integrates your personal notifications with Slack. */
  integrationSlackPersonal: IntegrationPayload;
  /** Slack webhook integration. */
  integrationSlackPost: IntegrationPayload;
  /** Slack integration for project notifications. */
  integrationSlackProjectPost: IntegrationPayload;
  /** Archives an issue. */
  issueArchive: ArchivePayload;
  /** Creates a new issue. */
  issueCreate: IssuePayload;
  /** Kicks off a Clubhouse import job. */
  issueImportCreateClubhouse: IssueImportPayload;
  /** Kicks off a GitHub import job. */
  issueImportCreateGithub: IssueImportPayload;
  /** Kicks off a Jira import job. */
  issueImportCreateJira: IssueImportPayload;
  /** Archives an issue label. */
  issueLabelArchive: ArchivePayload;
  /** Creates a new label. */
  issueLabelCreate: IssueLabelPayload;
  /** Updates an label. */
  issueLabelUpdate: IssueLabelPayload;
  /** Creates a new issue relation. */
  issueRelationCreate: IssueRelationPayload;
  /** Deletes an issue relation. */
  issueRelationDelete: ArchivePayload;
  /** Updates an issue relation. */
  issueRelationUpdate: IssueRelationPayload;
  /** Unarchives an issue. */
  issueUnarchive: ArchivePayload;
  /** Updates an issue. */
  issueUpdate: IssuePayload;
  /** Join an organization from onboarding. */
  joinOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Leave an organization. */
  leaveOrganization: CreateOrJoinOrganizationResponse;
  /** Creates a new milestone. */
  milestoneCreate: MilestonePayload;
  /** Deletes a milestone. */
  milestoneDelete: ArchivePayload;
  /** Updates a milestone. */
  milestoneUpdate: MilestonePayload;
  /** Archives a notification. */
  notificationArchive: ArchivePayload;
  /** Creates a notification. */
  notificationCreate: NotificationPayload;
  /** [Deprecated] Deletes a notification. */
  notificationDelete: ArchivePayload;
  /** Creates a new notification subscription for a team or a project. */
  notificationSubscriptionCreate: NotificationSubscriptionPayload;
  /** Deletes a notification subscription reference. */
  notificationSubscriptionDelete: ArchivePayload;
  /** Unarchives a notification. */
  notificationUnarchive: ArchivePayload;
  /** Updates a notification. */
  notificationUpdate: NotificationPayload;
  /** Archives an OAuth client. */
  oauthClientArchive: ArchivePayload;
  /** Creates a new OAuth client. */
  oauthClientCreate: OauthClientPayload;
  /** Updates an OAuth client. */
  oauthClientRotateSecret: RotateSecretPayload;
  /** Updates an OAuth client. */
  oauthClientUpdate: OauthClientPayload;
  /** Revokes an OAuth token. */
  oauthTokenRevoke: OauthTokenRevokePayload;
  /** Delete's an organization. Administrator privileges required. */
  organizationDelete: OrganizationDeletePayload;
  /** Get an organization's delete confirmation token. Administrator privileges required. */
  organizationDeleteChallenge: OrganizationDeletePayload;
  /** Adds a domain to be allowed for an organization. */
  organizationDomainCreate: OrganizationDomainPayload;
  /** Deletes a domain. */
  organizationDomainDelete: ArchivePayload;
  /** Verifies a domain to be added to an organization. */
  organizationDomainVerify: OrganizationDomainPayload;
  /** Creates a new organization invite. */
  organizationInviteCreate: OrganizationInvitePayload;
  /** Deletes an organization invite. */
  organizationInviteDelete: ArchivePayload;
  /** Updates the user's organization. */
  organizationUpdate: OrganizationPayload;
  /** Archives a project. */
  projectArchive: ArchivePayload;
  /** Creates a new project. */
  projectCreate: ProjectPayload;
  /** Creates a new project link. */
  projectLinkCreate: ProjectLinkPayload;
  /** Deletes a project link. */
  projectLinkDelete: ArchivePayload;
  /** Updates a project. */
  projectUpdate: ProjectPayload;
  /** Creates a push subscription. */
  pushSubscriptionCreate: PushSubscriptionPayload;
  /** Deletes a push subscription. */
  pushSubscriptionDelete: PushSubscriptionPayload;
  /** Creates a new reaction. */
  reactionCreate: ReactionPayload;
  /** Deletes a reaction. */
  reactionDelete: ArchivePayload;
  /** Manually update Google Sheets data. */
  refreshGoogleSheetsData: IntegrationPayload;
  /** Re-send an organization invite. */
  resentOrganizationInvite: ArchivePayload;
  /** Authenticates a user account via email and authentication token for SAML. */
  samlTokenUserAccountAuth: AuthResolverResponse;
  /** Archives a subscription. */
  subscriptionArchive: ArchivePayload;
  /** Creates a subscription session. Used internally to integrate with Stripe. */
  subscriptionSessionCreate: SubscriptionSessionPayload;
  /** Updates a subscription. */
  subscriptionUpdate: SubscriptionPayload;
  /** Creates a subscription update session. Used internally to integrate with Stripe. */
  subscriptionUpdateSessionCreate: SubscriptionSessionPayload;
  /** Upgrades a subscription plan. */
  subscriptionUpgrade: SubscriptionPayload;
  /** Archives a team. */
  teamArchive: ArchivePayload;
  /** Creates a new team. The user who creates the team will automatically be added as a member to the newly created team. */
  teamCreate: TeamPayload;
  /** Deletes a team. */
  teamDelete: ArchivePayload;
  /** Creates a new team membership. */
  teamMembershipCreate: TeamMembershipPayload;
  /** Deletes a team membership. */
  teamMembershipDelete: ArchivePayload;
  /** Updates a team. */
  teamUpdate: TeamPayload;
  /** Creates a new template. */
  templateCreate: TemplatePayload;
  /** Deletes a template. */
  templateDelete: ArchivePayload;
  /** Updates an existing template. */
  templateUpdate: TemplatePayload;
  /** Makes user a regular user. Can only be called by an admin. */
  userDemoteAdmin: UserAdminPayload;
  /** Updates a user's settings flag. */
  userFlagUpdate: UserSettingsFlagPayload;
  /** Makes user an admin. Can only be called by an admin. */
  userPromoteAdmin: UserAdminPayload;
  /** [Deprecated] Updates a user's settings flag. */
  userSettingsFlagIncrement: UserSettingsFlagPayload;
  /** Resets user's setting flags. */
  userSettingsFlagsReset: UserSettingsFlagsResetPayload;
  /** Updates the user's settings. */
  userSettingsUpdate: UserSettingsPayload;
  /** Subscribes user to changelog newsletter. */
  userSubscribeToNewsletter: UserSubscribeToNewsletterPayload;
  /** Suspends a user. Can only be called by an admin. */
  userSuspend: UserAdminPayload;
  /** Un-suspends a user. Can only be called by an admin. */
  userUnsuspend: UserAdminPayload;
  /** Updates a user. Only available to organization admins and the user themselves. */
  userUpdate: UserPayload;
  /** Creates a new ViewPreferences object. */
  viewPreferencesCreate: ViewPreferencesPayload;
  /** Deletes a ViewPreferences. */
  viewPreferencesDelete: ArchivePayload;
  /** Updates an existing ViewPreferences object. */
  viewPreferencesUpdate: ViewPreferencesPayload;
  /** Creates a new webhook. */
  webhookCreate: WebhookPayload;
  /** Deletes a Webhook. */
  webhookDelete: ArchivePayload;
  /** Updates an existing Webhook. */
  webhookUpdate: WebhookPayload;
  /** Archives a state. Only states with issues that have all been archived can be archived. */
  workflowStateArchive: ArchivePayload;
  /** Creates a new state, adding it to the workflow of a team. */
  workflowStateCreate: WorkflowStatePayload;
  /** Updates a state. */
  workflowStateUpdate: WorkflowStatePayload;
};

export type MutationApiKeyCreateArgs = {
  input: ApiKeyCreateInput;
};

export type MutationApiKeyDeleteArgs = {
  id: Scalars["String"];
};

export type MutationBillingEmailUpdateArgs = {
  input: BillingEmailUpdateInput;
};

export type MutationCollaborativeDocumentUpdateArgs = {
  input: CollaborationDocumentUpdateInput;
};

export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};

export type MutationCommentDeleteArgs = {
  id: Scalars["String"];
};

export type MutationCommentUpdateArgs = {
  id: Scalars["String"];
  input: CommentUpdateInput;
};

export type MutationContactCreateArgs = {
  input: ContactCreateInput;
};

export type MutationCreateOrganizationFromOnboardingArgs = {
  input: CreateOrganizationInput;
  survey?: Maybe<OnboardingCustomerSurvey>;
};

export type MutationCustomViewCreateArgs = {
  input: CustomViewCreateInput;
};

export type MutationCustomViewDeleteArgs = {
  id: Scalars["String"];
};

export type MutationCustomViewUpdateArgs = {
  id: Scalars["String"];
  input: CustomViewUpdateInput;
};

export type MutationCycleArchiveArgs = {
  id: Scalars["String"];
};

export type MutationCycleCreateArgs = {
  input: CycleCreateInput;
};

export type MutationCycleUpdateArgs = {
  id: Scalars["String"];
  input: CycleUpdateInput;
};

export type MutationEmailTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};

export type MutationEmailUnsubscribeArgs = {
  input: EmailUnsubscribeInput;
};

export type MutationEmailUserAccountAuthChallengeArgs = {
  input: EmailUserAccountAuthChallengeInput;
};

export type MutationEmojiCreateArgs = {
  input: EmojiCreateInput;
};

export type MutationEmojiDeleteArgs = {
  id: Scalars["String"];
};

export type MutationEventCreateArgs = {
  input: EventCreateInput;
};

export type MutationFavoriteCreateArgs = {
  input: FavoriteCreateInput;
};

export type MutationFavoriteDeleteArgs = {
  id: Scalars["String"];
};

export type MutationFavoriteUpdateArgs = {
  id: Scalars["String"];
  input: FavoriteUpdateInput;
};

export type MutationFeedbackCreateArgs = {
  input: FeedbackCreateInput;
};

export type MutationFileUploadArgs = {
  contentType: Scalars["String"];
  filename: Scalars["String"];
  metaData?: Maybe<Scalars["JSON"]>;
  size: Scalars["Int"];
};

export type MutationGoogleUserAccountAuthArgs = {
  input: GoogleUserAccountAuthInput;
};

export type MutationImageUploadFromUrlArgs = {
  url: Scalars["String"];
};

export type MutationIntegrationDeleteArgs = {
  id: Scalars["String"];
};

export type MutationIntegrationFigmaArgs = {
  code: Scalars["String"];
  redirectUri: Scalars["String"];
};

export type MutationIntegrationGithubConnectArgs = {
  installationId: Scalars["String"];
};

export type MutationIntegrationGitlabConnectArgs = {
  accessToken: Scalars["String"];
  gitlabUrl: Scalars["String"];
};

export type MutationIntegrationGoogleSheetsArgs = {
  code: Scalars["String"];
};

export type MutationIntegrationResourceArchiveArgs = {
  id: Scalars["String"];
};

export type MutationIntegrationSentryConnectArgs = {
  code: Scalars["String"];
  installationId: Scalars["String"];
  organizationSlug: Scalars["String"];
};

export type MutationIntegrationSlackArgs = {
  code: Scalars["String"];
  redirectUri: Scalars["String"];
  shouldUseV2Auth?: Maybe<Scalars["Boolean"]>;
};

export type MutationIntegrationSlackImportEmojisArgs = {
  code: Scalars["String"];
  redirectUri: Scalars["String"];
};

export type MutationIntegrationSlackPersonalArgs = {
  code: Scalars["String"];
  redirectUri: Scalars["String"];
};

export type MutationIntegrationSlackPostArgs = {
  code: Scalars["String"];
  redirectUri: Scalars["String"];
  shouldUseV2Auth?: Maybe<Scalars["Boolean"]>;
  teamId: Scalars["String"];
};

export type MutationIntegrationSlackProjectPostArgs = {
  code: Scalars["String"];
  projectId: Scalars["String"];
  redirectUri: Scalars["String"];
};

export type MutationIssueArchiveArgs = {
  id: Scalars["String"];
};

export type MutationIssueCreateArgs = {
  input: IssueCreateInput;
};

export type MutationIssueImportCreateClubhouseArgs = {
  clubhouseTeamName: Scalars["String"];
  clubhouseToken: Scalars["String"];
  teamId: Scalars["String"];
};

export type MutationIssueImportCreateGithubArgs = {
  githubRepoName: Scalars["String"];
  githubRepoOwner: Scalars["String"];
  githubToken: Scalars["String"];
  teamId: Scalars["String"];
};

export type MutationIssueImportCreateJiraArgs = {
  jiraEmail: Scalars["String"];
  jiraHostname: Scalars["String"];
  jiraProject: Scalars["String"];
  jiraToken: Scalars["String"];
  teamId: Scalars["String"];
};

export type MutationIssueLabelArchiveArgs = {
  id: Scalars["String"];
};

export type MutationIssueLabelCreateArgs = {
  input: IssueLabelCreateInput;
};

export type MutationIssueLabelUpdateArgs = {
  id: Scalars["String"];
  input: IssueLabelUpdateInput;
};

export type MutationIssueRelationCreateArgs = {
  input: IssueRelationCreateInput;
};

export type MutationIssueRelationDeleteArgs = {
  id: Scalars["String"];
};

export type MutationIssueRelationUpdateArgs = {
  id: Scalars["String"];
  input: IssueRelationUpdateInput;
};

export type MutationIssueUnarchiveArgs = {
  id: Scalars["String"];
};

export type MutationIssueUpdateArgs = {
  id: Scalars["String"];
  input: IssueUpdateInput;
};

export type MutationJoinOrganizationFromOnboardingArgs = {
  input: JoinOrganizationInput;
};

export type MutationLeaveOrganizationArgs = {
  organizationId: Scalars["String"];
};

export type MutationMilestoneCreateArgs = {
  input: MilestoneCreateInput;
};

export type MutationMilestoneDeleteArgs = {
  id: Scalars["String"];
};

export type MutationMilestoneUpdateArgs = {
  id: Scalars["String"];
  input: MilestoneUpdateInput;
};

export type MutationNotificationArchiveArgs = {
  id: Scalars["String"];
};

export type MutationNotificationCreateArgs = {
  id: Scalars["String"];
  input: NotificationUpdateInput;
};

export type MutationNotificationDeleteArgs = {
  id: Scalars["String"];
};

export type MutationNotificationSubscriptionCreateArgs = {
  input: NotificationSubscriptionCreateInput;
};

export type MutationNotificationSubscriptionDeleteArgs = {
  id: Scalars["String"];
};

export type MutationNotificationUnarchiveArgs = {
  id: Scalars["String"];
};

export type MutationNotificationUpdateArgs = {
  id: Scalars["String"];
  input: NotificationUpdateInput;
};

export type MutationOauthClientArchiveArgs = {
  id: Scalars["String"];
};

export type MutationOauthClientCreateArgs = {
  input: OauthClientCreateInput;
};

export type MutationOauthClientRotateSecretArgs = {
  id: Scalars["String"];
};

export type MutationOauthClientUpdateArgs = {
  id: Scalars["String"];
  input: OauthClientUpdateInput;
};

export type MutationOauthTokenRevokeArgs = {
  appId: Scalars["String"];
  scope: Array<Scalars["String"]>;
};

export type MutationOrganizationDeleteArgs = {
  input: DeleteOrganizationInput;
};

export type MutationOrganizationDomainCreateArgs = {
  input: OrganizationDomainCreateInput;
};

export type MutationOrganizationDomainDeleteArgs = {
  id: Scalars["String"];
};

export type MutationOrganizationDomainVerifyArgs = {
  input: OrganizationDomainVerificationInput;
};

export type MutationOrganizationInviteCreateArgs = {
  input: OrganizationInviteCreateInput;
};

export type MutationOrganizationInviteDeleteArgs = {
  id: Scalars["String"];
};

export type MutationOrganizationUpdateArgs = {
  input: UpdateOrganizationInput;
};

export type MutationProjectArchiveArgs = {
  id: Scalars["String"];
};

export type MutationProjectCreateArgs = {
  input: ProjectCreateInput;
};

export type MutationProjectLinkCreateArgs = {
  input: ProjectLinkCreateInput;
};

export type MutationProjectLinkDeleteArgs = {
  id: Scalars["String"];
};

export type MutationProjectUpdateArgs = {
  id: Scalars["String"];
  input: ProjectUpdateInput;
};

export type MutationPushSubscriptionCreateArgs = {
  input: PushSubscriptionCreateInput;
};

export type MutationPushSubscriptionDeleteArgs = {
  id: Scalars["String"];
};

export type MutationReactionCreateArgs = {
  input: ReactionCreateInput;
};

export type MutationReactionDeleteArgs = {
  id: Scalars["String"];
};

export type MutationRefreshGoogleSheetsDataArgs = {
  id: Scalars["String"];
};

export type MutationResentOrganizationInviteArgs = {
  id: Scalars["String"];
};

export type MutationSamlTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};

export type MutationSubscriptionArchiveArgs = {
  id: Scalars["String"];
};

export type MutationSubscriptionSessionCreateArgs = {
  plan: Scalars["String"];
};

export type MutationSubscriptionUpdateArgs = {
  id: Scalars["String"];
  input: SubscriptionUpdateInput;
};

export type MutationSubscriptionUpgradeArgs = {
  id: Scalars["String"];
  type: Scalars["String"];
};

export type MutationTeamArchiveArgs = {
  id: Scalars["String"];
};

export type MutationTeamCreateArgs = {
  copySettingsFromTeamId?: Maybe<Scalars["String"]>;
  input: TeamCreateInput;
};

export type MutationTeamDeleteArgs = {
  id: Scalars["String"];
};

export type MutationTeamMembershipCreateArgs = {
  input: TeamMembershipCreateInput;
};

export type MutationTeamMembershipDeleteArgs = {
  id: Scalars["String"];
};

export type MutationTeamUpdateArgs = {
  id: Scalars["String"];
  input: TeamUpdateInput;
};

export type MutationTemplateCreateArgs = {
  input: TemplateCreateInput;
};

export type MutationTemplateDeleteArgs = {
  id: Scalars["String"];
};

export type MutationTemplateUpdateArgs = {
  id: Scalars["String"];
  input: TemplateUpdateInput;
};

export type MutationUserDemoteAdminArgs = {
  id: Scalars["String"];
};

export type MutationUserFlagUpdateArgs = {
  flag: UserFlagType;
  operation: UserFlagUpdateOperation;
};

export type MutationUserPromoteAdminArgs = {
  id: Scalars["String"];
};

export type MutationUserSettingsFlagIncrementArgs = {
  flag: Scalars["String"];
};

export type MutationUserSettingsUpdateArgs = {
  id: Scalars["String"];
  input: UserSettingsUpdateInput;
};

export type MutationUserSuspendArgs = {
  id: Scalars["String"];
};

export type MutationUserUnsuspendArgs = {
  id: Scalars["String"];
};

export type MutationUserUpdateArgs = {
  id: Scalars["String"];
  input: UpdateUserInput;
};

export type MutationViewPreferencesCreateArgs = {
  input: ViewPreferencesCreateInput;
};

export type MutationViewPreferencesDeleteArgs = {
  id: Scalars["String"];
};

export type MutationViewPreferencesUpdateArgs = {
  id: Scalars["String"];
  input: ViewPreferencesUpdateInput;
};

export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};

export type MutationWebhookDeleteArgs = {
  id: Scalars["String"];
};

export type MutationWebhookUpdateArgs = {
  id: Scalars["String"];
  input: WebhookUpdateInput;
};

export type MutationWorkflowStateArchiveArgs = {
  id: Scalars["String"];
};

export type MutationWorkflowStateCreateArgs = {
  input: WorkflowStateCreateInput;
};

export type MutationWorkflowStateUpdateArgs = {
  id: Scalars["String"];
  input: WorkflowStateUpdateInput;
};

export type Node = {
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
};

/** A notification sent to a user. */
export type Notification = Node & {
  __typename?: "Notification";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The comment which the notification is associated with. */
  comment?: Maybe<Comment>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars["DateTime"]>;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The issue that the notification is associated with. */
  issue: Issue;
  /** Name of the reaction emoji associated with the notification. */
  reactionEmoji?: Maybe<Scalars["String"]>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars["DateTime"]>;
  /** The team which the notification is associated with. */
  team: Team;
  /** Notification type */
  type: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The recipient of the notification. */
  user: User;
};

export type NotificationConnection = {
  __typename?: "NotificationConnection";
  edges: Array<NotificationEdge>;
  nodes: Array<Notification>;
  pageInfo: PageInfo;
};

export type NotificationEdge = {
  __typename?: "NotificationEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: Notification;
};

export type NotificationPayload = {
  __typename?: "NotificationPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The notification that was created or updated. */
  notification: Notification;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** Notification subscriptions for models. */
export type NotificationSubscription = Node & {
  __typename?: "NotificationSubscription";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** Subscribed project. */
  project?: Maybe<Project>;
  /** Subscribed team. */
  team?: Maybe<Team>;
  /** The type of the subscription. */
  type: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The user associated with notification subscriptions. */
  user: User;
};

export type NotificationSubscriptionConnection = {
  __typename?: "NotificationSubscriptionConnection";
  edges: Array<NotificationSubscriptionEdge>;
  nodes: Array<NotificationSubscription>;
  pageInfo: PageInfo;
};

export type NotificationSubscriptionCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The identifier of the project to subscribe to. */
  projectId?: Maybe<Scalars["String"]>;
  /** The identifier of the team to subscribe to. */
  teamId?: Maybe<Scalars["String"]>;
};

export type NotificationSubscriptionEdge = {
  __typename?: "NotificationSubscriptionEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: NotificationSubscription;
};

export type NotificationSubscriptionPayload = {
  __typename?: "NotificationSubscriptionPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The notification subscription that was created or updated. */
  notificationSubscription: NotificationSubscription;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type NotificationUpdateInput = {
  /** The time when notification was marked as read. */
  readAt?: Maybe<Scalars["DateTime"]>;
};

/** OAuth2 client application */
export type OauthClient = Node & {
  __typename?: "OauthClient";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** OAuth application's client ID. */
  clientId: Scalars["String"];
  /** OAuth application's client secret. */
  clientSecret: Scalars["String"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** Information about the application. */
  description: Scalars["String"];
  /** Name of the developer. */
  developer: Scalars["String"];
  /** Url of the developer. */
  developerUrl: Scalars["String"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** Image of the application. */
  imageUrl: Scalars["String"];
  /** OAuth application's client name. */
  name: Scalars["String"];
  /** List of allowed redirect URIs for the application. */
  redirectUris: Array<Scalars["String"]>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

export type OauthClientCreateInput = {
  /** User facing description of the application. */
  description?: Maybe<Scalars["String"]>;
  /** Name of the developer of the application. */
  developer: Scalars["String"];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars["String"];
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** URL for the app icon. */
  imageUrl?: Maybe<Scalars["String"]>;
  /** The application's name. */
  name: Scalars["String"];
  /** List of allowed redirect URIs for the application. */
  redirectUris: Array<Scalars["String"]>;
};

export type OauthClientPayload = {
  __typename?: "OauthClientPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The OAuth client application that was created or updated. */
  oauthClient: OauthClient;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type OauthClientUpdateInput = {
  /** User facing description of the application. */
  description?: Maybe<Scalars["String"]>;
  /** Name of the developer of the application. */
  developer?: Maybe<Scalars["String"]>;
  /** URL of the developer (homepage or docs). */
  developerUrl?: Maybe<Scalars["String"]>;
  /** URL for the app icon. */
  imageUrl?: Maybe<Scalars["String"]>;
  /** The application's name. */
  name?: Maybe<Scalars["String"]>;
  /** List of allowed redirect URIs for the application. */
  redirectUris?: Maybe<Array<Scalars["String"]>>;
};

export type OauthTokenRevokePayload = {
  __typename?: "OauthTokenRevokePayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type OnboardingCustomerSurvey = {
  companyRole?: Maybe<Scalars["String"]>;
  companySize?: Maybe<Scalars["String"]>;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type Organization = Node & {
  __typename?: "Organization";
  /** Allowed authentication providers, empty array means all are allowed */
  allowedAuthServices: Array<Scalars["String"]>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** Number of issues in the organization. */
  createdIssueCount: Scalars["Int"];
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat?: Maybe<Scalars["String"]>;
  /** Whether the Git integration linkback messages should be sent to private repositories. */
  gitLinkbackMessagesEnabled: Scalars["Boolean"];
  /** Whether the Git integration linkback messages should be sent to public repositories. */
  gitPublicLinkbackMessagesEnabled: Scalars["Boolean"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** Integrations associated with the organization. */
  integrations: IntegrationConnection;
  /** The organization's logo URL. */
  logoUrl?: Maybe<Scalars["String"]>;
  /** Milestones associated with the organization. */
  milestones: MilestoneConnection;
  /** The organization's name. */
  name: Scalars["String"];
  /** Rolling 30-day total upload volume for the organization, in megabytes. */
  periodUploadVolume: Scalars["Float"];
  /** Whether the organization is using a roadmap. */
  roadmapEnabled: Scalars["Boolean"];
  /** Whether SAML authentication is enabled for organization. */
  samlEnabled: Scalars["Boolean"];
  /** The organization's subscription to a paid plan. */
  subscription?: Maybe<Subscription>;
  /** Teams associated with the organization. */
  teams: TeamConnection;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The organization's unique URL key. */
  urlKey: Scalars["String"];
  /** Number of active users in the organization. */
  userCount: Scalars["Int"];
  /** Users associated with the organization. */
  users: UserConnection;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationIntegrationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationMilestonesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationTeamsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationUsersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type OrganizationDeletePayload = {
  __typename?: "OrganizationDeletePayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** Defines the use of a domain by an organization. */
export type OrganizationDomain = Node & {
  __typename?: "OrganizationDomain";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The user who added the domain. */
  creator?: Maybe<User>;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** Domain name */
  name: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** E-mail used to verify this domain */
  verificationEmail?: Maybe<Scalars["String"]>;
  /** Is this domain verified */
  verified: Scalars["Boolean"];
};

export type OrganizationDomainCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The domain name to add. */
  name: Scalars["String"];
  /** The email address to which to send the verification code. */
  verificationEmail: Scalars["String"];
  /** Is the domain verified. */
  verified: Scalars["Boolean"];
};

export type OrganizationDomainPayload = {
  __typename?: "OrganizationDomainPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The organization domain that was created or updated. */
  organizationDomain: OrganizationDomain;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type OrganizationDomainSimplePayload = {
  __typename?: "OrganizationDomainSimplePayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type OrganizationDomainVerificationInput = {
  /** The identifier of the domain being verified. */
  organizationDomainId: Scalars["String"];
  /** The verification code sent via email. */
  verificationCode: Scalars["String"];
};

export type OrganizationExistsPayload = {
  __typename?: "OrganizationExistsPayload";
  /** Whether the organization exists. */
  exists: Scalars["Boolean"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** An invitation to the organization that has been sent via email. */
export type OrganizationInvite = Node & {
  __typename?: "OrganizationInvite";
  /** The time at which the invite was accepted. Null, if the invite hasn't been accepted */
  acceptedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The invitees email address. */
  email: Scalars["String"];
  /** The time at which the invite will be expiring. Null, if the invite shouldn't expire */
  expiresAt?: Maybe<Scalars["DateTime"]>;
  /** The invite was sent to external address. */
  external: Scalars["Boolean"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The user who has accepted the invite. Null, if the invite hasn't been accepted. */
  invitee?: Maybe<User>;
  /** The user who created the invitation. */
  inviter: User;
  /** The organization that the invite is associated with. */
  organization: Organization;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

export type OrganizationInviteConnection = {
  __typename?: "OrganizationInviteConnection";
  edges: Array<OrganizationInviteEdge>;
  nodes: Array<OrganizationInvite>;
  pageInfo: PageInfo;
};

export type OrganizationInviteCreateInput = {
  /** The email of the invitee. */
  email: Scalars["String"];
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The message to send to the invitee. */
  message?: Maybe<Scalars["String"]>;
  /** The teams that the user has been invited to. */
  teamIds?: Maybe<Array<Scalars["String"]>>;
};

export type OrganizationInviteEdge = {
  __typename?: "OrganizationInviteEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: OrganizationInvite;
};

export type OrganizationInvitePayload = {
  __typename?: "OrganizationInvitePayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The organization invite that was created or updated. */
  organizationInvite: OrganizationInvite;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type OrganizationPayload = {
  __typename?: "OrganizationPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The organization that was created or updated. */
  organization?: Maybe<Organization>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  /** Cursor representing the last result in the paginated results. */
  endCursor?: Maybe<Scalars["String"]>;
  /** Indicates if there are more results when paginating forward. */
  hasNextPage: Scalars["Boolean"];
  /** Indicates if there are more results when paginating backward. */
  hasPreviousPage: Scalars["Boolean"];
  /** Cursor representing the first result in the paginated results. */
  startCursor?: Maybe<Scalars["String"]>;
};

/** By which field should the pagination order by */
export enum PaginationOrderBy {
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
}

/** A project. */
export type Project = Node & {
  __typename?: "Project";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the project was moved into canceled state. */
  canceledAt?: Maybe<Scalars["DateTime"]>;
  /** The project's color. */
  color: Scalars["String"];
  /** The time at which the project was moved into completed state. */
  completedAt?: Maybe<Scalars["DateTime"]>;
  /** The number of completed issues in the project after each week. */
  completedIssueCountHistory: Array<Scalars["Float"]>;
  /** The number of completed estimation points after each week. */
  completedScopeHistory: Array<Scalars["Float"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The user who created the project. */
  creator: User;
  /** The project's description. */
  description: Scalars["String"];
  /** The icon of the project. */
  icon?: Maybe<Scalars["String"]>;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The total number of issues in the project after each week. */
  issueCountHistory: Array<Scalars["Float"]>;
  /** Issues associated with the project. */
  issues: IssueConnection;
  /** The project lead. */
  lead?: Maybe<User>;
  /** Links associated with the project. */
  links: ProjectLinkConnection;
  /** Users that are members of the project. */
  members: UserConnection;
  /** The milestone that this project is associated with. */
  milestone?: Maybe<Milestone>;
  /** The project's name. */
  name: Scalars["String"];
  /** The total number of estimation points after each week. */
  scopeHistory: Array<Scalars["Float"]>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars["Boolean"];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars["Boolean"];
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars["Boolean"];
  /** The project's unique URL slug. */
  slugId: Scalars["String"];
  /** The sort order for the project within its milestone. */
  sortOrder: Scalars["Float"];
  /** The time at which the project was moved into started state. */
  startedAt?: Maybe<Scalars["DateTime"]>;
  /** The type of the state. */
  state: Scalars["String"];
  /** The estimated completion date of the project. */
  targetDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** Teams associated with this project. */
  teams: TeamConnection;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

/** A project. */
export type ProjectIssuesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A project. */
export type ProjectLinksArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A project. */
export type ProjectMembersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A project. */
export type ProjectTeamsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type ProjectConnection = {
  __typename?: "ProjectConnection";
  edges: Array<ProjectEdge>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  /** The color of the project. */
  color?: Maybe<Scalars["String"]>;
  /** The description for the project. */
  description?: Maybe<Scalars["String"]>;
  /** The icon of the project. */
  icon?: Maybe<Scalars["String"]>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The identifier of the project lead. */
  leadId?: Maybe<Scalars["String"]>;
  /** The identifiers of the members of this project. */
  memberIds?: Maybe<Array<Scalars["String"]>>;
  /** The identifier of the milestone to associate the project with. */
  milestoneId?: Maybe<Scalars["String"]>;
  /** The name of the project. */
  name: Scalars["String"];
  /** The sort order for the project within its milestone. */
  sortOrder?: Maybe<Scalars["Float"]>;
  /** The state of the project. */
  state?: Maybe<Scalars["String"]>;
  /** The planned target date of the project. */
  targetDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** The identifiers of the teams this project is associated with. */
  teamIds: Array<Scalars["String"]>;
};

export type ProjectEdge = {
  __typename?: "ProjectEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: Project;
};

/** An external link for a project. */
export type ProjectLink = Node & {
  __typename?: "ProjectLink";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The user who created the link. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The link's label. */
  label: Scalars["String"];
  /** The project that the link is associated with. */
  project: Project;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The link's URL. */
  url: Scalars["String"];
};

export type ProjectLinkConnection = {
  __typename?: "ProjectLinkConnection";
  edges: Array<ProjectLinkEdge>;
  nodes: Array<ProjectLink>;
  pageInfo: PageInfo;
};

export type ProjectLinkCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The label for the link. */
  label: Scalars["String"];
  /** Related project for the link. */
  projectId: Scalars["String"];
  /** The URL of the link. */
  url: Scalars["String"];
};

export type ProjectLinkEdge = {
  __typename?: "ProjectLinkEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: ProjectLink;
};

export type ProjectLinkPayload = {
  __typename?: "ProjectLinkPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The project that was created or updated. */
  projectLink: ProjectLink;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type ProjectPayload = {
  __typename?: "ProjectPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The project that was created or updated. */
  project?: Maybe<Project>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type ProjectUpdateInput = {
  /** The color of the project. */
  color?: Maybe<Scalars["String"]>;
  /** The description for the project. */
  description?: Maybe<Scalars["String"]>;
  /** The icon of the project. */
  icon?: Maybe<Scalars["String"]>;
  /** The identifier of the project lead. */
  leadId?: Maybe<Scalars["String"]>;
  /** The identifiers of the members of this project. */
  memberIds?: Maybe<Array<Scalars["String"]>>;
  /** The identifier of the milestone to associate the project with. */
  milestoneId?: Maybe<Scalars["String"]>;
  /** The name of the project. */
  name?: Maybe<Scalars["String"]>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: Maybe<Scalars["Boolean"]>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: Maybe<Scalars["Boolean"]>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: Maybe<Scalars["Boolean"]>;
  /** The sort order for the project within its milestone. */
  sortOrder?: Maybe<Scalars["Float"]>;
  /** The state of the project. */
  state?: Maybe<Scalars["String"]>;
  /** The planned target date of the project. */
  targetDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** The identifiers of the teams this project is associated with. */
  teamIds?: Maybe<Array<Scalars["String"]>>;
};

/** Pull request data */
export type PullRequestPayload = {
  __typename?: "PullRequestPayload";
  branch: Scalars["String"];
  closedAt: Scalars["String"];
  createdAt: Scalars["String"];
  draft: Scalars["Boolean"];
  id: Scalars["String"];
  mergedAt: Scalars["String"];
  number: Scalars["Float"];
  repoLogin: Scalars["String"];
  repoName: Scalars["String"];
  status: Scalars["String"];
  title: Scalars["String"];
  updatedAt: Scalars["String"];
  url: Scalars["String"];
  userId: Scalars["String"];
  userLogin: Scalars["String"];
};

/** A user's web browser push notification subscription. */
export type PushSubscription = Node & {
  __typename?: "PushSubscription";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

export type PushSubscriptionConnection = {
  __typename?: "PushSubscriptionConnection";
  edges: Array<PushSubscriptionEdge>;
  nodes: Array<PushSubscription>;
  pageInfo: PageInfo;
};

export type PushSubscriptionCreateInput = {
  /** The data of the subscription in stringified JSON format. */
  data: Scalars["String"];
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The user identifier of the subscription. */
  userId: Scalars["String"];
};

export type PushSubscriptionEdge = {
  __typename?: "PushSubscriptionEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: PushSubscription;
};

export type PushSubscriptionPayload = {
  __typename?: "PushSubscriptionPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  /** All API keys for the user. */
  apiKeys: ApiKeyConnection;
  /** Get information for an application and whether a user has approved it for the given scopes. */
  applicationWithAuthorization: UserAuthorizedApplication;
  /** Fetches an archived model. */
  archivedModelSync: ArchiveResponse;
  /** Fetches archived models. */
  archivedModelsSync: ArchiveResponse;
  /** Get all authorized applications for a user */
  authorizedApplications: Array<AuthorizedApplication>;
  /** Fetch users belonging to this user account. */
  availableUsers: AuthResolverResponse;
  /** Billing details for the customer. */
  billingDetails: BillingDetailsPayload;
  /** Join collaborative document and get missing steps. */
  collaborativeDocumentJoin: CollaborationDocumentUpdatePayload;
  /** A specific comment. */
  comment: Comment;
  /** All comments. */
  comments: CommentConnection;
  /** One specific custom view. */
  customView: CustomView;
  /** Custom views for the user. */
  customViews: CustomViewConnection;
  /** One specific cycle. */
  cycle: Cycle;
  /** All cycles. */
  cycles: CycleConnection;
  /** A specific emoji. */
  emoji: Emoji;
  /** All custom emojis. */
  emojis: EmojiConnection;
  /** One specific favorite. */
  favorite: Favorite;
  /** The user's favorites. */
  favorites: FavoriteConnection;
  /** Fetch Figma screenshot and other information with file and node identifiers. */
  figmaEmbedInfo: FigmaEmbedPayload;
  /** One specific integration. */
  integration: Integration;
  /** One specific integration resource. (e.g. linked GitHub pull requests for an issue) */
  integrationResource: IntegrationResource;
  /** All integrations resources (e.g. linked GitHub pull requests for issues). */
  integrationResources: IntegrationResourceConnection;
  /** All integrations. */
  integrations: IntegrationConnection;
  /** Retrieves information for the public invite page. */
  inviteInfo: InvitePagePayload;
  /** One specific issue. */
  issue: Issue;
  /** One specific label. */
  issueLabel: IssueLabel;
  /** All issue labels. */
  issueLabels: IssueLabelConnection;
  /** One specific issue relation. */
  issueRelation: IssueRelation;
  /** All issue relationships. */
  issueRelations: IssueRelationConnection;
  /** [ALPHA] Search issues. This query is experimental and is subject to change without notice. */
  issueSearch: IssueConnection;
  /** All issues. */
  issues: IssueConnection;
  /** One specific milestone. */
  milestone: Milestone;
  /** All milestones. */
  milestones: MilestoneConnection;
  /** One specific notification. */
  notification: Notification;
  /** One specific notification subscription. */
  notificationSubscription: NotificationSubscription;
  /** The user's notification subscriptions. */
  notificationSubscriptions: NotificationSubscriptionConnection;
  /** All notifications. */
  notifications: NotificationConnection;
  /** The user's organization. */
  organization: Organization;
  /** Does the organization exist. */
  organizationExists: OrganizationExistsPayload;
  /** One specific organization invite. */
  organizationInvite: IssueLabel;
  /** All invites for the organization. */
  organizationInvites: OrganizationInviteConnection;
  /** One specific project. */
  project: Project;
  /** One specific project link. */
  projectLink: ProjectLink;
  /** All links for the project. */
  projectLinks: ProjectLinkConnection;
  /** All projects. */
  projects: ProjectConnection;
  /** Sends a test push message. */
  pushSubscriptionTest: PushSubscriptionPayload;
  /** A specific reaction. */
  reaction: Reaction;
  /** All comment emoji reactions. */
  reactions: ReactionConnection;
  /** Fetch SSO login URL for the email provided. */
  ssoUrlFromEmail: SsoUrlFromEmailResponse;
  /** The organization's subscription. */
  subscription?: Maybe<Subscription>;
  /** Fetch data to catch up the client to the state of the world. */
  syncBootstrap: SyncResponse;
  /** One specific team. */
  team: Team;
  /** One specific team membership. */
  teamMembership: TeamMembership;
  /** All team memberships. */
  teamMemberships: TeamMembershipConnection;
  /** All teams. */
  teams: TeamConnection;
  /** A specific template. */
  template: Template;
  /** All templates from all users. */
  templates: Array<Template>;
  /** One specific user. */
  user: User;
  /** The user's settings. */
  userSettings: UserSettings;
  /** All users for the organization. */
  users: UserConnection;
  /** The currently authenticated user. */
  viewer: User;
  /** A specific webhook. */
  webhook: Webhook;
  /** All webhooks. */
  webhooks: WebhookConnection;
  /** One specific state. */
  workflowState: WorkflowState;
  /** All issue workflow states. */
  workflowStates: WorkflowStateConnection;
};

export type QueryApiKeysArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryApplicationWithAuthorizationArgs = {
  clientId: Scalars["String"];
  redirectUri?: Maybe<Scalars["String"]>;
  scope: Array<Scalars["String"]>;
};

export type QueryArchivedModelSyncArgs = {
  identifier: Scalars["String"];
  modelClass: Scalars["String"];
};

export type QueryArchivedModelsSyncArgs = {
  before?: Maybe<Scalars["DateTime"]>;
  last?: Maybe<Scalars["Int"]>;
  modelClass: Scalars["String"];
  teamId: Scalars["String"];
};

export type QueryCollaborativeDocumentJoinArgs = {
  clientId: Scalars["String"];
  issueId: Scalars["String"];
  version: Scalars["Int"];
};

export type QueryCommentArgs = {
  id: Scalars["String"];
};

export type QueryCommentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryCustomViewArgs = {
  id: Scalars["String"];
};

export type QueryCustomViewsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryCycleArgs = {
  id: Scalars["String"];
};

export type QueryCyclesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryEmojiArgs = {
  id: Scalars["String"];
};

export type QueryEmojisArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryFavoriteArgs = {
  id: Scalars["String"];
};

export type QueryFavoritesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryFigmaEmbedInfoArgs = {
  fileId: Scalars["String"];
  nodeId?: Maybe<Scalars["String"]>;
};

export type QueryIntegrationArgs = {
  id: Scalars["String"];
};

export type QueryIntegrationResourceArgs = {
  id: Scalars["String"];
};

export type QueryIntegrationResourcesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryIntegrationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryInviteInfoArgs = {
  teamHash?: Maybe<Scalars["String"]>;
  userHash: Scalars["String"];
};

export type QueryIssueArgs = {
  id: Scalars["String"];
};

export type QueryIssueLabelArgs = {
  id: Scalars["String"];
};

export type QueryIssueLabelsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryIssueRelationArgs = {
  id: Scalars["String"];
};

export type QueryIssueRelationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryIssueSearchArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
  query: Scalars["String"];
};

export type QueryIssuesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryMilestoneArgs = {
  id: Scalars["String"];
};

export type QueryMilestonesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryNotificationArgs = {
  id: Scalars["String"];
};

export type QueryNotificationSubscriptionArgs = {
  id: Scalars["String"];
};

export type QueryNotificationSubscriptionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryNotificationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryOrganizationExistsArgs = {
  urlKey: Scalars["String"];
};

export type QueryOrganizationInviteArgs = {
  id: Scalars["String"];
};

export type QueryOrganizationInvitesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryProjectArgs = {
  id: Scalars["String"];
};

export type QueryProjectLinkArgs = {
  id: Scalars["String"];
};

export type QueryProjectLinksArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryProjectsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryReactionArgs = {
  id: Scalars["String"];
};

export type QueryReactionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QuerySsoUrlFromEmailArgs = {
  email: Scalars["String"];
  isDesktop?: Maybe<Scalars["Boolean"]>;
};

export type QuerySyncBootstrapArgs = {
  databaseVersion?: Maybe<Scalars["Int"]>;
  sinceSyncId?: Maybe<Scalars["Int"]>;
};

export type QueryTeamArgs = {
  id: Scalars["String"];
};

export type QueryTeamMembershipArgs = {
  id: Scalars["String"];
};

export type QueryTeamMembershipsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryTeamsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryTemplateArgs = {
  id: Scalars["String"];
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

export type QueryUsersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryWebhookArgs = {
  id: Scalars["String"];
};

export type QueryWebhooksArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryWorkflowStateArgs = {
  id: Scalars["String"];
};

export type QueryWorkflowStatesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A reaction associated with a comment. */
export type Reaction = Node & {
  __typename?: "Reaction";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The comment that the reaction is associated with. */
  comment: Comment;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** Name of the reaction's emoji. */
  emoji: Scalars["String"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The user who reacted. */
  user: User;
};

export type ReactionConnection = {
  __typename?: "ReactionConnection";
  edges: Array<ReactionEdge>;
  nodes: Array<Reaction>;
  pageInfo: PageInfo;
};

export type ReactionCreateInput = {
  /** The comment to associate the reaction with. */
  commentId: Scalars["String"];
  /** The emoji the user reacted with. */
  emoji?: Maybe<Scalars["String"]>;
  /** The identifier. If none is provided, the backend will generate one */
  id?: Maybe<Scalars["String"]>;
};

export type ReactionEdge = {
  __typename?: "ReactionEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: Reaction;
};

export type ReactionPayload = {
  __typename?: "ReactionPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  reaction: Reaction;
  success: Scalars["Boolean"];
};

export type RotateSecretPayload = {
  __typename?: "RotateSecretPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** The integration resource's settings */
export type SamlConfiguration = {
  __typename?: "SamlConfiguration";
  /** List of allowed email domains for SAML authentication. */
  allowedDomains?: Maybe<Array<Scalars["String"]>>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: Maybe<Scalars["String"]>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: Maybe<Scalars["String"]>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: Maybe<Scalars["String"]>;
  /** X.509 Signing Certificate in string form. */
  ssoSigningCert?: Maybe<Scalars["String"]>;
};

export type SamlConfigurationInput = {
  /** List of allowed email domains for SAML authentication. */
  allowedDomains?: Maybe<Array<Scalars["String"]>>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: Maybe<Scalars["String"]>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: Maybe<Scalars["String"]>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: Maybe<Scalars["String"]>;
  /** X.509 Signing Certificate in string form. */
  ssoSigningCert?: Maybe<Scalars["String"]>;
};

/** Sentry issue data */
export type SentryIssuePayload = {
  __typename?: "SentryIssuePayload";
  /** The Sentry identifier of the actor who created the issue. */
  actorId: Scalars["Float"];
  /** The name of the Sentry actor who created this issue. */
  actorName: Scalars["String"];
  /** The type of the actor who created the issue. */
  actorType: Scalars["String"];
  /** The date this issue was first seen. */
  firstSeen: Scalars["String"];
  /** The name of the first release version this issue appeared on, if available. */
  firstVersion?: Maybe<Scalars["String"]>;
  /** The Sentry identifier for the issue. */
  issueId: Scalars["String"];
  /** The title of the issue. */
  issueTitle: Scalars["String"];
  /** The Sentry identifier of the project this issue belongs to. */
  projectId: Scalars["Float"];
  /** The slug of the project this issue belongs to. */
  projectSlug: Scalars["String"];
  /** The shortId of the issue. */
  shortId: Scalars["String"];
  /** The description of the issue. */
  webUrl: Scalars["String"];
};

/** Sentry specific settings. */
export type SentrySettings = {
  __typename?: "SentrySettings";
  /** The slug of the Sentry organization being connected. */
  organizationSlug: Scalars["String"];
};

/** Slack notification specific settings. */
export type SlackPostSettings = {
  __typename?: "SlackPostSettings";
  channel: Scalars["String"];
  channelId: Scalars["String"];
  configurationUrl: Scalars["String"];
};

export type SsoUrlFromEmailResponse = {
  __typename?: "SsoUrlFromEmailResponse";
  /** SAML SSO sign-in URL. */
  samlSsoUrl: Scalars["String"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type StepsResponse = {
  __typename?: "StepsResponse";
  /** List of client IDs for the document steps. */
  clientIds: Array<Scalars["String"]>;
  /** New document steps from the client. */
  steps?: Maybe<Array<Scalars["JSON"]>>;
  /** Client's document version. */
  version: Scalars["Int"];
};

/** The subscription of an organization. */
export type Subscription = Node & {
  __typename?: "Subscription";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The date the subscription was canceled, if any. */
  canceledAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The creator of the subscription. */
  creator?: Maybe<User>;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The organization that the subscription is associated with. */
  organization: Organization;
  /** The subscription type of a pending change. Null if no change pending. */
  pendingChangeType?: Maybe<Scalars["String"]>;
  /** The number of seats in the subscription. */
  seats: Scalars["Float"];
  /** The subscription type. */
  type: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

export type SubscriptionPayload = {
  __typename?: "SubscriptionPayload";
  /** The date the subscription was set to cancel at the end of the billing period, if any. */
  canceledAt?: Maybe<Scalars["DateTime"]>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The subscription entity being mutated. */
  subscription: Subscription;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type SubscriptionSessionPayload = {
  __typename?: "SubscriptionSessionPayload";
  /** The subscription session that was created or updated. */
  session?: Maybe<Scalars["String"]>;
};

export type SubscriptionUpdateInput = {
  /** The date the subscription was set to cancel, if any. */
  canceledAt?: Maybe<Scalars["DateTime"]>;
  /** The subscription type of a pending change. Null if no change pending. */
  pendingChangeType?: Maybe<Scalars["String"]>;
};

/**
 * Contains either the full serialized state of the application or delta packets that the requester can
 *   apply to the local data set in order to be up-to-date.
 */
export type SyncResponse = {
  __typename?: "SyncResponse";
  /** A JSON serialized collection of model objects loaded from the archive */
  archive?: Maybe<Scalars["String"]>;
  /** The version of the remote database. Incremented by 1 for each migration run on the database. */
  databaseVersion: Scalars["Float"];
  /**
   * JSON serialized delta changes that the client can apply to its local state
   *     in order to catch up with the state of the world.
   */
  delta?: Maybe<Scalars["String"]>;
  /** The last sync id covered by the response. */
  lastSyncId: Scalars["Float"];
  /**
   * The full state of the organization as a serialized JSON object.
   *     Mutually exclusive with the delta property
   */
  state?: Maybe<Scalars["String"]>;
};

export type SynchronizedPayload = {
  __typename?: "SynchronizedPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
};

/** An organizational unit that contains issues. */
export type Team = Node & {
  __typename?: "Team";
  /** Team's currently active cycle. */
  activeCycle?: Maybe<Cycle>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** Period after which automatically closed and completed issues are automatically archived in months. Null/undefined means disabled. */
  autoArchivePeriod: Scalars["Float"];
  /** Period after which issues are automatically closed in months. Null/undefined means disabled. */
  autoClosePeriod: Scalars["Float"];
  /** The canceled workflow state which auto closed issues will be set to. Defaults to the first canceled state. */
  autoCloseStateId?: Maybe<Scalars["String"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** Calender feed (iCal) for cycles. */
  cycleCalenderUrl: Scalars["String"];
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime: Scalars["Float"];
  /** The duration of a cycle in weeks. */
  cycleDuration: Scalars["Float"];
  /** Auto assign completed issues to current cycle. */
  cycleIssueAutoAssignCompleted: Scalars["Boolean"];
  /** Auto assign started issues to current cycle. */
  cycleIssueAutoAssignStarted: Scalars["Boolean"];
  /** Only allow issues issues with cycles in Active Issues. */
  cycleLockToActive: Scalars["Boolean"];
  /** The day of the week that a new cycle starts. */
  cycleStartDay: Scalars["Float"];
  /** Cycles associated with the team. */
  cycles: CycleConnection;
  /** Whether the team uses cycles. */
  cyclesEnabled: Scalars["Boolean"];
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate: Scalars["Float"];
  /** The default template to use for new issues created by members of the team. */
  defaultTemplateForMembersId?: Maybe<Scalars["String"]>;
  /** The default template to use for new issues created by non-members of the team. */
  defaultTemplateForNonMembersId?: Maybe<Scalars["String"]>;
  /** The team's description. */
  description?: Maybe<Scalars["String"]>;
  /** The workflow state into which issues are moved when a PR has been opened as draft. */
  draftWorkflowState?: Maybe<WorkflowState>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory: Scalars["Boolean"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** Unique hash for the team to be used in invite URLs. */
  inviteHash: Scalars["String"];
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero: Scalars["Boolean"];
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended: Scalars["Boolean"];
  /** The issue estimation type to use. */
  issueEstimationType: Scalars["String"];
  /** Issues associated with the team. */
  issues: IssueConnection;
  /** The team's unique key. The key is used in URLs. */
  key: Scalars["String"];
  /** Labels associated with the team. */
  labels: IssueLabelConnection;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. Defaults to the first canceled state. */
  markedAsDuplicateWorkflowState?: Maybe<WorkflowState>;
  /** Users who are members of this team. */
  members: UserConnection;
  /** Memberships associated with the team. For easier access of the same data, use `members` query. */
  memberships: TeamMembershipConnection;
  /** The workflow state into which issues are moved when a PR has been merged. */
  mergeWorkflowState?: Maybe<WorkflowState>;
  /** The team's name. */
  name: Scalars["String"];
  /** The organization that the team is associated with. */
  organization: Organization;
  /** Projects associated with the team. */
  projects: ProjectConnection;
  /** The workflow state into which issues are moved when a review has been requested for the PR. */
  reviewWorkflowState?: Maybe<WorkflowState>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars["Boolean"];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars["Boolean"];
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars["Boolean"];
  /** The workflow state into which issues are moved when a PR has been opened. */
  startWorkflowState?: Maybe<WorkflowState>;
  /** The states that define the workflow associated with the team. */
  states: WorkflowStateConnection;
  /** Templates associated with the team. */
  templates: TemplateConnection;
  /** The timezone of the team. Defaults to "America/Los_Angeles" */
  timezone: Scalars["String"];
  /** How many upcoming cycles to create. */
  upcomingCycleCount: Scalars["Float"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** Webhooks associated with the team. */
  webhooks: WebhookConnection;
};

/** An organizational unit that contains issues. */
export type TeamCyclesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamIssuesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamLabelsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamMembersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamMembershipsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamProjectsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamStatesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamTemplatesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamWebhooksArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type TeamConnection = {
  __typename?: "TeamConnection";
  edges: Array<TeamEdge>;
  nodes: Array<Team>;
  pageInfo: PageInfo;
};

export type TeamCreateInput = {
  /** Period after which closed and completed issues are automatically archived, in months. 0 means disabled. */
  autoArchivePeriod?: Maybe<Scalars["Float"]>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: Maybe<Scalars["Float"]>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: Maybe<Scalars["String"]>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: Maybe<Scalars["Int"]>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: Maybe<Scalars["Int"]>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: Maybe<Scalars["Boolean"]>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: Maybe<Scalars["Boolean"]>;
  /** Only allow issues issues with cycles in Active Issues. */
  cycleLockToActive?: Maybe<Scalars["Boolean"]>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: Maybe<Scalars["Float"]>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: Maybe<Scalars["Boolean"]>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: Maybe<Scalars["Float"]>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: Maybe<Scalars["String"]>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: Maybe<Scalars["String"]>;
  /** The description of the team. */
  description?: Maybe<Scalars["String"]>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: Maybe<Scalars["Boolean"]>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: Maybe<Scalars["Boolean"]>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: Maybe<Scalars["Boolean"]>;
  /** The issue estimation type to use. */
  issueEstimationType?: Maybe<Scalars["String"]>;
  /** The key of the team. If not given, rc key will be generated based on the name of the team. */
  key?: Maybe<Scalars["String"]>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: Maybe<Scalars["String"]>;
  /** The name of the team. */
  name: Scalars["String"];
  /** The organization associated with the team. */
  organizationId?: Maybe<Scalars["String"]>;
  /** The timezone of the team. */
  timezone?: Maybe<Scalars["String"]>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: Maybe<Scalars["Float"]>;
};

export type TeamEdge = {
  __typename?: "TeamEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: Team;
};

/** Defines the membership of a user to a team. */
export type TeamMembership = Node & {
  __typename?: "TeamMembership";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The team that the membership is associated with. */
  team: Team;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The user that the membership is associated with. */
  user: User;
};

export type TeamMembershipConnection = {
  __typename?: "TeamMembershipConnection";
  edges: Array<TeamMembershipEdge>;
  nodes: Array<TeamMembership>;
  pageInfo: PageInfo;
};

export type TeamMembershipCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The identifier of the team associated with the membership. */
  teamId: Scalars["String"];
  /** The identifier of the user associated with the membership. */
  userId: Scalars["String"];
};

export type TeamMembershipEdge = {
  __typename?: "TeamMembershipEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: TeamMembership;
};

export type TeamMembershipPayload = {
  __typename?: "TeamMembershipPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The team membership that was created or updated. */
  teamMembership?: Maybe<TeamMembership>;
};

export type TeamPayload = {
  __typename?: "TeamPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The team that was created or updated. */
  team?: Maybe<Team>;
};

export type TeamUpdateInput = {
  /** Period after which closed and completed issues are automatically archived, in months. */
  autoArchivePeriod?: Maybe<Scalars["Float"]>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: Maybe<Scalars["Float"]>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: Maybe<Scalars["String"]>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: Maybe<Scalars["Int"]>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: Maybe<Scalars["Int"]>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: Maybe<Scalars["Boolean"]>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: Maybe<Scalars["Boolean"]>;
  /** Only allow issues with cycles in Active Issues. */
  cycleLockToActive?: Maybe<Scalars["Boolean"]>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: Maybe<Scalars["Float"]>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: Maybe<Scalars["Boolean"]>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: Maybe<Scalars["Float"]>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: Maybe<Scalars["String"]>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: Maybe<Scalars["String"]>;
  /** The description of the team. */
  description?: Maybe<Scalars["String"]>;
  /** The workflow state into which issues are moved when a draft PR has been opened. */
  draftWorkflowStateId?: Maybe<Scalars["String"]>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: Maybe<Scalars["Boolean"]>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: Maybe<Scalars["Boolean"]>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: Maybe<Scalars["Boolean"]>;
  /** The issue estimation type to use. */
  issueEstimationType?: Maybe<Scalars["String"]>;
  /** The key of the team. */
  key?: Maybe<Scalars["String"]>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: Maybe<Scalars["String"]>;
  /** The workflow state into which issues are moved when a PR has been merged. */
  mergeWorkflowStateId?: Maybe<Scalars["String"]>;
  /** The name of the team. */
  name?: Maybe<Scalars["String"]>;
  /** The workflow state into which issues are moved when a review has been requested for the PR. */
  reviewWorkflowStateId?: Maybe<Scalars["String"]>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: Maybe<Scalars["Boolean"]>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: Maybe<Scalars["Boolean"]>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: Maybe<Scalars["Boolean"]>;
  /** The workflow state into which issues are moved when a PR has been opened. */
  startWorkflowStateId?: Maybe<Scalars["String"]>;
  /** The timezone of the team. */
  timezone?: Maybe<Scalars["String"]>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: Maybe<Scalars["Float"]>;
};

/** A template object used for creating new issues faster. */
export type Template = Node & {
  __typename?: "Template";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The user who created the template. */
  creator?: Maybe<User>;
  /** Template description. */
  description?: Maybe<Scalars["String"]>;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The name of the template. */
  name: Scalars["String"];
  /** The team that the template is associated with. */
  team: Team;
  /** Template data. */
  templateData: Scalars["JSON"];
  /** The entity type this template is for. */
  type: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

export type TemplateConnection = {
  __typename?: "TemplateConnection";
  edges: Array<TemplateEdge>;
  nodes: Array<Template>;
  pageInfo: PageInfo;
};

export type TemplateCreateInput = {
  /** The template description. */
  description?: Maybe<Scalars["String"]>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The template name. */
  name: Scalars["String"];
  /** The identifier or key of the team associated with the template. */
  teamId: Scalars["String"];
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData: Scalars["JSON"];
  /** The template type, e.g. 'issue'. */
  type: Scalars["String"];
};

export type TemplateEdge = {
  __typename?: "TemplateEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: Template;
};

export type TemplatePayload = {
  __typename?: "TemplatePayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The template that was created or updated. */
  template: Template;
};

export type TemplateUpdateInput = {
  /** The template description. */
  description?: Maybe<Scalars["String"]>;
  /** The template name. */
  name?: Maybe<Scalars["String"]>;
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData?: Maybe<Scalars["JSON"]>;
};

export type TokenUserAccountAuthInput = {
  /** The email which to login via the magic login code. */
  email: Scalars["String"];
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: Maybe<Array<Scalars["String"]>>;
  /** The timezone of the user's browser. */
  timezone: Scalars["String"];
  /** The magic login code. */
  token: Scalars["String"];
};

export type UpdateOrganizationInput = {
  /** List of services that are allowed to be used for login. */
  allowedAuthServices?: Maybe<Array<Scalars["String"]>>;
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat?: Maybe<Scalars["String"]>;
  /** Whether the Git integration linkback messages should be sent for private repositories. */
  gitLinkbackMessagesEnabled?: Maybe<Scalars["Boolean"]>;
  /** Whether the Git integration linkback messages should be sent for public repositories. */
  gitPublicLinkbackMessagesEnabled?: Maybe<Scalars["Boolean"]>;
  /** Linear Preview feature flags */
  linearPreviewFlags?: Maybe<Scalars["JSONObject"]>;
  /** The logo of the organization. */
  logoUrl?: Maybe<Scalars["String"]>;
  /** The name of the organization. */
  name?: Maybe<Scalars["String"]>;
  /** Whether the organization is using project milestones. */
  roadmapEnabled?: Maybe<Scalars["Boolean"]>;
  /** The URL key of the organization. */
  urlKey?: Maybe<Scalars["String"]>;
};

export type UpdateUserInput = {
  /** Whether the user account is active. */
  active?: Maybe<Scalars["Boolean"]>;
  /** Whether the user account has admin privileges. */
  admin?: Maybe<Scalars["Boolean"]>;
  /** The avatar image URL of the user. */
  avatarUrl?: Maybe<Scalars["String"]>;
  /** Reason for deactivation. */
  disableReason?: Maybe<Scalars["String"]>;
  /** The display name of the user. */
  displayName?: Maybe<Scalars["String"]>;
  /** The name of the user. */
  name?: Maybe<Scalars["String"]>;
};

/** Object representing Google Cloud upload policy, plus additional data. */
export type UploadFile = {
  __typename?: "UploadFile";
  /** The asset URL for the uploaded file. (assigned automatically) */
  assetUrl: Scalars["String"];
  /** The content type. */
  contentType: Scalars["String"];
  /** The filename. */
  filename: Scalars["String"];
  headers: Array<UploadFileHeader>;
  metaData?: Maybe<Scalars["JSON"]>;
  /** The size of the uploaded file. */
  size: Scalars["Int"];
  /** The signed URL the for the uploaded file. (assigned automatically) */
  uploadUrl: Scalars["String"];
};

export type UploadFileHeader = {
  __typename?: "UploadFileHeader";
  /** Upload file header key. */
  key: Scalars["String"];
  /** Upload file header value. */
  value: Scalars["String"];
};

export type UploadPayload = {
  __typename?: "UploadPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** Object describing the file to be uploaded. */
  uploadFile?: Maybe<UploadFile>;
};

/** A user that has access to the the resources of an organization. */
export type User = Node & {
  __typename?: "User";
  /** Whether the user account is active or disabled. */
  active: Scalars["Boolean"];
  /** Whether the user is an organization administrator. */
  admin: Scalars["Boolean"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** Issues assigned to the user. */
  assignedIssues: IssueConnection;
  /** An URL to the user's avatar image. */
  avatarUrl?: Maybe<Scalars["String"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** Number of issues created. */
  createdIssueCount: Scalars["Int"];
  /** Issues created by the user. */
  createdIssues: IssueConnection;
  /** Reason why is the account disabled. */
  disableReason?: Maybe<Scalars["String"]>;
  /** The user's display (nick) name. Unique within each organization. */
  displayName: Scalars["String"];
  /** The user's email address. */
  email: Scalars["String"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** Unique hash for the user to be used in invite URLs. */
  inviteHash: Scalars["String"];
  /** The last time the user was seen online. If null, the user is currently online. */
  lastSeen?: Maybe<Scalars["DateTime"]>;
  /** The user's full name. */
  name: Scalars["String"];
  /** Organization in which the user belongs to. */
  organization: Organization;
  /** Memberships associated with the user. For easier access of the same data, use `teams` query. */
  teamMemberships: TeamMembershipConnection;
  /** Teams the user is part of. */
  teams: TeamConnection;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

/** A user that has access to the the resources of an organization. */
export type UserAssignedIssuesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A user that has access to the the resources of an organization. */
export type UserCreatedIssuesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A user that has access to the the resources of an organization. */
export type UserTeamMembershipsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A user that has access to the the resources of an organization. */
export type UserTeamsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A user account. */
export type UserAccount = {
  __typename?: "UserAccount";
  /** The time at which the model was archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the model was created. */
  createdAt: Scalars["DateTime"];
  /** The user's email address. */
  email: Scalars["String"];
  /** The models identifier. */
  id: Scalars["ID"];
  /** The user's name. */
  name?: Maybe<Scalars["String"]>;
  /** The authentication service used to create the account. */
  service: Scalars["String"];
  /** The time at which the model was updated. */
  updatedAt: Scalars["DateTime"];
  /** Users belonging to the account. */
  users: Array<User>;
};

export type UserAdminPayload = {
  __typename?: "UserAdminPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** Public information of the OAuth application, plus whether the application has been authorized for the given scopes. */
export type UserAuthorizedApplication = {
  __typename?: "UserAuthorizedApplication";
  /** OAuth application's client ID. */
  clientId: Scalars["String"];
  /** Information about the application. */
  description?: Maybe<Scalars["String"]>;
  /** Name of the developer. */
  developer: Scalars["String"];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars["String"];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars["String"]>;
  /** Whether the user has authorized the application for the given scopes. */
  isAuthorized: Scalars["Boolean"];
  /** Application name. */
  name: Scalars["String"];
};

export type UserConnection = {
  __typename?: "UserConnection";
  edges: Array<UserEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: "UserEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: User;
};

/** The types of flags that the user can have. */
export enum UserFlagType {
  AnalyticsWelcomeDismissed = "analyticsWelcomeDismissed",
  CanPlaySnake = "canPlaySnake",
  CompletedOnboarding = "completedOnboarding",
  CycleWelcomeDismissed = "cycleWelcomeDismissed",
  DesktopDownloadToastDismissed = "desktopDownloadToastDismissed",
  DesktopInstalled = "desktopInstalled",
  EmptyActiveIssuesDismissed = "emptyActiveIssuesDismissed",
  EmptyBacklogDismissed = "emptyBacklogDismissed",
  EmptyCustomViewsDismissed = "emptyCustomViewsDismissed",
  EmptyMyIssuesDismissed = "emptyMyIssuesDismissed",
  FigmaPromptDismissed = "figmaPromptDismissed",
  ListSelectionTip = "listSelectionTip",
  MigrateThemePreference = "migrateThemePreference",
  ProjectWelcomeDismissed = "projectWelcomeDismissed",
}

/** Operations that can be applied to UserFlagType */
export enum UserFlagUpdateOperation {
  Clear = "clear",
  Decr = "decr",
  Incr = "incr",
  Lock = "lock",
}

export type UserPayload = {
  __typename?: "UserPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The user that was created or updated. */
  user?: Maybe<User>;
};

/** The settings of a user as a JSON object. */
export type UserSettings = Node & {
  __typename?: "UserSettings";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The notification channel settings the user has selected. */
  notificationPreferences: Scalars["JSONObject"];
  /** The email types the user has unsubscribed from. */
  unsubscribedFrom: Array<Scalars["String"]>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The user associated with these settings. */
  user: User;
};

export type UserSettingsFlagPayload = {
  __typename?: "UserSettingsFlagPayload";
  /** The flag key which was updated. */
  flag: Scalars["String"];
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The flag value after update. */
  value: Scalars["Int"];
};

export type UserSettingsFlagsResetPayload = {
  __typename?: "UserSettingsFlagsResetPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type UserSettingsPayload = {
  __typename?: "UserSettingsPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The user's settings. */
  userSettings: UserSettings;
};

export type UserSettingsUpdateInput = {
  /** The user's notification preferences. */
  notificationPreferences?: Maybe<Scalars["JSONObject"]>;
  /** The user's settings. */
  settings?: Maybe<Scalars["String"]>;
  /** The types of emails the user has unsubscribed from. */
  unsubscribedFrom?: Maybe<Array<Scalars["String"]>>;
};

export type UserSubscribeToNewsletterPayload = {
  __typename?: "UserSubscribeToNewsletterPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** View preferences. */
export type ViewPreferences = Node & {
  __typename?: "ViewPreferences";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The view preference type. */
  type: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The view type. */
  viewType: Scalars["String"];
};

export type ViewPreferencesCreateInput = {
  /** The custom view these view preferences are associated with. */
  customViewId?: Maybe<Scalars["String"]>;
  /** The cycle these view preferences are associated with. */
  cycleId?: Maybe<Scalars["String"]>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The label these view preferences are associated with. */
  labelId?: Maybe<Scalars["String"]>;
  /** View preferences object. */
  preferences: Scalars["JSONObject"];
  /** The project these view preferences are associated with. */
  projectId?: Maybe<Scalars["String"]>;
  /** The team these view preferences are associated with. */
  teamId?: Maybe<Scalars["String"]>;
  /** The type of view preferences (either user or organization level preferences). */
  type: ViewPreferencesType;
  /** The view type of the view preferences are associated with. */
  viewType: ViewType;
};

export type ViewPreferencesPayload = {
  __typename?: "ViewPreferencesPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The view preferences entity being mutated. */
  viewPreferences: ViewPreferences;
};

/** The type of view preferences (either user or organization level preferences). */
export enum ViewPreferencesType {
  Organization = "organization",
  User = "user",
}

export type ViewPreferencesUpdateInput = {
  /** View preferences. */
  preferences: Scalars["JSONObject"];
};

/** The client view this custom view is targeting. */
export enum ViewType {
  ActiveIssues = "activeIssues",
  AllIssues = "allIssues",
  Backlog = "backlog",
  Board = "board",
  CompletedCycle = "completedCycle",
  CustomView = "customView",
  Cycle = "cycle",
  Inbox = "inbox",
  Label = "label",
  MyIssues = "myIssues",
  Project = "project",
  Projects = "projects",
  Roadmap = "roadmap",
}

/** A webhook used to send HTTP notifications over data updates */
export type Webhook = Node & {
  __typename?: "Webhook";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** The user who created the webhook. */
  creator?: Maybe<User>;
  /** Whether the Webhook is enabled. */
  enabled: Scalars["Boolean"];
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** Webhook label */
  label: Scalars["String"];
  /** The resource types this webhook is subscribed to. */
  resourceTypes: Array<Scalars["String"]>;
  /** Secret token for verifying the origin on the recipient side. */
  secret?: Maybe<Scalars["String"]>;
  /** The team that the webhook is associated with. */
  team: Team;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** Webhook URL */
  url: Scalars["String"];
};

export type WebhookConnection = {
  __typename?: "WebhookConnection";
  edges: Array<WebhookEdge>;
  nodes: Array<Webhook>;
  pageInfo: PageInfo;
};

export type WebhookCreateInput = {
  /** Whether this webhook is enabled. */
  enabled?: Maybe<Scalars["Boolean"]>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** Label for the webhook. */
  label?: Maybe<Scalars["String"]>;
  /** List of resources the webhook should subscribe to. */
  resourceTypes: Array<Scalars["String"]>;
  /** An optional secret token used to sign the webhook payload. */
  secret?: Maybe<Scalars["String"]>;
  /** The identifier or key of the team associated with the Webhook. */
  teamId: Scalars["String"];
  /** The URL that will be called on data changes. */
  url: Scalars["String"];
};

export type WebhookEdge = {
  __typename?: "WebhookEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: Webhook;
};

export type WebhookPayload = {
  __typename?: "WebhookPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The webhook entity being mutated. */
  webhook: Webhook;
};

export type WebhookUpdateInput = {
  /** Whether this webhook is enabled. */
  enabled?: Maybe<Scalars["Boolean"]>;
  /** Label for the webhook. */
  label?: Maybe<Scalars["String"]>;
  /** List of resources the webhook should subscribe to. */
  resourceTypes?: Maybe<Array<Scalars["String"]>>;
  /** An optional secret token used to sign the Webhook payload. */
  secret?: Maybe<Scalars["String"]>;
  /** The URL that will be called on data changes. */
  url?: Maybe<Scalars["String"]>;
};

/** A state in a team workflow. */
export type WorkflowState = Node & {
  __typename?: "WorkflowState";
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The state's UI color as a HEX string. */
  color: Scalars["String"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /** Description of the state. */
  description?: Maybe<Scalars["String"]>;
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** Issues belonging in this state. */
  issues: IssueConnection;
  /** The state's name. */
  name: Scalars["String"];
  /** The position of the state in the team flow. */
  position: Scalars["Float"];
  /** The team to which this state belongs to. */
  team: Team;
  /** The type of the state. */
  type: Scalars["String"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
};

/** A state in a team workflow. */
export type WorkflowStateIssuesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type WorkflowStateConnection = {
  __typename?: "WorkflowStateConnection";
  edges: Array<WorkflowStateEdge>;
  nodes: Array<WorkflowState>;
  pageInfo: PageInfo;
};

export type WorkflowStateCreateInput = {
  /** The color of the state. */
  color: Scalars["String"];
  /** The description of the state. */
  description?: Maybe<Scalars["String"]>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The name of the state. */
  name: Scalars["String"];
  /** The position of the state. */
  position?: Maybe<Scalars["Float"]>;
  /** The team associated with the state. */
  teamId: Scalars["String"];
  /** The workflow type. */
  type: Scalars["String"];
};

export type WorkflowStateEdge = {
  __typename?: "WorkflowStateEdge";
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
  node: WorkflowState;
};

export type WorkflowStatePayload = {
  __typename?: "WorkflowStatePayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The state that was created or updated. */
  workflowState: WorkflowState;
};

export type WorkflowStateUpdateInput = {
  /** The color of the state. */
  color?: Maybe<Scalars["String"]>;
  /** The description of the state. */
  description?: Maybe<Scalars["String"]>;
  /** The name of the state. */
  name?: Maybe<Scalars["String"]>;
  /** The position of the state. */
  position?: Maybe<Scalars["Float"]>;
};

export type CommentFragment = { __typename?: "Comment" } & Pick<
  Comment,
  "body" | "updatedAt" | "archivedAt" | "createdAt" | "editedAt" | "id"
> & { issue: { __typename?: "Issue" } & Pick<Issue, "id">; user: { __typename?: "User" } & Pick<User, "id"> };

export type EmojiFragment = { __typename?: "Emoji" } & Pick<
  Emoji,
  "url" | "name" | "updatedAt" | "source" | "archivedAt" | "createdAt" | "id"
> & { creator: { __typename?: "User" } & Pick<User, "id"> };

export type CustomViewFragment = { __typename?: "CustomView" } & Pick<
  CustomView,
  "color" | "description" | "filters" | "icon" | "updatedAt" | "name" | "archivedAt" | "createdAt" | "id" | "shared"
> & { team?: Maybe<{ __typename?: "Team" } & Pick<Team, "id">>; creator: { __typename?: "User" } & Pick<User, "id"> };

export type MilestoneFragment = { __typename?: "Milestone" } & Pick<
  Milestone,
  "updatedAt" | "name" | "sortOrder" | "archivedAt" | "createdAt" | "id"
>;

export type NotificationFragment = { __typename?: "Notification" } & Pick<
  Notification,
  "reactionEmoji" | "type" | "updatedAt" | "emailedAt" | "readAt" | "archivedAt" | "createdAt" | "id"
> & {
    comment?: Maybe<{ __typename?: "Comment" } & Pick<Comment, "id">>;
    issue: { __typename?: "Issue" } & Pick<Issue, "id">;
    user: { __typename?: "User" } & Pick<User, "id">;
    team: { __typename?: "Team" } & Pick<Team, "id">;
  };

export type ProjectFragment = { __typename?: "Project" } & Pick<
  Project,
  | "targetDate"
  | "icon"
  | "updatedAt"
  | "completedScopeHistory"
  | "completedIssueCountHistory"
  | "color"
  | "description"
  | "name"
  | "slugId"
  | "sortOrder"
  | "archivedAt"
  | "createdAt"
  | "canceledAt"
  | "completedAt"
  | "startedAt"
  | "scopeHistory"
  | "issueCountHistory"
  | "state"
  | "id"
  | "slackIssueComments"
  | "slackNewIssue"
  | "slackIssueStatuses"
> & {
    milestone?: Maybe<{ __typename?: "Milestone" } & Pick<Milestone, "id">>;
    lead?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
    creator: { __typename?: "User" } & Pick<User, "id">;
  };

export type ReactionFragment = { __typename?: "Reaction" } & Pick<
  Reaction,
  "emoji" | "updatedAt" | "archivedAt" | "createdAt" | "id"
> & { comment: { __typename?: "Comment" } & Pick<Comment, "id">; user: { __typename?: "User" } & Pick<User, "id"> };

export type IssueHistoryFragment = { __typename?: "IssueHistory" } & Pick<
  IssueHistory,
  | "relationChanges"
  | "addedLabelIds"
  | "removedLabelIds"
  | "source"
  | "updatedAt"
  | "archivedAt"
  | "createdAt"
  | "id"
  | "fromDueDate"
  | "toDueDate"
  | "fromEstimate"
  | "toEstimate"
  | "fromPriority"
  | "toPriority"
  | "fromTitle"
  | "toTitle"
  | "archived"
  | "updatedDescription"
  | "autoArchived"
  | "autoClosed"
> & {
    issue: { __typename?: "Issue" } & Pick<Issue, "id">;
    toCycle?: Maybe<{ __typename?: "Cycle" } & Pick<Cycle, "id">>;
    toParent?: Maybe<{ __typename?: "Issue" } & Pick<Issue, "id">>;
    toProject?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">>;
    toState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
    fromCycle?: Maybe<{ __typename?: "Cycle" } & Pick<Cycle, "id">>;
    fromParent?: Maybe<{ __typename?: "Issue" } & Pick<Issue, "id">>;
    fromProject?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">>;
    fromState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
    fromTeam?: Maybe<{ __typename?: "Team" } & Pick<Team, "id">>;
    toTeam?: Maybe<{ __typename?: "Team" } & Pick<Team, "id">>;
    fromAssignee?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
    toAssignee?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
    actor?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
  };

export type FileUploadFragment = { __typename?: "FileUpload" } & Pick<
  FileUpload,
  "metaData" | "size" | "contentType" | "assetUrl" | "filename" | "id"
> & { creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">> };

export type IssueRelationFragment = { __typename?: "IssueRelation" } & Pick<
  IssueRelation,
  "updatedAt" | "type" | "archivedAt" | "createdAt" | "id"
> & { issue: { __typename?: "Issue" } & Pick<Issue, "id">; relatedIssue: { __typename?: "Issue" } & Pick<Issue, "id"> };

export type CycleFragment = { __typename?: "Cycle" } & Pick<
  Cycle,
  | "completedAt"
  | "name"
  | "endsAt"
  | "updatedAt"
  | "completedScopeHistory"
  | "completedIssueCountHistory"
  | "number"
  | "startsAt"
  | "archivedAt"
  | "createdAt"
  | "scopeHistory"
  | "issueCountHistory"
  | "id"
> & { team: { __typename?: "Team" } & Pick<Team, "id"> };

export type WorkflowStateFragment = { __typename?: "WorkflowState" } & Pick<
  WorkflowState,
  "description" | "updatedAt" | "position" | "color" | "name" | "archivedAt" | "createdAt" | "type" | "id"
> & { team: { __typename?: "Team" } & Pick<Team, "id"> };

export type TemplateFragment = { __typename?: "Template" } & Pick<
  Template,
  "templateData" | "description" | "type" | "updatedAt" | "name" | "archivedAt" | "createdAt" | "id"
> & { team: { __typename?: "Team" } & Pick<Team, "id">; creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">> };

export type UserAccountFragment = { __typename?: "UserAccount" } & Pick<
  UserAccount,
  "service" | "id" | "archivedAt" | "createdAt" | "updatedAt" | "email" | "name"
> & { users: Array<{ __typename?: "User" } & UserFragment> };

export type UserFragment = { __typename?: "User" } & Pick<
  User,
  | "avatarUrl"
  | "createdIssueCount"
  | "updatedAt"
  | "lastSeen"
  | "archivedAt"
  | "createdAt"
  | "id"
  | "displayName"
  | "email"
  | "name"
  | "inviteHash"
  | "active"
  | "admin"
>;

export type PushSubscriptionFragment = { __typename?: "PushSubscription" } & Pick<
  PushSubscription,
  "updatedAt" | "archivedAt" | "createdAt" | "id"
>;

export type WebhookFragment = { __typename?: "Webhook" } & Pick<
  Webhook,
  "secret" | "updatedAt" | "resourceTypes" | "archivedAt" | "createdAt" | "id" | "url" | "label" | "enabled"
> & { team: { __typename?: "Team" } & Pick<Team, "id">; creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">> };

export type ApiKeyFragment = { __typename?: "ApiKey" } & Pick<
  ApiKey,
  "label" | "updatedAt" | "archivedAt" | "createdAt" | "id"
>;

export type ProjectLinkFragment = { __typename?: "ProjectLink" } & Pick<
  ProjectLink,
  "updatedAt" | "url" | "label" | "archivedAt" | "createdAt" | "id"
> & { project: { __typename?: "Project" } & Pick<Project, "id">; creator: { __typename?: "User" } & Pick<User, "id"> };

export type IssueImportFragment = { __typename?: "IssueImport" } & Pick<
  IssueImport,
  "creatorId" | "updatedAt" | "service" | "status" | "archivedAt" | "createdAt" | "id" | "error"
>;

export type IntegrationResourceFragment = { __typename?: "IntegrationResource" } & Pick<
  IntegrationResource,
  "resourceId" | "resourceType" | "updatedAt" | "archivedAt" | "createdAt" | "id"
> & {
    data: { __typename?: "IntegrationResourceData" } & IntegrationResourceDataFragment;
    pullRequest: { __typename?: "PullRequestPayload" } & PullRequestPayloadFragment;
    integration: { __typename?: "Integration" } & Pick<Integration, "id">;
    issue: { __typename?: "Issue" } & Pick<Issue, "id">;
  };

export type IntegrationFragment = { __typename?: "Integration" } & Pick<
  Integration,
  "service" | "updatedAt" | "archivedAt" | "createdAt" | "id"
> & { team?: Maybe<{ __typename?: "Team" } & Pick<Team, "id">>; creator: { __typename?: "User" } & Pick<User, "id"> };

export type OrganizationInviteFragment = { __typename?: "OrganizationInvite" } & Pick<
  OrganizationInvite,
  "external" | "email" | "updatedAt" | "archivedAt" | "createdAt" | "acceptedAt" | "expiresAt" | "id"
> & {
    inviter: { __typename?: "User" } & Pick<User, "id">;
    invitee?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
  };

export type IssueFragment = { __typename?: "Issue" } & Pick<
  Issue,
  | "url"
  | "identifier"
  | "priorityLabel"
  | "previousIdentifiers"
  | "branchName"
  | "dueDate"
  | "estimate"
  | "description"
  | "title"
  | "number"
  | "updatedAt"
  | "boardOrder"
  | "subIssueSortOrder"
  | "priority"
  | "archivedAt"
  | "createdAt"
  | "autoArchivedAt"
  | "autoClosedAt"
  | "canceledAt"
  | "completedAt"
  | "startedAt"
  | "id"
> & {
    cycle?: Maybe<{ __typename?: "Cycle" } & Pick<Cycle, "id">>;
    parent?: Maybe<{ __typename?: "Issue" } & Pick<Issue, "id">>;
    project?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">>;
    team: { __typename?: "Team" } & Pick<Team, "id">;
    assignee?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
    creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
    state: { __typename?: "WorkflowState" } & Pick<WorkflowState, "id">;
  };

export type OrganizationFragment = { __typename?: "Organization" } & Pick<
  Organization,
  | "allowedAuthServices"
  | "gitBranchFormat"
  | "userCount"
  | "createdIssueCount"
  | "periodUploadVolume"
  | "updatedAt"
  | "logoUrl"
  | "name"
  | "urlKey"
  | "archivedAt"
  | "createdAt"
  | "id"
  | "samlEnabled"
  | "gitLinkbackMessagesEnabled"
  | "gitPublicLinkbackMessagesEnabled"
  | "roadmapEnabled"
>;

export type TeamFragment = { __typename?: "Team" } & Pick<
  Team,
  | "cycleIssueAutoAssignCompleted"
  | "cycleIssueAutoAssignStarted"
  | "cycleCalenderUrl"
  | "upcomingCycleCount"
  | "cycleLockToActive"
  | "autoArchivePeriod"
  | "autoClosePeriod"
  | "autoCloseStateId"
  | "cycleCooldownTime"
  | "cycleStartDay"
  | "cycleDuration"
  | "issueEstimationType"
  | "updatedAt"
  | "description"
  | "name"
  | "key"
  | "archivedAt"
  | "createdAt"
  | "timezone"
  | "id"
  | "inviteHash"
  | "defaultIssueEstimate"
  | "cyclesEnabled"
  | "issueEstimationExtended"
  | "issueEstimationAllowZero"
  | "groupIssueHistory"
  | "slackIssueComments"
  | "slackNewIssue"
  | "slackIssueStatuses"
> & {
    activeCycle?: Maybe<{ __typename?: "Cycle" } & Pick<Cycle, "id">>;
    mergeWorkflowState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
    draftWorkflowState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
    startWorkflowState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
    reviewWorkflowState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
    markedAsDuplicateWorkflowState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
  };

export type DocumentStepFragment = { __typename?: "DocumentStep" } & Pick<
  DocumentStep,
  "clientId" | "step" | "version" | "updatedAt" | "archivedAt" | "createdAt" | "id"
>;

export type SyncResponseFragment = { __typename?: "SyncResponse" } & Pick<
  SyncResponse,
  "archive" | "delta" | "state" | "lastSyncId" | "databaseVersion"
>;

export type ArchiveResponseFragment = { __typename?: "ArchiveResponse" } & Pick<
  ArchiveResponse,
  "archive" | "totalCount" | "databaseVersion"
>;

export type TeamMembershipFragment = { __typename?: "TeamMembership" } & Pick<
  TeamMembership,
  "updatedAt" | "archivedAt" | "createdAt" | "id"
> & { team: { __typename?: "Team" } & Pick<Team, "id">; user: { __typename?: "User" } & Pick<User, "id"> };

export type OrganizationDomainFragment = { __typename?: "OrganizationDomain" } & Pick<
  OrganizationDomain,
  "name" | "verificationEmail" | "verified" | "updatedAt" | "archivedAt" | "createdAt" | "id"
> & { creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">> };

export type CommitPayloadFragment = { __typename?: "CommitPayload" } & Pick<
  CommitPayload,
  "added" | "id" | "message" | "modified" | "removed" | "timestamp" | "url"
>;

export type GoogleSheetsSettingsFragment = { __typename?: "GoogleSheetsSettings" } & Pick<
  GoogleSheetsSettings,
  "sheetId" | "spreadsheetId" | "spreadsheetUrl" | "updatedIssuesAt"
>;

export type IntegrationResourceDataFragment = { __typename?: "IntegrationResourceData" } & {
  githubCommit?: Maybe<{ __typename?: "CommitPayload" } & CommitPayloadFragment>;
  githubPullRequest?: Maybe<{ __typename?: "PullRequestPayload" } & PullRequestPayloadFragment>;
  gitlabMergeRequest?: Maybe<{ __typename?: "PullRequestPayload" } & PullRequestPayloadFragment>;
  sentryIssue?: Maybe<{ __typename?: "SentryIssuePayload" } & SentryIssuePayloadFragment>;
};

export type IssueLabelFragment = { __typename?: "IssueLabel" } & Pick<
  IssueLabel,
  "color" | "description" | "name" | "updatedAt" | "archivedAt" | "createdAt" | "id"
> & { team: { __typename?: "Team" } & Pick<Team, "id">; creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">> };

export type NotificationSubscriptionFragment = { __typename?: "NotificationSubscription" } & Pick<
  NotificationSubscription,
  "updatedAt" | "archivedAt" | "createdAt" | "type" | "id"
> & {
    project?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">>;
    team?: Maybe<{ __typename?: "Team" } & Pick<Team, "id">>;
    user: { __typename?: "User" } & Pick<User, "id">;
  };

export type OauthClientFragment = { __typename?: "OauthClient" } & Pick<
  OauthClient,
  | "imageUrl"
  | "description"
  | "redirectUris"
  | "developer"
  | "clientId"
  | "name"
  | "clientSecret"
  | "updatedAt"
  | "archivedAt"
  | "createdAt"
  | "id"
  | "developerUrl"
>;

export type FigmaEmbedFragment = { __typename?: "FigmaEmbed" } & Pick<
  FigmaEmbed,
  "lastModified" | "name" | "url" | "nodeName"
>;

export type UploadFileFragment = { __typename?: "UploadFile" } & Pick<
  UploadFile,
  "assetUrl" | "contentType" | "filename" | "uploadUrl" | "size" | "metaData"
> & { headers: Array<{ __typename?: "UploadFileHeader" } & UploadFileHeaderFragment> };

export type AuthorizedApplicationFragment = { __typename?: "AuthorizedApplication" } & Pick<
  AuthorizedApplication,
  "name" | "imageUrl" | "description" | "developer" | "appId" | "clientId" | "scope" | "developerUrl"
>;

export type UserAuthorizedApplicationFragment = { __typename?: "UserAuthorizedApplication" } & Pick<
  UserAuthorizedApplication,
  "name" | "imageUrl" | "description" | "developer" | "clientId" | "developerUrl" | "isAuthorized"
>;

export type ApplicationFragment = { __typename?: "Application" } & Pick<
  Application,
  "name" | "imageUrl" | "description" | "developer" | "clientId" | "developerUrl"
>;

export type PullRequestPayloadFragment = { __typename?: "PullRequestPayload" } & Pick<
  PullRequestPayload,
  | "branch"
  | "closedAt"
  | "createdAt"
  | "draft"
  | "id"
  | "mergedAt"
  | "number"
  | "repoLogin"
  | "repoName"
  | "status"
  | "title"
  | "updatedAt"
  | "url"
  | "userId"
  | "userLogin"
>;

export type SentryIssuePayloadFragment = { __typename?: "SentryIssuePayload" } & Pick<
  SentryIssuePayload,
  | "issueId"
  | "actorId"
  | "projectId"
  | "firstSeen"
  | "webUrl"
  | "actorName"
  | "firstVersion"
  | "shortId"
  | "projectSlug"
  | "issueTitle"
  | "actorType"
>;

export type SentrySettingsFragment = { __typename?: "SentrySettings" } & Pick<SentrySettings, "organizationSlug">;

export type SlackPostSettingsFragment = { __typename?: "SlackPostSettings" } & Pick<
  SlackPostSettings,
  "channel" | "channelId" | "configurationUrl"
>;

export type IntegrationSettingsFragment = { __typename?: "IntegrationSettings" } & {
  googleSheets?: Maybe<{ __typename?: "GoogleSheetsSettings" } & GoogleSheetsSettingsFragment>;
  sentry?: Maybe<{ __typename?: "SentrySettings" } & SentrySettingsFragment>;
  slackPost?: Maybe<{ __typename?: "SlackPostSettings" } & SlackPostSettingsFragment>;
  slackProjectPost?: Maybe<{ __typename?: "SlackPostSettings" } & SlackPostSettingsFragment>;
};

export type SamlConfigurationFragment = { __typename?: "SamlConfiguration" } & Pick<
  SamlConfiguration,
  "ssoBinding" | "allowedDomains" | "ssoEndpoint" | "ssoSignAlgo" | "ssoSigningCert"
>;

export type UserSettingsFragment = { __typename?: "UserSettings" } & Pick<
  UserSettings,
  "unsubscribedFrom" | "updatedAt" | "notificationPreferences" | "archivedAt" | "createdAt" | "id"
> & { user: { __typename?: "User" } & Pick<User, "id"> };

export type SubscriptionFragment = { __typename?: "Subscription" } & Pick<
  Subscription,
  "canceledAt" | "updatedAt" | "seats" | "pendingChangeType" | "type" | "archivedAt" | "createdAt" | "id"
> & { creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">> };

export type FavoriteFragment = { __typename?: "Favorite" } & Pick<
  Favorite,
  "updatedAt" | "sortOrder" | "archivedAt" | "createdAt" | "type" | "id"
> & {
    cycle?: Maybe<{ __typename?: "Cycle" } & Pick<Cycle, "id">>;
    label?: Maybe<{ __typename?: "IssueLabel" } & Pick<IssueLabel, "id">>;
    issue?: Maybe<{ __typename?: "Issue" } & Pick<Issue, "id">>;
    projectTeam?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">>;
    project?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">>;
    user: { __typename?: "User" } & Pick<User, "id">;
  };

export type ViewPreferencesFragment = { __typename?: "ViewPreferences" } & Pick<
  ViewPreferences,
  "updatedAt" | "archivedAt" | "createdAt" | "id" | "type" | "viewType"
>;

export type ApiKeyConnectionFragment = { __typename?: "ApiKeyConnection" } & {
  nodes: Array<{ __typename?: "ApiKey" } & ApiKeyFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type ApiKeyPayloadFragment = { __typename?: "ApiKeyPayload" } & Pick<ApiKeyPayload, "lastSyncId" | "success"> & {
    apiKey: { __typename?: "ApiKey" } & ApiKeyFragment;
  };

export type ArchivePayloadFragment = { __typename?: "ArchivePayload" } & Pick<ArchivePayload, "lastSyncId" | "success">;

export type AuthResolverResponseFragment = { __typename?: "AuthResolverResponse" } & Pick<
  AuthResolverResponse,
  "email" | "token" | "allowDomainAccess" | "id"
> & {
    availableOrganizations?: Maybe<Array<{ __typename?: "Organization" } & OrganizationFragment>>;
    users: Array<{ __typename?: "User" } & UserFragment>;
  };

export type BillingDetailsPayloadFragment = { __typename?: "BillingDetailsPayload" } & Pick<
  BillingDetailsPayload,
  "email" | "success"
> & {
    invoices: Array<{ __typename?: "Invoice" } & InvoiceFragment>;
    paymentMethod?: Maybe<{ __typename?: "Card" } & CardFragment>;
  };

export type BillingEmailPayloadFragment = { __typename?: "BillingEmailPayload" } & Pick<
  BillingEmailPayload,
  "email" | "success"
>;

export type CardFragment = { __typename?: "Card" } & Pick<Card, "brand" | "last4">;

export type CollaborationDocumentUpdatePayloadFragment = { __typename?: "CollaborationDocumentUpdatePayload" } & Pick<
  CollaborationDocumentUpdatePayload,
  "success"
> & { steps?: Maybe<{ __typename?: "StepsResponse" } & StepsResponseFragment> };

export type CommentConnectionFragment = { __typename?: "CommentConnection" } & {
  nodes: Array<{ __typename?: "Comment" } & CommentFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type CommentPayloadFragment = { __typename?: "CommentPayload" } & Pick<
  CommentPayload,
  "lastSyncId" | "success"
> & { comment: { __typename?: "Comment" } & Pick<Comment, "id"> };

export type ContactPayloadFragment = { __typename?: "ContactPayload" } & Pick<ContactPayload, "success">;

export type CreateCsvExportReportPayloadFragment = { __typename?: "CreateCsvExportReportPayload" } & Pick<
  CreateCsvExportReportPayload,
  "success"
>;

export type CreateOrJoinOrganizationResponseFragment = { __typename?: "CreateOrJoinOrganizationResponse" } & {
  user: { __typename?: "User" } & Pick<User, "id">;
};

export type CustomViewConnectionFragment = { __typename?: "CustomViewConnection" } & {
  nodes: Array<{ __typename?: "CustomView" } & CustomViewFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type CustomViewPayloadFragment = { __typename?: "CustomViewPayload" } & Pick<
  CustomViewPayload,
  "lastSyncId" | "success"
> & { customView: { __typename?: "CustomView" } & Pick<CustomView, "id"> };

export type CycleConnectionFragment = { __typename?: "CycleConnection" } & {
  nodes: Array<{ __typename?: "Cycle" } & CycleFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type CyclePayloadFragment = { __typename?: "CyclePayload" } & Pick<CyclePayload, "lastSyncId" | "success"> & {
    cycle?: Maybe<{ __typename?: "Cycle" } & Pick<Cycle, "id">>;
  };

export type DebugPayloadFragment = { __typename?: "DebugPayload" } & Pick<DebugPayload, "success">;

export type EmailUnsubscribePayloadFragment = { __typename?: "EmailUnsubscribePayload" } & Pick<
  EmailUnsubscribePayload,
  "success"
>;

export type EmailUserAccountAuthChallengeResponseFragment = {
  __typename?: "EmailUserAccountAuthChallengeResponse";
} & Pick<EmailUserAccountAuthChallengeResponse, "authType" | "success">;

export type EmojiConnectionFragment = { __typename?: "EmojiConnection" } & {
  nodes: Array<{ __typename?: "Emoji" } & EmojiFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type EmojiPayloadFragment = { __typename?: "EmojiPayload" } & Pick<EmojiPayload, "lastSyncId" | "success"> & {
    emoji: { __typename?: "Emoji" } & Pick<Emoji, "id">;
  };

export type EventPayloadFragment = { __typename?: "EventPayload" } & Pick<EventPayload, "success">;

export type FavoriteConnectionFragment = { __typename?: "FavoriteConnection" } & {
  nodes: Array<{ __typename?: "Favorite" } & FavoriteFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type FavoritePayloadFragment = { __typename?: "FavoritePayload" } & Pick<
  FavoritePayload,
  "lastSyncId" | "success"
> & { favorite: { __typename?: "Favorite" } & Pick<Favorite, "id"> };

export type FeedbackPayloadFragment = { __typename?: "FeedbackPayload" } & Pick<FeedbackPayload, "success">;

export type FigmaEmbedPayloadFragment = { __typename?: "FigmaEmbedPayload" } & Pick<
  FigmaEmbedPayload,
  "lastSyncId" | "success"
> & { figmaEmbed?: Maybe<{ __typename?: "FigmaEmbed" } & FigmaEmbedFragment> };

export type ImageUploadFromUrlPayloadFragment = { __typename?: "ImageUploadFromUrlPayload" } & Pick<
  ImageUploadFromUrlPayload,
  "url" | "lastSyncId" | "success"
>;

export type IntegrationConnectionFragment = { __typename?: "IntegrationConnection" } & {
  nodes: Array<{ __typename?: "Integration" } & IntegrationFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type IntegrationPayloadFragment = { __typename?: "IntegrationPayload" } & Pick<
  IntegrationPayload,
  "lastSyncId" | "success"
> & { integration?: Maybe<{ __typename?: "Integration" } & Pick<Integration, "id">> };

export type IntegrationResourceConnectionFragment = { __typename?: "IntegrationResourceConnection" } & {
  nodes: Array<{ __typename?: "IntegrationResource" } & IntegrationResourceFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type InviteDataFragment = { __typename?: "InviteData" } & Pick<
  InviteData,
  | "avatarURLs"
  | "teamIds"
  | "teamNames"
  | "organizationDomain"
  | "organizationLogoUrl"
  | "inviterName"
  | "organizationName"
  | "userCount"
>;

export type InvitePagePayloadFragment = { __typename?: "InvitePagePayload" } & Pick<InvitePagePayload, "success"> & {
    inviteData?: Maybe<{ __typename?: "InviteData" } & InviteDataFragment>;
  };

export type InvoiceFragment = { __typename?: "Invoice" } & Pick<
  Invoice,
  "url" | "created" | "dueDate" | "total" | "status"
>;

export type IssueConnectionFragment = { __typename?: "IssueConnection" } & {
  nodes: Array<{ __typename?: "Issue" } & IssueFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type IssueHistoryConnectionFragment = { __typename?: "IssueHistoryConnection" } & {
  nodes: Array<{ __typename?: "IssueHistory" } & IssueHistoryFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type IssueImportPayloadFragment = { __typename?: "IssueImportPayload" } & Pick<
  IssueImportPayload,
  "lastSyncId" | "success"
> & { issueImport?: Maybe<{ __typename?: "IssueImport" } & IssueImportFragment> };

export type IssueLabelConnectionFragment = { __typename?: "IssueLabelConnection" } & {
  nodes: Array<{ __typename?: "IssueLabel" } & IssueLabelFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type IssueLabelPayloadFragment = { __typename?: "IssueLabelPayload" } & Pick<
  IssueLabelPayload,
  "lastSyncId" | "success"
> & { issueLabel: { __typename?: "IssueLabel" } & Pick<IssueLabel, "id"> };

export type IssuePayloadFragment = { __typename?: "IssuePayload" } & Pick<IssuePayload, "lastSyncId" | "success"> & {
    issue?: Maybe<{ __typename?: "Issue" } & Pick<Issue, "id">>;
  };

export type IssueRelationConnectionFragment = { __typename?: "IssueRelationConnection" } & {
  nodes: Array<{ __typename?: "IssueRelation" } & IssueRelationFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type IssueRelationPayloadFragment = { __typename?: "IssueRelationPayload" } & Pick<
  IssueRelationPayload,
  "lastSyncId" | "success"
> & { issueRelation: { __typename?: "IssueRelation" } & Pick<IssueRelation, "id"> };

export type MilestoneConnectionFragment = { __typename?: "MilestoneConnection" } & {
  nodes: Array<{ __typename?: "Milestone" } & MilestoneFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type MilestonePayloadFragment = { __typename?: "MilestonePayload" } & Pick<
  MilestonePayload,
  "lastSyncId" | "success"
> & { milestone?: Maybe<{ __typename?: "Milestone" } & Pick<Milestone, "id">> };

export type NotificationConnectionFragment = { __typename?: "NotificationConnection" } & {
  nodes: Array<{ __typename?: "Notification" } & NotificationFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type NotificationPayloadFragment = { __typename?: "NotificationPayload" } & Pick<
  NotificationPayload,
  "lastSyncId" | "success"
> & { notification: { __typename?: "Notification" } & Pick<Notification, "id"> };

export type NotificationSubscriptionConnectionFragment = { __typename?: "NotificationSubscriptionConnection" } & {
  nodes: Array<{ __typename?: "NotificationSubscription" } & NotificationSubscriptionFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type NotificationSubscriptionPayloadFragment = { __typename?: "NotificationSubscriptionPayload" } & Pick<
  NotificationSubscriptionPayload,
  "lastSyncId" | "success"
> & { notificationSubscription: { __typename?: "NotificationSubscription" } & Pick<NotificationSubscription, "id"> };

export type OauthClientPayloadFragment = { __typename?: "OauthClientPayload" } & Pick<
  OauthClientPayload,
  "lastSyncId" | "success"
> & { oauthClient: { __typename?: "OauthClient" } & OauthClientFragment };

export type OauthTokenRevokePayloadFragment = { __typename?: "OauthTokenRevokePayload" } & Pick<
  OauthTokenRevokePayload,
  "success"
>;

export type OrganizationDeletePayloadFragment = { __typename?: "OrganizationDeletePayload" } & Pick<
  OrganizationDeletePayload,
  "success"
>;

export type OrganizationDomainPayloadFragment = { __typename?: "OrganizationDomainPayload" } & Pick<
  OrganizationDomainPayload,
  "lastSyncId" | "success"
> & { organizationDomain: { __typename?: "OrganizationDomain" } & OrganizationDomainFragment };

export type OrganizationDomainSimplePayloadFragment = { __typename?: "OrganizationDomainSimplePayload" } & Pick<
  OrganizationDomainSimplePayload,
  "success"
>;

export type OrganizationExistsPayloadFragment = { __typename?: "OrganizationExistsPayload" } & Pick<
  OrganizationExistsPayload,
  "success" | "exists"
>;

export type OrganizationInviteConnectionFragment = { __typename?: "OrganizationInviteConnection" } & {
  nodes: Array<{ __typename?: "OrganizationInvite" } & OrganizationInviteFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type OrganizationInvitePayloadFragment = { __typename?: "OrganizationInvitePayload" } & Pick<
  OrganizationInvitePayload,
  "lastSyncId" | "success"
> & { organizationInvite: { __typename?: "OrganizationInvite" } & OrganizationInviteFragment };

export type OrganizationPayloadFragment = { __typename?: "OrganizationPayload" } & Pick<
  OrganizationPayload,
  "lastSyncId" | "success"
>;

export type PageInfoFragment = { __typename?: "PageInfo" } & Pick<
  PageInfo,
  "startCursor" | "endCursor" | "hasPreviousPage" | "hasNextPage"
>;

export type ProjectConnectionFragment = { __typename?: "ProjectConnection" } & {
  nodes: Array<{ __typename?: "Project" } & ProjectFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type ProjectLinkConnectionFragment = { __typename?: "ProjectLinkConnection" } & {
  nodes: Array<{ __typename?: "ProjectLink" } & ProjectLinkFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type ProjectLinkPayloadFragment = { __typename?: "ProjectLinkPayload" } & Pick<
  ProjectLinkPayload,
  "lastSyncId" | "success"
> & { projectLink: { __typename?: "ProjectLink" } & Pick<ProjectLink, "id"> };

export type ProjectPayloadFragment = { __typename?: "ProjectPayload" } & Pick<
  ProjectPayload,
  "lastSyncId" | "success"
> & { project?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">> };

export type PushSubscriptionConnectionFragment = { __typename?: "PushSubscriptionConnection" } & {
  nodes: Array<{ __typename?: "PushSubscription" } & PushSubscriptionFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type PushSubscriptionPayloadFragment = { __typename?: "PushSubscriptionPayload" } & Pick<
  PushSubscriptionPayload,
  "lastSyncId" | "success"
>;

export type ReactionConnectionFragment = { __typename?: "ReactionConnection" } & {
  nodes: Array<{ __typename?: "Reaction" } & ReactionFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type ReactionPayloadFragment = { __typename?: "ReactionPayload" } & Pick<
  ReactionPayload,
  "lastSyncId" | "success"
> & { reaction: { __typename?: "Reaction" } & Pick<Reaction, "id"> };

export type RotateSecretPayloadFragment = { __typename?: "RotateSecretPayload" } & Pick<
  RotateSecretPayload,
  "lastSyncId" | "success"
>;

export type SsoUrlFromEmailResponseFragment = { __typename?: "SsoUrlFromEmailResponse" } & Pick<
  SsoUrlFromEmailResponse,
  "samlSsoUrl" | "success"
>;

export type StepsResponseFragment = { __typename?: "StepsResponse" } & Pick<
  StepsResponse,
  "version" | "clientIds" | "steps"
>;

export type SubscriptionPayloadFragment = { __typename?: "SubscriptionPayload" } & Pick<
  SubscriptionPayload,
  "canceledAt" | "lastSyncId" | "success"
>;

export type SubscriptionSessionPayloadFragment = { __typename?: "SubscriptionSessionPayload" } & Pick<
  SubscriptionSessionPayload,
  "session"
>;

export type SynchronizedPayloadFragment = { __typename?: "SynchronizedPayload" } & Pick<
  SynchronizedPayload,
  "lastSyncId"
>;

export type TeamConnectionFragment = { __typename?: "TeamConnection" } & {
  nodes: Array<{ __typename?: "Team" } & TeamFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type TeamMembershipConnectionFragment = { __typename?: "TeamMembershipConnection" } & {
  nodes: Array<{ __typename?: "TeamMembership" } & TeamMembershipFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type TeamMembershipPayloadFragment = { __typename?: "TeamMembershipPayload" } & Pick<
  TeamMembershipPayload,
  "lastSyncId" | "success"
> & { teamMembership?: Maybe<{ __typename?: "TeamMembership" } & Pick<TeamMembership, "id">> };

export type TeamPayloadFragment = { __typename?: "TeamPayload" } & Pick<TeamPayload, "lastSyncId" | "success"> & {
    team?: Maybe<{ __typename?: "Team" } & Pick<Team, "id">>;
  };

export type TemplateConnectionFragment = { __typename?: "TemplateConnection" } & {
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type TemplatePayloadFragment = { __typename?: "TemplatePayload" } & Pick<
  TemplatePayload,
  "lastSyncId" | "success"
> & { template: { __typename?: "Template" } & Pick<Template, "id"> };

export type UploadFileHeaderFragment = { __typename?: "UploadFileHeader" } & Pick<UploadFileHeader, "key" | "value">;

export type UploadPayloadFragment = { __typename?: "UploadPayload" } & Pick<UploadPayload, "lastSyncId" | "success"> & {
    uploadFile?: Maybe<{ __typename?: "UploadFile" } & UploadFileFragment>;
  };

export type UserAdminPayloadFragment = { __typename?: "UserAdminPayload" } & Pick<UserAdminPayload, "success">;

export type UserConnectionFragment = { __typename?: "UserConnection" } & {
  nodes: Array<{ __typename?: "User" } & UserFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type UserPayloadFragment = { __typename?: "UserPayload" } & Pick<UserPayload, "lastSyncId" | "success"> & {
    user?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
  };

export type UserSettingsFlagPayloadFragment = { __typename?: "UserSettingsFlagPayload" } & Pick<
  UserSettingsFlagPayload,
  "flag" | "value" | "lastSyncId" | "success"
>;

export type UserSettingsFlagsResetPayloadFragment = { __typename?: "UserSettingsFlagsResetPayload" } & Pick<
  UserSettingsFlagsResetPayload,
  "lastSyncId" | "success"
>;

export type UserSettingsPayloadFragment = { __typename?: "UserSettingsPayload" } & Pick<
  UserSettingsPayload,
  "lastSyncId" | "success"
>;

export type UserSubscribeToNewsletterPayloadFragment = { __typename?: "UserSubscribeToNewsletterPayload" } & Pick<
  UserSubscribeToNewsletterPayload,
  "success"
>;

export type ViewPreferencesPayloadFragment = { __typename?: "ViewPreferencesPayload" } & Pick<
  ViewPreferencesPayload,
  "lastSyncId" | "success"
> & { viewPreferences: { __typename?: "ViewPreferences" } & ViewPreferencesFragment };

export type WebhookConnectionFragment = { __typename?: "WebhookConnection" } & {
  nodes: Array<{ __typename?: "Webhook" } & WebhookFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type WebhookPayloadFragment = { __typename?: "WebhookPayload" } & Pick<
  WebhookPayload,
  "lastSyncId" | "success"
> & { webhook: { __typename?: "Webhook" } & Pick<Webhook, "id"> };

export type WorkflowStateConnectionFragment = { __typename?: "WorkflowStateConnection" } & {
  nodes: Array<{ __typename?: "WorkflowState" } & WorkflowStateFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type WorkflowStatePayloadFragment = { __typename?: "WorkflowStatePayload" } & Pick<
  WorkflowStatePayload,
  "lastSyncId" | "success"
> & { workflowState: { __typename?: "WorkflowState" } & Pick<WorkflowState, "id"> };

export type ApiKeysQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type ApiKeysQuery = { __typename?: "Query" } & {
  apiKeys: { __typename?: "ApiKeyConnection" } & ApiKeyConnectionFragment;
};

export type ApplicationWithAuthorizationQueryVariables = Exact<{
  clientId: Scalars["String"];
  redirectUri?: Maybe<Scalars["String"]>;
  scope: Array<Scalars["String"]> | Scalars["String"];
}>;

export type ApplicationWithAuthorizationQuery = { __typename?: "Query" } & {
  applicationWithAuthorization: { __typename?: "UserAuthorizedApplication" } & UserAuthorizedApplicationFragment;
};

export type ArchivedModelSyncQueryVariables = Exact<{
  identifier: Scalars["String"];
  modelClass: Scalars["String"];
}>;

export type ArchivedModelSyncQuery = { __typename?: "Query" } & {
  archivedModelSync: { __typename?: "ArchiveResponse" } & ArchiveResponseFragment;
};

export type ArchivedModelsSyncQueryVariables = Exact<{
  before?: Maybe<Scalars["DateTime"]>;
  last?: Maybe<Scalars["Int"]>;
  modelClass: Scalars["String"];
  teamId: Scalars["String"];
}>;

export type ArchivedModelsSyncQuery = { __typename?: "Query" } & {
  archivedModelsSync: { __typename?: "ArchiveResponse" } & ArchiveResponseFragment;
};

export type AuthorizedApplicationsQueryVariables = Exact<{ [key: string]: never }>;

export type AuthorizedApplicationsQuery = { __typename?: "Query" } & {
  authorizedApplications: Array<
    { __typename?: "AuthorizedApplication" } & Pick<
      AuthorizedApplication,
      "appId" | "clientId" | "description" | "developer" | "developerUrl" | "imageUrl" | "name" | "scope"
    >
  >;
};

export type AvailableUsersQueryVariables = Exact<{ [key: string]: never }>;

export type AvailableUsersQuery = { __typename?: "Query" } & {
  availableUsers: { __typename?: "AuthResolverResponse" } & AuthResolverResponseFragment;
};

export type BillingDetailsQueryVariables = Exact<{ [key: string]: never }>;

export type BillingDetailsQuery = { __typename?: "Query" } & {
  billingDetails: { __typename?: "BillingDetailsPayload" } & BillingDetailsPayloadFragment;
};

export type BillingDetails_PaymentMethodQueryVariables = Exact<{ [key: string]: never }>;

export type BillingDetails_PaymentMethodQuery = { __typename?: "Query" } & {
  billingDetails: { __typename?: "BillingDetailsPayload" } & {
    paymentMethod?: Maybe<{ __typename?: "Card" } & CardFragment>;
  };
};

export type CollaborativeDocumentJoinQueryVariables = Exact<{
  clientId: Scalars["String"];
  issueId: Scalars["String"];
  version: Scalars["Int"];
}>;

export type CollaborativeDocumentJoinQuery = { __typename?: "Query" } & {
  collaborativeDocumentJoin: {
    __typename?: "CollaborationDocumentUpdatePayload";
  } & CollaborationDocumentUpdatePayloadFragment;
};

export type CollaborativeDocumentJoin_StepsQueryVariables = Exact<{
  clientId: Scalars["String"];
  issueId: Scalars["String"];
  version: Scalars["Int"];
}>;

export type CollaborativeDocumentJoin_StepsQuery = { __typename?: "Query" } & {
  collaborativeDocumentJoin: { __typename?: "CollaborationDocumentUpdatePayload" } & {
    steps?: Maybe<{ __typename?: "StepsResponse" } & StepsResponseFragment>;
  };
};

export type CommentQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type CommentQuery = { __typename?: "Query" } & { comment: { __typename?: "Comment" } & CommentFragment };

export type CommentsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type CommentsQuery = { __typename?: "Query" } & {
  comments: { __typename?: "CommentConnection" } & CommentConnectionFragment;
};

export type CustomViewQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type CustomViewQuery = { __typename?: "Query" } & {
  customView: { __typename?: "CustomView" } & CustomViewFragment;
};

export type CustomViewsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type CustomViewsQuery = { __typename?: "Query" } & {
  customViews: { __typename?: "CustomViewConnection" } & CustomViewConnectionFragment;
};

export type CycleQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type CycleQuery = { __typename?: "Query" } & { cycle: { __typename?: "Cycle" } & CycleFragment };

export type Cycle_IssuesQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Cycle_IssuesQuery = { __typename?: "Query" } & {
  cycle: { __typename?: "Cycle" } & { issues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type Cycle_UncompletedIssuesUponCloseQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Cycle_UncompletedIssuesUponCloseQuery = { __typename?: "Query" } & {
  cycle: { __typename?: "Cycle" } & {
    uncompletedIssuesUponClose: { __typename?: "IssueConnection" } & IssueConnectionFragment;
  };
};

export type CyclesQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type CyclesQuery = { __typename?: "Query" } & {
  cycles: { __typename?: "CycleConnection" } & CycleConnectionFragment;
};

export type EmojiQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type EmojiQuery = { __typename?: "Query" } & { emoji: { __typename?: "Emoji" } & EmojiFragment };

export type EmojisQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type EmojisQuery = { __typename?: "Query" } & {
  emojis: { __typename?: "EmojiConnection" } & EmojiConnectionFragment;
};

export type FavoriteQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type FavoriteQuery = { __typename?: "Query" } & { favorite: { __typename?: "Favorite" } & FavoriteFragment };

export type FavoritesQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type FavoritesQuery = { __typename?: "Query" } & {
  favorites: { __typename?: "FavoriteConnection" } & FavoriteConnectionFragment;
};

export type FigmaEmbedInfoQueryVariables = Exact<{
  fileId: Scalars["String"];
  nodeId?: Maybe<Scalars["String"]>;
}>;

export type FigmaEmbedInfoQuery = { __typename?: "Query" } & {
  figmaEmbedInfo: { __typename?: "FigmaEmbedPayload" } & FigmaEmbedPayloadFragment;
};

export type FigmaEmbedInfo_FigmaEmbedQueryVariables = Exact<{
  fileId: Scalars["String"];
  nodeId?: Maybe<Scalars["String"]>;
}>;

export type FigmaEmbedInfo_FigmaEmbedQuery = { __typename?: "Query" } & {
  figmaEmbedInfo: { __typename?: "FigmaEmbedPayload" } & {
    figmaEmbed?: Maybe<{ __typename?: "FigmaEmbed" } & FigmaEmbedFragment>;
  };
};

export type IntegrationQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IntegrationQuery = { __typename?: "Query" } & {
  integration: { __typename?: "Integration" } & IntegrationFragment;
};

export type IntegrationsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type IntegrationsQuery = { __typename?: "Query" } & {
  integrations: { __typename?: "IntegrationConnection" } & IntegrationConnectionFragment;
};

export type InviteInfoQueryVariables = Exact<{
  teamHash?: Maybe<Scalars["String"]>;
  userHash: Scalars["String"];
}>;

export type InviteInfoQuery = { __typename?: "Query" } & {
  inviteInfo: { __typename?: "InvitePagePayload" } & InvitePagePayloadFragment;
};

export type InviteInfo_InviteDataQueryVariables = Exact<{
  teamHash?: Maybe<Scalars["String"]>;
  userHash: Scalars["String"];
}>;

export type InviteInfo_InviteDataQuery = { __typename?: "Query" } & {
  inviteInfo: { __typename?: "InvitePagePayload" } & {
    inviteData?: Maybe<{ __typename?: "InviteData" } & InviteDataFragment>;
  };
};

export type IssueQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueQuery = { __typename?: "Query" } & { issue: { __typename?: "Issue" } & IssueFragment };

export type Issue_ChildrenQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_ChildrenQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & { children: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type Issue_CommentsQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_CommentsQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & { comments: { __typename?: "CommentConnection" } & CommentConnectionFragment };
};

export type Issue_HistoryQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_HistoryQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & {
    history: { __typename?: "IssueHistoryConnection" } & IssueHistoryConnectionFragment;
  };
};

export type Issue_InverseRelationsQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_InverseRelationsQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & {
    inverseRelations: { __typename?: "IssueRelationConnection" } & IssueRelationConnectionFragment;
  };
};

export type Issue_LabelsQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_LabelsQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & { labels: { __typename?: "IssueLabelConnection" } & IssueLabelConnectionFragment };
};

export type Issue_RelationsQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_RelationsQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & {
    relations: { __typename?: "IssueRelationConnection" } & IssueRelationConnectionFragment;
  };
};

export type Issue_SubscribersQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_SubscribersQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & { subscribers: { __typename?: "UserConnection" } & UserConnectionFragment };
};

export type IssueLabelQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueLabelQuery = { __typename?: "Query" } & {
  issueLabel: { __typename?: "IssueLabel" } & IssueLabelFragment;
};

export type IssueLabel_IssuesQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type IssueLabel_IssuesQuery = { __typename?: "Query" } & {
  issueLabel: { __typename?: "IssueLabel" } & { issues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type IssueLabelsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type IssueLabelsQuery = { __typename?: "Query" } & {
  issueLabels: { __typename?: "IssueLabelConnection" } & IssueLabelConnectionFragment;
};

export type IssueRelationQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueRelationQuery = { __typename?: "Query" } & {
  issueRelation: { __typename?: "IssueRelation" } & IssueRelationFragment;
};

export type IssueRelationsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type IssueRelationsQuery = { __typename?: "Query" } & {
  issueRelations: { __typename?: "IssueRelationConnection" } & IssueRelationConnectionFragment;
};

export type IssueSearchQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
  query: Scalars["String"];
}>;

export type IssueSearchQuery = { __typename?: "Query" } & {
  issueSearch: { __typename?: "IssueConnection" } & IssueConnectionFragment;
};

export type IssuesQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type IssuesQuery = { __typename?: "Query" } & {
  issues: { __typename?: "IssueConnection" } & IssueConnectionFragment;
};

export type MilestoneQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type MilestoneQuery = { __typename?: "Query" } & { milestone: { __typename?: "Milestone" } & MilestoneFragment };

export type Milestone_ProjectsQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Milestone_ProjectsQuery = { __typename?: "Query" } & {
  milestone: { __typename?: "Milestone" } & {
    projects: { __typename?: "ProjectConnection" } & ProjectConnectionFragment;
  };
};

export type MilestonesQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type MilestonesQuery = { __typename?: "Query" } & {
  milestones: { __typename?: "MilestoneConnection" } & MilestoneConnectionFragment;
};

export type NotificationQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type NotificationQuery = { __typename?: "Query" } & {
  notification: { __typename?: "Notification" } & NotificationFragment;
};

export type NotificationSubscriptionQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type NotificationSubscriptionQuery = { __typename?: "Query" } & {
  notificationSubscription: { __typename?: "NotificationSubscription" } & NotificationSubscriptionFragment;
};

export type NotificationSubscriptionsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type NotificationSubscriptionsQuery = { __typename?: "Query" } & {
  notificationSubscriptions: {
    __typename?: "NotificationSubscriptionConnection";
  } & NotificationSubscriptionConnectionFragment;
};

export type NotificationsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type NotificationsQuery = { __typename?: "Query" } & {
  notifications: { __typename?: "NotificationConnection" } & NotificationConnectionFragment;
};

export type OrganizationQueryVariables = Exact<{ [key: string]: never }>;

export type OrganizationQuery = { __typename?: "Query" } & {
  organization: { __typename?: "Organization" } & OrganizationFragment;
};

export type Organization_IntegrationsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Organization_IntegrationsQuery = { __typename?: "Query" } & {
  organization: { __typename?: "Organization" } & {
    integrations: { __typename?: "IntegrationConnection" } & IntegrationConnectionFragment;
  };
};

export type Organization_MilestonesQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Organization_MilestonesQuery = { __typename?: "Query" } & {
  organization: { __typename?: "Organization" } & {
    milestones: { __typename?: "MilestoneConnection" } & MilestoneConnectionFragment;
  };
};

export type Organization_TeamsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Organization_TeamsQuery = { __typename?: "Query" } & {
  organization: { __typename?: "Organization" } & { teams: { __typename?: "TeamConnection" } & TeamConnectionFragment };
};

export type Organization_UsersQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Organization_UsersQuery = { __typename?: "Query" } & {
  organization: { __typename?: "Organization" } & { users: { __typename?: "UserConnection" } & UserConnectionFragment };
};

export type OrganizationExistsQueryVariables = Exact<{
  urlKey: Scalars["String"];
}>;

export type OrganizationExistsQuery = { __typename?: "Query" } & {
  organizationExists: { __typename?: "OrganizationExistsPayload" } & OrganizationExistsPayloadFragment;
};

export type OrganizationInviteQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type OrganizationInviteQuery = { __typename?: "Query" } & {
  organizationInvite: { __typename?: "IssueLabel" } & IssueLabelFragment;
};

export type OrganizationInvite_IssuesQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type OrganizationInvite_IssuesQuery = { __typename?: "Query" } & {
  organizationInvite: { __typename?: "IssueLabel" } & {
    issues: { __typename?: "IssueConnection" } & IssueConnectionFragment;
  };
};

export type OrganizationInvitesQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type OrganizationInvitesQuery = { __typename?: "Query" } & {
  organizationInvites: { __typename?: "OrganizationInviteConnection" } & OrganizationInviteConnectionFragment;
};

export type ProjectQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type ProjectQuery = { __typename?: "Query" } & { project: { __typename?: "Project" } & ProjectFragment };

export type Project_IssuesQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Project_IssuesQuery = { __typename?: "Query" } & {
  project: { __typename?: "Project" } & { issues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type Project_LinksQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Project_LinksQuery = { __typename?: "Query" } & {
  project: { __typename?: "Project" } & {
    links: { __typename?: "ProjectLinkConnection" } & ProjectLinkConnectionFragment;
  };
};

export type Project_MembersQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Project_MembersQuery = { __typename?: "Query" } & {
  project: { __typename?: "Project" } & { members: { __typename?: "UserConnection" } & UserConnectionFragment };
};

export type Project_TeamsQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Project_TeamsQuery = { __typename?: "Query" } & {
  project: { __typename?: "Project" } & { teams: { __typename?: "TeamConnection" } & TeamConnectionFragment };
};

export type ProjectLinkQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type ProjectLinkQuery = { __typename?: "Query" } & {
  projectLink: { __typename?: "ProjectLink" } & ProjectLinkFragment;
};

export type ProjectLinksQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type ProjectLinksQuery = { __typename?: "Query" } & {
  projectLinks: { __typename?: "ProjectLinkConnection" } & ProjectLinkConnectionFragment;
};

export type ProjectsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type ProjectsQuery = { __typename?: "Query" } & {
  projects: { __typename?: "ProjectConnection" } & ProjectConnectionFragment;
};

export type PushSubscriptionTestQueryVariables = Exact<{ [key: string]: never }>;

export type PushSubscriptionTestQuery = { __typename?: "Query" } & {
  pushSubscriptionTest: { __typename?: "PushSubscriptionPayload" } & PushSubscriptionPayloadFragment;
};

export type ReactionQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type ReactionQuery = { __typename?: "Query" } & { reaction: { __typename?: "Reaction" } & ReactionFragment };

export type ReactionsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type ReactionsQuery = { __typename?: "Query" } & {
  reactions: { __typename?: "ReactionConnection" } & ReactionConnectionFragment;
};

export type SsoUrlFromEmailQueryVariables = Exact<{
  email: Scalars["String"];
  isDesktop?: Maybe<Scalars["Boolean"]>;
}>;

export type SsoUrlFromEmailQuery = { __typename?: "Query" } & {
  ssoUrlFromEmail: { __typename?: "SsoUrlFromEmailResponse" } & SsoUrlFromEmailResponseFragment;
};

export type SyncBootstrapQueryVariables = Exact<{
  databaseVersion?: Maybe<Scalars["Int"]>;
  sinceSyncId?: Maybe<Scalars["Int"]>;
}>;

export type SyncBootstrapQuery = { __typename?: "Query" } & {
  syncBootstrap: { __typename?: "SyncResponse" } & SyncResponseFragment;
};

export type TeamQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type TeamQuery = { __typename?: "Query" } & { team: { __typename?: "Team" } & TeamFragment };

export type Team_CyclesQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_CyclesQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & { cycles: { __typename?: "CycleConnection" } & CycleConnectionFragment };
};

export type Team_IssuesQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_IssuesQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & { issues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type Team_LabelsQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_LabelsQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & { labels: { __typename?: "IssueLabelConnection" } & IssueLabelConnectionFragment };
};

export type Team_MembersQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_MembersQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & { members: { __typename?: "UserConnection" } & UserConnectionFragment };
};

export type Team_MembershipsQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_MembershipsQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & {
    memberships: { __typename?: "TeamMembershipConnection" } & TeamMembershipConnectionFragment;
  };
};

export type Team_ProjectsQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_ProjectsQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & { projects: { __typename?: "ProjectConnection" } & ProjectConnectionFragment };
};

export type Team_StatesQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_StatesQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & {
    states: { __typename?: "WorkflowStateConnection" } & WorkflowStateConnectionFragment;
  };
};

export type Team_TemplatesQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_TemplatesQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & { templates: { __typename?: "TemplateConnection" } & TemplateConnectionFragment };
};

export type Team_WebhooksQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_WebhooksQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & { webhooks: { __typename?: "WebhookConnection" } & WebhookConnectionFragment };
};

export type TeamMembershipQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type TeamMembershipQuery = { __typename?: "Query" } & {
  teamMembership: { __typename?: "TeamMembership" } & TeamMembershipFragment;
};

export type TeamMembershipsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type TeamMembershipsQuery = { __typename?: "Query" } & {
  teamMemberships: { __typename?: "TeamMembershipConnection" } & TeamMembershipConnectionFragment;
};

export type TeamsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type TeamsQuery = { __typename?: "Query" } & {
  teams: { __typename?: "TeamConnection" } & TeamConnectionFragment;
};

export type TemplateQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type TemplateQuery = { __typename?: "Query" } & { template: { __typename?: "Template" } & TemplateFragment };

export type TemplatesQueryVariables = Exact<{ [key: string]: never }>;

export type TemplatesQuery = { __typename?: "Query" } & {
  templates: Array<
    { __typename?: "Template" } & Pick<
      Template,
      "archivedAt" | "createdAt" | "description" | "id" | "name" | "templateData" | "type" | "updatedAt"
    > & { creator?: Maybe<{ __typename?: "User" } & UserFragment>; team: { __typename?: "Team" } & TeamFragment }
  >;
};

export type UserQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type UserQuery = { __typename?: "Query" } & { user: { __typename?: "User" } & UserFragment };

export type User_AssignedIssuesQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type User_AssignedIssuesQuery = { __typename?: "Query" } & {
  user: { __typename?: "User" } & { assignedIssues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type User_CreatedIssuesQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type User_CreatedIssuesQuery = { __typename?: "Query" } & {
  user: { __typename?: "User" } & { createdIssues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type User_TeamMembershipsQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type User_TeamMembershipsQuery = { __typename?: "Query" } & {
  user: { __typename?: "User" } & {
    teamMemberships: { __typename?: "TeamMembershipConnection" } & TeamMembershipConnectionFragment;
  };
};

export type User_TeamsQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type User_TeamsQuery = { __typename?: "Query" } & {
  user: { __typename?: "User" } & { teams: { __typename?: "TeamConnection" } & TeamConnectionFragment };
};

export type UserSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type UserSettingsQuery = { __typename?: "Query" } & {
  userSettings: { __typename?: "UserSettings" } & UserSettingsFragment;
};

export type UsersQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type UsersQuery = { __typename?: "Query" } & {
  users: { __typename?: "UserConnection" } & UserConnectionFragment;
};

export type ViewerQueryVariables = Exact<{ [key: string]: never }>;

export type ViewerQuery = { __typename?: "Query" } & { viewer: { __typename?: "User" } & UserFragment };

export type Viewer_AssignedIssuesQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Viewer_AssignedIssuesQuery = { __typename?: "Query" } & {
  viewer: { __typename?: "User" } & { assignedIssues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type Viewer_CreatedIssuesQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Viewer_CreatedIssuesQuery = { __typename?: "Query" } & {
  viewer: { __typename?: "User" } & { createdIssues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type Viewer_TeamMembershipsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Viewer_TeamMembershipsQuery = { __typename?: "Query" } & {
  viewer: { __typename?: "User" } & {
    teamMemberships: { __typename?: "TeamMembershipConnection" } & TeamMembershipConnectionFragment;
  };
};

export type Viewer_TeamsQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Viewer_TeamsQuery = { __typename?: "Query" } & {
  viewer: { __typename?: "User" } & { teams: { __typename?: "TeamConnection" } & TeamConnectionFragment };
};

export type WebhookQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type WebhookQuery = { __typename?: "Query" } & { webhook: { __typename?: "Webhook" } & WebhookFragment };

export type WebhooksQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type WebhooksQuery = { __typename?: "Query" } & {
  webhooks: { __typename?: "WebhookConnection" } & WebhookConnectionFragment;
};

export type WorkflowStateQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type WorkflowStateQuery = { __typename?: "Query" } & {
  workflowState: { __typename?: "WorkflowState" } & WorkflowStateFragment;
};

export type WorkflowState_IssuesQueryVariables = Exact<{
  id: Scalars["String"];
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type WorkflowState_IssuesQuery = { __typename?: "Query" } & {
  workflowState: { __typename?: "WorkflowState" } & {
    issues: { __typename?: "IssueConnection" } & IssueConnectionFragment;
  };
};

export type WorkflowStatesQueryVariables = Exact<{
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type WorkflowStatesQuery = { __typename?: "Query" } & {
  workflowStates: { __typename?: "WorkflowStateConnection" } & WorkflowStateConnectionFragment;
};

export type ApiKeyCreateMutationVariables = Exact<{
  input: ApiKeyCreateInput;
}>;

export type ApiKeyCreateMutation = { __typename?: "Mutation" } & {
  apiKeyCreate: { __typename?: "ApiKeyPayload" } & ApiKeyPayloadFragment;
};

export type ApiKeyDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type ApiKeyDeleteMutation = { __typename?: "Mutation" } & {
  apiKeyDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type BillingEmailUpdateMutationVariables = Exact<{
  input: BillingEmailUpdateInput;
}>;

export type BillingEmailUpdateMutation = { __typename?: "Mutation" } & {
  billingEmailUpdate: { __typename?: "BillingEmailPayload" } & BillingEmailPayloadFragment;
};

export type CollaborativeDocumentUpdateMutationVariables = Exact<{
  input: CollaborationDocumentUpdateInput;
}>;

export type CollaborativeDocumentUpdateMutation = { __typename?: "Mutation" } & {
  collaborativeDocumentUpdate: {
    __typename?: "CollaborationDocumentUpdatePayload";
  } & CollaborationDocumentUpdatePayloadFragment;
};

export type CommentCreateMutationVariables = Exact<{
  input: CommentCreateInput;
}>;

export type CommentCreateMutation = { __typename?: "Mutation" } & {
  commentCreate: { __typename?: "CommentPayload" } & CommentPayloadFragment;
};

export type CommentDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type CommentDeleteMutation = { __typename?: "Mutation" } & {
  commentDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type CommentUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: CommentUpdateInput;
}>;

export type CommentUpdateMutation = { __typename?: "Mutation" } & {
  commentUpdate: { __typename?: "CommentPayload" } & CommentPayloadFragment;
};

export type ContactCreateMutationVariables = Exact<{
  input: ContactCreateInput;
}>;

export type ContactCreateMutation = { __typename?: "Mutation" } & {
  contactCreate: { __typename?: "ContactPayload" } & ContactPayloadFragment;
};

export type CreateCsvExportReportMutationVariables = Exact<{ [key: string]: never }>;

export type CreateCsvExportReportMutation = { __typename?: "Mutation" } & {
  createCsvExportReport: { __typename?: "CreateCsvExportReportPayload" } & CreateCsvExportReportPayloadFragment;
};

export type CreateOrganizationFromOnboardingMutationVariables = Exact<{
  input: CreateOrganizationInput;
  survey?: Maybe<OnboardingCustomerSurvey>;
}>;

export type CreateOrganizationFromOnboardingMutation = { __typename?: "Mutation" } & {
  createOrganizationFromOnboarding: {
    __typename?: "CreateOrJoinOrganizationResponse";
  } & CreateOrJoinOrganizationResponseFragment;
};

export type CustomViewCreateMutationVariables = Exact<{
  input: CustomViewCreateInput;
}>;

export type CustomViewCreateMutation = { __typename?: "Mutation" } & {
  customViewCreate: { __typename?: "CustomViewPayload" } & CustomViewPayloadFragment;
};

export type CustomViewDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type CustomViewDeleteMutation = { __typename?: "Mutation" } & {
  customViewDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type CustomViewUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: CustomViewUpdateInput;
}>;

export type CustomViewUpdateMutation = { __typename?: "Mutation" } & {
  customViewUpdate: { __typename?: "CustomViewPayload" } & CustomViewPayloadFragment;
};

export type CycleArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type CycleArchiveMutation = { __typename?: "Mutation" } & {
  cycleArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type CycleCreateMutationVariables = Exact<{
  input: CycleCreateInput;
}>;

export type CycleCreateMutation = { __typename?: "Mutation" } & {
  cycleCreate: { __typename?: "CyclePayload" } & CyclePayloadFragment;
};

export type CycleUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: CycleUpdateInput;
}>;

export type CycleUpdateMutation = { __typename?: "Mutation" } & {
  cycleUpdate: { __typename?: "CyclePayload" } & CyclePayloadFragment;
};

export type DebugCreateSamlOrgMutationVariables = Exact<{ [key: string]: never }>;

export type DebugCreateSamlOrgMutation = { __typename?: "Mutation" } & {
  debugCreateSAMLOrg: { __typename?: "DebugPayload" } & DebugPayloadFragment;
};

export type DebugFailWithInternalErrorMutationVariables = Exact<{ [key: string]: never }>;

export type DebugFailWithInternalErrorMutation = { __typename?: "Mutation" } & {
  debugFailWithInternalError: { __typename?: "DebugPayload" } & DebugPayloadFragment;
};

export type DebugFailWithWarningMutationVariables = Exact<{ [key: string]: never }>;

export type DebugFailWithWarningMutation = { __typename?: "Mutation" } & {
  debugFailWithWarning: { __typename?: "DebugPayload" } & DebugPayloadFragment;
};

export type EmailTokenUserAccountAuthMutationVariables = Exact<{
  input: TokenUserAccountAuthInput;
}>;

export type EmailTokenUserAccountAuthMutation = { __typename?: "Mutation" } & {
  emailTokenUserAccountAuth: { __typename?: "AuthResolverResponse" } & AuthResolverResponseFragment;
};

export type EmailUnsubscribeMutationVariables = Exact<{
  input: EmailUnsubscribeInput;
}>;

export type EmailUnsubscribeMutation = { __typename?: "Mutation" } & {
  emailUnsubscribe: { __typename?: "EmailUnsubscribePayload" } & EmailUnsubscribePayloadFragment;
};

export type EmailUserAccountAuthChallengeMutationVariables = Exact<{
  input: EmailUserAccountAuthChallengeInput;
}>;

export type EmailUserAccountAuthChallengeMutation = { __typename?: "Mutation" } & {
  emailUserAccountAuthChallenge: {
    __typename?: "EmailUserAccountAuthChallengeResponse";
  } & EmailUserAccountAuthChallengeResponseFragment;
};

export type EmojiCreateMutationVariables = Exact<{
  input: EmojiCreateInput;
}>;

export type EmojiCreateMutation = { __typename?: "Mutation" } & {
  emojiCreate: { __typename?: "EmojiPayload" } & EmojiPayloadFragment;
};

export type EmojiDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type EmojiDeleteMutation = { __typename?: "Mutation" } & {
  emojiDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type EventCreateMutationVariables = Exact<{
  input: EventCreateInput;
}>;

export type EventCreateMutation = { __typename?: "Mutation" } & {
  eventCreate: { __typename?: "EventPayload" } & EventPayloadFragment;
};

export type FavoriteCreateMutationVariables = Exact<{
  input: FavoriteCreateInput;
}>;

export type FavoriteCreateMutation = { __typename?: "Mutation" } & {
  favoriteCreate: { __typename?: "FavoritePayload" } & FavoritePayloadFragment;
};

export type FavoriteDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type FavoriteDeleteMutation = { __typename?: "Mutation" } & {
  favoriteDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type FavoriteUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: FavoriteUpdateInput;
}>;

export type FavoriteUpdateMutation = { __typename?: "Mutation" } & {
  favoriteUpdate: { __typename?: "FavoritePayload" } & FavoritePayloadFragment;
};

export type FeedbackCreateMutationVariables = Exact<{
  input: FeedbackCreateInput;
}>;

export type FeedbackCreateMutation = { __typename?: "Mutation" } & {
  feedbackCreate: { __typename?: "FeedbackPayload" } & FeedbackPayloadFragment;
};

export type FileUploadMutationVariables = Exact<{
  contentType: Scalars["String"];
  filename: Scalars["String"];
  metaData?: Maybe<Scalars["JSON"]>;
  size: Scalars["Int"];
}>;

export type FileUploadMutation = { __typename?: "Mutation" } & {
  fileUpload: { __typename?: "UploadPayload" } & UploadPayloadFragment;
};

export type GoogleUserAccountAuthMutationVariables = Exact<{
  input: GoogleUserAccountAuthInput;
}>;

export type GoogleUserAccountAuthMutation = { __typename?: "Mutation" } & {
  googleUserAccountAuth: { __typename?: "AuthResolverResponse" } & AuthResolverResponseFragment;
};

export type ImageUploadFromUrlMutationVariables = Exact<{
  url: Scalars["String"];
}>;

export type ImageUploadFromUrlMutation = { __typename?: "Mutation" } & {
  imageUploadFromUrl: { __typename?: "ImageUploadFromUrlPayload" } & ImageUploadFromUrlPayloadFragment;
};

export type IntegrationDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type IntegrationDeleteMutation = { __typename?: "Mutation" } & {
  integrationDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type IntegrationFigmaMutationVariables = Exact<{
  code: Scalars["String"];
  redirectUri: Scalars["String"];
}>;

export type IntegrationFigmaMutation = { __typename?: "Mutation" } & {
  integrationFigma: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationGithubConnectMutationVariables = Exact<{
  installationId: Scalars["String"];
}>;

export type IntegrationGithubConnectMutation = { __typename?: "Mutation" } & {
  integrationGithubConnect: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationGitlabConnectMutationVariables = Exact<{
  accessToken: Scalars["String"];
  gitlabUrl: Scalars["String"];
}>;

export type IntegrationGitlabConnectMutation = { __typename?: "Mutation" } & {
  integrationGitlabConnect: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationGoogleSheetsMutationVariables = Exact<{
  code: Scalars["String"];
}>;

export type IntegrationGoogleSheetsMutation = { __typename?: "Mutation" } & {
  integrationGoogleSheets: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationResourceArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type IntegrationResourceArchiveMutation = { __typename?: "Mutation" } & {
  integrationResourceArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type IntegrationSentryConnectMutationVariables = Exact<{
  code: Scalars["String"];
  installationId: Scalars["String"];
  organizationSlug: Scalars["String"];
}>;

export type IntegrationSentryConnectMutation = { __typename?: "Mutation" } & {
  integrationSentryConnect: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationSlackMutationVariables = Exact<{
  code: Scalars["String"];
  redirectUri: Scalars["String"];
  shouldUseV2Auth?: Maybe<Scalars["Boolean"]>;
}>;

export type IntegrationSlackMutation = { __typename?: "Mutation" } & {
  integrationSlack: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationSlackImportEmojisMutationVariables = Exact<{
  code: Scalars["String"];
  redirectUri: Scalars["String"];
}>;

export type IntegrationSlackImportEmojisMutation = { __typename?: "Mutation" } & {
  integrationSlackImportEmojis: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationSlackPersonalMutationVariables = Exact<{
  code: Scalars["String"];
  redirectUri: Scalars["String"];
}>;

export type IntegrationSlackPersonalMutation = { __typename?: "Mutation" } & {
  integrationSlackPersonal: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationSlackPostMutationVariables = Exact<{
  code: Scalars["String"];
  redirectUri: Scalars["String"];
  shouldUseV2Auth?: Maybe<Scalars["Boolean"]>;
  teamId: Scalars["String"];
}>;

export type IntegrationSlackPostMutation = { __typename?: "Mutation" } & {
  integrationSlackPost: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationSlackProjectPostMutationVariables = Exact<{
  code: Scalars["String"];
  projectId: Scalars["String"];
  redirectUri: Scalars["String"];
}>;

export type IntegrationSlackProjectPostMutation = { __typename?: "Mutation" } & {
  integrationSlackProjectPost: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IssueArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueArchiveMutation = { __typename?: "Mutation" } & {
  issueArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type IssueCreateMutationVariables = Exact<{
  input: IssueCreateInput;
}>;

export type IssueCreateMutation = { __typename?: "Mutation" } & {
  issueCreate: { __typename?: "IssuePayload" } & IssuePayloadFragment;
};

export type IssueImportCreateClubhouseMutationVariables = Exact<{
  clubhouseTeamName: Scalars["String"];
  clubhouseToken: Scalars["String"];
  teamId: Scalars["String"];
}>;

export type IssueImportCreateClubhouseMutation = { __typename?: "Mutation" } & {
  issueImportCreateClubhouse: { __typename?: "IssueImportPayload" } & IssueImportPayloadFragment;
};

export type IssueImportCreateGithubMutationVariables = Exact<{
  githubRepoName: Scalars["String"];
  githubRepoOwner: Scalars["String"];
  githubToken: Scalars["String"];
  teamId: Scalars["String"];
}>;

export type IssueImportCreateGithubMutation = { __typename?: "Mutation" } & {
  issueImportCreateGithub: { __typename?: "IssueImportPayload" } & IssueImportPayloadFragment;
};

export type IssueImportCreateJiraMutationVariables = Exact<{
  jiraEmail: Scalars["String"];
  jiraHostname: Scalars["String"];
  jiraProject: Scalars["String"];
  jiraToken: Scalars["String"];
  teamId: Scalars["String"];
}>;

export type IssueImportCreateJiraMutation = { __typename?: "Mutation" } & {
  issueImportCreateJira: { __typename?: "IssueImportPayload" } & IssueImportPayloadFragment;
};

export type IssueLabelArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueLabelArchiveMutation = { __typename?: "Mutation" } & {
  issueLabelArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type IssueLabelCreateMutationVariables = Exact<{
  input: IssueLabelCreateInput;
}>;

export type IssueLabelCreateMutation = { __typename?: "Mutation" } & {
  issueLabelCreate: { __typename?: "IssueLabelPayload" } & IssueLabelPayloadFragment;
};

export type IssueLabelUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: IssueLabelUpdateInput;
}>;

export type IssueLabelUpdateMutation = { __typename?: "Mutation" } & {
  issueLabelUpdate: { __typename?: "IssueLabelPayload" } & IssueLabelPayloadFragment;
};

export type IssueRelationCreateMutationVariables = Exact<{
  input: IssueRelationCreateInput;
}>;

export type IssueRelationCreateMutation = { __typename?: "Mutation" } & {
  issueRelationCreate: { __typename?: "IssueRelationPayload" } & IssueRelationPayloadFragment;
};

export type IssueRelationDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueRelationDeleteMutation = { __typename?: "Mutation" } & {
  issueRelationDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type IssueRelationUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: IssueRelationUpdateInput;
}>;

export type IssueRelationUpdateMutation = { __typename?: "Mutation" } & {
  issueRelationUpdate: { __typename?: "IssueRelationPayload" } & IssueRelationPayloadFragment;
};

export type IssueUnarchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueUnarchiveMutation = { __typename?: "Mutation" } & {
  issueUnarchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type IssueUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: IssueUpdateInput;
}>;

export type IssueUpdateMutation = { __typename?: "Mutation" } & {
  issueUpdate: { __typename?: "IssuePayload" } & IssuePayloadFragment;
};

export type JoinOrganizationFromOnboardingMutationVariables = Exact<{
  input: JoinOrganizationInput;
}>;

export type JoinOrganizationFromOnboardingMutation = { __typename?: "Mutation" } & {
  joinOrganizationFromOnboarding: {
    __typename?: "CreateOrJoinOrganizationResponse";
  } & CreateOrJoinOrganizationResponseFragment;
};

export type LeaveOrganizationMutationVariables = Exact<{
  organizationId: Scalars["String"];
}>;

export type LeaveOrganizationMutation = { __typename?: "Mutation" } & {
  leaveOrganization: { __typename?: "CreateOrJoinOrganizationResponse" } & CreateOrJoinOrganizationResponseFragment;
};

export type MilestoneCreateMutationVariables = Exact<{
  input: MilestoneCreateInput;
}>;

export type MilestoneCreateMutation = { __typename?: "Mutation" } & {
  milestoneCreate: { __typename?: "MilestonePayload" } & MilestonePayloadFragment;
};

export type MilestoneDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type MilestoneDeleteMutation = { __typename?: "Mutation" } & {
  milestoneDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type MilestoneUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: MilestoneUpdateInput;
}>;

export type MilestoneUpdateMutation = { __typename?: "Mutation" } & {
  milestoneUpdate: { __typename?: "MilestonePayload" } & MilestonePayloadFragment;
};

export type NotificationArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type NotificationArchiveMutation = { __typename?: "Mutation" } & {
  notificationArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type NotificationCreateMutationVariables = Exact<{
  id: Scalars["String"];
  input: NotificationUpdateInput;
}>;

export type NotificationCreateMutation = { __typename?: "Mutation" } & {
  notificationCreate: { __typename?: "NotificationPayload" } & NotificationPayloadFragment;
};

export type NotificationDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type NotificationDeleteMutation = { __typename?: "Mutation" } & {
  notificationDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type NotificationSubscriptionCreateMutationVariables = Exact<{
  input: NotificationSubscriptionCreateInput;
}>;

export type NotificationSubscriptionCreateMutation = { __typename?: "Mutation" } & {
  notificationSubscriptionCreate: {
    __typename?: "NotificationSubscriptionPayload";
  } & NotificationSubscriptionPayloadFragment;
};

export type NotificationSubscriptionDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type NotificationSubscriptionDeleteMutation = { __typename?: "Mutation" } & {
  notificationSubscriptionDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type NotificationUnarchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type NotificationUnarchiveMutation = { __typename?: "Mutation" } & {
  notificationUnarchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type NotificationUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: NotificationUpdateInput;
}>;

export type NotificationUpdateMutation = { __typename?: "Mutation" } & {
  notificationUpdate: { __typename?: "NotificationPayload" } & NotificationPayloadFragment;
};

export type OauthClientArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type OauthClientArchiveMutation = { __typename?: "Mutation" } & {
  oauthClientArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type OauthClientCreateMutationVariables = Exact<{
  input: OauthClientCreateInput;
}>;

export type OauthClientCreateMutation = { __typename?: "Mutation" } & {
  oauthClientCreate: { __typename?: "OauthClientPayload" } & OauthClientPayloadFragment;
};

export type OauthClientRotateSecretMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type OauthClientRotateSecretMutation = { __typename?: "Mutation" } & {
  oauthClientRotateSecret: { __typename?: "RotateSecretPayload" } & RotateSecretPayloadFragment;
};

export type OauthClientUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: OauthClientUpdateInput;
}>;

export type OauthClientUpdateMutation = { __typename?: "Mutation" } & {
  oauthClientUpdate: { __typename?: "OauthClientPayload" } & OauthClientPayloadFragment;
};

export type OauthTokenRevokeMutationVariables = Exact<{
  appId: Scalars["String"];
  scope: Array<Scalars["String"]> | Scalars["String"];
}>;

export type OauthTokenRevokeMutation = { __typename?: "Mutation" } & {
  oauthTokenRevoke: { __typename?: "OauthTokenRevokePayload" } & OauthTokenRevokePayloadFragment;
};

export type OrganizationDeleteMutationVariables = Exact<{
  input: DeleteOrganizationInput;
}>;

export type OrganizationDeleteMutation = { __typename?: "Mutation" } & {
  organizationDelete: { __typename?: "OrganizationDeletePayload" } & OrganizationDeletePayloadFragment;
};

export type OrganizationDeleteChallengeMutationVariables = Exact<{ [key: string]: never }>;

export type OrganizationDeleteChallengeMutation = { __typename?: "Mutation" } & {
  organizationDeleteChallenge: { __typename?: "OrganizationDeletePayload" } & OrganizationDeletePayloadFragment;
};

export type OrganizationDomainCreateMutationVariables = Exact<{
  input: OrganizationDomainCreateInput;
}>;

export type OrganizationDomainCreateMutation = { __typename?: "Mutation" } & {
  organizationDomainCreate: { __typename?: "OrganizationDomainPayload" } & OrganizationDomainPayloadFragment;
};

export type OrganizationDomainDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type OrganizationDomainDeleteMutation = { __typename?: "Mutation" } & {
  organizationDomainDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type OrganizationDomainVerifyMutationVariables = Exact<{
  input: OrganizationDomainVerificationInput;
}>;

export type OrganizationDomainVerifyMutation = { __typename?: "Mutation" } & {
  organizationDomainVerify: { __typename?: "OrganizationDomainPayload" } & OrganizationDomainPayloadFragment;
};

export type OrganizationInviteCreateMutationVariables = Exact<{
  input: OrganizationInviteCreateInput;
}>;

export type OrganizationInviteCreateMutation = { __typename?: "Mutation" } & {
  organizationInviteCreate: { __typename?: "OrganizationInvitePayload" } & OrganizationInvitePayloadFragment;
};

export type OrganizationInviteDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type OrganizationInviteDeleteMutation = { __typename?: "Mutation" } & {
  organizationInviteDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type OrganizationUpdateMutationVariables = Exact<{
  input: UpdateOrganizationInput;
}>;

export type OrganizationUpdateMutation = { __typename?: "Mutation" } & {
  organizationUpdate: { __typename?: "OrganizationPayload" } & OrganizationPayloadFragment;
};

export type ProjectArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type ProjectArchiveMutation = { __typename?: "Mutation" } & {
  projectArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type ProjectCreateMutationVariables = Exact<{
  input: ProjectCreateInput;
}>;

export type ProjectCreateMutation = { __typename?: "Mutation" } & {
  projectCreate: { __typename?: "ProjectPayload" } & ProjectPayloadFragment;
};

export type ProjectLinkCreateMutationVariables = Exact<{
  input: ProjectLinkCreateInput;
}>;

export type ProjectLinkCreateMutation = { __typename?: "Mutation" } & {
  projectLinkCreate: { __typename?: "ProjectLinkPayload" } & ProjectLinkPayloadFragment;
};

export type ProjectLinkDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type ProjectLinkDeleteMutation = { __typename?: "Mutation" } & {
  projectLinkDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type ProjectUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: ProjectUpdateInput;
}>;

export type ProjectUpdateMutation = { __typename?: "Mutation" } & {
  projectUpdate: { __typename?: "ProjectPayload" } & ProjectPayloadFragment;
};

export type PushSubscriptionCreateMutationVariables = Exact<{
  input: PushSubscriptionCreateInput;
}>;

export type PushSubscriptionCreateMutation = { __typename?: "Mutation" } & {
  pushSubscriptionCreate: { __typename?: "PushSubscriptionPayload" } & PushSubscriptionPayloadFragment;
};

export type PushSubscriptionDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type PushSubscriptionDeleteMutation = { __typename?: "Mutation" } & {
  pushSubscriptionDelete: { __typename?: "PushSubscriptionPayload" } & PushSubscriptionPayloadFragment;
};

export type ReactionCreateMutationVariables = Exact<{
  input: ReactionCreateInput;
}>;

export type ReactionCreateMutation = { __typename?: "Mutation" } & {
  reactionCreate: { __typename?: "ReactionPayload" } & ReactionPayloadFragment;
};

export type ReactionDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type ReactionDeleteMutation = { __typename?: "Mutation" } & {
  reactionDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type RefreshGoogleSheetsDataMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type RefreshGoogleSheetsDataMutation = { __typename?: "Mutation" } & {
  refreshGoogleSheetsData: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type ResentOrganizationInviteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type ResentOrganizationInviteMutation = { __typename?: "Mutation" } & {
  resentOrganizationInvite: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type SamlTokenUserAccountAuthMutationVariables = Exact<{
  input: TokenUserAccountAuthInput;
}>;

export type SamlTokenUserAccountAuthMutation = { __typename?: "Mutation" } & {
  samlTokenUserAccountAuth: { __typename?: "AuthResolverResponse" } & AuthResolverResponseFragment;
};

export type SubscriptionArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type SubscriptionArchiveMutation = { __typename?: "Mutation" } & {
  subscriptionArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type SubscriptionSessionCreateMutationVariables = Exact<{
  plan: Scalars["String"];
}>;

export type SubscriptionSessionCreateMutation = { __typename?: "Mutation" } & {
  subscriptionSessionCreate: { __typename?: "SubscriptionSessionPayload" } & SubscriptionSessionPayloadFragment;
};

export type SubscriptionUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: SubscriptionUpdateInput;
}>;

export type SubscriptionUpdateMutation = { __typename?: "Mutation" } & {
  subscriptionUpdate: { __typename?: "SubscriptionPayload" } & SubscriptionPayloadFragment;
};

export type SubscriptionUpdateSessionCreateMutationVariables = Exact<{ [key: string]: never }>;

export type SubscriptionUpdateSessionCreateMutation = { __typename?: "Mutation" } & {
  subscriptionUpdateSessionCreate: { __typename?: "SubscriptionSessionPayload" } & SubscriptionSessionPayloadFragment;
};

export type SubscriptionUpgradeMutationVariables = Exact<{
  id: Scalars["String"];
  type: Scalars["String"];
}>;

export type SubscriptionUpgradeMutation = { __typename?: "Mutation" } & {
  subscriptionUpgrade: { __typename?: "SubscriptionPayload" } & SubscriptionPayloadFragment;
};

export type TeamArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type TeamArchiveMutation = { __typename?: "Mutation" } & {
  teamArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type TeamCreateMutationVariables = Exact<{
  copySettingsFromTeamId?: Maybe<Scalars["String"]>;
  input: TeamCreateInput;
}>;

export type TeamCreateMutation = { __typename?: "Mutation" } & {
  teamCreate: { __typename?: "TeamPayload" } & TeamPayloadFragment;
};

export type TeamDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type TeamDeleteMutation = { __typename?: "Mutation" } & {
  teamDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type TeamMembershipCreateMutationVariables = Exact<{
  input: TeamMembershipCreateInput;
}>;

export type TeamMembershipCreateMutation = { __typename?: "Mutation" } & {
  teamMembershipCreate: { __typename?: "TeamMembershipPayload" } & TeamMembershipPayloadFragment;
};

export type TeamMembershipDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type TeamMembershipDeleteMutation = { __typename?: "Mutation" } & {
  teamMembershipDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type TeamUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: TeamUpdateInput;
}>;

export type TeamUpdateMutation = { __typename?: "Mutation" } & {
  teamUpdate: { __typename?: "TeamPayload" } & TeamPayloadFragment;
};

export type TemplateCreateMutationVariables = Exact<{
  input: TemplateCreateInput;
}>;

export type TemplateCreateMutation = { __typename?: "Mutation" } & {
  templateCreate: { __typename?: "TemplatePayload" } & TemplatePayloadFragment;
};

export type TemplateDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type TemplateDeleteMutation = { __typename?: "Mutation" } & {
  templateDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type TemplateUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: TemplateUpdateInput;
}>;

export type TemplateUpdateMutation = { __typename?: "Mutation" } & {
  templateUpdate: { __typename?: "TemplatePayload" } & TemplatePayloadFragment;
};

export type UserDemoteAdminMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type UserDemoteAdminMutation = { __typename?: "Mutation" } & {
  userDemoteAdmin: { __typename?: "UserAdminPayload" } & UserAdminPayloadFragment;
};

export type UserFlagUpdateMutationVariables = Exact<{
  flag: UserFlagType;
  operation: UserFlagUpdateOperation;
}>;

export type UserFlagUpdateMutation = { __typename?: "Mutation" } & {
  userFlagUpdate: { __typename?: "UserSettingsFlagPayload" } & UserSettingsFlagPayloadFragment;
};

export type UserPromoteAdminMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type UserPromoteAdminMutation = { __typename?: "Mutation" } & {
  userPromoteAdmin: { __typename?: "UserAdminPayload" } & UserAdminPayloadFragment;
};

export type UserSettingsFlagIncrementMutationVariables = Exact<{
  flag: Scalars["String"];
}>;

export type UserSettingsFlagIncrementMutation = { __typename?: "Mutation" } & {
  userSettingsFlagIncrement: { __typename?: "UserSettingsFlagPayload" } & UserSettingsFlagPayloadFragment;
};

export type UserSettingsFlagsResetMutationVariables = Exact<{ [key: string]: never }>;

export type UserSettingsFlagsResetMutation = { __typename?: "Mutation" } & {
  userSettingsFlagsReset: { __typename?: "UserSettingsFlagsResetPayload" } & UserSettingsFlagsResetPayloadFragment;
};

export type UserSettingsUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: UserSettingsUpdateInput;
}>;

export type UserSettingsUpdateMutation = { __typename?: "Mutation" } & {
  userSettingsUpdate: { __typename?: "UserSettingsPayload" } & UserSettingsPayloadFragment;
};

export type UserSubscribeToNewsletterMutationVariables = Exact<{ [key: string]: never }>;

export type UserSubscribeToNewsletterMutation = { __typename?: "Mutation" } & {
  userSubscribeToNewsletter: {
    __typename?: "UserSubscribeToNewsletterPayload";
  } & UserSubscribeToNewsletterPayloadFragment;
};

export type UserSuspendMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type UserSuspendMutation = { __typename?: "Mutation" } & {
  userSuspend: { __typename?: "UserAdminPayload" } & UserAdminPayloadFragment;
};

export type UserUnsuspendMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type UserUnsuspendMutation = { __typename?: "Mutation" } & {
  userUnsuspend: { __typename?: "UserAdminPayload" } & UserAdminPayloadFragment;
};

export type UserUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: UpdateUserInput;
}>;

export type UserUpdateMutation = { __typename?: "Mutation" } & {
  userUpdate: { __typename?: "UserPayload" } & UserPayloadFragment;
};

export type ViewPreferencesCreateMutationVariables = Exact<{
  input: ViewPreferencesCreateInput;
}>;

export type ViewPreferencesCreateMutation = { __typename?: "Mutation" } & {
  viewPreferencesCreate: { __typename?: "ViewPreferencesPayload" } & ViewPreferencesPayloadFragment;
};

export type ViewPreferencesDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type ViewPreferencesDeleteMutation = { __typename?: "Mutation" } & {
  viewPreferencesDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type ViewPreferencesUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: ViewPreferencesUpdateInput;
}>;

export type ViewPreferencesUpdateMutation = { __typename?: "Mutation" } & {
  viewPreferencesUpdate: { __typename?: "ViewPreferencesPayload" } & ViewPreferencesPayloadFragment;
};

export type WebhookCreateMutationVariables = Exact<{
  input: WebhookCreateInput;
}>;

export type WebhookCreateMutation = { __typename?: "Mutation" } & {
  webhookCreate: { __typename?: "WebhookPayload" } & WebhookPayloadFragment;
};

export type WebhookDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type WebhookDeleteMutation = { __typename?: "Mutation" } & {
  webhookDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type WebhookUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: WebhookUpdateInput;
}>;

export type WebhookUpdateMutation = { __typename?: "Mutation" } & {
  webhookUpdate: { __typename?: "WebhookPayload" } & WebhookPayloadFragment;
};

export type WorkflowStateArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type WorkflowStateArchiveMutation = { __typename?: "Mutation" } & {
  workflowStateArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type WorkflowStateCreateMutationVariables = Exact<{
  input: WorkflowStateCreateInput;
}>;

export type WorkflowStateCreateMutation = { __typename?: "Mutation" } & {
  workflowStateCreate: { __typename?: "WorkflowStatePayload" } & WorkflowStatePayloadFragment;
};

export type WorkflowStateUpdateMutationVariables = Exact<{
  id: Scalars["String"];
  input: WorkflowStateUpdateInput;
}>;

export type WorkflowStateUpdateMutation = { __typename?: "Mutation" } & {
  workflowStateUpdate: { __typename?: "WorkflowStatePayload" } & WorkflowStatePayloadFragment;
};

export const FileUploadFragmentDoc: DocumentNode<FileUploadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileUpload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "FileUpload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "metaData" } },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          { kind: "Field", name: { kind: "Name", value: "contentType" } },
          { kind: "Field", name: { kind: "Name", value: "assetUrl" } },
          { kind: "Field", name: { kind: "Name", value: "filename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const TemplateFragmentDoc: DocumentNode<TemplateFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Template" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Template" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "templateData" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const UserFragmentDoc: DocumentNode<UserFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "User" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "avatarUrl" } },
          { kind: "Field", name: { kind: "Name", value: "createdIssueCount" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "lastSeen" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "inviteHash" } },
          { kind: "Field", name: { kind: "Name", value: "active" } },
          { kind: "Field", name: { kind: "Name", value: "admin" } },
        ],
      },
    },
  ],
};
export const UserAccountFragmentDoc: DocumentNode<UserAccountFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserAccount" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserAccount" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "service" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "users" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "User" } }],
            },
          },
        ],
      },
    },
    ...UserFragmentDoc.definitions,
  ],
};
export const DocumentStepFragmentDoc: DocumentNode<DocumentStepFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DocumentStep" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentStep" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "clientId" } },
          { kind: "Field", name: { kind: "Name", value: "step" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
};
export const SyncResponseFragmentDoc: DocumentNode<SyncResponseFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SyncResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SyncResponse" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "archive" } },
          { kind: "Field", name: { kind: "Name", value: "delta" } },
          { kind: "Field", name: { kind: "Name", value: "state" } },
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "databaseVersion" } },
        ],
      },
    },
  ],
};
export const ArchiveResponseFragmentDoc: DocumentNode<ArchiveResponseFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArchiveResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ArchiveResponse" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "archive" } },
          { kind: "Field", name: { kind: "Name", value: "totalCount" } },
          { kind: "Field", name: { kind: "Name", value: "databaseVersion" } },
        ],
      },
    },
  ],
};
export const AuthorizedApplicationFragmentDoc: DocumentNode<AuthorizedApplicationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "AuthorizedApplication" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "AuthorizedApplication" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "developer" } },
          { kind: "Field", name: { kind: "Name", value: "appId" } },
          { kind: "Field", name: { kind: "Name", value: "clientId" } },
          { kind: "Field", name: { kind: "Name", value: "scope" } },
          { kind: "Field", name: { kind: "Name", value: "developerUrl" } },
        ],
      },
    },
  ],
};
export const UserAuthorizedApplicationFragmentDoc: DocumentNode<UserAuthorizedApplicationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserAuthorizedApplication" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserAuthorizedApplication" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "developer" } },
          { kind: "Field", name: { kind: "Name", value: "clientId" } },
          { kind: "Field", name: { kind: "Name", value: "developerUrl" } },
          { kind: "Field", name: { kind: "Name", value: "isAuthorized" } },
        ],
      },
    },
  ],
};
export const ApplicationFragmentDoc: DocumentNode<ApplicationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Application" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Application" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "developer" } },
          { kind: "Field", name: { kind: "Name", value: "clientId" } },
          { kind: "Field", name: { kind: "Name", value: "developerUrl" } },
        ],
      },
    },
  ],
};
export const GoogleSheetsSettingsFragmentDoc: DocumentNode<GoogleSheetsSettingsFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GoogleSheetsSettings" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GoogleSheetsSettings" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "sheetId" } },
          { kind: "Field", name: { kind: "Name", value: "spreadsheetId" } },
          { kind: "Field", name: { kind: "Name", value: "spreadsheetUrl" } },
          { kind: "Field", name: { kind: "Name", value: "updatedIssuesAt" } },
        ],
      },
    },
  ],
};
export const SentrySettingsFragmentDoc: DocumentNode<SentrySettingsFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SentrySettings" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SentrySettings" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "organizationSlug" } }],
      },
    },
  ],
};
export const SlackPostSettingsFragmentDoc: DocumentNode<SlackPostSettingsFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SlackPostSettings" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SlackPostSettings" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "channel" } },
          { kind: "Field", name: { kind: "Name", value: "channelId" } },
          { kind: "Field", name: { kind: "Name", value: "configurationUrl" } },
        ],
      },
    },
  ],
};
export const IntegrationSettingsFragmentDoc: DocumentNode<IntegrationSettingsFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IntegrationSettings" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IntegrationSettings" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "googleSheets" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "GoogleSheetsSettings" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "sentry" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SentrySettings" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "slackPost" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SlackPostSettings" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "slackProjectPost" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SlackPostSettings" } }],
            },
          },
        ],
      },
    },
    ...GoogleSheetsSettingsFragmentDoc.definitions,
    ...SentrySettingsFragmentDoc.definitions,
    ...SlackPostSettingsFragmentDoc.definitions,
  ],
};
export const SamlConfigurationFragmentDoc: DocumentNode<SamlConfigurationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SamlConfiguration" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SamlConfiguration" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "ssoBinding" } },
          { kind: "Field", name: { kind: "Name", value: "allowedDomains" } },
          { kind: "Field", name: { kind: "Name", value: "ssoEndpoint" } },
          { kind: "Field", name: { kind: "Name", value: "ssoSignAlgo" } },
          { kind: "Field", name: { kind: "Name", value: "ssoSigningCert" } },
        ],
      },
    },
  ],
};
export const UserSettingsFragmentDoc: DocumentNode<UserSettingsFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserSettings" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserSettings" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "unsubscribedFrom" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "notificationPreferences" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const SubscriptionFragmentDoc: DocumentNode<SubscriptionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Subscription" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Subscription" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "canceledAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "seats" } },
          { kind: "Field", name: { kind: "Name", value: "pendingChangeType" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
};
export const ApiKeyFragmentDoc: DocumentNode<ApiKeyFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApiKey" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ApiKey" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
};
export const PageInfoFragmentDoc: DocumentNode<PageInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageInfo" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "startCursor" } },
          { kind: "Field", name: { kind: "Name", value: "endCursor" } },
          { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } },
          { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
        ],
      },
    },
  ],
};
export const ApiKeyConnectionFragmentDoc: DocumentNode<ApiKeyConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApiKeyConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ApiKeyConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ApiKey" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...ApiKeyFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const ApiKeyPayloadFragmentDoc: DocumentNode<ApiKeyPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApiKeyPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ApiKeyPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "apiKey" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ApiKey" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
    ...ApiKeyFragmentDoc.definitions,
  ],
};
export const ArchivePayloadFragmentDoc: DocumentNode<ArchivePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArchivePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ArchivePayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const OrganizationFragmentDoc: DocumentNode<OrganizationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Organization" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Organization" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "allowedAuthServices" } },
          { kind: "Field", name: { kind: "Name", value: "gitBranchFormat" } },
          { kind: "Field", name: { kind: "Name", value: "userCount" } },
          { kind: "Field", name: { kind: "Name", value: "createdIssueCount" } },
          { kind: "Field", name: { kind: "Name", value: "periodUploadVolume" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "logoUrl" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "urlKey" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "samlEnabled" } },
          { kind: "Field", name: { kind: "Name", value: "gitLinkbackMessagesEnabled" } },
          { kind: "Field", name: { kind: "Name", value: "gitPublicLinkbackMessagesEnabled" } },
          { kind: "Field", name: { kind: "Name", value: "roadmapEnabled" } },
        ],
      },
    },
  ],
};
export const AuthResolverResponseFragmentDoc: DocumentNode<AuthResolverResponseFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "AuthResolverResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "AuthResolverResponse" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "token" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "availableOrganizations" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Organization" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "allowDomainAccess" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "users" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "User" } }],
            },
          },
        ],
      },
    },
    ...OrganizationFragmentDoc.definitions,
    ...UserFragmentDoc.definitions,
  ],
};
export const InvoiceFragmentDoc: DocumentNode<InvoiceFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Invoice" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Invoice" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "dueDate" } },
          { kind: "Field", name: { kind: "Name", value: "total" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
        ],
      },
    },
  ],
};
export const CardFragmentDoc: DocumentNode<CardFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Card" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Card" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "brand" } },
          { kind: "Field", name: { kind: "Name", value: "last4" } },
        ],
      },
    },
  ],
};
export const BillingDetailsPayloadFragmentDoc: DocumentNode<BillingDetailsPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BillingDetailsPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BillingDetailsPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "invoices" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Invoice" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "paymentMethod" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Card" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
    ...InvoiceFragmentDoc.definitions,
    ...CardFragmentDoc.definitions,
  ],
};
export const BillingEmailPayloadFragmentDoc: DocumentNode<BillingEmailPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BillingEmailPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BillingEmailPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const StepsResponseFragmentDoc: DocumentNode<StepsResponseFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StepsResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "StepsResponse" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "clientIds" } },
          { kind: "Field", name: { kind: "Name", value: "steps" } },
        ],
      },
    },
  ],
};
export const CollaborationDocumentUpdatePayloadFragmentDoc: DocumentNode<
  CollaborationDocumentUpdatePayloadFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CollaborationDocumentUpdatePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CollaborationDocumentUpdatePayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "steps" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "StepsResponse" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
    ...StepsResponseFragmentDoc.definitions,
  ],
};
export const CommentFragmentDoc: DocumentNode<CommentFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Comment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Comment" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "body" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "editedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const CommentConnectionFragmentDoc: DocumentNode<CommentConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CommentConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CommentConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Comment" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...CommentFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const CommentPayloadFragmentDoc: DocumentNode<CommentPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CommentPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CommentPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "comment" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const ContactPayloadFragmentDoc: DocumentNode<ContactPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContactPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContactPayload" } },
      selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "success" } }] },
    },
  ],
};
export const CreateCsvExportReportPayloadFragmentDoc: DocumentNode<CreateCsvExportReportPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CreateCsvExportReportPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CreateCsvExportReportPayload" } },
      selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "success" } }] },
    },
  ],
};
export const CreateOrJoinOrganizationResponseFragmentDoc: DocumentNode<
  CreateOrJoinOrganizationResponseFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CreateOrJoinOrganizationResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CreateOrJoinOrganizationResponse" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const CustomViewFragmentDoc: DocumentNode<CustomViewFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CustomView" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CustomView" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "color" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "filters" } },
          { kind: "Field", name: { kind: "Name", value: "icon" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "shared" } },
        ],
      },
    },
  ],
};
export const CustomViewConnectionFragmentDoc: DocumentNode<CustomViewConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CustomViewConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CustomViewConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CustomView" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...CustomViewFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const CustomViewPayloadFragmentDoc: DocumentNode<CustomViewPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CustomViewPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CustomViewPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "customView" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const CycleFragmentDoc: DocumentNode<CycleFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Cycle" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Cycle" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "completedAt" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "endsAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "completedScopeHistory" } },
          { kind: "Field", name: { kind: "Name", value: "completedIssueCountHistory" } },
          { kind: "Field", name: { kind: "Name", value: "number" } },
          { kind: "Field", name: { kind: "Name", value: "startsAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "scopeHistory" } },
          { kind: "Field", name: { kind: "Name", value: "issueCountHistory" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
};
export const CycleConnectionFragmentDoc: DocumentNode<CycleConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CycleConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CycleConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Cycle" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...CycleFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const CyclePayloadFragmentDoc: DocumentNode<CyclePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CyclePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CyclePayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycle" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const DebugPayloadFragmentDoc: DocumentNode<DebugPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DebugPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DebugPayload" } },
      selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "success" } }] },
    },
  ],
};
export const EmailUnsubscribePayloadFragmentDoc: DocumentNode<EmailUnsubscribePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EmailUnsubscribePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "EmailUnsubscribePayload" } },
      selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "success" } }] },
    },
  ],
};
export const EmailUserAccountAuthChallengeResponseFragmentDoc: DocumentNode<
  EmailUserAccountAuthChallengeResponseFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EmailUserAccountAuthChallengeResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "EmailUserAccountAuthChallengeResponse" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "authType" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const EmojiFragmentDoc: DocumentNode<EmojiFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Emoji" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Emoji" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const EmojiConnectionFragmentDoc: DocumentNode<EmojiConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EmojiConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "EmojiConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Emoji" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...EmojiFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const EmojiPayloadFragmentDoc: DocumentNode<EmojiPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EmojiPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "EmojiPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emoji" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const EventPayloadFragmentDoc: DocumentNode<EventPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "EventPayload" } },
      selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "success" } }] },
    },
  ],
};
export const FavoriteFragmentDoc: DocumentNode<FavoriteFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Favorite" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Favorite" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycle" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "label" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "projectTeam" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
};
export const FavoriteConnectionFragmentDoc: DocumentNode<FavoriteConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FavoriteConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "FavoriteConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Favorite" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...FavoriteFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const FavoritePayloadFragmentDoc: DocumentNode<FavoritePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FavoritePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "FavoritePayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "favorite" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const FeedbackPayloadFragmentDoc: DocumentNode<FeedbackPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FeedbackPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "FeedbackPayload" } },
      selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "success" } }] },
    },
  ],
};
export const FigmaEmbedFragmentDoc: DocumentNode<FigmaEmbedFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FigmaEmbed" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "FigmaEmbed" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "nodeName" } },
        ],
      },
    },
  ],
};
export const FigmaEmbedPayloadFragmentDoc: DocumentNode<FigmaEmbedPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FigmaEmbedPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "FigmaEmbedPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "figmaEmbed" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "FigmaEmbed" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
    ...FigmaEmbedFragmentDoc.definitions,
  ],
};
export const ImageUploadFromUrlPayloadFragmentDoc: DocumentNode<ImageUploadFromUrlPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageUploadFromUrlPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageUploadFromUrlPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const IntegrationFragmentDoc: DocumentNode<IntegrationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Integration" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Integration" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "service" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const IntegrationConnectionFragmentDoc: DocumentNode<IntegrationConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IntegrationConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IntegrationConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Integration" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...IntegrationFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const IntegrationPayloadFragmentDoc: DocumentNode<IntegrationPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IntegrationPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IntegrationPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "integration" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const CommitPayloadFragmentDoc: DocumentNode<CommitPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CommitPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CommitPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "added" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "message" } },
          { kind: "Field", name: { kind: "Name", value: "modified" } },
          { kind: "Field", name: { kind: "Name", value: "removed" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
        ],
      },
    },
  ],
};
export const PullRequestPayloadFragmentDoc: DocumentNode<PullRequestPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PullRequestPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PullRequestPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "branch" } },
          { kind: "Field", name: { kind: "Name", value: "closedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "draft" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "mergedAt" } },
          { kind: "Field", name: { kind: "Name", value: "number" } },
          { kind: "Field", name: { kind: "Name", value: "repoLogin" } },
          { kind: "Field", name: { kind: "Name", value: "repoName" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "userLogin" } },
        ],
      },
    },
  ],
};
export const SentryIssuePayloadFragmentDoc: DocumentNode<SentryIssuePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SentryIssuePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SentryIssuePayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "issueId" } },
          { kind: "Field", name: { kind: "Name", value: "actorId" } },
          { kind: "Field", name: { kind: "Name", value: "projectId" } },
          { kind: "Field", name: { kind: "Name", value: "firstSeen" } },
          { kind: "Field", name: { kind: "Name", value: "webUrl" } },
          { kind: "Field", name: { kind: "Name", value: "actorName" } },
          { kind: "Field", name: { kind: "Name", value: "firstVersion" } },
          { kind: "Field", name: { kind: "Name", value: "shortId" } },
          { kind: "Field", name: { kind: "Name", value: "projectSlug" } },
          { kind: "Field", name: { kind: "Name", value: "issueTitle" } },
          { kind: "Field", name: { kind: "Name", value: "actorType" } },
        ],
      },
    },
  ],
};
export const IntegrationResourceDataFragmentDoc: DocumentNode<IntegrationResourceDataFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IntegrationResourceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IntegrationResourceData" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "githubCommit" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CommitPayload" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "githubPullRequest" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PullRequestPayload" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "gitlabMergeRequest" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PullRequestPayload" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "sentryIssue" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SentryIssuePayload" } }],
            },
          },
        ],
      },
    },
    ...CommitPayloadFragmentDoc.definitions,
    ...PullRequestPayloadFragmentDoc.definitions,
    ...SentryIssuePayloadFragmentDoc.definitions,
  ],
};
export const IntegrationResourceFragmentDoc: DocumentNode<IntegrationResourceFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IntegrationResource" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IntegrationResource" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "data" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationResourceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pullRequest" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PullRequestPayload" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "resourceId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "integration" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "resourceType" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    ...IntegrationResourceDataFragmentDoc.definitions,
    ...PullRequestPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationResourceConnectionFragmentDoc: DocumentNode<IntegrationResourceConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IntegrationResourceConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IntegrationResourceConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationResource" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...IntegrationResourceFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const InviteDataFragmentDoc: DocumentNode<InviteDataFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "InviteData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "InviteData" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "avatarURLs" } },
          { kind: "Field", name: { kind: "Name", value: "teamIds" } },
          { kind: "Field", name: { kind: "Name", value: "teamNames" } },
          { kind: "Field", name: { kind: "Name", value: "organizationDomain" } },
          { kind: "Field", name: { kind: "Name", value: "organizationLogoUrl" } },
          { kind: "Field", name: { kind: "Name", value: "inviterName" } },
          { kind: "Field", name: { kind: "Name", value: "organizationName" } },
          { kind: "Field", name: { kind: "Name", value: "userCount" } },
        ],
      },
    },
  ],
};
export const InvitePagePayloadFragmentDoc: DocumentNode<InvitePagePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "InvitePagePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "InvitePagePayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "inviteData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "InviteData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
    ...InviteDataFragmentDoc.definitions,
  ],
};
export const IssueFragmentDoc: DocumentNode<IssueFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Issue" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Issue" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "identifier" } },
          { kind: "Field", name: { kind: "Name", value: "priorityLabel" } },
          { kind: "Field", name: { kind: "Name", value: "previousIdentifiers" } },
          { kind: "Field", name: { kind: "Name", value: "branchName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cycle" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "dueDate" } },
          { kind: "Field", name: { kind: "Name", value: "estimate" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "number" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "boardOrder" } },
          { kind: "Field", name: { kind: "Name", value: "subIssueSortOrder" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "parent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "priority" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "autoArchivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "autoClosedAt" } },
          { kind: "Field", name: { kind: "Name", value: "canceledAt" } },
          { kind: "Field", name: { kind: "Name", value: "completedAt" } },
          { kind: "Field", name: { kind: "Name", value: "startedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "assignee" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "state" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const IssueConnectionFragmentDoc: DocumentNode<IssueConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Issue" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...IssueFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const IssueHistoryFragmentDoc: DocumentNode<IssueHistoryFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueHistory" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueHistory" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "relationChanges" } },
          { kind: "Field", name: { kind: "Name", value: "addedLabelIds" } },
          { kind: "Field", name: { kind: "Name", value: "removedLabelIds" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "toCycle" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "toParent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "toProject" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "toState" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "fromCycle" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "fromParent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "fromProject" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "fromState" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "fromTeam" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "toTeam" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "fromAssignee" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "toAssignee" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "actor" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "fromDueDate" } },
          { kind: "Field", name: { kind: "Name", value: "toDueDate" } },
          { kind: "Field", name: { kind: "Name", value: "fromEstimate" } },
          { kind: "Field", name: { kind: "Name", value: "toEstimate" } },
          { kind: "Field", name: { kind: "Name", value: "fromPriority" } },
          { kind: "Field", name: { kind: "Name", value: "toPriority" } },
          { kind: "Field", name: { kind: "Name", value: "fromTitle" } },
          { kind: "Field", name: { kind: "Name", value: "toTitle" } },
          { kind: "Field", name: { kind: "Name", value: "archived" } },
          { kind: "Field", name: { kind: "Name", value: "updatedDescription" } },
          { kind: "Field", name: { kind: "Name", value: "autoArchived" } },
          { kind: "Field", name: { kind: "Name", value: "autoClosed" } },
        ],
      },
    },
  ],
};
export const IssueHistoryConnectionFragmentDoc: DocumentNode<IssueHistoryConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueHistoryConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueHistoryConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueHistory" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...IssueHistoryFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const IssueImportFragmentDoc: DocumentNode<IssueImportFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueImport" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueImport" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "creatorId" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "service" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "error" } },
        ],
      },
    },
  ],
};
export const IssueImportPayloadFragmentDoc: DocumentNode<IssueImportPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueImportPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueImportPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "issueImport" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueImport" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
    ...IssueImportFragmentDoc.definitions,
  ],
};
export const IssueLabelFragmentDoc: DocumentNode<IssueLabelFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueLabel" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueLabel" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "color" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const IssueLabelConnectionFragmentDoc: DocumentNode<IssueLabelConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueLabelConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueLabelConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabel" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...IssueLabelFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const IssueLabelPayloadFragmentDoc: DocumentNode<IssueLabelPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueLabelPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueLabelPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabel" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const IssuePayloadFragmentDoc: DocumentNode<IssuePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssuePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssuePayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const IssueRelationFragmentDoc: DocumentNode<IssueRelationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueRelation" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueRelation" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedIssue" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
};
export const IssueRelationConnectionFragmentDoc: DocumentNode<IssueRelationConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueRelationConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueRelationConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueRelation" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...IssueRelationFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const IssueRelationPayloadFragmentDoc: DocumentNode<IssueRelationPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueRelationPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueRelationPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "issueRelation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const MilestoneFragmentDoc: DocumentNode<MilestoneFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Milestone" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Milestone" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
};
export const MilestoneConnectionFragmentDoc: DocumentNode<MilestoneConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MilestoneConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MilestoneConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Milestone" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...MilestoneFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const MilestonePayloadFragmentDoc: DocumentNode<MilestonePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MilestonePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MilestonePayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "milestone" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const NotificationFragmentDoc: DocumentNode<NotificationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Notification" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Notification" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "reactionEmoji" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "comment" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "emailedAt" } },
          { kind: "Field", name: { kind: "Name", value: "readAt" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
};
export const NotificationConnectionFragmentDoc: DocumentNode<NotificationConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NotificationConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Notification" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...NotificationFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const NotificationPayloadFragmentDoc: DocumentNode<NotificationPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NotificationPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "notification" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const NotificationSubscriptionFragmentDoc: DocumentNode<NotificationSubscriptionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationSubscription" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NotificationSubscription" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const NotificationSubscriptionConnectionFragmentDoc: DocumentNode<
  NotificationSubscriptionConnectionFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationSubscriptionConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NotificationSubscriptionConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "NotificationSubscription" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...NotificationSubscriptionFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const NotificationSubscriptionPayloadFragmentDoc: DocumentNode<
  NotificationSubscriptionPayloadFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationSubscriptionPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NotificationSubscriptionPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationSubscription" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const OauthClientFragmentDoc: DocumentNode<OauthClientFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OauthClient" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OauthClient" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "redirectUris" } },
          { kind: "Field", name: { kind: "Name", value: "developer" } },
          { kind: "Field", name: { kind: "Name", value: "clientId" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "clientSecret" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "developerUrl" } },
        ],
      },
    },
  ],
};
export const OauthClientPayloadFragmentDoc: DocumentNode<OauthClientPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OauthClientPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OauthClientPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "oauthClient" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OauthClient" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
    ...OauthClientFragmentDoc.definitions,
  ],
};
export const OauthTokenRevokePayloadFragmentDoc: DocumentNode<OauthTokenRevokePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OauthTokenRevokePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OauthTokenRevokePayload" } },
      selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "success" } }] },
    },
  ],
};
export const OrganizationDeletePayloadFragmentDoc: DocumentNode<OrganizationDeletePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationDeletePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationDeletePayload" } },
      selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "success" } }] },
    },
  ],
};
export const OrganizationDomainFragmentDoc: DocumentNode<OrganizationDomainFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationDomain" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationDomain" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "verificationEmail" } },
          { kind: "Field", name: { kind: "Name", value: "verified" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const OrganizationDomainPayloadFragmentDoc: DocumentNode<OrganizationDomainPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationDomainPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationDomainPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationDomain" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationDomain" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
    ...OrganizationDomainFragmentDoc.definitions,
  ],
};
export const OrganizationDomainSimplePayloadFragmentDoc: DocumentNode<
  OrganizationDomainSimplePayloadFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationDomainSimplePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationDomainSimplePayload" } },
      selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "success" } }] },
    },
  ],
};
export const OrganizationExistsPayloadFragmentDoc: DocumentNode<OrganizationExistsPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationExistsPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationExistsPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "success" } },
          { kind: "Field", name: { kind: "Name", value: "exists" } },
        ],
      },
    },
  ],
};
export const OrganizationInviteFragmentDoc: DocumentNode<OrganizationInviteFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationInvite" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationInvite" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "external" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "acceptedAt" } },
          { kind: "Field", name: { kind: "Name", value: "expiresAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "inviter" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "invitee" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const OrganizationInviteConnectionFragmentDoc: DocumentNode<OrganizationInviteConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationInviteConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationInviteConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationInvite" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...OrganizationInviteFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const OrganizationInvitePayloadFragmentDoc: DocumentNode<OrganizationInvitePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationInvitePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationInvitePayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationInvite" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationInvite" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
    ...OrganizationInviteFragmentDoc.definitions,
  ],
};
export const OrganizationPayloadFragmentDoc: DocumentNode<OrganizationPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const ProjectFragmentDoc: DocumentNode<ProjectFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Project" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Project" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "targetDate" } },
          { kind: "Field", name: { kind: "Name", value: "icon" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "milestone" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "completedScopeHistory" } },
          { kind: "Field", name: { kind: "Name", value: "completedIssueCountHistory" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "lead" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "color" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "slugId" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "canceledAt" } },
          { kind: "Field", name: { kind: "Name", value: "completedAt" } },
          { kind: "Field", name: { kind: "Name", value: "startedAt" } },
          { kind: "Field", name: { kind: "Name", value: "scopeHistory" } },
          { kind: "Field", name: { kind: "Name", value: "issueCountHistory" } },
          { kind: "Field", name: { kind: "Name", value: "state" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "slackIssueComments" } },
          { kind: "Field", name: { kind: "Name", value: "slackNewIssue" } },
          { kind: "Field", name: { kind: "Name", value: "slackIssueStatuses" } },
        ],
      },
    },
  ],
};
export const ProjectConnectionFragmentDoc: DocumentNode<ProjectConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProjectConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ProjectConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Project" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...ProjectFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const ProjectLinkFragmentDoc: DocumentNode<ProjectLinkFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProjectLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ProjectLink" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const ProjectLinkConnectionFragmentDoc: DocumentNode<ProjectLinkConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProjectLinkConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ProjectLinkConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectLink" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...ProjectLinkFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const ProjectLinkPayloadFragmentDoc: DocumentNode<ProjectLinkPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProjectLinkPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ProjectLinkPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "projectLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const ProjectPayloadFragmentDoc: DocumentNode<ProjectPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProjectPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ProjectPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const PushSubscriptionFragmentDoc: DocumentNode<PushSubscriptionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PushSubscription" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PushSubscription" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
};
export const PushSubscriptionConnectionFragmentDoc: DocumentNode<PushSubscriptionConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PushSubscriptionConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PushSubscriptionConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PushSubscription" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...PushSubscriptionFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const PushSubscriptionPayloadFragmentDoc: DocumentNode<PushSubscriptionPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PushSubscriptionPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PushSubscriptionPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const ReactionFragmentDoc: DocumentNode<ReactionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Reaction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Reaction" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "emoji" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "comment" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const ReactionConnectionFragmentDoc: DocumentNode<ReactionConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReactionConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ReactionConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Reaction" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...ReactionFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const ReactionPayloadFragmentDoc: DocumentNode<ReactionPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReactionPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ReactionPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "reaction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const RotateSecretPayloadFragmentDoc: DocumentNode<RotateSecretPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RotateSecretPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RotateSecretPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const SsoUrlFromEmailResponseFragmentDoc: DocumentNode<SsoUrlFromEmailResponseFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SsoUrlFromEmailResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SsoUrlFromEmailResponse" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "samlSsoUrl" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const SubscriptionPayloadFragmentDoc: DocumentNode<SubscriptionPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SubscriptionPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SubscriptionPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "canceledAt" } },
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const SubscriptionSessionPayloadFragmentDoc: DocumentNode<SubscriptionSessionPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SubscriptionSessionPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SubscriptionSessionPayload" } },
      selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "session" } }] },
    },
  ],
};
export const SynchronizedPayloadFragmentDoc: DocumentNode<SynchronizedPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SynchronizedPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SynchronizedPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "lastSyncId" } }],
      },
    },
  ],
};
export const TeamFragmentDoc: DocumentNode<TeamFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Team" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Team" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "cycleIssueAutoAssignCompleted" } },
          { kind: "Field", name: { kind: "Name", value: "cycleIssueAutoAssignStarted" } },
          { kind: "Field", name: { kind: "Name", value: "cycleCalenderUrl" } },
          { kind: "Field", name: { kind: "Name", value: "upcomingCycleCount" } },
          { kind: "Field", name: { kind: "Name", value: "cycleLockToActive" } },
          { kind: "Field", name: { kind: "Name", value: "autoArchivePeriod" } },
          { kind: "Field", name: { kind: "Name", value: "autoClosePeriod" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "activeCycle" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "autoCloseStateId" } },
          { kind: "Field", name: { kind: "Name", value: "cycleCooldownTime" } },
          { kind: "Field", name: { kind: "Name", value: "cycleStartDay" } },
          { kind: "Field", name: { kind: "Name", value: "cycleDuration" } },
          { kind: "Field", name: { kind: "Name", value: "issueEstimationType" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "timezone" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "mergeWorkflowState" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "draftWorkflowState" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "startWorkflowState" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "reviewWorkflowState" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "markedAsDuplicateWorkflowState" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "inviteHash" } },
          { kind: "Field", name: { kind: "Name", value: "defaultIssueEstimate" } },
          { kind: "Field", name: { kind: "Name", value: "cyclesEnabled" } },
          { kind: "Field", name: { kind: "Name", value: "issueEstimationExtended" } },
          { kind: "Field", name: { kind: "Name", value: "issueEstimationAllowZero" } },
          { kind: "Field", name: { kind: "Name", value: "groupIssueHistory" } },
          { kind: "Field", name: { kind: "Name", value: "slackIssueComments" } },
          { kind: "Field", name: { kind: "Name", value: "slackNewIssue" } },
          { kind: "Field", name: { kind: "Name", value: "slackIssueStatuses" } },
        ],
      },
    },
  ],
};
export const TeamConnectionFragmentDoc: DocumentNode<TeamConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeamConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TeamConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Team" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...TeamFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const TeamMembershipFragmentDoc: DocumentNode<TeamMembershipFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeamMembership" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TeamMembership" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
};
export const TeamMembershipConnectionFragmentDoc: DocumentNode<TeamMembershipConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeamMembershipConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TeamMembershipConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamMembership" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...TeamMembershipFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const TeamMembershipPayloadFragmentDoc: DocumentNode<TeamMembershipPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeamMembershipPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TeamMembershipPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "teamMembership" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const TeamPayloadFragmentDoc: DocumentNode<TeamPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeamPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TeamPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const TemplateConnectionFragmentDoc: DocumentNode<TemplateConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TemplateConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TemplateConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const TemplatePayloadFragmentDoc: DocumentNode<TemplatePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TemplatePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TemplatePayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "template" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const UploadFileHeaderFragmentDoc: DocumentNode<UploadFileHeaderFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UploadFileHeader" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UploadFileHeader" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
  ],
};
export const UploadFileFragmentDoc: DocumentNode<UploadFileFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UploadFile" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UploadFile" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "assetUrl" } },
          { kind: "Field", name: { kind: "Name", value: "contentType" } },
          { kind: "Field", name: { kind: "Name", value: "filename" } },
          { kind: "Field", name: { kind: "Name", value: "uploadUrl" } },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "headers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UploadFileHeader" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "metaData" } },
        ],
      },
    },
    ...UploadFileHeaderFragmentDoc.definitions,
  ],
};
export const UploadPayloadFragmentDoc: DocumentNode<UploadPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UploadPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UploadPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "uploadFile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UploadFile" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
    ...UploadFileFragmentDoc.definitions,
  ],
};
export const UserAdminPayloadFragmentDoc: DocumentNode<UserAdminPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserAdminPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserAdminPayload" } },
      selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "success" } }] },
    },
  ],
};
export const UserConnectionFragmentDoc: DocumentNode<UserConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "User" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...UserFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const UserPayloadFragmentDoc: DocumentNode<UserPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const UserSettingsFlagPayloadFragmentDoc: DocumentNode<UserSettingsFlagPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserSettingsFlagPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserSettingsFlagPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "flag" } },
          { kind: "Field", name: { kind: "Name", value: "value" } },
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const UserSettingsFlagsResetPayloadFragmentDoc: DocumentNode<UserSettingsFlagsResetPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserSettingsFlagsResetPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserSettingsFlagsResetPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const UserSettingsPayloadFragmentDoc: DocumentNode<UserSettingsPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserSettingsPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserSettingsPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const UserSubscribeToNewsletterPayloadFragmentDoc: DocumentNode<
  UserSubscribeToNewsletterPayloadFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserSubscribeToNewsletterPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserSubscribeToNewsletterPayload" } },
      selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "success" } }] },
    },
  ],
};
export const ViewPreferencesFragmentDoc: DocumentNode<ViewPreferencesFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ViewPreferences" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ViewPreferences" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "viewType" } },
        ],
      },
    },
  ],
};
export const ViewPreferencesPayloadFragmentDoc: DocumentNode<ViewPreferencesPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ViewPreferencesPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ViewPreferencesPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "viewPreferences" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ViewPreferences" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
    ...ViewPreferencesFragmentDoc.definitions,
  ],
};
export const WebhookFragmentDoc: DocumentNode<WebhookFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Webhook" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Webhook" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "secret" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "resourceTypes" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "enabled" } },
        ],
      },
    },
  ],
};
export const WebhookConnectionFragmentDoc: DocumentNode<WebhookConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WebhookConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "WebhookConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Webhook" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...WebhookFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const WebhookPayloadFragmentDoc: DocumentNode<WebhookPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WebhookPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "WebhookPayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "webhook" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const WorkflowStateFragmentDoc: DocumentNode<WorkflowStateFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WorkflowState" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "WorkflowState" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          { kind: "Field", name: { kind: "Name", value: "color" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
};
export const WorkflowStateConnectionFragmentDoc: DocumentNode<WorkflowStateConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WorkflowStateConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "WorkflowStateConnection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WorkflowState" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" } }],
            },
          },
        ],
      },
    },
    ...WorkflowStateFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const WorkflowStatePayloadFragmentDoc: DocumentNode<WorkflowStatePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WorkflowStatePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "WorkflowStatePayload" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowState" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" } },
        ],
      },
    },
  ],
};
export const ApiKeysDocument: DocumentNode<ApiKeysQuery, ApiKeysQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "apiKeys" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "apiKeys" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ApiKeyConnection" } }],
            },
          },
        ],
      },
    },
    ...ApiKeyConnectionFragmentDoc.definitions,
  ],
};
export const ApplicationWithAuthorizationDocument: DocumentNode<
  ApplicationWithAuthorizationQuery,
  ApplicationWithAuthorizationQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "applicationWithAuthorization" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "clientId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "scope" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "applicationWithAuthorization" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "clientId" },
                value: { kind: "Variable", name: { kind: "Name", value: "clientId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "scope" },
                value: { kind: "Variable", name: { kind: "Name", value: "scope" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserAuthorizedApplication" } }],
            },
          },
        ],
      },
    },
    ...UserAuthorizedApplicationFragmentDoc.definitions,
  ],
};
export const ArchivedModelSyncDocument: DocumentNode<ArchivedModelSyncQuery, ArchivedModelSyncQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "archivedModelSync" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "identifier" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "modelClass" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "archivedModelSync" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "identifier" },
                value: { kind: "Variable", name: { kind: "Name", value: "identifier" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "modelClass" },
                value: { kind: "Variable", name: { kind: "Name", value: "modelClass" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchiveResponse" } }],
            },
          },
        ],
      },
    },
    ...ArchiveResponseFragmentDoc.definitions,
  ],
};
export const ArchivedModelsSyncDocument: DocumentNode<ArchivedModelsSyncQuery, ArchivedModelsSyncQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "archivedModelsSync" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "DateTime" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "modelClass" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "archivedModelsSync" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "modelClass" },
                value: { kind: "Variable", name: { kind: "Name", value: "modelClass" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "teamId" },
                value: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchiveResponse" } }],
            },
          },
        ],
      },
    },
    ...ArchiveResponseFragmentDoc.definitions,
  ],
};
export const AuthorizedApplicationsDocument: DocumentNode<
  AuthorizedApplicationsQuery,
  AuthorizedApplicationsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "authorizedApplications" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "authorizedApplications" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "appId" } },
                { kind: "Field", name: { kind: "Name", value: "clientId" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "developer" } },
                { kind: "Field", name: { kind: "Name", value: "developerUrl" } },
                { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "scope" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const AvailableUsersDocument: DocumentNode<AvailableUsersQuery, AvailableUsersQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "availableUsers" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "availableUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "AuthResolverResponse" } }],
            },
          },
        ],
      },
    },
    ...AuthResolverResponseFragmentDoc.definitions,
  ],
};
export const BillingDetailsDocument: DocumentNode<BillingDetailsQuery, BillingDetailsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "billingDetails" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "billingDetails" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BillingDetailsPayload" } }],
            },
          },
        ],
      },
    },
    ...BillingDetailsPayloadFragmentDoc.definitions,
  ],
};
export const BillingDetails_PaymentMethodDocument: DocumentNode<
  BillingDetails_PaymentMethodQuery,
  BillingDetails_PaymentMethodQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "billingDetails_paymentMethod" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "billingDetails" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "paymentMethod" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Card" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...CardFragmentDoc.definitions,
  ],
};
export const CollaborativeDocumentJoinDocument: DocumentNode<
  CollaborativeDocumentJoinQuery,
  CollaborativeDocumentJoinQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "collaborativeDocumentJoin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "clientId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "issueId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "version" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "collaborativeDocumentJoin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "clientId" },
                value: { kind: "Variable", name: { kind: "Name", value: "clientId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "issueId" },
                value: { kind: "Variable", name: { kind: "Name", value: "issueId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "version" },
                value: { kind: "Variable", name: { kind: "Name", value: "version" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CollaborationDocumentUpdatePayload" } },
              ],
            },
          },
        ],
      },
    },
    ...CollaborationDocumentUpdatePayloadFragmentDoc.definitions,
  ],
};
export const CollaborativeDocumentJoin_StepsDocument: DocumentNode<
  CollaborativeDocumentJoin_StepsQuery,
  CollaborativeDocumentJoin_StepsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "collaborativeDocumentJoin_steps" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "clientId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "issueId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "version" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "collaborativeDocumentJoin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "clientId" },
                value: { kind: "Variable", name: { kind: "Name", value: "clientId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "issueId" },
                value: { kind: "Variable", name: { kind: "Name", value: "issueId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "version" },
                value: { kind: "Variable", name: { kind: "Name", value: "version" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "steps" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "StepsResponse" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...StepsResponseFragmentDoc.definitions,
  ],
};
export const CommentDocument: DocumentNode<CommentQuery, CommentQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "comment" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "comment" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Comment" } }],
            },
          },
        ],
      },
    },
    ...CommentFragmentDoc.definitions,
  ],
};
export const CommentsDocument: DocumentNode<CommentsQuery, CommentsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "comments" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "comments" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CommentConnection" } }],
            },
          },
        ],
      },
    },
    ...CommentConnectionFragmentDoc.definitions,
  ],
};
export const CustomViewDocument: DocumentNode<CustomViewQuery, CustomViewQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "customView" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "customView" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CustomView" } }],
            },
          },
        ],
      },
    },
    ...CustomViewFragmentDoc.definitions,
  ],
};
export const CustomViewsDocument: DocumentNode<CustomViewsQuery, CustomViewsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "customViews" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "customViews" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CustomViewConnection" } }],
            },
          },
        ],
      },
    },
    ...CustomViewConnectionFragmentDoc.definitions,
  ],
};
export const CycleDocument: DocumentNode<CycleQuery, CycleQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "cycle" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycle" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Cycle" } }],
            },
          },
        ],
      },
    },
    ...CycleFragmentDoc.definitions,
  ],
};
export const Cycle_IssuesDocument: DocumentNode<Cycle_IssuesQuery, Cycle_IssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "cycle_issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycle" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "issues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const Cycle_UncompletedIssuesUponCloseDocument: DocumentNode<
  Cycle_UncompletedIssuesUponCloseQuery,
  Cycle_UncompletedIssuesUponCloseQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "cycle_uncompletedIssuesUponClose" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycle" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "uncompletedIssuesUponClose" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const CyclesDocument: DocumentNode<CyclesQuery, CyclesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "cycles" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycles" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CycleConnection" } }],
            },
          },
        ],
      },
    },
    ...CycleConnectionFragmentDoc.definitions,
  ],
};
export const EmojiDocument: DocumentNode<EmojiQuery, EmojiQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "emoji" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emoji" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Emoji" } }],
            },
          },
        ],
      },
    },
    ...EmojiFragmentDoc.definitions,
  ],
};
export const EmojisDocument: DocumentNode<EmojisQuery, EmojisQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "emojis" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emojis" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "EmojiConnection" } }],
            },
          },
        ],
      },
    },
    ...EmojiConnectionFragmentDoc.definitions,
  ],
};
export const FavoriteDocument: DocumentNode<FavoriteQuery, FavoriteQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "favorite" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "favorite" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Favorite" } }],
            },
          },
        ],
      },
    },
    ...FavoriteFragmentDoc.definitions,
  ],
};
export const FavoritesDocument: DocumentNode<FavoritesQuery, FavoritesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "favorites" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "favorites" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "FavoriteConnection" } }],
            },
          },
        ],
      },
    },
    ...FavoriteConnectionFragmentDoc.definitions,
  ],
};
export const FigmaEmbedInfoDocument: DocumentNode<FigmaEmbedInfoQuery, FigmaEmbedInfoQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "figmaEmbedInfo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "fileId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "nodeId" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "figmaEmbedInfo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "fileId" },
                value: { kind: "Variable", name: { kind: "Name", value: "fileId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "nodeId" },
                value: { kind: "Variable", name: { kind: "Name", value: "nodeId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "FigmaEmbedPayload" } }],
            },
          },
        ],
      },
    },
    ...FigmaEmbedPayloadFragmentDoc.definitions,
  ],
};
export const FigmaEmbedInfo_FigmaEmbedDocument: DocumentNode<
  FigmaEmbedInfo_FigmaEmbedQuery,
  FigmaEmbedInfo_FigmaEmbedQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "figmaEmbedInfo_figmaEmbed" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "fileId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "nodeId" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "figmaEmbedInfo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "fileId" },
                value: { kind: "Variable", name: { kind: "Name", value: "fileId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "nodeId" },
                value: { kind: "Variable", name: { kind: "Name", value: "nodeId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "figmaEmbed" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "FigmaEmbed" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...FigmaEmbedFragmentDoc.definitions,
  ],
};
export const IntegrationDocument: DocumentNode<IntegrationQuery, IntegrationQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "integration" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integration" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Integration" } }],
            },
          },
        ],
      },
    },
    ...IntegrationFragmentDoc.definitions,
  ],
};
export const IntegrationsDocument: DocumentNode<IntegrationsQuery, IntegrationsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "integrations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrations" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationConnection" } }],
            },
          },
        ],
      },
    },
    ...IntegrationConnectionFragmentDoc.definitions,
  ],
};
export const InviteInfoDocument: DocumentNode<InviteInfoQuery, InviteInfoQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "inviteInfo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "teamHash" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "userHash" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "inviteInfo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "teamHash" },
                value: { kind: "Variable", name: { kind: "Name", value: "teamHash" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userHash" },
                value: { kind: "Variable", name: { kind: "Name", value: "userHash" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "InvitePagePayload" } }],
            },
          },
        ],
      },
    },
    ...InvitePagePayloadFragmentDoc.definitions,
  ],
};
export const InviteInfo_InviteDataDocument: DocumentNode<
  InviteInfo_InviteDataQuery,
  InviteInfo_InviteDataQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "inviteInfo_inviteData" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "teamHash" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "userHash" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "inviteInfo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "teamHash" },
                value: { kind: "Variable", name: { kind: "Name", value: "teamHash" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userHash" },
                value: { kind: "Variable", name: { kind: "Name", value: "userHash" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "inviteData" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "InviteData" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...InviteDataFragmentDoc.definitions,
  ],
};
export const IssueDocument: DocumentNode<IssueQuery, IssueQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Issue" } }],
            },
          },
        ],
      },
    },
    ...IssueFragmentDoc.definitions,
  ],
};
export const Issue_ChildrenDocument: DocumentNode<Issue_ChildrenQuery, Issue_ChildrenQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_children" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "children" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const Issue_CommentsDocument: DocumentNode<Issue_CommentsQuery, Issue_CommentsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_comments" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "comments" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CommentConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...CommentConnectionFragmentDoc.definitions,
  ],
};
export const Issue_HistoryDocument: DocumentNode<Issue_HistoryQuery, Issue_HistoryQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_history" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "history" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueHistoryConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueHistoryConnectionFragmentDoc.definitions,
  ],
};
export const Issue_InverseRelationsDocument: DocumentNode<
  Issue_InverseRelationsQuery,
  Issue_InverseRelationsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_inverseRelations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "inverseRelations" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueRelationConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueRelationConnectionFragmentDoc.definitions,
  ],
};
export const Issue_LabelsDocument: DocumentNode<Issue_LabelsQuery, Issue_LabelsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_labels" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "labels" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabelConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueLabelConnectionFragmentDoc.definitions,
  ],
};
export const Issue_RelationsDocument: DocumentNode<Issue_RelationsQuery, Issue_RelationsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_relations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relations" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueRelationConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueRelationConnectionFragmentDoc.definitions,
  ],
};
export const Issue_SubscribersDocument: DocumentNode<Issue_SubscribersQuery, Issue_SubscribersQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_subscribers" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "subscribers" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...UserConnectionFragmentDoc.definitions,
  ],
};
export const IssueLabelDocument: DocumentNode<IssueLabelQuery, IssueLabelQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issueLabel" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabel" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabel" } }],
            },
          },
        ],
      },
    },
    ...IssueLabelFragmentDoc.definitions,
  ],
};
export const IssueLabel_IssuesDocument: DocumentNode<IssueLabel_IssuesQuery, IssueLabel_IssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issueLabel_issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabel" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "issues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const IssueLabelsDocument: DocumentNode<IssueLabelsQuery, IssueLabelsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issueLabels" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabels" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabelConnection" } }],
            },
          },
        ],
      },
    },
    ...IssueLabelConnectionFragmentDoc.definitions,
  ],
};
export const IssueRelationDocument: DocumentNode<IssueRelationQuery, IssueRelationQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issueRelation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueRelation" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueRelation" } }],
            },
          },
        ],
      },
    },
    ...IssueRelationFragmentDoc.definitions,
  ],
};
export const IssueRelationsDocument: DocumentNode<IssueRelationsQuery, IssueRelationsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issueRelations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueRelations" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueRelationConnection" } }],
            },
          },
        ],
      },
    },
    ...IssueRelationConnectionFragmentDoc.definitions,
  ],
};
export const IssueSearchDocument: DocumentNode<IssueSearchQuery, IssueSearchQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issueSearch" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "query" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueSearch" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "query" },
                value: { kind: "Variable", name: { kind: "Name", value: "query" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const IssuesDocument: DocumentNode<IssuesQuery, IssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issues" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const MilestoneDocument: DocumentNode<MilestoneQuery, MilestoneQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "milestone" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "milestone" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Milestone" } }],
            },
          },
        ],
      },
    },
    ...MilestoneFragmentDoc.definitions,
  ],
};
export const Milestone_ProjectsDocument: DocumentNode<Milestone_ProjectsQuery, Milestone_ProjectsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "milestone_projects" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "milestone" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "projects" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ProjectConnectionFragmentDoc.definitions,
  ],
};
export const MilestonesDocument: DocumentNode<MilestonesQuery, MilestonesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "milestones" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "milestones" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "MilestoneConnection" } }],
            },
          },
        ],
      },
    },
    ...MilestoneConnectionFragmentDoc.definitions,
  ],
};
export const NotificationDocument: DocumentNode<NotificationQuery, NotificationQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "notification" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notification" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Notification" } }],
            },
          },
        ],
      },
    },
    ...NotificationFragmentDoc.definitions,
  ],
};
export const NotificationSubscriptionDocument: DocumentNode<
  NotificationSubscriptionQuery,
  NotificationSubscriptionQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "notificationSubscription" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationSubscription" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "NotificationSubscription" } }],
            },
          },
        ],
      },
    },
    ...NotificationSubscriptionFragmentDoc.definitions,
  ],
};
export const NotificationSubscriptionsDocument: DocumentNode<
  NotificationSubscriptionsQuery,
  NotificationSubscriptionsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "notificationSubscriptions" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationSubscriptions" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "NotificationSubscriptionConnection" } },
              ],
            },
          },
        ],
      },
    },
    ...NotificationSubscriptionConnectionFragmentDoc.definitions,
  ],
};
export const NotificationsDocument: DocumentNode<NotificationsQuery, NotificationsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "notifications" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notifications" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "NotificationConnection" } }],
            },
          },
        ],
      },
    },
    ...NotificationConnectionFragmentDoc.definitions,
  ],
};
export const OrganizationDocument: DocumentNode<OrganizationQuery, OrganizationQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organization" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organization" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Organization" } }],
            },
          },
        ],
      },
    },
    ...OrganizationFragmentDoc.definitions,
  ],
};
export const Organization_IntegrationsDocument: DocumentNode<
  Organization_IntegrationsQuery,
  Organization_IntegrationsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organization_integrations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organization" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "integrations" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationConnectionFragmentDoc.definitions,
  ],
};
export const Organization_MilestonesDocument: DocumentNode<
  Organization_MilestonesQuery,
  Organization_MilestonesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organization_milestones" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organization" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "milestones" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "MilestoneConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...MilestoneConnectionFragmentDoc.definitions,
  ],
};
export const Organization_TeamsDocument: DocumentNode<Organization_TeamsQuery, Organization_TeamsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organization_teams" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organization" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teams" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TeamConnectionFragmentDoc.definitions,
  ],
};
export const Organization_UsersDocument: DocumentNode<Organization_UsersQuery, Organization_UsersQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organization_users" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organization" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "users" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...UserConnectionFragmentDoc.definitions,
  ],
};
export const OrganizationExistsDocument: DocumentNode<OrganizationExistsQuery, OrganizationExistsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organizationExists" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "urlKey" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationExists" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "urlKey" },
                value: { kind: "Variable", name: { kind: "Name", value: "urlKey" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationExistsPayload" } }],
            },
          },
        ],
      },
    },
    ...OrganizationExistsPayloadFragmentDoc.definitions,
  ],
};
export const OrganizationInviteDocument: DocumentNode<OrganizationInviteQuery, OrganizationInviteQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organizationInvite" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationInvite" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabel" } }],
            },
          },
        ],
      },
    },
    ...IssueLabelFragmentDoc.definitions,
  ],
};
export const OrganizationInvite_IssuesDocument: DocumentNode<
  OrganizationInvite_IssuesQuery,
  OrganizationInvite_IssuesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organizationInvite_issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationInvite" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "issues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const OrganizationInvitesDocument: DocumentNode<OrganizationInvitesQuery, OrganizationInvitesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organizationInvites" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationInvites" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationInviteConnection" } }],
            },
          },
        ],
      },
    },
    ...OrganizationInviteConnectionFragmentDoc.definitions,
  ],
};
export const ProjectDocument: DocumentNode<ProjectQuery, ProjectQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "project" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Project" } }],
            },
          },
        ],
      },
    },
    ...ProjectFragmentDoc.definitions,
  ],
};
export const Project_IssuesDocument: DocumentNode<Project_IssuesQuery, Project_IssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "project_issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "issues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const Project_LinksDocument: DocumentNode<Project_LinksQuery, Project_LinksQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "project_links" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "links" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectLinkConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ProjectLinkConnectionFragmentDoc.definitions,
  ],
};
export const Project_MembersDocument: DocumentNode<Project_MembersQuery, Project_MembersQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "project_members" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "members" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...UserConnectionFragmentDoc.definitions,
  ],
};
export const Project_TeamsDocument: DocumentNode<Project_TeamsQuery, Project_TeamsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "project_teams" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teams" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TeamConnectionFragmentDoc.definitions,
  ],
};
export const ProjectLinkDocument: DocumentNode<ProjectLinkQuery, ProjectLinkQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "projectLink" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectLink" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectLink" } }],
            },
          },
        ],
      },
    },
    ...ProjectLinkFragmentDoc.definitions,
  ],
};
export const ProjectLinksDocument: DocumentNode<ProjectLinksQuery, ProjectLinksQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "projectLinks" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectLinks" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectLinkConnection" } }],
            },
          },
        ],
      },
    },
    ...ProjectLinkConnectionFragmentDoc.definitions,
  ],
};
export const ProjectsDocument: DocumentNode<ProjectsQuery, ProjectsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "projects" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projects" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectConnection" } }],
            },
          },
        ],
      },
    },
    ...ProjectConnectionFragmentDoc.definitions,
  ],
};
export const PushSubscriptionTestDocument: DocumentNode<
  PushSubscriptionTestQuery,
  PushSubscriptionTestQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "pushSubscriptionTest" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pushSubscriptionTest" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PushSubscriptionPayload" } }],
            },
          },
        ],
      },
    },
    ...PushSubscriptionPayloadFragmentDoc.definitions,
  ],
};
export const ReactionDocument: DocumentNode<ReactionQuery, ReactionQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "reaction" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reaction" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Reaction" } }],
            },
          },
        ],
      },
    },
    ...ReactionFragmentDoc.definitions,
  ],
};
export const ReactionsDocument: DocumentNode<ReactionsQuery, ReactionsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "reactions" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reactions" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ReactionConnection" } }],
            },
          },
        ],
      },
    },
    ...ReactionConnectionFragmentDoc.definitions,
  ],
};
export const SsoUrlFromEmailDocument: DocumentNode<SsoUrlFromEmailQuery, SsoUrlFromEmailQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ssoUrlFromEmail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "email" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "isDesktop" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "ssoUrlFromEmail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "email" },
                value: { kind: "Variable", name: { kind: "Name", value: "email" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "isDesktop" },
                value: { kind: "Variable", name: { kind: "Name", value: "isDesktop" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SsoUrlFromEmailResponse" } }],
            },
          },
        ],
      },
    },
    ...SsoUrlFromEmailResponseFragmentDoc.definitions,
  ],
};
export const SyncBootstrapDocument: DocumentNode<SyncBootstrapQuery, SyncBootstrapQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "syncBootstrap" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "databaseVersion" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sinceSyncId" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "syncBootstrap" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "databaseVersion" },
                value: { kind: "Variable", name: { kind: "Name", value: "databaseVersion" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sinceSyncId" },
                value: { kind: "Variable", name: { kind: "Name", value: "sinceSyncId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SyncResponse" } }],
            },
          },
        ],
      },
    },
    ...SyncResponseFragmentDoc.definitions,
  ],
};
export const TeamDocument: DocumentNode<TeamQuery, TeamQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Team" } }],
            },
          },
        ],
      },
    },
    ...TeamFragmentDoc.definitions,
  ],
};
export const Team_CyclesDocument: DocumentNode<Team_CyclesQuery, Team_CyclesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_cycles" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cycles" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CycleConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...CycleConnectionFragmentDoc.definitions,
  ],
};
export const Team_IssuesDocument: DocumentNode<Team_IssuesQuery, Team_IssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "issues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const Team_LabelsDocument: DocumentNode<Team_LabelsQuery, Team_LabelsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_labels" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "labels" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabelConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueLabelConnectionFragmentDoc.definitions,
  ],
};
export const Team_MembersDocument: DocumentNode<Team_MembersQuery, Team_MembersQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_members" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "members" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...UserConnectionFragmentDoc.definitions,
  ],
};
export const Team_MembershipsDocument: DocumentNode<Team_MembershipsQuery, Team_MembershipsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_memberships" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "memberships" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamMembershipConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TeamMembershipConnectionFragmentDoc.definitions,
  ],
};
export const Team_ProjectsDocument: DocumentNode<Team_ProjectsQuery, Team_ProjectsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_projects" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "projects" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ProjectConnectionFragmentDoc.definitions,
  ],
};
export const Team_StatesDocument: DocumentNode<Team_StatesQuery, Team_StatesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_states" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "states" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WorkflowStateConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...WorkflowStateConnectionFragmentDoc.definitions,
  ],
};
export const Team_TemplatesDocument: DocumentNode<Team_TemplatesQuery, Team_TemplatesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_templates" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "templates" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TemplateConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TemplateConnectionFragmentDoc.definitions,
  ],
};
export const Team_WebhooksDocument: DocumentNode<Team_WebhooksQuery, Team_WebhooksQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_webhooks" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "webhooks" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WebhookConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...WebhookConnectionFragmentDoc.definitions,
  ],
};
export const TeamMembershipDocument: DocumentNode<TeamMembershipQuery, TeamMembershipQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "teamMembership" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamMembership" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamMembership" } }],
            },
          },
        ],
      },
    },
    ...TeamMembershipFragmentDoc.definitions,
  ],
};
export const TeamMembershipsDocument: DocumentNode<TeamMembershipsQuery, TeamMembershipsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "teamMemberships" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamMemberships" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamMembershipConnection" } }],
            },
          },
        ],
      },
    },
    ...TeamMembershipConnectionFragmentDoc.definitions,
  ],
};
export const TeamsDocument: DocumentNode<TeamsQuery, TeamsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "teams" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teams" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamConnection" } }],
            },
          },
        ],
      },
    },
    ...TeamConnectionFragmentDoc.definitions,
  ],
};
export const TemplateDocument: DocumentNode<TemplateQuery, TemplateQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "template" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "template" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Template" } }],
            },
          },
        ],
      },
    },
    ...TemplateFragmentDoc.definitions,
  ],
};
export const TemplatesDocument: DocumentNode<TemplatesQuery, TemplatesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "templates" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "templates" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "creator" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "User" } }],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "team" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Team" } }],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "templateData" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
    ...UserFragmentDoc.definitions,
    ...TeamFragmentDoc.definitions,
  ],
};
export const UserDocument: DocumentNode<UserQuery, UserQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "user" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "User" } }],
            },
          },
        ],
      },
    },
    ...UserFragmentDoc.definitions,
  ],
};
export const User_AssignedIssuesDocument: DocumentNode<User_AssignedIssuesQuery, User_AssignedIssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "user_assignedIssues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "assignedIssues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const User_CreatedIssuesDocument: DocumentNode<User_CreatedIssuesQuery, User_CreatedIssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "user_createdIssues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "createdIssues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const User_TeamMembershipsDocument: DocumentNode<
  User_TeamMembershipsQuery,
  User_TeamMembershipsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "user_teamMemberships" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teamMemberships" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamMembershipConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TeamMembershipConnectionFragmentDoc.definitions,
  ],
};
export const User_TeamsDocument: DocumentNode<User_TeamsQuery, User_TeamsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "user_teams" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teams" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TeamConnectionFragmentDoc.definitions,
  ],
};
export const UserSettingsDocument: DocumentNode<UserSettingsQuery, UserSettingsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "userSettings" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userSettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserSettings" } }],
            },
          },
        ],
      },
    },
    ...UserSettingsFragmentDoc.definitions,
  ],
};
export const UsersDocument: DocumentNode<UsersQuery, UsersQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "users" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "users" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserConnection" } }],
            },
          },
        ],
      },
    },
    ...UserConnectionFragmentDoc.definitions,
  ],
};
export const ViewerDocument: DocumentNode<ViewerQuery, ViewerQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "viewer" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewer" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "User" } }],
            },
          },
        ],
      },
    },
    ...UserFragmentDoc.definitions,
  ],
};
export const Viewer_AssignedIssuesDocument: DocumentNode<
  Viewer_AssignedIssuesQuery,
  Viewer_AssignedIssuesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "viewer_assignedIssues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewer" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "assignedIssues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const Viewer_CreatedIssuesDocument: DocumentNode<
  Viewer_CreatedIssuesQuery,
  Viewer_CreatedIssuesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "viewer_createdIssues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewer" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "createdIssues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const Viewer_TeamMembershipsDocument: DocumentNode<
  Viewer_TeamMembershipsQuery,
  Viewer_TeamMembershipsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "viewer_teamMemberships" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewer" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teamMemberships" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamMembershipConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TeamMembershipConnectionFragmentDoc.definitions,
  ],
};
export const Viewer_TeamsDocument: DocumentNode<Viewer_TeamsQuery, Viewer_TeamsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "viewer_teams" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewer" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teams" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TeamConnectionFragmentDoc.definitions,
  ],
};
export const WebhookDocument: DocumentNode<WebhookQuery, WebhookQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "webhook" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "webhook" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Webhook" } }],
            },
          },
        ],
      },
    },
    ...WebhookFragmentDoc.definitions,
  ],
};
export const WebhooksDocument: DocumentNode<WebhooksQuery, WebhooksQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "webhooks" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "webhooks" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WebhookConnection" } }],
            },
          },
        ],
      },
    },
    ...WebhookConnectionFragmentDoc.definitions,
  ],
};
export const WorkflowStateDocument: DocumentNode<WorkflowStateQuery, WorkflowStateQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "workflowState" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowState" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WorkflowState" } }],
            },
          },
        ],
      },
    },
    ...WorkflowStateFragmentDoc.definitions,
  ],
};
export const WorkflowState_IssuesDocument: DocumentNode<
  WorkflowState_IssuesQuery,
  WorkflowState_IssuesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "workflowState_issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowState" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "issues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const WorkflowStatesDocument: DocumentNode<WorkflowStatesQuery, WorkflowStatesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "workflowStates" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowStates" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WorkflowStateConnection" } }],
            },
          },
        ],
      },
    },
    ...WorkflowStateConnectionFragmentDoc.definitions,
  ],
};
export const ApiKeyCreateDocument: DocumentNode<ApiKeyCreateMutation, ApiKeyCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "apiKeyCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ApiKeyCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "apiKeyCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ApiKeyPayload" } }],
            },
          },
        ],
      },
    },
    ...ApiKeyPayloadFragmentDoc.definitions,
  ],
};
export const ApiKeyDeleteDocument: DocumentNode<ApiKeyDeleteMutation, ApiKeyDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "apiKeyDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "apiKeyDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const BillingEmailUpdateDocument: DocumentNode<
  BillingEmailUpdateMutation,
  BillingEmailUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "billingEmailUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "BillingEmailUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "billingEmailUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BillingEmailPayload" } }],
            },
          },
        ],
      },
    },
    ...BillingEmailPayloadFragmentDoc.definitions,
  ],
};
export const CollaborativeDocumentUpdateDocument: DocumentNode<
  CollaborativeDocumentUpdateMutation,
  CollaborativeDocumentUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "collaborativeDocumentUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CollaborationDocumentUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "collaborativeDocumentUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CollaborationDocumentUpdatePayload" } },
              ],
            },
          },
        ],
      },
    },
    ...CollaborationDocumentUpdatePayloadFragmentDoc.definitions,
  ],
};
export const CommentCreateDocument: DocumentNode<CommentCreateMutation, CommentCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "commentCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CommentCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "commentCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CommentPayload" } }],
            },
          },
        ],
      },
    },
    ...CommentPayloadFragmentDoc.definitions,
  ],
};
export const CommentDeleteDocument: DocumentNode<CommentDeleteMutation, CommentDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "commentDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "commentDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const CommentUpdateDocument: DocumentNode<CommentUpdateMutation, CommentUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "commentUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CommentUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "commentUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CommentPayload" } }],
            },
          },
        ],
      },
    },
    ...CommentPayloadFragmentDoc.definitions,
  ],
};
export const ContactCreateDocument: DocumentNode<ContactCreateMutation, ContactCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "contactCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ContactCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contactCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContactPayload" } }],
            },
          },
        ],
      },
    },
    ...ContactPayloadFragmentDoc.definitions,
  ],
};
export const CreateCsvExportReportDocument: DocumentNode<
  CreateCsvExportReportMutation,
  CreateCsvExportReportMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createCsvExportReport" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createCsvExportReport" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CreateCsvExportReportPayload" } }],
            },
          },
        ],
      },
    },
    ...CreateCsvExportReportPayloadFragmentDoc.definitions,
  ],
};
export const CreateOrganizationFromOnboardingDocument: DocumentNode<
  CreateOrganizationFromOnboardingMutation,
  CreateOrganizationFromOnboardingMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createOrganizationFromOnboarding" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CreateOrganizationInput" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "survey" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "OnboardingCustomerSurvey" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createOrganizationFromOnboarding" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "survey" },
                value: { kind: "Variable", name: { kind: "Name", value: "survey" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CreateOrJoinOrganizationResponse" } },
              ],
            },
          },
        ],
      },
    },
    ...CreateOrJoinOrganizationResponseFragmentDoc.definitions,
  ],
};
export const CustomViewCreateDocument: DocumentNode<CustomViewCreateMutation, CustomViewCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "customViewCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CustomViewCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "customViewCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CustomViewPayload" } }],
            },
          },
        ],
      },
    },
    ...CustomViewPayloadFragmentDoc.definitions,
  ],
};
export const CustomViewDeleteDocument: DocumentNode<CustomViewDeleteMutation, CustomViewDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "customViewDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "customViewDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const CustomViewUpdateDocument: DocumentNode<CustomViewUpdateMutation, CustomViewUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "customViewUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CustomViewUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "customViewUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CustomViewPayload" } }],
            },
          },
        ],
      },
    },
    ...CustomViewPayloadFragmentDoc.definitions,
  ],
};
export const CycleArchiveDocument: DocumentNode<CycleArchiveMutation, CycleArchiveMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "cycleArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycleArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const CycleCreateDocument: DocumentNode<CycleCreateMutation, CycleCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "cycleCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "CycleCreateInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycleCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CyclePayload" } }],
            },
          },
        ],
      },
    },
    ...CyclePayloadFragmentDoc.definitions,
  ],
};
export const CycleUpdateDocument: DocumentNode<CycleUpdateMutation, CycleUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "cycleUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "CycleUpdateInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycleUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CyclePayload" } }],
            },
          },
        ],
      },
    },
    ...CyclePayloadFragmentDoc.definitions,
  ],
};
export const DebugCreateSamlOrgDocument: DocumentNode<
  DebugCreateSamlOrgMutation,
  DebugCreateSamlOrgMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "debugCreateSAMLOrg" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "debugCreateSAMLOrg" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "DebugPayload" } }],
            },
          },
        ],
      },
    },
    ...DebugPayloadFragmentDoc.definitions,
  ],
};
export const DebugFailWithInternalErrorDocument: DocumentNode<
  DebugFailWithInternalErrorMutation,
  DebugFailWithInternalErrorMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "debugFailWithInternalError" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "debugFailWithInternalError" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "DebugPayload" } }],
            },
          },
        ],
      },
    },
    ...DebugPayloadFragmentDoc.definitions,
  ],
};
export const DebugFailWithWarningDocument: DocumentNode<
  DebugFailWithWarningMutation,
  DebugFailWithWarningMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "debugFailWithWarning" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "debugFailWithWarning" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "DebugPayload" } }],
            },
          },
        ],
      },
    },
    ...DebugPayloadFragmentDoc.definitions,
  ],
};
export const EmailTokenUserAccountAuthDocument: DocumentNode<
  EmailTokenUserAccountAuthMutation,
  EmailTokenUserAccountAuthMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "emailTokenUserAccountAuth" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "TokenUserAccountAuthInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emailTokenUserAccountAuth" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "AuthResolverResponse" } }],
            },
          },
        ],
      },
    },
    ...AuthResolverResponseFragmentDoc.definitions,
  ],
};
export const EmailUnsubscribeDocument: DocumentNode<EmailUnsubscribeMutation, EmailUnsubscribeMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "emailUnsubscribe" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "EmailUnsubscribeInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emailUnsubscribe" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "EmailUnsubscribePayload" } }],
            },
          },
        ],
      },
    },
    ...EmailUnsubscribePayloadFragmentDoc.definitions,
  ],
};
export const EmailUserAccountAuthChallengeDocument: DocumentNode<
  EmailUserAccountAuthChallengeMutation,
  EmailUserAccountAuthChallengeMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "emailUserAccountAuthChallenge" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "EmailUserAccountAuthChallengeInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emailUserAccountAuthChallenge" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "EmailUserAccountAuthChallengeResponse" } },
              ],
            },
          },
        ],
      },
    },
    ...EmailUserAccountAuthChallengeResponseFragmentDoc.definitions,
  ],
};
export const EmojiCreateDocument: DocumentNode<EmojiCreateMutation, EmojiCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "emojiCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "EmojiCreateInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emojiCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "EmojiPayload" } }],
            },
          },
        ],
      },
    },
    ...EmojiPayloadFragmentDoc.definitions,
  ],
};
export const EmojiDeleteDocument: DocumentNode<EmojiDeleteMutation, EmojiDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "emojiDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emojiDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const EventCreateDocument: DocumentNode<EventCreateMutation, EventCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "eventCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "EventCreateInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "eventCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "EventPayload" } }],
            },
          },
        ],
      },
    },
    ...EventPayloadFragmentDoc.definitions,
  ],
};
export const FavoriteCreateDocument: DocumentNode<FavoriteCreateMutation, FavoriteCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "favoriteCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "FavoriteCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "favoriteCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "FavoritePayload" } }],
            },
          },
        ],
      },
    },
    ...FavoritePayloadFragmentDoc.definitions,
  ],
};
export const FavoriteDeleteDocument: DocumentNode<FavoriteDeleteMutation, FavoriteDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "favoriteDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "favoriteDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const FavoriteUpdateDocument: DocumentNode<FavoriteUpdateMutation, FavoriteUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "favoriteUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "FavoriteUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "favoriteUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "FavoritePayload" } }],
            },
          },
        ],
      },
    },
    ...FavoritePayloadFragmentDoc.definitions,
  ],
};
export const FeedbackCreateDocument: DocumentNode<FeedbackCreateMutation, FeedbackCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "feedbackCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "FeedbackCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "feedbackCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "FeedbackPayload" } }],
            },
          },
        ],
      },
    },
    ...FeedbackPayloadFragmentDoc.definitions,
  ],
};
export const FileUploadDocument: DocumentNode<FileUploadMutation, FileUploadMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "fileUpload" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "contentType" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "filename" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "metaData" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "JSON" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "size" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "fileUpload" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "contentType" },
                value: { kind: "Variable", name: { kind: "Name", value: "contentType" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filename" },
                value: { kind: "Variable", name: { kind: "Name", value: "filename" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "metaData" },
                value: { kind: "Variable", name: { kind: "Name", value: "metaData" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "size" },
                value: { kind: "Variable", name: { kind: "Name", value: "size" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UploadPayload" } }],
            },
          },
        ],
      },
    },
    ...UploadPayloadFragmentDoc.definitions,
  ],
};
export const GoogleUserAccountAuthDocument: DocumentNode<
  GoogleUserAccountAuthMutation,
  GoogleUserAccountAuthMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "googleUserAccountAuth" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "GoogleUserAccountAuthInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "googleUserAccountAuth" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "AuthResolverResponse" } }],
            },
          },
        ],
      },
    },
    ...AuthResolverResponseFragmentDoc.definitions,
  ],
};
export const ImageUploadFromUrlDocument: DocumentNode<
  ImageUploadFromUrlMutation,
  ImageUploadFromUrlMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "imageUploadFromUrl" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "url" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "imageUploadFromUrl" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "url" },
                value: { kind: "Variable", name: { kind: "Name", value: "url" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ImageUploadFromUrlPayload" } }],
            },
          },
        ],
      },
    },
    ...ImageUploadFromUrlPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationDeleteDocument: DocumentNode<IntegrationDeleteMutation, IntegrationDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const IntegrationFigmaDocument: DocumentNode<IntegrationFigmaMutation, IntegrationFigmaMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationFigma" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationFigma" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" } }],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationGithubConnectDocument: DocumentNode<
  IntegrationGithubConnectMutation,
  IntegrationGithubConnectMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationGithubConnect" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "installationId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationGithubConnect" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "installationId" },
                value: { kind: "Variable", name: { kind: "Name", value: "installationId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" } }],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationGitlabConnectDocument: DocumentNode<
  IntegrationGitlabConnectMutation,
  IntegrationGitlabConnectMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationGitlabConnect" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "accessToken" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "gitlabUrl" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationGitlabConnect" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "accessToken" },
                value: { kind: "Variable", name: { kind: "Name", value: "accessToken" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "gitlabUrl" },
                value: { kind: "Variable", name: { kind: "Name", value: "gitlabUrl" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" } }],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationGoogleSheetsDocument: DocumentNode<
  IntegrationGoogleSheetsMutation,
  IntegrationGoogleSheetsMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationGoogleSheets" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationGoogleSheets" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" } }],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationResourceArchiveDocument: DocumentNode<
  IntegrationResourceArchiveMutation,
  IntegrationResourceArchiveMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationResourceArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationResourceArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const IntegrationSentryConnectDocument: DocumentNode<
  IntegrationSentryConnectMutation,
  IntegrationSentryConnectMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationSentryConnect" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "installationId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "organizationSlug" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationSentryConnect" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "installationId" },
                value: { kind: "Variable", name: { kind: "Name", value: "installationId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "organizationSlug" },
                value: { kind: "Variable", name: { kind: "Name", value: "organizationSlug" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" } }],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationSlackDocument: DocumentNode<IntegrationSlackMutation, IntegrationSlackMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationSlack" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "shouldUseV2Auth" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationSlack" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "shouldUseV2Auth" },
                value: { kind: "Variable", name: { kind: "Name", value: "shouldUseV2Auth" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" } }],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationSlackImportEmojisDocument: DocumentNode<
  IntegrationSlackImportEmojisMutation,
  IntegrationSlackImportEmojisMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationSlackImportEmojis" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationSlackImportEmojis" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" } }],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationSlackPersonalDocument: DocumentNode<
  IntegrationSlackPersonalMutation,
  IntegrationSlackPersonalMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationSlackPersonal" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationSlackPersonal" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" } }],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationSlackPostDocument: DocumentNode<
  IntegrationSlackPostMutation,
  IntegrationSlackPostMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationSlackPost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "shouldUseV2Auth" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationSlackPost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "shouldUseV2Auth" },
                value: { kind: "Variable", name: { kind: "Name", value: "shouldUseV2Auth" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "teamId" },
                value: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" } }],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationSlackProjectPostDocument: DocumentNode<
  IntegrationSlackProjectPostMutation,
  IntegrationSlackProjectPostMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationSlackProjectPost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationSlackProjectPost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "projectId" },
                value: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" } }],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IssueArchiveDocument: DocumentNode<IssueArchiveMutation, IssueArchiveMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const IssueCreateDocument: DocumentNode<IssueCreateMutation, IssueCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "IssueCreateInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssuePayload" } }],
            },
          },
        ],
      },
    },
    ...IssuePayloadFragmentDoc.definitions,
  ],
};
export const IssueImportCreateClubhouseDocument: DocumentNode<
  IssueImportCreateClubhouseMutation,
  IssueImportCreateClubhouseMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueImportCreateClubhouse" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "clubhouseTeamName" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "clubhouseToken" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueImportCreateClubhouse" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "clubhouseTeamName" },
                value: { kind: "Variable", name: { kind: "Name", value: "clubhouseTeamName" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "clubhouseToken" },
                value: { kind: "Variable", name: { kind: "Name", value: "clubhouseToken" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "teamId" },
                value: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueImportPayload" } }],
            },
          },
        ],
      },
    },
    ...IssueImportPayloadFragmentDoc.definitions,
  ],
};
export const IssueImportCreateGithubDocument: DocumentNode<
  IssueImportCreateGithubMutation,
  IssueImportCreateGithubMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueImportCreateGithub" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "githubRepoName" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "githubRepoOwner" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "githubToken" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueImportCreateGithub" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "githubRepoName" },
                value: { kind: "Variable", name: { kind: "Name", value: "githubRepoName" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "githubRepoOwner" },
                value: { kind: "Variable", name: { kind: "Name", value: "githubRepoOwner" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "githubToken" },
                value: { kind: "Variable", name: { kind: "Name", value: "githubToken" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "teamId" },
                value: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueImportPayload" } }],
            },
          },
        ],
      },
    },
    ...IssueImportPayloadFragmentDoc.definitions,
  ],
};
export const IssueImportCreateJiraDocument: DocumentNode<
  IssueImportCreateJiraMutation,
  IssueImportCreateJiraMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueImportCreateJira" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "jiraEmail" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "jiraHostname" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "jiraProject" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "jiraToken" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueImportCreateJira" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "jiraEmail" },
                value: { kind: "Variable", name: { kind: "Name", value: "jiraEmail" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "jiraHostname" },
                value: { kind: "Variable", name: { kind: "Name", value: "jiraHostname" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "jiraProject" },
                value: { kind: "Variable", name: { kind: "Name", value: "jiraProject" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "jiraToken" },
                value: { kind: "Variable", name: { kind: "Name", value: "jiraToken" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "teamId" },
                value: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueImportPayload" } }],
            },
          },
        ],
      },
    },
    ...IssueImportPayloadFragmentDoc.definitions,
  ],
};
export const IssueLabelArchiveDocument: DocumentNode<IssueLabelArchiveMutation, IssueLabelArchiveMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueLabelArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabelArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const IssueLabelCreateDocument: DocumentNode<IssueLabelCreateMutation, IssueLabelCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueLabelCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IssueLabelCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabelCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabelPayload" } }],
            },
          },
        ],
      },
    },
    ...IssueLabelPayloadFragmentDoc.definitions,
  ],
};
export const IssueLabelUpdateDocument: DocumentNode<IssueLabelUpdateMutation, IssueLabelUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueLabelUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IssueLabelUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabelUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabelPayload" } }],
            },
          },
        ],
      },
    },
    ...IssueLabelPayloadFragmentDoc.definitions,
  ],
};
export const IssueRelationCreateDocument: DocumentNode<
  IssueRelationCreateMutation,
  IssueRelationCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueRelationCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IssueRelationCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueRelationCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueRelationPayload" } }],
            },
          },
        ],
      },
    },
    ...IssueRelationPayloadFragmentDoc.definitions,
  ],
};
export const IssueRelationDeleteDocument: DocumentNode<
  IssueRelationDeleteMutation,
  IssueRelationDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueRelationDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueRelationDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const IssueRelationUpdateDocument: DocumentNode<
  IssueRelationUpdateMutation,
  IssueRelationUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueRelationUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IssueRelationUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueRelationUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueRelationPayload" } }],
            },
          },
        ],
      },
    },
    ...IssueRelationPayloadFragmentDoc.definitions,
  ],
};
export const IssueUnarchiveDocument: DocumentNode<IssueUnarchiveMutation, IssueUnarchiveMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueUnarchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueUnarchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const IssueUpdateDocument: DocumentNode<IssueUpdateMutation, IssueUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "IssueUpdateInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssuePayload" } }],
            },
          },
        ],
      },
    },
    ...IssuePayloadFragmentDoc.definitions,
  ],
};
export const JoinOrganizationFromOnboardingDocument: DocumentNode<
  JoinOrganizationFromOnboardingMutation,
  JoinOrganizationFromOnboardingMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "joinOrganizationFromOnboarding" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "JoinOrganizationInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "joinOrganizationFromOnboarding" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CreateOrJoinOrganizationResponse" } },
              ],
            },
          },
        ],
      },
    },
    ...CreateOrJoinOrganizationResponseFragmentDoc.definitions,
  ],
};
export const LeaveOrganizationDocument: DocumentNode<LeaveOrganizationMutation, LeaveOrganizationMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "leaveOrganization" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "organizationId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "leaveOrganization" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "organizationId" },
                value: { kind: "Variable", name: { kind: "Name", value: "organizationId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CreateOrJoinOrganizationResponse" } },
              ],
            },
          },
        ],
      },
    },
    ...CreateOrJoinOrganizationResponseFragmentDoc.definitions,
  ],
};
export const MilestoneCreateDocument: DocumentNode<MilestoneCreateMutation, MilestoneCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "milestoneCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "MilestoneCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "milestoneCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "MilestonePayload" } }],
            },
          },
        ],
      },
    },
    ...MilestonePayloadFragmentDoc.definitions,
  ],
};
export const MilestoneDeleteDocument: DocumentNode<MilestoneDeleteMutation, MilestoneDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "milestoneDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "milestoneDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const MilestoneUpdateDocument: DocumentNode<MilestoneUpdateMutation, MilestoneUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "milestoneUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "MilestoneUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "milestoneUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "MilestonePayload" } }],
            },
          },
        ],
      },
    },
    ...MilestonePayloadFragmentDoc.definitions,
  ],
};
export const NotificationArchiveDocument: DocumentNode<
  NotificationArchiveMutation,
  NotificationArchiveMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const NotificationCreateDocument: DocumentNode<
  NotificationCreateMutation,
  NotificationCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "NotificationUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "NotificationPayload" } }],
            },
          },
        ],
      },
    },
    ...NotificationPayloadFragmentDoc.definitions,
  ],
};
export const NotificationDeleteDocument: DocumentNode<
  NotificationDeleteMutation,
  NotificationDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const NotificationSubscriptionCreateDocument: DocumentNode<
  NotificationSubscriptionCreateMutation,
  NotificationSubscriptionCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationSubscriptionCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "NotificationSubscriptionCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationSubscriptionCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "NotificationSubscriptionPayload" } },
              ],
            },
          },
        ],
      },
    },
    ...NotificationSubscriptionPayloadFragmentDoc.definitions,
  ],
};
export const NotificationSubscriptionDeleteDocument: DocumentNode<
  NotificationSubscriptionDeleteMutation,
  NotificationSubscriptionDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationSubscriptionDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationSubscriptionDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const NotificationUnarchiveDocument: DocumentNode<
  NotificationUnarchiveMutation,
  NotificationUnarchiveMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationUnarchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationUnarchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const NotificationUpdateDocument: DocumentNode<
  NotificationUpdateMutation,
  NotificationUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "NotificationUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "NotificationPayload" } }],
            },
          },
        ],
      },
    },
    ...NotificationPayloadFragmentDoc.definitions,
  ],
};
export const OauthClientArchiveDocument: DocumentNode<
  OauthClientArchiveMutation,
  OauthClientArchiveMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "oauthClientArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "oauthClientArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const OauthClientCreateDocument: DocumentNode<OauthClientCreateMutation, OauthClientCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "oauthClientCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "OauthClientCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "oauthClientCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OauthClientPayload" } }],
            },
          },
        ],
      },
    },
    ...OauthClientPayloadFragmentDoc.definitions,
  ],
};
export const OauthClientRotateSecretDocument: DocumentNode<
  OauthClientRotateSecretMutation,
  OauthClientRotateSecretMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "oauthClientRotateSecret" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "oauthClientRotateSecret" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RotateSecretPayload" } }],
            },
          },
        ],
      },
    },
    ...RotateSecretPayloadFragmentDoc.definitions,
  ],
};
export const OauthClientUpdateDocument: DocumentNode<OauthClientUpdateMutation, OauthClientUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "oauthClientUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "OauthClientUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "oauthClientUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OauthClientPayload" } }],
            },
          },
        ],
      },
    },
    ...OauthClientPayloadFragmentDoc.definitions,
  ],
};
export const OauthTokenRevokeDocument: DocumentNode<OauthTokenRevokeMutation, OauthTokenRevokeMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "oauthTokenRevoke" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "appId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "scope" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "oauthTokenRevoke" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "appId" },
                value: { kind: "Variable", name: { kind: "Name", value: "appId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "scope" },
                value: { kind: "Variable", name: { kind: "Name", value: "scope" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OauthTokenRevokePayload" } }],
            },
          },
        ],
      },
    },
    ...OauthTokenRevokePayloadFragmentDoc.definitions,
  ],
};
export const OrganizationDeleteDocument: DocumentNode<
  OrganizationDeleteMutation,
  OrganizationDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "DeleteOrganizationInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationDeletePayload" } }],
            },
          },
        ],
      },
    },
    ...OrganizationDeletePayloadFragmentDoc.definitions,
  ],
};
export const OrganizationDeleteChallengeDocument: DocumentNode<
  OrganizationDeleteChallengeMutation,
  OrganizationDeleteChallengeMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationDeleteChallenge" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationDeleteChallenge" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationDeletePayload" } }],
            },
          },
        ],
      },
    },
    ...OrganizationDeletePayloadFragmentDoc.definitions,
  ],
};
export const OrganizationDomainCreateDocument: DocumentNode<
  OrganizationDomainCreateMutation,
  OrganizationDomainCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationDomainCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "OrganizationDomainCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationDomainCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationDomainPayload" } }],
            },
          },
        ],
      },
    },
    ...OrganizationDomainPayloadFragmentDoc.definitions,
  ],
};
export const OrganizationDomainDeleteDocument: DocumentNode<
  OrganizationDomainDeleteMutation,
  OrganizationDomainDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationDomainDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationDomainDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const OrganizationDomainVerifyDocument: DocumentNode<
  OrganizationDomainVerifyMutation,
  OrganizationDomainVerifyMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationDomainVerify" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "OrganizationDomainVerificationInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationDomainVerify" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationDomainPayload" } }],
            },
          },
        ],
      },
    },
    ...OrganizationDomainPayloadFragmentDoc.definitions,
  ],
};
export const OrganizationInviteCreateDocument: DocumentNode<
  OrganizationInviteCreateMutation,
  OrganizationInviteCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationInviteCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "OrganizationInviteCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationInviteCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationInvitePayload" } }],
            },
          },
        ],
      },
    },
    ...OrganizationInvitePayloadFragmentDoc.definitions,
  ],
};
export const OrganizationInviteDeleteDocument: DocumentNode<
  OrganizationInviteDeleteMutation,
  OrganizationInviteDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationInviteDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationInviteDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const OrganizationUpdateDocument: DocumentNode<
  OrganizationUpdateMutation,
  OrganizationUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "UpdateOrganizationInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationPayload" } }],
            },
          },
        ],
      },
    },
    ...OrganizationPayloadFragmentDoc.definitions,
  ],
};
export const ProjectArchiveDocument: DocumentNode<ProjectArchiveMutation, ProjectArchiveMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "projectArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const ProjectCreateDocument: DocumentNode<ProjectCreateMutation, ProjectCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "projectCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ProjectCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectPayload" } }],
            },
          },
        ],
      },
    },
    ...ProjectPayloadFragmentDoc.definitions,
  ],
};
export const ProjectLinkCreateDocument: DocumentNode<ProjectLinkCreateMutation, ProjectLinkCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "projectLinkCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ProjectLinkCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectLinkCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectLinkPayload" } }],
            },
          },
        ],
      },
    },
    ...ProjectLinkPayloadFragmentDoc.definitions,
  ],
};
export const ProjectLinkDeleteDocument: DocumentNode<ProjectLinkDeleteMutation, ProjectLinkDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "projectLinkDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectLinkDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const ProjectUpdateDocument: DocumentNode<ProjectUpdateMutation, ProjectUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "projectUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ProjectUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectPayload" } }],
            },
          },
        ],
      },
    },
    ...ProjectPayloadFragmentDoc.definitions,
  ],
};
export const PushSubscriptionCreateDocument: DocumentNode<
  PushSubscriptionCreateMutation,
  PushSubscriptionCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "pushSubscriptionCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "PushSubscriptionCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pushSubscriptionCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PushSubscriptionPayload" } }],
            },
          },
        ],
      },
    },
    ...PushSubscriptionPayloadFragmentDoc.definitions,
  ],
};
export const PushSubscriptionDeleteDocument: DocumentNode<
  PushSubscriptionDeleteMutation,
  PushSubscriptionDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "pushSubscriptionDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pushSubscriptionDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PushSubscriptionPayload" } }],
            },
          },
        ],
      },
    },
    ...PushSubscriptionPayloadFragmentDoc.definitions,
  ],
};
export const ReactionCreateDocument: DocumentNode<ReactionCreateMutation, ReactionCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "reactionCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ReactionCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reactionCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ReactionPayload" } }],
            },
          },
        ],
      },
    },
    ...ReactionPayloadFragmentDoc.definitions,
  ],
};
export const ReactionDeleteDocument: DocumentNode<ReactionDeleteMutation, ReactionDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "reactionDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reactionDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const RefreshGoogleSheetsDataDocument: DocumentNode<
  RefreshGoogleSheetsDataMutation,
  RefreshGoogleSheetsDataMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "refreshGoogleSheetsData" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "refreshGoogleSheetsData" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" } }],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const ResentOrganizationInviteDocument: DocumentNode<
  ResentOrganizationInviteMutation,
  ResentOrganizationInviteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "resentOrganizationInvite" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "resentOrganizationInvite" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const SamlTokenUserAccountAuthDocument: DocumentNode<
  SamlTokenUserAccountAuthMutation,
  SamlTokenUserAccountAuthMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "samlTokenUserAccountAuth" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "TokenUserAccountAuthInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "samlTokenUserAccountAuth" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "AuthResolverResponse" } }],
            },
          },
        ],
      },
    },
    ...AuthResolverResponseFragmentDoc.definitions,
  ],
};
export const SubscriptionArchiveDocument: DocumentNode<
  SubscriptionArchiveMutation,
  SubscriptionArchiveMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "subscriptionArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscriptionArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const SubscriptionSessionCreateDocument: DocumentNode<
  SubscriptionSessionCreateMutation,
  SubscriptionSessionCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "subscriptionSessionCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "plan" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscriptionSessionCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "plan" },
                value: { kind: "Variable", name: { kind: "Name", value: "plan" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SubscriptionSessionPayload" } }],
            },
          },
        ],
      },
    },
    ...SubscriptionSessionPayloadFragmentDoc.definitions,
  ],
};
export const SubscriptionUpdateDocument: DocumentNode<
  SubscriptionUpdateMutation,
  SubscriptionUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "subscriptionUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "SubscriptionUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscriptionUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SubscriptionPayload" } }],
            },
          },
        ],
      },
    },
    ...SubscriptionPayloadFragmentDoc.definitions,
  ],
};
export const SubscriptionUpdateSessionCreateDocument: DocumentNode<
  SubscriptionUpdateSessionCreateMutation,
  SubscriptionUpdateSessionCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "subscriptionUpdateSessionCreate" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscriptionUpdateSessionCreate" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SubscriptionSessionPayload" } }],
            },
          },
        ],
      },
    },
    ...SubscriptionSessionPayloadFragmentDoc.definitions,
  ],
};
export const SubscriptionUpgradeDocument: DocumentNode<
  SubscriptionUpgradeMutation,
  SubscriptionUpgradeMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "subscriptionUpgrade" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscriptionUpgrade" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "type" },
                value: { kind: "Variable", name: { kind: "Name", value: "type" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SubscriptionPayload" } }],
            },
          },
        ],
      },
    },
    ...SubscriptionPayloadFragmentDoc.definitions,
  ],
};
export const TeamArchiveDocument: DocumentNode<TeamArchiveMutation, TeamArchiveMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "teamArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const TeamCreateDocument: DocumentNode<TeamCreateMutation, TeamCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "teamCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "copySettingsFromTeamId" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "TeamCreateInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "copySettingsFromTeamId" },
                value: { kind: "Variable", name: { kind: "Name", value: "copySettingsFromTeamId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamPayload" } }],
            },
          },
        ],
      },
    },
    ...TeamPayloadFragmentDoc.definitions,
  ],
};
export const TeamDeleteDocument: DocumentNode<TeamDeleteMutation, TeamDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "teamDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const TeamMembershipCreateDocument: DocumentNode<
  TeamMembershipCreateMutation,
  TeamMembershipCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "teamMembershipCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "TeamMembershipCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamMembershipCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamMembershipPayload" } }],
            },
          },
        ],
      },
    },
    ...TeamMembershipPayloadFragmentDoc.definitions,
  ],
};
export const TeamMembershipDeleteDocument: DocumentNode<
  TeamMembershipDeleteMutation,
  TeamMembershipDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "teamMembershipDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamMembershipDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const TeamUpdateDocument: DocumentNode<TeamUpdateMutation, TeamUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "teamUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "TeamUpdateInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamPayload" } }],
            },
          },
        ],
      },
    },
    ...TeamPayloadFragmentDoc.definitions,
  ],
};
export const TemplateCreateDocument: DocumentNode<TemplateCreateMutation, TemplateCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "templateCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "TemplateCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "templateCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TemplatePayload" } }],
            },
          },
        ],
      },
    },
    ...TemplatePayloadFragmentDoc.definitions,
  ],
};
export const TemplateDeleteDocument: DocumentNode<TemplateDeleteMutation, TemplateDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "templateDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "templateDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const TemplateUpdateDocument: DocumentNode<TemplateUpdateMutation, TemplateUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "templateUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "TemplateUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "templateUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TemplatePayload" } }],
            },
          },
        ],
      },
    },
    ...TemplatePayloadFragmentDoc.definitions,
  ],
};
export const UserDemoteAdminDocument: DocumentNode<UserDemoteAdminMutation, UserDemoteAdminMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userDemoteAdmin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userDemoteAdmin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserAdminPayload" } }],
            },
          },
        ],
      },
    },
    ...UserAdminPayloadFragmentDoc.definitions,
  ],
};
export const UserFlagUpdateDocument: DocumentNode<UserFlagUpdateMutation, UserFlagUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userFlagUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "flag" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "UserFlagType" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "operation" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "UserFlagUpdateOperation" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userFlagUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "flag" },
                value: { kind: "Variable", name: { kind: "Name", value: "flag" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "operation" },
                value: { kind: "Variable", name: { kind: "Name", value: "operation" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserSettingsFlagPayload" } }],
            },
          },
        ],
      },
    },
    ...UserSettingsFlagPayloadFragmentDoc.definitions,
  ],
};
export const UserPromoteAdminDocument: DocumentNode<UserPromoteAdminMutation, UserPromoteAdminMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userPromoteAdmin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userPromoteAdmin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserAdminPayload" } }],
            },
          },
        ],
      },
    },
    ...UserAdminPayloadFragmentDoc.definitions,
  ],
};
export const UserSettingsFlagIncrementDocument: DocumentNode<
  UserSettingsFlagIncrementMutation,
  UserSettingsFlagIncrementMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userSettingsFlagIncrement" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "flag" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userSettingsFlagIncrement" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "flag" },
                value: { kind: "Variable", name: { kind: "Name", value: "flag" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserSettingsFlagPayload" } }],
            },
          },
        ],
      },
    },
    ...UserSettingsFlagPayloadFragmentDoc.definitions,
  ],
};
export const UserSettingsFlagsResetDocument: DocumentNode<
  UserSettingsFlagsResetMutation,
  UserSettingsFlagsResetMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userSettingsFlagsReset" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userSettingsFlagsReset" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserSettingsFlagsResetPayload" } }],
            },
          },
        ],
      },
    },
    ...UserSettingsFlagsResetPayloadFragmentDoc.definitions,
  ],
};
export const UserSettingsUpdateDocument: DocumentNode<
  UserSettingsUpdateMutation,
  UserSettingsUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userSettingsUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "UserSettingsUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userSettingsUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserSettingsPayload" } }],
            },
          },
        ],
      },
    },
    ...UserSettingsPayloadFragmentDoc.definitions,
  ],
};
export const UserSubscribeToNewsletterDocument: DocumentNode<
  UserSubscribeToNewsletterMutation,
  UserSubscribeToNewsletterMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userSubscribeToNewsletter" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userSubscribeToNewsletter" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "UserSubscribeToNewsletterPayload" } },
              ],
            },
          },
        ],
      },
    },
    ...UserSubscribeToNewsletterPayloadFragmentDoc.definitions,
  ],
};
export const UserSuspendDocument: DocumentNode<UserSuspendMutation, UserSuspendMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userSuspend" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userSuspend" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserAdminPayload" } }],
            },
          },
        ],
      },
    },
    ...UserAdminPayloadFragmentDoc.definitions,
  ],
};
export const UserUnsuspendDocument: DocumentNode<UserUnsuspendMutation, UserUnsuspendMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userUnsuspend" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userUnsuspend" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserAdminPayload" } }],
            },
          },
        ],
      },
    },
    ...UserAdminPayloadFragmentDoc.definitions,
  ],
};
export const UserUpdateDocument: DocumentNode<UserUpdateMutation, UserUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "UpdateUserInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserPayload" } }],
            },
          },
        ],
      },
    },
    ...UserPayloadFragmentDoc.definitions,
  ],
};
export const ViewPreferencesCreateDocument: DocumentNode<
  ViewPreferencesCreateMutation,
  ViewPreferencesCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "viewPreferencesCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ViewPreferencesCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewPreferencesCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ViewPreferencesPayload" } }],
            },
          },
        ],
      },
    },
    ...ViewPreferencesPayloadFragmentDoc.definitions,
  ],
};
export const ViewPreferencesDeleteDocument: DocumentNode<
  ViewPreferencesDeleteMutation,
  ViewPreferencesDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "viewPreferencesDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewPreferencesDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const ViewPreferencesUpdateDocument: DocumentNode<
  ViewPreferencesUpdateMutation,
  ViewPreferencesUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "viewPreferencesUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ViewPreferencesUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewPreferencesUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ViewPreferencesPayload" } }],
            },
          },
        ],
      },
    },
    ...ViewPreferencesPayloadFragmentDoc.definitions,
  ],
};
export const WebhookCreateDocument: DocumentNode<WebhookCreateMutation, WebhookCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "webhookCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "WebhookCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "webhookCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WebhookPayload" } }],
            },
          },
        ],
      },
    },
    ...WebhookPayloadFragmentDoc.definitions,
  ],
};
export const WebhookDeleteDocument: DocumentNode<WebhookDeleteMutation, WebhookDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "webhookDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "webhookDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const WebhookUpdateDocument: DocumentNode<WebhookUpdateMutation, WebhookUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "webhookUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "WebhookUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "webhookUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WebhookPayload" } }],
            },
          },
        ],
      },
    },
    ...WebhookPayloadFragmentDoc.definitions,
  ],
};
export const WorkflowStateArchiveDocument: DocumentNode<
  WorkflowStateArchiveMutation,
  WorkflowStateArchiveMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "workflowStateArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowStateArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" } }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const WorkflowStateCreateDocument: DocumentNode<
  WorkflowStateCreateMutation,
  WorkflowStateCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "workflowStateCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "WorkflowStateCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowStateCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WorkflowStatePayload" } }],
            },
          },
        ],
      },
    },
    ...WorkflowStatePayloadFragmentDoc.definitions,
  ],
};
export const WorkflowStateUpdateDocument: DocumentNode<
  WorkflowStateUpdateMutation,
  WorkflowStateUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "workflowStateUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "WorkflowStateUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowStateUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WorkflowStatePayload" } }],
            },
          },
        ],
      },
    },
    ...WorkflowStatePayloadFragmentDoc.definitions,
  ],
};
