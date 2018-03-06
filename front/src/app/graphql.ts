import { Link } from './types';
import gql from 'graphql-tag';

export const ALL_LINKS_QUERY = gql`{
    allPersons {
      firstName
      lastName
    }
  }`;

// 3
export interface AllLinkQueryResponse {
  allLinks: Link[];
  loading: boolean;
}
