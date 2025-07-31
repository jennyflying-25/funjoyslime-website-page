import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  title: string
  description: string
  imageUrl: string
  specs: string[]
}

export default function ProductCard({ title, description, imageUrl, specs }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border border-blue-100 rounded-3xl">
      <div className="aspect-square relative group bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-inner">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
          <Star className="h-3 w-3 fill-current" />
          Hot
        </div>
      </div>
      <CardHeader className="pb-3 px-6">
        <CardTitle className="text-xl font-bold text-gray-800 leading-tight">{title}</CardTitle>
        <CardDescription className="text-gray-600 text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="py-2 px-6">
        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
          <ul className="space-y-2 text-sm">
            {specs.map((spec, index) => (
              <li key={index} className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-3 mt-2 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="pt-4 px-6 pb-6">
        <Button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-2xl shadow-lg h-12"
          asChild
        >
          <Link href="#contact">Request Quote</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
