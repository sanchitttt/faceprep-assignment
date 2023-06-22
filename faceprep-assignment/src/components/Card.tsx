import { CardProps } from '../types/types'

function Card({ name, href, category, rating, offer, time }: CardProps) {
    return (
        <div className='w-[295px] h-[346px] flex items-center justify-center hover:shadow-v1 transition'>
            <div className='w-[254px] h-[267px] flex flex-col '>
                <img
                    src={href}
                    alt='productImg'
                    width='100%'
                    height='160'
                />
                <div className='text-[17px] font-semibold mt-[14px]'>{name}</div>
                <div className='text-[13px] text-[#686b78] mt-[4px]'>{category}</div>
                <div className='flex items-center justify-between mt-[18px]'>
                    <div className='w-[43px] h-[20px] px-[2.5px] bg-[#48c479] flex items-center justify-center gap-[2.5px]'>
                        <svg viewBox="0 0 576 512" width="10" fill='#fff'>
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                        <div className='text-white text-[12px]'>{rating}</div>
                    </div>
                    <div className='text-[#535665]'>•</div>
                    <div className='text-[#535665] text-[12px] uppercase'>{time}</div>
                    <div className='text-[#535665]'>•</div>
                    <div className='text-[#535665] text-[12px] uppercase '>{offer}</div>
                </div>
            </div>
        </div>
    )
}

export default Card