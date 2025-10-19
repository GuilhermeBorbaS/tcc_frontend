import Footer from "./footer";
import Header from "./header";

export default function Layout({children}) {
    return (
        <div className="w-full min-h-screen flex flex-col justify-between bg-[#F2F2F2]">
            <Header/>
                <div className="flex flex-grow">
                    {children}
                </div>
            <Footer/>
        </div>
    )
}