import './MainSection.css'
import obshiyPhoto from '../../assets/obshiyPhotoSir.jpg'

const MainSection = () => {
	return (
		<>
			<h1 className='mainH1'>
				<span>OILAVI</span> MAXSULOTLAR
			</h1>

			<div className='mainInfo'>
				<img src={obshiyPhoto} alt='' />
				<p>
					Bizning kasbiy mas'uliyatimiz, ishlab chiqarish sifatini doimiy
					nazorat qilish, sanitariya me'yorlari va ishlab chiqarish
					texnologiyasiga qat'iy rioya qilib, yuqori sifatli va raqobatbardosh
					mahsulot ishlab chiqarish.
				</p>
			</div>
		</>
	)
}

export default MainSection
