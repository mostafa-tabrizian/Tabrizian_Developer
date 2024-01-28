import Spotlight from '../../projects/[_id]/components/spotlight'
import ResultMessage from './components/resultMessage'

export const metadata = {
   title: 'مصطفی تبریزیان | نتیجه پرداخت ',
   description: 'صفحه نتیجه پرداخت به مصطفی تبریزیان'
}

async function Payment() {
   return (
      <div>
         <Spotlight />
         <ResultMessage />
      </div>
   )
}

export default Payment
