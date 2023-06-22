import Card from '../components/Card';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useEffect } from 'react';
import productsSlice, { fetchProducts } from '../redux/productsSlice';
import SkeletonCard from '../components/SkeletonCard';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {
    const { visibleProducts, isLoading } = useAppSelector((state) => state.products);
    const { loadNextProducts, enableLoading } = productsSlice.actions;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) navigate('/')
        else {
            toast.success('Welcome user!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const innerHeight = window.innerHeight;
            const scrollTop = Math.ceil(document.documentElement.scrollTop);
            const diff = scrollHeight - innerHeight - scrollTop
            const threshold = 1;
            if (diff < threshold) {
                // console.log('im called')
                dispatch(enableLoading())
                const timeoutId = setTimeout(() => {
                    dispatch((loadNextProducts()));
                    clearTimeout(timeoutId);
                }, 2100)
            }
        })
        return () => {
            document.removeEventListener('scroll', () => {
                const scrollHeight = document.documentElement.scrollHeight;
                const innerHeight = window.innerHeight;
                const scrollTop = Math.ceil(document.documentElement.scrollTop);
                const diff = scrollHeight - innerHeight - scrollTop
                const threshold = 1;
                if (diff < threshold) {
                    // console.log('im called')
                    dispatch(enableLoading())
                    const timeoutId = setTimeout(() => {
                        dispatch((loadNextProducts()));
                        clearTimeout(timeoutId);
                    }, 2000)
                }
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch(fetchProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const signOutHandler = () => {
        localStorage.clear();
        navigate('/')
    }

    return (
        <div className='flex flex-col w-[100%] items-center justify-center'>
            <div className='flex w-[100%] mobile:flex-col-reverse tablet:flex-col-reverse p-[20px] items-center justify-between mobile:col-span-1 tablet:col-span-2 smallDesktop:col-span-3 desktop:col-span-4'>
                <h1 className='font-semibold text-[24px] uppercase myFont'>{visibleProducts.length} Products</h1>
                <button className='bg-[#F9D323] rounded-full myFont border-[1px] px-[15px] py-[10px]'
                    onClick={signOutHandler}
                >
                    Sign out
                </button>
            </div>
            <div className=' gap-x-[20px] grid mobile:grid-cols-1 tablet:grid-cols-2 smallDesktop:grid-cols-3 desktop:grid-cols-4 '>

                {visibleProducts.map((item) => {
                    return <Card
                        key={item.name}
                        name={item.name}
                        rating={item.rating}
                        category={item.category}
                        href={item.href}
                        offer={item.offer}
                        time={item.time}
                    />
                })}
                {isLoading &&
                    <>
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </>
                }
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}

export default Home