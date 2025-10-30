import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const routeError = useRouteError();
  return (
   <div>
    <h2>{routeError?.status}: {routeError?.statusText}</h2>
     <h4>{routeError?.data}</h4>
   </div>
  )
}

export default ErrorPage;