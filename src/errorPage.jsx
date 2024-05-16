import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Uupsis!</h1>
      <p>Hmm...jotain odottamatonta tapahtui.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}