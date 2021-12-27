import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';
import 'react-multi-carousel/lib/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}

export default MyApp;

/*
    
VERCEL
An indicator that the app is deployed and running on Vercel. Example: 1.
CI
An indicator that the code is running in a Continuous Integration environment. Example: 1. NOTE: This Variable is only exposed during Build Step.
VERCEL_ENV
The Environment that the app is deployed an running on. The value can be either production, preview, or development.
VERCEL_URL
The URL of the deployment. Example: my-site-7q03y4pi5.vercel.app.
VERCEL_REGION
The ID of the Region where the app is running. Example: cdg1. NOTE: This Variable is only exposed during Runtime for Serverless Functions.
VERCEL_GIT_PROVIDER
The Git Provider the deployment is triggered from. Example: github.
VERCEL_GIT_REPO_SLUG
The origin repository the deployment is triggered from. Example: my-site.
VERCEL_GIT_REPO_OWNER
The account that owns the repository the deployment is triggered from. Example: acme.
VERCEL_GIT_REPO_ID
The ID of the repository the deployment is triggered from. Example: 117716146.
VERCEL_GIT_COMMIT_REF
The git branch of the commit the deployment was triggered by. Example: improve-about-page.
VERCEL_GIT_COMMIT_SHA
The git SHA of the commit the deployment was triggered by. Example: fa1eade47b73733d6312d5abfad33ce9e4068081.
VERCEL_GIT_COMMIT_MESSAGE
The message attached to the commit the deployment was triggered by. Example: Update about page.
VERCEL_GIT_COMMIT_AUTHOR_LOGIN
The username attached to the author of the commit that the project was deployed by. Example: johndoe.
VERCEL_GIT_COMMIT_AUTHOR_NAME

*/
