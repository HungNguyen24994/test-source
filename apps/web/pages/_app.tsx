import { useCallback, useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";

import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/Header";
import { wrapper } from "../store/store";
import "@/styles/globals.css";
import "@/styles/app.css";
import client from "@/utils/config/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Test App</title>
      </Head>
      <div className="App">
        <div className="App-Main">
          <Header />
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
