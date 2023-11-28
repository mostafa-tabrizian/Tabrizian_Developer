import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <GoogleReCaptchaProvider
         reCaptchaKey='6LfM7AspAAAAALU7pRetpF1GHJM_HjI8j6JWU34y'
         scriptProps={{
            async: false,
            defer: false,
            appendTo: 'head',
            nonce: undefined,
         }}
      >
         <main>{children}</main>
      </GoogleReCaptchaProvider>
   )
}
