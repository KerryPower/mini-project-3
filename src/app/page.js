"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import styles from "./page.module.css";
import  Button  from "react-bootstrap/Button";
import Menu from '@/components/menu/menu';
import Footer from '@/components/footer/Footer';


export default function Home() {
  return (
    <>
   <Menu />
   <Footer />
   </>
  );
}
