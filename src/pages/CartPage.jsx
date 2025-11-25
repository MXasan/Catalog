import { Link } from 'react-router-dom'

const CartPage = () => {
  return (
    <div className='cartPage'>
      <div className='cartPage__panel'>
        <p className='cartPage__badge'>Cart beta</p>
        <h1>Savat hozircha bo‘sh</h1>
        <p>
          Mahsulotlarni qo‘shishni boshlash uchun pastdagi tugmani bosing va asosiy sahifaga
          qayting. Keyingi bosqichda xaridlarni bu yerda ko‘rasiz.
        </p>
        <Link to='/' className='cartPage__backLink'>
          Mahsulotlarni ko‘rish
        </Link>
      </div>
    </div>
  )
}

export default CartPage

