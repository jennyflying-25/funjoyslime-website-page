import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                <span className="font-bold text-white text-sm">QR</span>
              </div>
              <span className="font-bold text-lg">YIWU QIRAN TOY</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A professional manufacturer of creative and sensory toys, serving global partners with quality,
              innovation, and direct-factory service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#products" className="text-muted-foreground hover:text-orange-500">
                  Crystal Slime
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-muted-foreground hover:text-orange-500">
                  Soft Clay
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-muted-foreground hover:text-orange-500">
                  TPR Toys
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-muted-foreground hover:text-orange-500">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="text-muted-foreground hover:text-orange-500">
                  Quality Control
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="text-muted-foreground hover:text-orange-500">
                  OEM/ODM Service
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-orange-500">
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-orange-500">
                  Download Catalog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-orange-500">
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-orange-500">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} YIWU QIRAN TOY. All rights reserved. | Powered by Yiwu Qiran Toys Co., Ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}
