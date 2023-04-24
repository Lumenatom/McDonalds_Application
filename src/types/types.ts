export type Product = {
    id: string;
    name: string;
    currentPrice?: number;
    lastPrice?: number;
    image?: string;
}
export type Category = {
    id: string;
    name: string;
    image: string;
}

export type PropsSearch = {
    value: string;
    setValue?: (e:string) => void;
    visibleSearch?: boolean;
    setVisibleSearch?: (e:boolean) => void;
}
