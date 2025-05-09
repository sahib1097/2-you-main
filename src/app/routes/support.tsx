import { Hero } from '../components/HelpCenter/Hero'
import { SupportHub } from '../components/HelpCenter/SupportHub'
import { FAQ } from '../components/HelpCenter/FAQ'
import { LiveChat } from '../components/HelpCenter/LiveChat'
import '../app.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
    return [
      { title: "2YOU Help Desk" },
      { name: "description", content: "Welcome to 2YOU!" },
    ];
  }


const support = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header/>        
            <Hero />
            <SupportHub />
            <FAQ />
            <LiveChat />
            <Footer/>
        </div>
      )
}

export default support