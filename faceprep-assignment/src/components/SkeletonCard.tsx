import { Skeleton } from "@mui/material";

function SkeletonCard() {
    return (
        <div className='ml-[20px] w-[254px] h-[346px] flex-col gap-[15px] flex items-center justify-center'>
            <Skeleton variant="rectangular" width={254} height={267} />
            {/* <Skeleton variant="rectangular" width={295} height={267} /> */}
            <div className="flex items-center justify-between w-[100%]">
                <Skeleton variant="rounded" width={254} height={30} />
            </div>
        </div>
    )
}

export default SkeletonCard