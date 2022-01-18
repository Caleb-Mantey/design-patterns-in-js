import Payment from './payment';
import Hubtel from './hubtel';
import Paystack from './paystack';


const hubtelPayment: Payment = new Hubtel("Caleb", 20)
const paystackPayment: Payment = new Paystack("Edem", 40)

hubtelPayment.request()
paystackPayment.request()


