import { useParams, useSearchParams } from "react-router-dom"

export function User() {
  const params = useParams();
  const [query] = useSearchParams();

  return (<div>
    User {params.userId} {JSON.stringify(params, null, 4)}
    <br />
    Query: {JSON.stringify(query.getAll("query"), null, 4)}
  </div>)
}