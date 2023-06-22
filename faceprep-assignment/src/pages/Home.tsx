import Card from '../components/Card';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useEffect } from 'react';
import productsSlice, { fetchProducts } from '../redux/productsSlice';
import SkeletonCard from '../components/SkeletonCard';



function Home() {
    const { visibleProducts, isLoading } = useAppSelector((state) => state.products);
    const { loadNextProducts, enableLoading } = productsSlice.actions;
    const dispatch = useAppDispatch();
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
                }, 2000)
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

    return (
        <div className='p-[30px] gap-x-[20px] grid mobile:grid-cols-1 tablet:grid-cols-2 smallDesktop:grid-cols-3 desktop:grid-cols-4 '>
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
    )
}

export default Home