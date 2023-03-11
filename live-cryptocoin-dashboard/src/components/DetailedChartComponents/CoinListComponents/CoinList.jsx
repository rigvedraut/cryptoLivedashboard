import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  IconButton,
  Divider,
  Drawer,
  Typography,
  TableCell,
  Box,
  TableRow,
  TableBody,
  useTheme,
} from "@mui/material";

import { ChevronRight } from "@mui/icons-material";
import styled from "@emotion/styled";
import CoinListItem from "./CoinListItem";
import { ChartContext } from "../../../AppContext";
import Grid from "../../Dashboard/Grid";

const drawerWidth = 340;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  justifyContent: "left",
}));

export default function CoinList({ open, handleListClose }) {
  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const theme = useTheme();
  const [data, setData] = useState([]);
  const { options } = useContext(ChartContext);
  // const [search, setSearch] = useState("");
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(API_URL, { crossDomain: true }).then((response) => {
      if (response.data) {
        setData(response.data);
        // console.log(response.data);
        // setLoading(false);
      } else {
        console.log("error");
      }
    });
  }, []);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleListClose}>
          <ChevronRight />
        </IconButton>
        <Typography
          variant="h6"
          textAlign="left"
          fontWeight={600}
          sx={{ color: "var(--grey)" }}
        >
          Coin List
        </Typography>
      </DrawerHeader>
      <Divider />
      <Box
        sx={{
          // maxHeight: "60%",
          overflow: "auto",
          // boxShadow: "inset 0 -10px 10px -10px var(--grey)",
        }}
      >
        <Table
          stickyHeader
          size="small"
          padding="small"
          sx={{
            "& .MuiTableRow-root:hover": {
              backgroundColor: theme.palette.action.hover,
              cursor: "pointer",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell sx={{ fontSize: 10 }}>Coin</TableCell>
              <TableCell sx={{ fontSize: 10, lineHeight: 1.2 }}>
                Today's Change %
              </TableCell>
              <TableCell sx={{ fontSize: 10 }}>Current Price $</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((coin, i) => (
              <CoinListItem key={i} coin={coin} />
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box
        sx={{
          height: "max-content",
          borderTop: "2px solid var(--darkgrey)",
          padding: 0.3,
        }}
      >
        {options.coin && (
          <Grid coin={options.coin} clickable={false} delay={1} />
        )}
      </Box>
    </Drawer>
  );
}
