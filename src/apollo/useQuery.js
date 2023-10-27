import { useQuery, gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
  query GetRepositories($first: Int, $after: String) {
    viewer {
      repositories(
        first: $first
        after: $after
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          name
          owner {
            login
          }
          primaryLanguage {
            name
          }
          updatedAt
          url
          homepageUrl
          refs(refPrefix: "refs/heads/") {
            totalCount
          }
          forks {
            totalCount
          }
          description
          licenseInfo {
            name
          }
          stargazerCount
        }
      }
    }
  }
`;

export const queryComponent = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables: { first: 50, after: null },
  });

  if (loading) return { loading: true };
  if (error) return { error: true };

  const repositories = data.viewer.repositories.nodes;
  const pageInfo = data.viewer.repositories.pageInfo;

  const loadMore = () => {
    if (pageInfo.hasNextPage) {
      fetchMore({
        variables: { first: 10, after: pageInfo.endCursor },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            viewer: {
              repositories: {
                ...fetchMoreResult.viewer.repositories,
                nodes: [
                  ...prev.viewer.repositories.nodes,
                  ...fetchMoreResult.viewer.repositories.nodes,
                ],
              },
            },
          };
        },
      });
    }
  };

  return { repositories, loadMore, loading, error };
};