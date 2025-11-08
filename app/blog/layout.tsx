export default function Layout({ children, } : {children: React.ReactNode}){
    return(<div className="flex w-full text-black">
        {children}
    </div>);
}