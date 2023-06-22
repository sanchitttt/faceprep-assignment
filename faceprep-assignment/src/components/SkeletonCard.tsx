import { Skeleton } from "@mui/material";

function SkeletonCard() {
    return (
        <div className='w-[295px] h-[346px] flex-col gap-[15px] flex items-center justify-center'>
            <Skeleton variant="rectangular" width={295} height={267} />
            {/* <Skeleton variant="rectangular" width={295} height={267} /> */}
            <div className="flex items-center justify-between w-[100%]">
                <Skeleton variant="rounded" width={295} height={30} />
            </div>
        </div>
    )
}

export default SkeletonCard