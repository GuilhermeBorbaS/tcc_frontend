import MuiThemeProvider from "@/app/theme-provider";
import Footer from "./footer";
import Header from "./header";

export default function Layout({children}) {
    return (
        <div className="w-full min-h-screen flex flex-col justify-between bg-[#F2F2F2]">
            <Header/>
                <div className="w-full h-full flex flex-grow">
                    <MuiThemeProvider>
                        {children}
                    </MuiThemeProvider>
                </div>
            <Footer/>
        </div>
    )
}