import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { CircularProgress, Box } from "@mui/material";

function Layout() {
  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
            <CircularProgress />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
