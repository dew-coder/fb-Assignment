import '../styles/globals.css'; // Import global styles here

import AuthContextProvider from '../Context/AuthContext'; // Adjusted import statement

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
