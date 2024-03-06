import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { PixelContainer } from "../common/layout/Containers";

export function Dashboard({ children }: { children?: React.ReactNode }) {
  return (
    <React.Fragment>
      <div
        className="flex flex-row"
        style={{ height: "100vh", paddingTop: "10px" }}
      >
        <Navbar />
        <main className="basis-4/5">
          <div className="flex flex-col h-full justify-between">
            <PixelContainer borderTextTop="Dashboard">
              {children}
            </PixelContainer>
            <Footer />
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}
