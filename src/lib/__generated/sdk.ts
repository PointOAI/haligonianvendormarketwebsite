import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = _Node & {
  __typename?: 'Asset';
  _id: Scalars['ID'];
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetCursorCollection = {
  __typename?: 'AssetCursorCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  componentSeoCursorCollection?: Maybe<ComponentSeoCursorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  marketCollection?: Maybe<MarketCollection>;
  marketCursorCollection?: Maybe<MarketCursorCollection>;
  pageAboutCollection?: Maybe<PageAboutCollection>;
  pageAboutCursorCollection?: Maybe<PageAboutCursorCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageLandingCursorCollection?: Maybe<PageLandingCursorCollection>;
  pageProductCollection?: Maybe<PageProductCollection>;
  pageProductCursorCollection?: Maybe<PageProductCursorCollection>;
};


export type AssetLinkingCollectionsComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type AssetLinkingCollectionsComponentSeoCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type AssetLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type AssetLinkingCollectionsMarketCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type AssetLinkingCollectionsMarketCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type AssetLinkingCollectionsPageAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type AssetLinkingCollectionsPageAboutCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type AssetLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type AssetLinkingCollectionsPageLandingCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type AssetLinkingCollectionsPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type AssetLinkingCollectionsPageProductCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/button) */
export type Button = Entry & _Node & {
  __typename?: 'Button';
  _id: Scalars['ID'];
  buttonLink?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ButtonLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/button) */
export type ButtonButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/button) */
export type ButtonButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/button) */
export type ButtonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ButtonCollection = {
  __typename?: 'ButtonCollection';
  items: Array<Maybe<Button>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ButtonCursorCollection = {
  __typename?: 'ButtonCursorCollection';
  items: Array<Maybe<Button>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export type ButtonFilter = {
  AND?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  buttonLink?: InputMaybe<Scalars['String']>;
  buttonLink_contains?: InputMaybe<Scalars['String']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type ButtonLinkingCollections = {
  __typename?: 'ButtonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageLandingCursorCollection?: Maybe<PageLandingCursorCollection>;
};


export type ButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type ButtonLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type ButtonLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type ButtonLinkingCollectionsPageLandingCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsPageLandingCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};

export enum ButtonLinkingCollectionsPageLandingCollectionOrder {
  AboutUsHeadingAsc = 'aboutUsHeading_ASC',
  AboutUsHeadingDesc = 'aboutUsHeading_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UpcomingMarketsHeadingAsc = 'upcomingMarketsHeading_ASC',
  UpcomingMarketsHeadingDesc = 'upcomingMarketsHeading_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum ButtonLinkingCollectionsPageLandingCursorCollectionOrder {
  AboutUsHeadingAsc = 'aboutUsHeading_ASC',
  AboutUsHeadingDesc = 'aboutUsHeading_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UpcomingMarketsHeadingAsc = 'upcomingMarketsHeading_ASC',
  UpcomingMarketsHeadingDesc = 'upcomingMarketsHeading_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum ButtonOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/componentSeo) */
export type ComponentSeo = Entry & _Node & {
  __typename?: 'ComponentSeo';
  _id: Scalars['ID'];
  canonicalUrl?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentSeoLinkingCollections>;
  nofollow?: Maybe<Scalars['Boolean']>;
  noindex?: Maybe<Scalars['Boolean']>;
  pageDescription?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  shareImagesCollection?: Maybe<AssetCollection>;
  shareImagesCursorCollection?: Maybe<AssetCursorCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/componentSeo) */
export type ComponentSeoCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/componentSeo) */
export type ComponentSeoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/componentSeo) */
export type ComponentSeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/componentSeo) */
export type ComponentSeoNofollowArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/componentSeo) */
export type ComponentSeoNoindexArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/componentSeo) */
export type ComponentSeoPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/componentSeo) */
export type ComponentSeoPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/componentSeo) */
export type ComponentSeoShareImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/componentSeo) */
export type ComponentSeoShareImagesCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentSeoCollection = {
  __typename?: 'ComponentSeoCollection';
  items: Array<Maybe<ComponentSeo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentSeoCursorCollection = {
  __typename?: 'ComponentSeoCursorCollection';
  items: Array<Maybe<ComponentSeo>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export type ComponentSeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']>;
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSeoLinkingCollections = {
  __typename?: 'ComponentSeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageAboutCollection?: Maybe<PageAboutCollection>;
  pageAboutCursorCollection?: Maybe<PageAboutCursorCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageLandingCursorCollection?: Maybe<PageLandingCursorCollection>;
  pageProductCollection?: Maybe<PageProductCollection>;
  pageProductCursorCollection?: Maybe<PageProductCursorCollection>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type ComponentSeoLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type ComponentSeoLinkingCollectionsPageAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageAboutCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type ComponentSeoLinkingCollectionsPageAboutCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageAboutCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type ComponentSeoLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type ComponentSeoLinkingCollectionsPageLandingCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageLandingCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type ComponentSeoLinkingCollectionsPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type ComponentSeoLinkingCollectionsPageProductCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageProductCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};

export enum ComponentSeoLinkingCollectionsPageAboutCollectionOrder {
  CtaButtonTextAsc = 'ctaButtonText_ASC',
  CtaButtonTextDesc = 'ctaButtonText_DESC',
  CtaButtonUrlAsc = 'ctaButtonUrl_ASC',
  CtaButtonUrlDesc = 'ctaButtonUrl_DESC',
  CtaHeadingAsc = 'ctaHeading_ASC',
  CtaHeadingDesc = 'ctaHeading_DESC',
  FoundedYearAsc = 'foundedYear_ASC',
  FoundedYearDesc = 'foundedYear_DESC',
  HeroBadgeLabelAsc = 'heroBadgeLabel_ASC',
  HeroBadgeLabelDesc = 'heroBadgeLabel_DESC',
  HeroBadgeTitleAsc = 'heroBadgeTitle_ASC',
  HeroBadgeTitleDesc = 'heroBadgeTitle_DESC',
  HeroButtonTextAsc = 'heroButtonText_ASC',
  HeroButtonTextDesc = 'heroButtonText_DESC',
  HeroButtonUrlAsc = 'heroButtonUrl_ASC',
  HeroButtonUrlDesc = 'heroButtonUrl_DESC',
  HeroEyebrowAsc = 'heroEyebrow_ASC',
  HeroEyebrowDesc = 'heroEyebrow_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HostEyebrowAsc = 'hostEyebrow_ASC',
  HostEyebrowDesc = 'hostEyebrow_DESC',
  HostHeadingAsc = 'hostHeading_ASC',
  HostHeadingDesc = 'hostHeading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PastMarketsEyebrowAsc = 'pastMarketsEyebrow_ASC',
  PastMarketsEyebrowDesc = 'pastMarketsEyebrow_DESC',
  PastMarketsHeadingAsc = 'pastMarketsHeading_ASC',
  PastMarketsHeadingDesc = 'pastMarketsHeading_DESC',
  StoryEyebrowAsc = 'storyEyebrow_ASC',
  StoryEyebrowDesc = 'storyEyebrow_DESC',
  StoryHeadingAsc = 'storyHeading_ASC',
  StoryHeadingDesc = 'storyHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VendorsEyebrowAsc = 'vendorsEyebrow_ASC',
  VendorsEyebrowDesc = 'vendorsEyebrow_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum ComponentSeoLinkingCollectionsPageAboutCursorCollectionOrder {
  CtaButtonTextAsc = 'ctaButtonText_ASC',
  CtaButtonTextDesc = 'ctaButtonText_DESC',
  CtaButtonUrlAsc = 'ctaButtonUrl_ASC',
  CtaButtonUrlDesc = 'ctaButtonUrl_DESC',
  CtaHeadingAsc = 'ctaHeading_ASC',
  CtaHeadingDesc = 'ctaHeading_DESC',
  FoundedYearAsc = 'foundedYear_ASC',
  FoundedYearDesc = 'foundedYear_DESC',
  HeroBadgeLabelAsc = 'heroBadgeLabel_ASC',
  HeroBadgeLabelDesc = 'heroBadgeLabel_DESC',
  HeroBadgeTitleAsc = 'heroBadgeTitle_ASC',
  HeroBadgeTitleDesc = 'heroBadgeTitle_DESC',
  HeroButtonTextAsc = 'heroButtonText_ASC',
  HeroButtonTextDesc = 'heroButtonText_DESC',
  HeroButtonUrlAsc = 'heroButtonUrl_ASC',
  HeroButtonUrlDesc = 'heroButtonUrl_DESC',
  HeroEyebrowAsc = 'heroEyebrow_ASC',
  HeroEyebrowDesc = 'heroEyebrow_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HostEyebrowAsc = 'hostEyebrow_ASC',
  HostEyebrowDesc = 'hostEyebrow_DESC',
  HostHeadingAsc = 'hostHeading_ASC',
  HostHeadingDesc = 'hostHeading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PastMarketsEyebrowAsc = 'pastMarketsEyebrow_ASC',
  PastMarketsEyebrowDesc = 'pastMarketsEyebrow_DESC',
  PastMarketsHeadingAsc = 'pastMarketsHeading_ASC',
  PastMarketsHeadingDesc = 'pastMarketsHeading_DESC',
  StoryEyebrowAsc = 'storyEyebrow_ASC',
  StoryEyebrowDesc = 'storyEyebrow_DESC',
  StoryHeadingAsc = 'storyHeading_ASC',
  StoryHeadingDesc = 'storyHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VendorsEyebrowAsc = 'vendorsEyebrow_ASC',
  VendorsEyebrowDesc = 'vendorsEyebrow_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum ComponentSeoLinkingCollectionsPageLandingCollectionOrder {
  AboutUsHeadingAsc = 'aboutUsHeading_ASC',
  AboutUsHeadingDesc = 'aboutUsHeading_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UpcomingMarketsHeadingAsc = 'upcomingMarketsHeading_ASC',
  UpcomingMarketsHeadingDesc = 'upcomingMarketsHeading_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum ComponentSeoLinkingCollectionsPageLandingCursorCollectionOrder {
  AboutUsHeadingAsc = 'aboutUsHeading_ASC',
  AboutUsHeadingDesc = 'aboutUsHeading_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UpcomingMarketsHeadingAsc = 'upcomingMarketsHeading_ASC',
  UpcomingMarketsHeadingDesc = 'upcomingMarketsHeading_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum ComponentSeoLinkingCollectionsPageProductCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsPageProductCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NofollowAsc = 'nofollow_ASC',
  NofollowDesc = 'nofollow_DESC',
  NoindexAsc = 'noindex_ASC',
  NoindexDesc = 'noindex_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CursorPages = {
  __typename?: 'CursorPages';
  next?: Maybe<Scalars['String']>;
  prev?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryCursorCollection = {
  __typename?: 'EntryCursorCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/market) */
export type Market = Entry & _Node & {
  __typename?: 'Market';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<MarketLinkingCollections>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photosCollection?: Maybe<AssetCollection>;
  photosCursorCollection?: Maybe<AssetCursorCollection>;
  rsvpText?: Maybe<Scalars['String']>;
  rsvpUrl?: Maybe<Scalars['String']>;
  sys: Sys;
  time?: Maybe<Scalars['String']>;
  vendorCount?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/market) */
export type MarketDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/market) */
export type MarketDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/market) */
export type MarketLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/market) */
export type MarketLocationArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/market) */
export type MarketNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/market) */
export type MarketPhotosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/market) */
export type MarketPhotosCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/market) */
export type MarketRsvpTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/market) */
export type MarketRsvpUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/market) */
export type MarketTimeArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/market) */
export type MarketVendorCountArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MarketCollection = {
  __typename?: 'MarketCollection';
  items: Array<Maybe<Market>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MarketCursorCollection = {
  __typename?: 'MarketCursorCollection';
  items: Array<Maybe<Market>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export type MarketFilter = {
  AND?: InputMaybe<Array<InputMaybe<MarketFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MarketFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['String']>;
  date_contains?: InputMaybe<Scalars['String']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  date_not?: InputMaybe<Scalars['String']>;
  date_not_contains?: InputMaybe<Scalars['String']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  location_contains?: InputMaybe<Scalars['String']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_not?: InputMaybe<Scalars['String']>;
  location_not_contains?: InputMaybe<Scalars['String']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  photosCollection_exists?: InputMaybe<Scalars['Boolean']>;
  rsvpText?: InputMaybe<Scalars['String']>;
  rsvpText_contains?: InputMaybe<Scalars['String']>;
  rsvpText_exists?: InputMaybe<Scalars['Boolean']>;
  rsvpText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rsvpText_not?: InputMaybe<Scalars['String']>;
  rsvpText_not_contains?: InputMaybe<Scalars['String']>;
  rsvpText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rsvpUrl?: InputMaybe<Scalars['String']>;
  rsvpUrl_contains?: InputMaybe<Scalars['String']>;
  rsvpUrl_exists?: InputMaybe<Scalars['Boolean']>;
  rsvpUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rsvpUrl_not?: InputMaybe<Scalars['String']>;
  rsvpUrl_not_contains?: InputMaybe<Scalars['String']>;
  rsvpUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  time?: InputMaybe<Scalars['String']>;
  time_contains?: InputMaybe<Scalars['String']>;
  time_exists?: InputMaybe<Scalars['Boolean']>;
  time_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  time_not?: InputMaybe<Scalars['String']>;
  time_not_contains?: InputMaybe<Scalars['String']>;
  time_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorCount?: InputMaybe<Scalars['String']>;
  vendorCount_contains?: InputMaybe<Scalars['String']>;
  vendorCount_exists?: InputMaybe<Scalars['Boolean']>;
  vendorCount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorCount_not?: InputMaybe<Scalars['String']>;
  vendorCount_not_contains?: InputMaybe<Scalars['String']>;
  vendorCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MarketLinkingCollections = {
  __typename?: 'MarketLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageAboutCollection?: Maybe<PageAboutCollection>;
  pageAboutCursorCollection?: Maybe<PageAboutCursorCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageLandingCursorCollection?: Maybe<PageLandingCursorCollection>;
};


export type MarketLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MarketLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MarketLinkingCollectionsPageAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MarketLinkingCollectionsPageAboutCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MarketLinkingCollectionsPageAboutCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MarketLinkingCollectionsPageAboutCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MarketLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MarketLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MarketLinkingCollectionsPageLandingCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MarketLinkingCollectionsPageLandingCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};

export enum MarketLinkingCollectionsPageAboutCollectionOrder {
  CtaButtonTextAsc = 'ctaButtonText_ASC',
  CtaButtonTextDesc = 'ctaButtonText_DESC',
  CtaButtonUrlAsc = 'ctaButtonUrl_ASC',
  CtaButtonUrlDesc = 'ctaButtonUrl_DESC',
  CtaHeadingAsc = 'ctaHeading_ASC',
  CtaHeadingDesc = 'ctaHeading_DESC',
  FoundedYearAsc = 'foundedYear_ASC',
  FoundedYearDesc = 'foundedYear_DESC',
  HeroBadgeLabelAsc = 'heroBadgeLabel_ASC',
  HeroBadgeLabelDesc = 'heroBadgeLabel_DESC',
  HeroBadgeTitleAsc = 'heroBadgeTitle_ASC',
  HeroBadgeTitleDesc = 'heroBadgeTitle_DESC',
  HeroButtonTextAsc = 'heroButtonText_ASC',
  HeroButtonTextDesc = 'heroButtonText_DESC',
  HeroButtonUrlAsc = 'heroButtonUrl_ASC',
  HeroButtonUrlDesc = 'heroButtonUrl_DESC',
  HeroEyebrowAsc = 'heroEyebrow_ASC',
  HeroEyebrowDesc = 'heroEyebrow_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HostEyebrowAsc = 'hostEyebrow_ASC',
  HostEyebrowDesc = 'hostEyebrow_DESC',
  HostHeadingAsc = 'hostHeading_ASC',
  HostHeadingDesc = 'hostHeading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PastMarketsEyebrowAsc = 'pastMarketsEyebrow_ASC',
  PastMarketsEyebrowDesc = 'pastMarketsEyebrow_DESC',
  PastMarketsHeadingAsc = 'pastMarketsHeading_ASC',
  PastMarketsHeadingDesc = 'pastMarketsHeading_DESC',
  StoryEyebrowAsc = 'storyEyebrow_ASC',
  StoryEyebrowDesc = 'storyEyebrow_DESC',
  StoryHeadingAsc = 'storyHeading_ASC',
  StoryHeadingDesc = 'storyHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VendorsEyebrowAsc = 'vendorsEyebrow_ASC',
  VendorsEyebrowDesc = 'vendorsEyebrow_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum MarketLinkingCollectionsPageAboutCursorCollectionOrder {
  CtaButtonTextAsc = 'ctaButtonText_ASC',
  CtaButtonTextDesc = 'ctaButtonText_DESC',
  CtaButtonUrlAsc = 'ctaButtonUrl_ASC',
  CtaButtonUrlDesc = 'ctaButtonUrl_DESC',
  CtaHeadingAsc = 'ctaHeading_ASC',
  CtaHeadingDesc = 'ctaHeading_DESC',
  FoundedYearAsc = 'foundedYear_ASC',
  FoundedYearDesc = 'foundedYear_DESC',
  HeroBadgeLabelAsc = 'heroBadgeLabel_ASC',
  HeroBadgeLabelDesc = 'heroBadgeLabel_DESC',
  HeroBadgeTitleAsc = 'heroBadgeTitle_ASC',
  HeroBadgeTitleDesc = 'heroBadgeTitle_DESC',
  HeroButtonTextAsc = 'heroButtonText_ASC',
  HeroButtonTextDesc = 'heroButtonText_DESC',
  HeroButtonUrlAsc = 'heroButtonUrl_ASC',
  HeroButtonUrlDesc = 'heroButtonUrl_DESC',
  HeroEyebrowAsc = 'heroEyebrow_ASC',
  HeroEyebrowDesc = 'heroEyebrow_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HostEyebrowAsc = 'hostEyebrow_ASC',
  HostEyebrowDesc = 'hostEyebrow_DESC',
  HostHeadingAsc = 'hostHeading_ASC',
  HostHeadingDesc = 'hostHeading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PastMarketsEyebrowAsc = 'pastMarketsEyebrow_ASC',
  PastMarketsEyebrowDesc = 'pastMarketsEyebrow_DESC',
  PastMarketsHeadingAsc = 'pastMarketsHeading_ASC',
  PastMarketsHeadingDesc = 'pastMarketsHeading_DESC',
  StoryEyebrowAsc = 'storyEyebrow_ASC',
  StoryEyebrowDesc = 'storyEyebrow_DESC',
  StoryHeadingAsc = 'storyHeading_ASC',
  StoryHeadingDesc = 'storyHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VendorsEyebrowAsc = 'vendorsEyebrow_ASC',
  VendorsEyebrowDesc = 'vendorsEyebrow_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum MarketLinkingCollectionsPageLandingCollectionOrder {
  AboutUsHeadingAsc = 'aboutUsHeading_ASC',
  AboutUsHeadingDesc = 'aboutUsHeading_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UpcomingMarketsHeadingAsc = 'upcomingMarketsHeading_ASC',
  UpcomingMarketsHeadingDesc = 'upcomingMarketsHeading_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum MarketLinkingCollectionsPageLandingCursorCollectionOrder {
  AboutUsHeadingAsc = 'aboutUsHeading_ASC',
  AboutUsHeadingDesc = 'aboutUsHeading_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UpcomingMarketsHeadingAsc = 'upcomingMarketsHeading_ASC',
  UpcomingMarketsHeadingDesc = 'upcomingMarketsHeading_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum MarketOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RsvpTextAsc = 'rsvpText_ASC',
  RsvpTextDesc = 'rsvpText_DESC',
  RsvpUrlAsc = 'rsvpUrl_ASC',
  RsvpUrlDesc = 'rsvpUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  VendorCountAsc = 'vendorCount_ASC',
  VendorCountDesc = 'vendorCount_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAbout = Entry & _Node & {
  __typename?: 'PageAbout';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  ctaButtonText?: Maybe<Scalars['String']>;
  ctaButtonUrl?: Maybe<Scalars['String']>;
  ctaHeading?: Maybe<Scalars['String']>;
  ctaText?: Maybe<Scalars['String']>;
  featuredVendorsCollection?: Maybe<PageAboutFeaturedVendorsCollection>;
  featuredVendorsCursorCollection?: Maybe<PageAboutFeaturedVendorsCursorCollection>;
  foundedYear?: Maybe<Scalars['String']>;
  heroBadgeLabel?: Maybe<Scalars['String']>;
  heroBadgeTitle?: Maybe<Scalars['String']>;
  heroButtonText?: Maybe<Scalars['String']>;
  heroButtonUrl?: Maybe<Scalars['String']>;
  heroEyebrow?: Maybe<Scalars['String']>;
  heroImage?: Maybe<Asset>;
  heroSecondaryImage?: Maybe<Asset>;
  heroSubtitle?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  host?: Maybe<PageProduct>;
  hostEyebrow?: Maybe<Scalars['String']>;
  hostHeading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageAboutLinkingCollections>;
  pastMarketsCollection?: Maybe<PageAboutPastMarketsCollection>;
  pastMarketsCursorCollection?: Maybe<PageAboutPastMarketsCursorCollection>;
  pastMarketsEyebrow?: Maybe<Scalars['String']>;
  pastMarketsHeading?: Maybe<Scalars['String']>;
  pastMarketsText?: Maybe<Scalars['String']>;
  seoFields?: Maybe<ComponentSeo>;
  storyEyebrow?: Maybe<Scalars['String']>;
  storyHeading?: Maybe<Scalars['String']>;
  storyText?: Maybe<Scalars['String']>;
  sys: Sys;
  vendorsEyebrow?: Maybe<Scalars['String']>;
  vendorsHeading?: Maybe<Scalars['String']>;
  vendorsText?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutCtaButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutCtaButtonUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutCtaHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutFeaturedVendorsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageAboutFeaturedVendorsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageProductFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutFeaturedVendorsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageAboutFeaturedVendorsCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageProductFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutFoundedYearArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutHeroBadgeLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutHeroBadgeTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutHeroButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutHeroButtonUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutHeroEyebrowArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutHeroSecondaryImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutHeroSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutHeroTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutHostArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageProductFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutHostEyebrowArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutHostHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutPastMarketsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageAboutPastMarketsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MarketFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutPastMarketsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageAboutPastMarketsCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MarketFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutPastMarketsEyebrowArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutPastMarketsHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutPastMarketsTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutStoryEyebrowArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutStoryHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutStoryTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutVendorsEyebrowArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutVendorsHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageAbout) */
export type PageAboutVendorsTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};

export type PageAboutCollection = {
  __typename?: 'PageAboutCollection';
  items: Array<Maybe<PageAbout>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageAboutCursorCollection = {
  __typename?: 'PageAboutCursorCollection';
  items: Array<Maybe<PageAbout>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export type PageAboutFeaturedVendorsCollection = {
  __typename?: 'PageAboutFeaturedVendorsCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageAboutFeaturedVendorsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageAboutFeaturedVendorsCursorCollection = {
  __typename?: 'PageAboutFeaturedVendorsCursorCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export enum PageAboutFeaturedVendorsCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageAboutFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageAboutFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageAboutFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaButtonText?: InputMaybe<Scalars['String']>;
  ctaButtonText_contains?: InputMaybe<Scalars['String']>;
  ctaButtonText_exists?: InputMaybe<Scalars['Boolean']>;
  ctaButtonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaButtonText_not?: InputMaybe<Scalars['String']>;
  ctaButtonText_not_contains?: InputMaybe<Scalars['String']>;
  ctaButtonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaButtonUrl?: InputMaybe<Scalars['String']>;
  ctaButtonUrl_contains?: InputMaybe<Scalars['String']>;
  ctaButtonUrl_exists?: InputMaybe<Scalars['Boolean']>;
  ctaButtonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaButtonUrl_not?: InputMaybe<Scalars['String']>;
  ctaButtonUrl_not_contains?: InputMaybe<Scalars['String']>;
  ctaButtonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaHeading?: InputMaybe<Scalars['String']>;
  ctaHeading_contains?: InputMaybe<Scalars['String']>;
  ctaHeading_exists?: InputMaybe<Scalars['Boolean']>;
  ctaHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaHeading_not?: InputMaybe<Scalars['String']>;
  ctaHeading_not_contains?: InputMaybe<Scalars['String']>;
  ctaHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaText?: InputMaybe<Scalars['String']>;
  ctaText_contains?: InputMaybe<Scalars['String']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaText_not?: InputMaybe<Scalars['String']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredVendors?: InputMaybe<CfPageProductNestedFilter>;
  featuredVendorsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  foundedYear?: InputMaybe<Scalars['String']>;
  foundedYear_contains?: InputMaybe<Scalars['String']>;
  foundedYear_exists?: InputMaybe<Scalars['Boolean']>;
  foundedYear_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  foundedYear_not?: InputMaybe<Scalars['String']>;
  foundedYear_not_contains?: InputMaybe<Scalars['String']>;
  foundedYear_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBadgeLabel?: InputMaybe<Scalars['String']>;
  heroBadgeLabel_contains?: InputMaybe<Scalars['String']>;
  heroBadgeLabel_exists?: InputMaybe<Scalars['Boolean']>;
  heroBadgeLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBadgeLabel_not?: InputMaybe<Scalars['String']>;
  heroBadgeLabel_not_contains?: InputMaybe<Scalars['String']>;
  heroBadgeLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBadgeTitle?: InputMaybe<Scalars['String']>;
  heroBadgeTitle_contains?: InputMaybe<Scalars['String']>;
  heroBadgeTitle_exists?: InputMaybe<Scalars['Boolean']>;
  heroBadgeTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBadgeTitle_not?: InputMaybe<Scalars['String']>;
  heroBadgeTitle_not_contains?: InputMaybe<Scalars['String']>;
  heroBadgeTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroButtonText?: InputMaybe<Scalars['String']>;
  heroButtonText_contains?: InputMaybe<Scalars['String']>;
  heroButtonText_exists?: InputMaybe<Scalars['Boolean']>;
  heroButtonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroButtonText_not?: InputMaybe<Scalars['String']>;
  heroButtonText_not_contains?: InputMaybe<Scalars['String']>;
  heroButtonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroButtonUrl?: InputMaybe<Scalars['String']>;
  heroButtonUrl_contains?: InputMaybe<Scalars['String']>;
  heroButtonUrl_exists?: InputMaybe<Scalars['Boolean']>;
  heroButtonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroButtonUrl_not?: InputMaybe<Scalars['String']>;
  heroButtonUrl_not_contains?: InputMaybe<Scalars['String']>;
  heroButtonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroEyebrow?: InputMaybe<Scalars['String']>;
  heroEyebrow_contains?: InputMaybe<Scalars['String']>;
  heroEyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  heroEyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroEyebrow_not?: InputMaybe<Scalars['String']>;
  heroEyebrow_not_contains?: InputMaybe<Scalars['String']>;
  heroEyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']>;
  heroSecondaryImage_exists?: InputMaybe<Scalars['Boolean']>;
  heroSubtitle?: InputMaybe<Scalars['String']>;
  heroSubtitle_contains?: InputMaybe<Scalars['String']>;
  heroSubtitle_exists?: InputMaybe<Scalars['Boolean']>;
  heroSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroSubtitle_not?: InputMaybe<Scalars['String']>;
  heroSubtitle_not_contains?: InputMaybe<Scalars['String']>;
  heroSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroTitle?: InputMaybe<Scalars['String']>;
  heroTitle_contains?: InputMaybe<Scalars['String']>;
  heroTitle_exists?: InputMaybe<Scalars['Boolean']>;
  heroTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroTitle_not?: InputMaybe<Scalars['String']>;
  heroTitle_not_contains?: InputMaybe<Scalars['String']>;
  heroTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host?: InputMaybe<CfPageProductNestedFilter>;
  hostEyebrow?: InputMaybe<Scalars['String']>;
  hostEyebrow_contains?: InputMaybe<Scalars['String']>;
  hostEyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  hostEyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hostEyebrow_not?: InputMaybe<Scalars['String']>;
  hostEyebrow_not_contains?: InputMaybe<Scalars['String']>;
  hostEyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hostHeading?: InputMaybe<Scalars['String']>;
  hostHeading_contains?: InputMaybe<Scalars['String']>;
  hostHeading_exists?: InputMaybe<Scalars['Boolean']>;
  hostHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hostHeading_not?: InputMaybe<Scalars['String']>;
  hostHeading_not_contains?: InputMaybe<Scalars['String']>;
  hostHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pastMarkets?: InputMaybe<CfMarketNestedFilter>;
  pastMarketsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  pastMarketsEyebrow?: InputMaybe<Scalars['String']>;
  pastMarketsEyebrow_contains?: InputMaybe<Scalars['String']>;
  pastMarketsEyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  pastMarketsEyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pastMarketsEyebrow_not?: InputMaybe<Scalars['String']>;
  pastMarketsEyebrow_not_contains?: InputMaybe<Scalars['String']>;
  pastMarketsEyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pastMarketsHeading?: InputMaybe<Scalars['String']>;
  pastMarketsHeading_contains?: InputMaybe<Scalars['String']>;
  pastMarketsHeading_exists?: InputMaybe<Scalars['Boolean']>;
  pastMarketsHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pastMarketsHeading_not?: InputMaybe<Scalars['String']>;
  pastMarketsHeading_not_contains?: InputMaybe<Scalars['String']>;
  pastMarketsHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pastMarketsText?: InputMaybe<Scalars['String']>;
  pastMarketsText_contains?: InputMaybe<Scalars['String']>;
  pastMarketsText_exists?: InputMaybe<Scalars['Boolean']>;
  pastMarketsText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pastMarketsText_not?: InputMaybe<Scalars['String']>;
  pastMarketsText_not_contains?: InputMaybe<Scalars['String']>;
  pastMarketsText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  storyEyebrow?: InputMaybe<Scalars['String']>;
  storyEyebrow_contains?: InputMaybe<Scalars['String']>;
  storyEyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  storyEyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  storyEyebrow_not?: InputMaybe<Scalars['String']>;
  storyEyebrow_not_contains?: InputMaybe<Scalars['String']>;
  storyEyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  storyHeading?: InputMaybe<Scalars['String']>;
  storyHeading_contains?: InputMaybe<Scalars['String']>;
  storyHeading_exists?: InputMaybe<Scalars['Boolean']>;
  storyHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  storyHeading_not?: InputMaybe<Scalars['String']>;
  storyHeading_not_contains?: InputMaybe<Scalars['String']>;
  storyHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  storyText?: InputMaybe<Scalars['String']>;
  storyText_contains?: InputMaybe<Scalars['String']>;
  storyText_exists?: InputMaybe<Scalars['Boolean']>;
  storyText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  storyText_not?: InputMaybe<Scalars['String']>;
  storyText_not_contains?: InputMaybe<Scalars['String']>;
  storyText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  vendorsEyebrow?: InputMaybe<Scalars['String']>;
  vendorsEyebrow_contains?: InputMaybe<Scalars['String']>;
  vendorsEyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  vendorsEyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorsEyebrow_not?: InputMaybe<Scalars['String']>;
  vendorsEyebrow_not_contains?: InputMaybe<Scalars['String']>;
  vendorsEyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorsHeading?: InputMaybe<Scalars['String']>;
  vendorsHeading_contains?: InputMaybe<Scalars['String']>;
  vendorsHeading_exists?: InputMaybe<Scalars['Boolean']>;
  vendorsHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorsHeading_not?: InputMaybe<Scalars['String']>;
  vendorsHeading_not_contains?: InputMaybe<Scalars['String']>;
  vendorsHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorsText?: InputMaybe<Scalars['String']>;
  vendorsText_contains?: InputMaybe<Scalars['String']>;
  vendorsText_exists?: InputMaybe<Scalars['Boolean']>;
  vendorsText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorsText_not?: InputMaybe<Scalars['String']>;
  vendorsText_not_contains?: InputMaybe<Scalars['String']>;
  vendorsText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageAboutLinkingCollections = {
  __typename?: 'PageAboutLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type PageAboutLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type PageAboutLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};

export enum PageAboutOrder {
  CtaButtonTextAsc = 'ctaButtonText_ASC',
  CtaButtonTextDesc = 'ctaButtonText_DESC',
  CtaButtonUrlAsc = 'ctaButtonUrl_ASC',
  CtaButtonUrlDesc = 'ctaButtonUrl_DESC',
  CtaHeadingAsc = 'ctaHeading_ASC',
  CtaHeadingDesc = 'ctaHeading_DESC',
  FoundedYearAsc = 'foundedYear_ASC',
  FoundedYearDesc = 'foundedYear_DESC',
  HeroBadgeLabelAsc = 'heroBadgeLabel_ASC',
  HeroBadgeLabelDesc = 'heroBadgeLabel_DESC',
  HeroBadgeTitleAsc = 'heroBadgeTitle_ASC',
  HeroBadgeTitleDesc = 'heroBadgeTitle_DESC',
  HeroButtonTextAsc = 'heroButtonText_ASC',
  HeroButtonTextDesc = 'heroButtonText_DESC',
  HeroButtonUrlAsc = 'heroButtonUrl_ASC',
  HeroButtonUrlDesc = 'heroButtonUrl_DESC',
  HeroEyebrowAsc = 'heroEyebrow_ASC',
  HeroEyebrowDesc = 'heroEyebrow_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HostEyebrowAsc = 'hostEyebrow_ASC',
  HostEyebrowDesc = 'hostEyebrow_DESC',
  HostHeadingAsc = 'hostHeading_ASC',
  HostHeadingDesc = 'hostHeading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PastMarketsEyebrowAsc = 'pastMarketsEyebrow_ASC',
  PastMarketsEyebrowDesc = 'pastMarketsEyebrow_DESC',
  PastMarketsHeadingAsc = 'pastMarketsHeading_ASC',
  PastMarketsHeadingDesc = 'pastMarketsHeading_DESC',
  StoryEyebrowAsc = 'storyEyebrow_ASC',
  StoryEyebrowDesc = 'storyEyebrow_DESC',
  StoryHeadingAsc = 'storyHeading_ASC',
  StoryHeadingDesc = 'storyHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VendorsEyebrowAsc = 'vendorsEyebrow_ASC',
  VendorsEyebrowDesc = 'vendorsEyebrow_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export type PageAboutPastMarketsCollection = {
  __typename?: 'PageAboutPastMarketsCollection';
  items: Array<Maybe<Market>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageAboutPastMarketsCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RsvpTextAsc = 'rsvpText_ASC',
  RsvpTextDesc = 'rsvpText_DESC',
  RsvpUrlAsc = 'rsvpUrl_ASC',
  RsvpUrlDesc = 'rsvpUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  VendorCountAsc = 'vendorCount_ASC',
  VendorCountDesc = 'vendorCount_DESC'
}

export type PageAboutPastMarketsCursorCollection = {
  __typename?: 'PageAboutPastMarketsCursorCollection';
  items: Array<Maybe<Market>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export enum PageAboutPastMarketsCursorCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RsvpTextAsc = 'rsvpText_ASC',
  RsvpTextDesc = 'rsvpText_DESC',
  RsvpUrlAsc = 'rsvpUrl_ASC',
  RsvpUrlDesc = 'rsvpUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  VendorCountAsc = 'vendorCount_ASC',
  VendorCountDesc = 'vendorCount_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLanding = Entry & _Node & {
  __typename?: 'PageLanding';
  _id: Scalars['ID'];
  aboutUsHeading?: Maybe<Scalars['String']>;
  aboutUsText?: Maybe<Scalars['String']>;
  buttons?: Maybe<Button>;
  contentfulMetadata: ContentfulMetadata;
  heroBannerHeadline?: Maybe<Scalars['String']>;
  heroBannerHeadlineColor?: Maybe<Scalars['String']>;
  heroBannerImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageLandingLinkingCollections>;
  marketsCollection?: Maybe<PageLandingMarketsCollection>;
  marketsCursorCollection?: Maybe<PageLandingMarketsCursorCollection>;
  organizersCollection?: Maybe<PageLandingOrganizersCollection>;
  organizersCursorCollection?: Maybe<PageLandingOrganizersCursorCollection>;
  productsCollection?: Maybe<PageLandingProductsCollection>;
  productsCursorCollection?: Maybe<PageLandingProductsCursorCollection>;
  seoFields?: Maybe<ComponentSeo>;
  sys: Sys;
  upcomingMarketsHeading?: Maybe<Scalars['String']>;
  vendorsHeading?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingAboutUsHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingAboutUsTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingButtonsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ButtonFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingHeroBannerHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingHeroBannerHeadlineColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingHeroBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingMarketsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingMarketsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MarketFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingMarketsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingMarketsCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MarketFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingOrganizersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingOrganizersCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingProductsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageProductFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingProductsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingProductsCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageProductFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingUpcomingMarketsHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageLanding) */
export type PageLandingVendorsHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};

export type PageLandingCollection = {
  __typename?: 'PageLandingCollection';
  items: Array<Maybe<PageLanding>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageLandingCursorCollection = {
  __typename?: 'PageLandingCursorCollection';
  items: Array<Maybe<PageLanding>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export type PageLandingFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  aboutUsHeading?: InputMaybe<Scalars['String']>;
  aboutUsHeading_contains?: InputMaybe<Scalars['String']>;
  aboutUsHeading_exists?: InputMaybe<Scalars['Boolean']>;
  aboutUsHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aboutUsHeading_not?: InputMaybe<Scalars['String']>;
  aboutUsHeading_not_contains?: InputMaybe<Scalars['String']>;
  aboutUsHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aboutUsText?: InputMaybe<Scalars['String']>;
  aboutUsText_contains?: InputMaybe<Scalars['String']>;
  aboutUsText_exists?: InputMaybe<Scalars['Boolean']>;
  aboutUsText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aboutUsText_not?: InputMaybe<Scalars['String']>;
  aboutUsText_not_contains?: InputMaybe<Scalars['String']>;
  aboutUsText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttons?: InputMaybe<CfButtonNestedFilter>;
  buttons_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heroBannerHeadline?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadlineColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadlineColor_not?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_not_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadline_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadline_not?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_not_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  markets?: InputMaybe<CfMarketNestedFilter>;
  marketsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  organizersCollection_exists?: InputMaybe<Scalars['Boolean']>;
  products?: InputMaybe<CfPageProductNestedFilter>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  upcomingMarketsHeading?: InputMaybe<Scalars['String']>;
  upcomingMarketsHeading_contains?: InputMaybe<Scalars['String']>;
  upcomingMarketsHeading_exists?: InputMaybe<Scalars['Boolean']>;
  upcomingMarketsHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  upcomingMarketsHeading_not?: InputMaybe<Scalars['String']>;
  upcomingMarketsHeading_not_contains?: InputMaybe<Scalars['String']>;
  upcomingMarketsHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorsHeading?: InputMaybe<Scalars['String']>;
  vendorsHeading_contains?: InputMaybe<Scalars['String']>;
  vendorsHeading_exists?: InputMaybe<Scalars['Boolean']>;
  vendorsHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorsHeading_not?: InputMaybe<Scalars['String']>;
  vendorsHeading_not_contains?: InputMaybe<Scalars['String']>;
  vendorsHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageLandingLinkingCollections = {
  __typename?: 'PageLandingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type PageLandingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type PageLandingLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};

export type PageLandingMarketsCollection = {
  __typename?: 'PageLandingMarketsCollection';
  items: Array<Maybe<Market>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageLandingMarketsCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RsvpTextAsc = 'rsvpText_ASC',
  RsvpTextDesc = 'rsvpText_DESC',
  RsvpUrlAsc = 'rsvpUrl_ASC',
  RsvpUrlDesc = 'rsvpUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  VendorCountAsc = 'vendorCount_ASC',
  VendorCountDesc = 'vendorCount_DESC'
}

export type PageLandingMarketsCursorCollection = {
  __typename?: 'PageLandingMarketsCursorCollection';
  items: Array<Maybe<Market>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export enum PageLandingMarketsCursorCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RsvpTextAsc = 'rsvpText_ASC',
  RsvpTextDesc = 'rsvpText_DESC',
  RsvpUrlAsc = 'rsvpUrl_ASC',
  RsvpUrlDesc = 'rsvpUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  VendorCountAsc = 'vendorCount_ASC',
  VendorCountDesc = 'vendorCount_DESC'
}

export enum PageLandingOrder {
  AboutUsHeadingAsc = 'aboutUsHeading_ASC',
  AboutUsHeadingDesc = 'aboutUsHeading_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UpcomingMarketsHeadingAsc = 'upcomingMarketsHeading_ASC',
  UpcomingMarketsHeadingDesc = 'upcomingMarketsHeading_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export type PageLandingOrganizersCollection = {
  __typename?: 'PageLandingOrganizersCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageLandingOrganizersCursorCollection = {
  __typename?: 'PageLandingOrganizersCursorCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export type PageLandingProductsCollection = {
  __typename?: 'PageLandingProductsCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageLandingProductsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageLandingProductsCursorCollection = {
  __typename?: 'PageLandingProductsCursorCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export enum PageLandingProductsCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProduct = Entry & _Node & {
  __typename?: 'PageProduct';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  featuredProductImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageProductLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productImagesCollection?: Maybe<AssetCollection>;
  productImagesCursorCollection?: Maybe<AssetCursorCollection>;
  relatedProductsCollection?: Maybe<PageProductRelatedProductsCollection>;
  relatedProductsCursorCollection?: Maybe<PageProductRelatedProductsCursorCollection>;
  seoFields?: Maybe<ComponentSeo>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  typeOfVendor?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductFeaturedProductImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductProductImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductProductImagesCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductRelatedProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductRelatedProductsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageProductFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductRelatedProductsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductRelatedProductsCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageProductFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zpkn97k5l3y7/content_types/pageProduct) */
export type PageProductTypeOfVendorArgs = {
  locale?: InputMaybe<Scalars['String']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};

export type PageProductCollection = {
  __typename?: 'PageProductCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageProductCursorCollection = {
  __typename?: 'PageProductCursorCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export type PageProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageProductFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredProductImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Float']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  productImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  relatedProducts?: InputMaybe<CfPageProductNestedFilter>;
  relatedProductsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  typeOfVendor_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeOfVendor_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeOfVendor_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeOfVendor_exists?: InputMaybe<Scalars['Boolean']>;
};

export type PageProductLinkingCollections = {
  __typename?: 'PageProductLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageAboutCollection?: Maybe<PageAboutCollection>;
  pageAboutCursorCollection?: Maybe<PageAboutCursorCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageLandingCursorCollection?: Maybe<PageLandingCursorCollection>;
  pageProductCollection?: Maybe<PageProductCollection>;
  pageProductCursorCollection?: Maybe<PageProductCursorCollection>;
};


export type PageProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type PageProductLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type PageProductLinkingCollectionsPageAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductLinkingCollectionsPageAboutCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type PageProductLinkingCollectionsPageAboutCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductLinkingCollectionsPageAboutCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type PageProductLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type PageProductLinkingCollectionsPageLandingCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductLinkingCollectionsPageLandingCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type PageProductLinkingCollectionsPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductLinkingCollectionsPageProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type PageProductLinkingCollectionsPageProductCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductLinkingCollectionsPageProductCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};

export enum PageProductLinkingCollectionsPageAboutCollectionOrder {
  CtaButtonTextAsc = 'ctaButtonText_ASC',
  CtaButtonTextDesc = 'ctaButtonText_DESC',
  CtaButtonUrlAsc = 'ctaButtonUrl_ASC',
  CtaButtonUrlDesc = 'ctaButtonUrl_DESC',
  CtaHeadingAsc = 'ctaHeading_ASC',
  CtaHeadingDesc = 'ctaHeading_DESC',
  FoundedYearAsc = 'foundedYear_ASC',
  FoundedYearDesc = 'foundedYear_DESC',
  HeroBadgeLabelAsc = 'heroBadgeLabel_ASC',
  HeroBadgeLabelDesc = 'heroBadgeLabel_DESC',
  HeroBadgeTitleAsc = 'heroBadgeTitle_ASC',
  HeroBadgeTitleDesc = 'heroBadgeTitle_DESC',
  HeroButtonTextAsc = 'heroButtonText_ASC',
  HeroButtonTextDesc = 'heroButtonText_DESC',
  HeroButtonUrlAsc = 'heroButtonUrl_ASC',
  HeroButtonUrlDesc = 'heroButtonUrl_DESC',
  HeroEyebrowAsc = 'heroEyebrow_ASC',
  HeroEyebrowDesc = 'heroEyebrow_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HostEyebrowAsc = 'hostEyebrow_ASC',
  HostEyebrowDesc = 'hostEyebrow_DESC',
  HostHeadingAsc = 'hostHeading_ASC',
  HostHeadingDesc = 'hostHeading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PastMarketsEyebrowAsc = 'pastMarketsEyebrow_ASC',
  PastMarketsEyebrowDesc = 'pastMarketsEyebrow_DESC',
  PastMarketsHeadingAsc = 'pastMarketsHeading_ASC',
  PastMarketsHeadingDesc = 'pastMarketsHeading_DESC',
  StoryEyebrowAsc = 'storyEyebrow_ASC',
  StoryEyebrowDesc = 'storyEyebrow_DESC',
  StoryHeadingAsc = 'storyHeading_ASC',
  StoryHeadingDesc = 'storyHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VendorsEyebrowAsc = 'vendorsEyebrow_ASC',
  VendorsEyebrowDesc = 'vendorsEyebrow_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum PageProductLinkingCollectionsPageAboutCursorCollectionOrder {
  CtaButtonTextAsc = 'ctaButtonText_ASC',
  CtaButtonTextDesc = 'ctaButtonText_DESC',
  CtaButtonUrlAsc = 'ctaButtonUrl_ASC',
  CtaButtonUrlDesc = 'ctaButtonUrl_DESC',
  CtaHeadingAsc = 'ctaHeading_ASC',
  CtaHeadingDesc = 'ctaHeading_DESC',
  FoundedYearAsc = 'foundedYear_ASC',
  FoundedYearDesc = 'foundedYear_DESC',
  HeroBadgeLabelAsc = 'heroBadgeLabel_ASC',
  HeroBadgeLabelDesc = 'heroBadgeLabel_DESC',
  HeroBadgeTitleAsc = 'heroBadgeTitle_ASC',
  HeroBadgeTitleDesc = 'heroBadgeTitle_DESC',
  HeroButtonTextAsc = 'heroButtonText_ASC',
  HeroButtonTextDesc = 'heroButtonText_DESC',
  HeroButtonUrlAsc = 'heroButtonUrl_ASC',
  HeroButtonUrlDesc = 'heroButtonUrl_DESC',
  HeroEyebrowAsc = 'heroEyebrow_ASC',
  HeroEyebrowDesc = 'heroEyebrow_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HostEyebrowAsc = 'hostEyebrow_ASC',
  HostEyebrowDesc = 'hostEyebrow_DESC',
  HostHeadingAsc = 'hostHeading_ASC',
  HostHeadingDesc = 'hostHeading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PastMarketsEyebrowAsc = 'pastMarketsEyebrow_ASC',
  PastMarketsEyebrowDesc = 'pastMarketsEyebrow_DESC',
  PastMarketsHeadingAsc = 'pastMarketsHeading_ASC',
  PastMarketsHeadingDesc = 'pastMarketsHeading_DESC',
  StoryEyebrowAsc = 'storyEyebrow_ASC',
  StoryEyebrowDesc = 'storyEyebrow_DESC',
  StoryHeadingAsc = 'storyHeading_ASC',
  StoryHeadingDesc = 'storyHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VendorsEyebrowAsc = 'vendorsEyebrow_ASC',
  VendorsEyebrowDesc = 'vendorsEyebrow_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum PageProductLinkingCollectionsPageLandingCollectionOrder {
  AboutUsHeadingAsc = 'aboutUsHeading_ASC',
  AboutUsHeadingDesc = 'aboutUsHeading_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UpcomingMarketsHeadingAsc = 'upcomingMarketsHeading_ASC',
  UpcomingMarketsHeadingDesc = 'upcomingMarketsHeading_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum PageProductLinkingCollectionsPageLandingCursorCollectionOrder {
  AboutUsHeadingAsc = 'aboutUsHeading_ASC',
  AboutUsHeadingDesc = 'aboutUsHeading_DESC',
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UpcomingMarketsHeadingAsc = 'upcomingMarketsHeading_ASC',
  UpcomingMarketsHeadingDesc = 'upcomingMarketsHeading_DESC',
  VendorsHeadingAsc = 'vendorsHeading_ASC',
  VendorsHeadingDesc = 'vendorsHeading_DESC'
}

export enum PageProductLinkingCollectionsPageProductCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageProductLinkingCollectionsPageProductCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageProductOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageProductRelatedProductsCollection = {
  __typename?: 'PageProductRelatedProductsCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageProductRelatedProductsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageProductRelatedProductsCursorCollection = {
  __typename?: 'PageProductRelatedProductsCursorCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  pages: CursorPages;
};

export enum PageProductRelatedProductsCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  assetCursorCollection?: Maybe<AssetCursorCollection>;
  button?: Maybe<Button>;
  buttonCollection?: Maybe<ButtonCollection>;
  buttonCursorCollection?: Maybe<ButtonCursorCollection>;
  componentSeo?: Maybe<ComponentSeo>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  componentSeoCursorCollection?: Maybe<ComponentSeoCursorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  market?: Maybe<Market>;
  marketCollection?: Maybe<MarketCollection>;
  marketCursorCollection?: Maybe<MarketCursorCollection>;
  pageAbout?: Maybe<PageAbout>;
  pageAboutCollection?: Maybe<PageAboutCollection>;
  pageAboutCursorCollection?: Maybe<PageAboutCursorCollection>;
  pageLanding?: Maybe<PageLanding>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageLandingCursorCollection?: Maybe<PageLandingCursorCollection>;
  pageProduct?: Maybe<PageProduct>;
  pageProductCollection?: Maybe<PageProductCollection>;
  pageProductCursorCollection?: Maybe<PageProductCursorCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAssetCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryButtonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type QueryButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ButtonFilter>;
};


export type QueryButtonCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ButtonFilter>;
};


export type QueryComponentSeoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


export type QueryComponentSeoCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryMarketArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMarketCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MarketOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MarketFilter>;
};


export type QueryMarketCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MarketOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MarketFilter>;
};


export type QueryPageAboutArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageAboutOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageAboutFilter>;
};


export type QueryPageAboutCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageAboutOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageAboutFilter>;
};


export type QueryPageLandingArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageLandingFilter>;
};


export type QueryPageLandingCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageLandingFilter>;
};


export type QueryPageProductArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageProductFilter>;
};


export type QueryPageProductCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductOrder>>>;
  pageNext?: InputMaybe<Scalars['String']>;
  pagePrev?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageProductFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']>;
};

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte?: InputMaybe<Scalars['String']>;
  /** Preview content starting from a given timestamp */
  timestamp_lte?: InputMaybe<Scalars['DateTime']>;
};

export type _Node = {
  _id: Scalars['ID'];
};

export type CfButtonNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfButtonNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfButtonNestedFilter>>>;
  buttonLink?: InputMaybe<Scalars['String']>;
  buttonLink_contains?: InputMaybe<Scalars['String']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']>;
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfMarketNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMarketNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMarketNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['String']>;
  date_contains?: InputMaybe<Scalars['String']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  date_not?: InputMaybe<Scalars['String']>;
  date_not_contains?: InputMaybe<Scalars['String']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  location_contains?: InputMaybe<Scalars['String']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_not?: InputMaybe<Scalars['String']>;
  location_not_contains?: InputMaybe<Scalars['String']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  photosCollection_exists?: InputMaybe<Scalars['Boolean']>;
  rsvpText?: InputMaybe<Scalars['String']>;
  rsvpText_contains?: InputMaybe<Scalars['String']>;
  rsvpText_exists?: InputMaybe<Scalars['Boolean']>;
  rsvpText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rsvpText_not?: InputMaybe<Scalars['String']>;
  rsvpText_not_contains?: InputMaybe<Scalars['String']>;
  rsvpText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rsvpUrl?: InputMaybe<Scalars['String']>;
  rsvpUrl_contains?: InputMaybe<Scalars['String']>;
  rsvpUrl_exists?: InputMaybe<Scalars['Boolean']>;
  rsvpUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rsvpUrl_not?: InputMaybe<Scalars['String']>;
  rsvpUrl_not_contains?: InputMaybe<Scalars['String']>;
  rsvpUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  time?: InputMaybe<Scalars['String']>;
  time_contains?: InputMaybe<Scalars['String']>;
  time_exists?: InputMaybe<Scalars['Boolean']>;
  time_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  time_not?: InputMaybe<Scalars['String']>;
  time_not_contains?: InputMaybe<Scalars['String']>;
  time_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorCount?: InputMaybe<Scalars['String']>;
  vendorCount_contains?: InputMaybe<Scalars['String']>;
  vendorCount_exists?: InputMaybe<Scalars['Boolean']>;
  vendorCount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorCount_not?: InputMaybe<Scalars['String']>;
  vendorCount_not_contains?: InputMaybe<Scalars['String']>;
  vendorCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfPageProductNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageProductNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageProductNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredProductImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Float']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  productImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  relatedProductsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  typeOfVendor_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeOfVendor_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeOfVendor_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeOfVendor_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ImageFieldsFragment = { __typename: 'Asset', title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } };

export type PageLandingFieldsFragment = { __typename: 'PageLanding', internalName?: string | null, heroBannerHeadline?: string | null, heroBannerHeadlineColor?: string | null, aboutUsHeading?: string | null, aboutUsText?: string | null, upcomingMarketsHeading?: string | null, vendorsHeading?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, seoFields?: (
    { __typename?: 'ComponentSeo' }
    & SeoFieldsFragment
  ) | null, heroBannerImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, productsCollection?: { __typename?: 'PageLandingProductsCollection', items: Array<(
      { __typename?: 'PageProduct' }
      & PageProductFieldsFragment
    ) | null> } | null, marketsCollection?: { __typename?: 'PageLandingMarketsCollection', items: Array<{ __typename?: 'Market', name?: string | null, date?: string | null, time?: string | null, location?: string | null, rsvpText?: string | null, rsvpUrl?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type PageLandingQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageLandingQuery = { __typename?: 'Query', pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<(
      { __typename?: 'PageLanding' }
      & PageLandingFieldsFragment
    ) | null> } | null };

export type PageLandingCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageLandingCollectionQuery = { __typename?: 'Query', pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<(
      { __typename?: 'PageLanding' }
      & PageLandingFieldsFragment
    ) | null> } | null };

export type BasePageProductFieldsFragment = { __typename: 'PageProduct', internalName?: string | null, slug?: string | null, name?: string | null, description?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, seoFields?: (
    { __typename?: 'ComponentSeo' }
    & SeoFieldsFragment
  ) | null, featuredProductImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, productImagesCollection?: { __typename?: 'AssetCollection', items: Array<(
      { __typename?: 'Asset' }
      & ImageFieldsFragment
    ) | null> } | null };

export type PageProductFieldsFragment = (
  { __typename?: 'PageProduct', relatedProductsCollection?: { __typename?: 'PageProductRelatedProductsCollection', items: Array<(
      { __typename?: 'PageProduct' }
      & BasePageProductFieldsFragment
    ) | null> } | null }
  & BasePageProductFieldsFragment
);

export type PageProductQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageProductQuery = { __typename?: 'Query', pageProductCollection?: { __typename?: 'PageProductCollection', items: Array<(
      { __typename?: 'PageProduct' }
      & PageProductFieldsFragment
    ) | null> } | null };

export type PageProductCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageProductCollectionQuery = { __typename?: 'Query', pageProductCollection?: { __typename?: 'PageProductCollection', items: Array<(
      { __typename?: 'PageProduct' }
      & PageProductFieldsFragment
    ) | null> } | null };

export type SeoFieldsFragment = { __typename: 'ComponentSeo', pageTitle?: string | null, pageDescription?: string | null, canonicalUrl?: string | null, nofollow?: boolean | null, noindex?: boolean | null, shareImagesCollection?: { __typename?: 'AssetCollection', items: Array<(
      { __typename?: 'Asset' }
      & ImageFieldsFragment
    ) | null> } | null };

export type SitemapPagesFieldsFragment = { __typename?: 'Query', pageProductCollection?: { __typename?: 'PageProductCollection', items: Array<{ __typename?: 'PageProduct', slug?: string | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null, pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<{ __typename?: 'PageLanding', sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null };

export type SitemapPagesQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type SitemapPagesQuery = (
  { __typename?: 'Query' }
  & SitemapPagesFieldsFragment
);

export const ImageFieldsFragmentDoc = gql`
    fragment ImageFields on Asset {
  __typename
  sys {
    id
  }
  title
  description
  width
  height
  url
  contentType
}
    `;
export const SeoFieldsFragmentDoc = gql`
    fragment SeoFields on ComponentSeo {
  __typename
  pageTitle
  pageDescription
  canonicalUrl
  nofollow
  noindex
  shareImagesCollection(limit: 3, locale: $locale) {
    items {
      ...ImageFields
    }
  }
}
    `;
export const BasePageProductFieldsFragmentDoc = gql`
    fragment BasePageProductFields on PageProduct {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  slug
  seoFields {
    ...SeoFields
  }
  name
  description
  price
  featuredProductImage {
    ...ImageFields
  }
  productImagesCollection {
    items {
      ...ImageFields
    }
  }
}
    `;
export const PageProductFieldsFragmentDoc = gql`
    fragment PageProductFields on PageProduct {
  ...BasePageProductFields
  relatedProductsCollection {
    items {
      ...BasePageProductFields
    }
  }
}
    `;
export const PageLandingFieldsFragmentDoc = gql`
    fragment PageLandingFields on PageLanding {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  seoFields {
    ...SeoFields
  }
  heroBannerHeadline
  heroBannerHeadlineColor
  heroBannerImage {
    ...ImageFields
  }
  productsCollection {
    items {
      ...PageProductFields
    }
  }
  aboutUsHeading
  aboutUsText
  upcomingMarketsHeading
  marketsCollection {
    items {
      sys {
        id
      }
      name
      date
      time
      location
      rsvpText
      rsvpUrl
    }
  }
  vendorsHeading
}
    `;
export const SitemapPagesFieldsFragmentDoc = gql`
    fragment sitemapPagesFields on Query {
  pageProductCollection(limit: 100, locale: $locale) {
    items {
      slug
      sys {
        publishedAt
      }
    }
  }
  pageLandingCollection(limit: 1, locale: $locale) {
    items {
      sys {
        publishedAt
      }
    }
  }
}
    `;
export const PageLandingDocument = gql`
    query pageLanding($locale: String, $preview: Boolean) {
  pageLandingCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      ...PageLandingFields
    }
  }
}
    ${PageLandingFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}`;
export const PageLandingCollectionDocument = gql`
    query pageLandingCollection($locale: String, $preview: Boolean) {
  pageLandingCollection(limit: 100, locale: $locale, preview: $preview) {
    items {
      ...PageLandingFields
    }
  }
}
    ${PageLandingFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}`;
export const PageProductDocument = gql`
    query pageProduct($slug: String!, $locale: String, $preview: Boolean) {
  pageProductCollection(
    limit: 1
    where: {slug: $slug}
    locale: $locale
    preview: $preview
  ) {
    items {
      ...PageProductFields
    }
  }
}
    ${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const PageProductCollectionDocument = gql`
    query pageProductCollection($locale: String, $preview: Boolean) {
  pageProductCollection(limit: 100, locale: $locale, preview: $preview) {
    items {
      ...PageProductFields
    }
  }
}
    ${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const SitemapPagesDocument = gql`
    query sitemapPages($locale: String!) {
  ...sitemapPagesFields
}
    ${SitemapPagesFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    pageLanding(variables?: PageLandingQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageLandingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageLandingQuery>(PageLandingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageLanding', 'query');
    },
    pageLandingCollection(variables?: PageLandingCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageLandingCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageLandingCollectionQuery>(PageLandingCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageLandingCollection', 'query');
    },
    pageProduct(variables: PageProductQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageProductQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageProductQuery>(PageProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageProduct', 'query');
    },
    pageProductCollection(variables?: PageProductCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageProductCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageProductCollectionQuery>(PageProductCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageProductCollection', 'query');
    },
    sitemapPages(variables: SitemapPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SitemapPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SitemapPagesQuery>(SitemapPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sitemapPages', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;