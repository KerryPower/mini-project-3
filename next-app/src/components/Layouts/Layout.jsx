import NavBar from "@/components/NavBar/NavBar";
import Footer from '@/components/Footer/Footer';
import "./layout.css"
export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main className="main">
                <div className='displayDiv'>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}