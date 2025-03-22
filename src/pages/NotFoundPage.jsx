import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found Pages...</h1>
      <p>
        Please follow this <Link to="/">link</Link>
      </p>
    </div>
  );
}
