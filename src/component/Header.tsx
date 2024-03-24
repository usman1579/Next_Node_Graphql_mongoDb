interface IHEADER {
    title: string;
}

export const Header = ({ title }: IHEADER) => {
    return (
        <div className='flex items-center justify-center'>
            <p className='text-5xl'>{title}</p>
        </div>
    )
}
