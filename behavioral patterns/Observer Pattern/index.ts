import Wallet from './wallet';
import PieChart from './observers/pie_chart';
import BarChart from './observers/bar_chart';

const pieChart = new PieChart
const barChart = new BarChart

const myWallet = new Wallet()

myWallet.addObserver(pieChart)
myWallet.addObserver(barChart)

myWallet.deposit(100)
myWallet.withdraw(40)
myWallet.withdraw(50)
myWallet.withdraw(20)
myWallet.deposit(50)