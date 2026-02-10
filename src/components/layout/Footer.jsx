import { Link } from "react-router-dom"
import { Instagram, Mail, Linkedin, Github } from "lucide-react"
import logo from '../../assets/skillmela-logo.png'

export function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-black/40 backdrop-blur py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src={logo}
                alt="Skill Mela Logo"
                className="h-auto w-auto max-w-[90px]"
              />
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Empowering the next generation of builders with cutting-edge skills and industry connections.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold uppercase mb-4 text-sm">NAVIGATION</h4>
            <ul className="space-y-2">
              <li>
                <a href="#workshops" className="text-gray-400 hover:text-cyan-400 transition text-xs">
                  WORKSHOPS
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-cyan-400 transition text-xs">
                  PRICING
                </a>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition text-xs">
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold uppercase mb-4 text-sm">CONNECT</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Github size={18} />
              </a>
              <a href="mailto:info@skillmela.in" className="text-gray-400 hover:text-cyan-400 transition">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs gap-4">
          <p>© 2025 SKILL MELA. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-cyan-400 transition">
              PRIVACY
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-cyan-400 transition">
              TERMS
            </Link>
            <span>•</span>
            <span className="text-cyan-400">STATUS: OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
