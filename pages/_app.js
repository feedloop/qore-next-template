import qoreContext from "../qoreContext";

function MyApp({ Component, pageProps }) {
  return (
    <qoreContext.context.Provider value={{ client: qoreContext.client }}>
      <Component {...pageProps} />
    </qoreContext.context.Provider>
  );
}

export default MyApp;
