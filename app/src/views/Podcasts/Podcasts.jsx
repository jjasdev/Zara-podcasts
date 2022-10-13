import { useEffect, Fragment } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

const Podcasts = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/podcasts" ||
      location.pathname === "/podcasts/"
    ) {
      navigate(-1);
    }
  }, []);

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default Podcasts;
