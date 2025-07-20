interface TitleProps { 
    title: string;
}

function Title({ title}: TitleProps) {
    return (
        <h1 className="uppercase text-3xl md:text-5xl font-bold text-center md:text-left my-4 md:mt-0">
            {title}
        </h1>
    );
}

export default Title;



