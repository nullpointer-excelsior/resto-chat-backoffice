import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './ui/pages/login/LoginPage';
import NotFoundPage from './ui/shared/components/NotFoundPage';
import HomePage from './ui/pages/home/HomePage';
import AuthenticatedRoute from './ui/shared/routing/components/AuthenticatedRoute';
import { Provider } from 'react-redux'
import { store } from './state/store';
import { NotificationProvider } from './ui/shared/context/NotificationContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Dashboard } from "./ui/pages/home/components/dashboard/Dashboard";
import { RestaurantPage } from "./ui/pages/home/components/restaurant/RestaurantPage";
import QrPage from "./ui/pages/home/components/qr/QrPage";

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }


export const FIREBASE_CONFIG = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}


export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#aa2e25',
    },
    secondary: {
      main: '#b9f6ca',
    },
    },
});

function HomeAuthenticated() {
  return (
    <AuthenticatedRoute>
      <HomePage />
    </AuthenticatedRoute>
  )
}

function RestaurantAuthenticated() {
  return (
    <AuthenticatedRoute>
      <RestaurantPage />
    </AuthenticatedRoute>
  )
}

function DashboardAuthenticated() {
  return (
    <AuthenticatedRoute>
      <Dashboard/>
    </AuthenticatedRoute>
  )
}

function QrChatsAuthenticated() {
  return (
    <AuthenticatedRoute>
      <QrPage/>
    </AuthenticatedRoute>
  )
}

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
            <NotificationProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<LoginPage />} errorElement={<NotFoundPage/>} />
                  <Route path="/home" element={<HomeAuthenticated/>} >
                  **<Route path="dashboard" element={<DashboardAuthenticated/>}></Route>**
                    <Route path="restaurant" element={<RestaurantAuthenticated/>}></Route>
                    <Route path="qr" element={<QrChatsAuthenticated/>}></Route>
                  </Route>
                </Routes>
              </BrowserRouter>
            </NotificationProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}
