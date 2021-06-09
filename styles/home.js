import tw from 'tailwind-styled-components';

export const Title = tw.h1`
    text-6xl 
    pb-2 
    font-extrabold 
    border-yellow-400 
    border-8 
    border-t-0 
    border-l-0 
    border-r-0
`;

export const HeaderContainer = tw.div`
    absolute 
    bottom-5 
    left-5 
    border 
    flex 
    flex-col
    justify-center 
    items-start 
    py-6
    px-7 
    shadow-xl rounded-md
`;
