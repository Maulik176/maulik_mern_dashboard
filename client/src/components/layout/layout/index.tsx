import React from "react";
import { LayoutProps } from "@refinedev/core";
import Box from "@mui/material/Box";

import { Sider as DefaultSider } from "../sider";
import { Header as DefaultHeader } from "../header";

export const Layout: React.FC<LayoutProps> = ({
    Sider,
    Header,
    Footer,
    OffLayoutArea,
    children,
}) => {
    const SiderToRender = Sider ?? DefaultSider;
    const HeaderToRender = Header ?? DefaultHeader;
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return (
        <Box display="flex" flexDirection="row">
            <SiderToRender />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    minHeight: "100vh",
                    bgcolor: isDarkMode ? "#00000" : "#fcfcfc", // Set background color based on dark mode
                }}
            >
                <HeaderToRender />
                
                <Box
                    component="main"
                    sx={{
                        p: { xs: 1, md: 2, lg: 3 },
                        flexGrow: 1,
                        // bgcolor: "#626262"
                        bgcolot: (theme) => theme.palette.background.default,
                    }}
                    
                >
                    {children}
                </Box>
                {Footer && <Footer />}
            </Box>
            {OffLayoutArea && <OffLayoutArea />}
        </Box>
    );
};
