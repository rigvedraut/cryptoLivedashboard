import styled from "@emotion/styled";

const drawerWidth = 340;

const ChartWrapper = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(0),
  height: "100vh",
  width: `calc(100% - ${drawerWidth}px)`,

  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  [theme.breakpoints.down("md")]: {
    marginRight: -drawerWidth,
  },
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

export default ChartWrapper;
