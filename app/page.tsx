import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Mail, MapPin, Clock, ArrowDown, Award, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import ProductCard from "@/components/product-card"
import StatsCard from "@/components/stats-card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Your Partner in Innovative Sensory Play
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
                  Discover our vibrant collection of slime, soft clay, and TPR stress relief toys, designed to spark
                  imagination and delight children worldwide. We are the direct factory source for your creative toy
                  needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg"
                  asChild
                >
                  <Link href="#products">View Products</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                  asChild
                >
                  <Link href="#contact">Get Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://raw.githubusercontent.com/jennyflying-25/shijingnibaba/main/img/1753944622608.jpg"
                alt="A vibrant collection of creative toys, showcasing the colorful slime and soft clay products made by YIWU QIRAN TOY"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#about">
                <ArrowDown className="h-6 w-6 text-blue-500" />
                <span className="sr-only">Scroll down</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About YIWU QIRAN TOY</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                As a leading manufacturer of Crystal mud (slime), soft clay, and TPR stress relief toys, we are
                strategically located in Yiwu, China's largest small commodity distribution center.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                <p className="text-muted-foreground mb-4">
                  Founded in 2016, YIWU QIRAN TOY has been at the forefront of children's toy innovation. Our factory is
                  equipped with advanced production lines and strict quality control standards to ensure safety and
                  durability. We continuously develop innovative and engaging products to meet market trends.
                </p>
                <p className="text-muted-foreground">
                  With extensive experience in toy production and export, we offer high-quality, safe, and fun products
                  for global markets. Our commitment to excellence has made us a trusted partner for retailers and
                  distributors worldwide.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To inspire creativity and joy in children worldwide through innovative, safe, and high-quality sensory
                  toys. We believe in the power of play to develop imagination, motor skills, and emotional well-being.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Quality Certifications</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium">MSDS Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-indigo-500" />
                    <span className="text-sm font-medium">EN71 Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-purple-500" />
                    <span className="text-sm font-medium">ISO 9001</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://raw.githubusercontent.com/jennyflying-25/shijingnibaba/main/img/1753944536396.jpg"
                alt="YIWU QIRAN TOY quality certifications and factory standards"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard title="9+ Years" description="Industry Experience" icon="Clock" />
            <StatsCard title="OEM/ODM" description="Custom Solutions" icon="Tool" />
            <StatsCard title="5,000 m²" description="Production Facility" icon="Home" />
            <StatsCard title="50+ Countries" description="Global Reach" icon="Globe" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Our Creative Toys?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We combine innovation, quality, and safety to deliver exceptional sensory toys for global markets.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Innovative R&D</h3>
                <p className="text-muted-foreground">
                  From trending slime formulas to unique TPR novelties, we are constantly developing new products to
                  help our clients lead the market.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-indigo-100">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-600"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">OEM/ODM Expertise</h3>
                <p className="text-muted-foreground">
                  Bring your vision to life. We offer comprehensive custom manufacturing services, from initial design
                  and mold making to final custom packaging.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Child-Safe Materials</h3>
                <p className="text-muted-foreground">
                  Safety is our top priority. Our products are made with high-quality, non-toxic materials, compliant
                  with international toy safety standards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-cyan-100">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold">Global Supply Chain</h3>
                <p className="text-muted-foreground">
                  With extensive experience exporting to North America, Europe, the Middle East, and beyond, we ensure a
                  reliable and timely supply chain for our global partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">General Product Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Every product in our collection is designed with these key features in mind.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-6 text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6"></path>
                  <path d="m21 12-6 0m-6 0-6 0"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Vibrant Colors</h3>
              <p className="text-sm text-muted-foreground">Eye-catching palettes to stimulate visual senses.</p>
            </div>

            <div className="flex flex-col items-center p-6 text-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-indigo-600"
                >
                  <path d="M9 12h6"></path>
                  <path d="M9 16h6"></path>
                  <path d="m5 8 2-2"></path>
                  <path d="m7 10-2 2"></path>
                  <path d="m17 8 2-2"></path>
                  <path d="m19 10-2 2"></path>
                  <path d="M9 8h6v12H9z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Sensory Development</h3>
              <p className="text-sm text-muted-foreground">
                Designed to enhance tactile skills, creativity, and motor coordination.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Durable and safe materials for hours of engaging play.</p>
            </div>

            <div className="flex flex-col items-center p-6 text-center bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
              <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-600"
                >
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                  <path d="m3.3 7 8.7 5 8.7-5"></path>
                  <path d="M12 22V12"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Retail Ready</h3>
              <p className="text-sm text-muted-foreground">Custom packaging options available for your brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Product Collection</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A complete range of creative and sensory toys for every market need.
              </p>
            </div>
          </div>

          {/* Crystal Slime & Mud */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Crystal Slime & Mud
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our signature slime collection featuring vibrant colors and unique textures that spark creativity and
                provide endless sensory fun.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                title="Classic Crystal Slime"
                description="Perfect for promotions and entry-level markets. A timeless favorite."
                imageUrl="https://raw.githubusercontent.com/jennyflying-25/shijingnibaba/main/img/1753944536849.png"
                specs={[
                  "Model: DZPT001 (Transparent), DZPT002 (Pearlescent)",
                  "Material: PVC",
                  "Packaging: Bagged",
                  "Options: Crystal Clear, Pearlescent Finish",
                  "Weight: 120g/bag",
                ]}
              />

              <ProductCard
                title="Themed Galaxy Slime"
                description="High-value retail product with a fun, collectible twist."
                imageUrl="https://raw.githubusercontent.com/jennyflying-25/shijingnibaba/main/img/1753944536397.jpg"
                specs={[
                  "Model: QTS-SLM01",
                  "Material: PVA, Water, Moisturizer",
                  "Packaging: Round Jar with 3D Topper",
                  "Features: Duo-tone colors, glitter, includes fun topper",
                  "Weight: 190g",
                ]}
              />

              <ProductCard
                title="Starry Night Slime Display Box"
                description="Designed for retail counters and impulse buys with mesmerizing visual appeal."
                imageUrl="https://raw.githubusercontent.com/jennyflying-25/shijingnibaba/main/img/1753944536863.png"
                specs={[
                  "Model: KTS001",
                  "Material: PVA, Water",
                  "Packaging: 12 pcs / Display Box",
                  "Color: Mesmerizing Starry Night Effect or customized based on needs",
                  "Weight: 270g",
                ]}
              />
            </div>
          </div>

          {/* Air-Dry Soft Clay */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Air-Dry Soft Clay
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ultra-soft modeling clay that's perfect for creative projects and educational activities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                title="Ultra-Light Modeling Clay (Header Card)"
                description="Super soft, non-sticky, and air-dries to a solid, lightweight finish."
                imageUrl="https://raw.githubusercontent.com/jennyflying-25/shijingnibaba/main/img/1753944536882.png"
                specs={[
                  "Model: CQNT001",
                  "Material: Polymer Clay",
                  "Packaging: Bagged (Header card)",
                  "Colors: Available in 6-color assortments",
                  "Weight: 70g/bag",
                ]}
              />

              <ProductCard
                title="Ultra-Light Modeling Clay (Animal Picture)"
                description="Super soft, non-sticky, and air-dries to a solid, lightweight finish."
                imageUrl="https://raw.githubusercontent.com/jennyflying-25/shijingnibaba/main/img/1753944536884.png"
                specs={[
                  "Model: CQNT002",
                  "Material: Polymer Clay",
                  "Packaging: Bagged (animal picture)",
                  "Colors: Available in 6-color assortments",
                  "Weight: 70g/bag",
                ]}
              />

              <ProductCard
                title="Ultra-Light Modeling Clay (Regular Picture)"
                description="Super soft, non-sticky, and air-dries to a solid, lightweight finish."
                imageUrl="https://raw.githubusercontent.com/jennyflying-25/shijingnibaba/main/img/1753944536887.png"
                specs={[
                  "Model: CQNT003",
                  "Material: Polymer Clay",
                  "Packaging: Bagged (regular picture)",
                  "Colors: Available in 6-color assortments",
                  "Weight: 70g/bag",
                ]}
              />
            </div>
          </div>

          {/* TPR Stress Relief Toys */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                TPR Stress Relief Toys
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Squishy, satisfying stress relief toys that provide therapeutic benefits for all ages.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                title="Squishy Mochi Animal Toys"
                description="Irresistibly soft and squishy stress relievers. Perfect for all ages."
                imageUrl="/squeeze-toy-pink-paw.png"
                specs={[
                  "Model: QRT-TPR01",
                  "Material: TPR",
                  "Packaging: Color Box",
                  "Colors: Purple, Blue, Pink assortments",
                  "Weight: 200g",
                ]}
              />

              <ProductCard
                title="Labubu Stress Toy"
                description="A trendy character-based toy with high market appeal."
                imageUrl="https://raw.githubusercontent.com/jennyflying-25/shijingnibaba/main/img/1753944536886.png"
                specs={[
                  "Model: NNL002",
                  "Material: TPR",
                  "Packaging: Color Box, 24 pcs/Display Box",
                  "Colors: Purple, Pink and customized",
                  "Weight: 60g",
                ]}
              />

              <ProductCard
                title="Capybara Stress Toy"
                description="A cute and calming capybara-shaped stress toy that provides therapeutic benefits."
                imageUrl="https://raw.githubusercontent.com/jennyflying-25/shijingnibaba/main/img/1753944536879.jpg"
                specs={["Model: NNL003", "Material: TPR", "Packaging: Color Box", "Colors: Yellow", "Weight: 70g"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Ready to place a bulk order or have questions about customization? We're here to help!
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-semibold">Yiwu Qiran Toys Co., Ltd.</p>
                      <p>Industrial Park, Yiwu, Jinhua City,</p>
                      <p>Zhejiang Province, China</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-500" />
                    <p>+86 134 8078 2233 (WhatsApp)</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <p>348533176@qq.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <p>
                      <span className="font-semibold">Monday - Friday:</span> 8:00 AM - 6:00 PM (GMT+8)
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <p>
                      <span className="font-semibold">Saturday:</span> 9:00 AM - 5:00 PM (GMT+8)
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <p>
                      <span className="font-semibold">Sunday:</span> Closed
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Why Partner With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Direct factory pricing with no middleman markup</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Fast turnaround times and flexible MOQ</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Comprehensive quality control and testing</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>24/7 customer support and after-sales service</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Send Inquiry</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm
                showSuccessInline={true}
                qrCodeUrl="https://pixeltrack-worker.laifa.xin/track/d3V253i8.jpg"
                useHtmlImg={true}
                showTrackingImage={true}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
