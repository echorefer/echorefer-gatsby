import { IGatsbyImageData } from 'gatsby-plugin-image';

type PostCarVariants =
  | 'cover'
  | 'small'
  | 'smallNoChip'
  | 'smallNoImage'
  | 'bigHorizontal'
  | 'bigVertical';

export interface PostCardProps {
  variant: PostCarVariants;
  post: any;
}

interface PostCardBaseProps {
  uri: string;
  title: string;
  image: IGatsbyImageData;
  alt: string;
  date: string;
  avatarUrl: string;
  author: string;
}

export interface PostCardCoverProps extends PostCardBaseProps {}

export interface PostCardBigProps extends PostCardBaseProps {
  excerpt: string;
  chipColor: string;
  category: string;
  categoryUri: string;
}

export interface PostCardSmallProps extends PostCardBaseProps {
  excerpt: string;
  chipColor: string;
  category: string;
  categoryUri: string;
  showCategory: boolean;
  showImage: boolean;
}
