import { Clock, PenToolIcon as Tool, Home, Globe } from "lucide-react"

interface StatsCardProps {
  title: string
  description: string
  icon: string
}

export default function StatsCard({ title, description, icon }: StatsCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Clock":
        return <Clock className="h-8 w-8 text-blue-500" />
      case "Tool":
        return <Tool className="h-8 w-8 text-indigo-500" />
      case "Home":
        return <Home className="h-8 w-8 text-purple-500" />
      case "Globe":
        return <Globe className="h-8 w-8 text-cyan-500" />
      default:
        return <Clock className="h-8 w-8 text-blue-500" />
    }
  }

  return (
    <div className="flex flex-col items-center p-6 text-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100">
      <div className="mb-4 p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full">{getIcon()}</div>
      <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
