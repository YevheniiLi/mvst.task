import { useQuery, gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
  query GetRepositories {
    search(query: "YOUR_SEARCH_QUERY", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
            }
            description
            url
          }
        }
      }
    }
  }
`;

export function queryComponent() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, error, data } = useQuery(GET_REPOSITORIES);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const repositories = data.search.edges;

  return (
    <div>
      {repositories.map((repository) => (
        <div key={repository.node.name}>
          <h3>{repository.node.name}</h3>
          <p>Owner: {repository.node.owner.login}</p>
          <p>Description: {repository.node.description}</p>
          <a href={repository.node.url}>Link to Repository</a>
        </div>
      ))}
    </div>
  );
}
