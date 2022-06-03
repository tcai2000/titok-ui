import Header from "~/components/Layout/components/Header";
import SideBar from "./SideBar";

function DefaultHeader({children}) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultHeader;