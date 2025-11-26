import { Users, Zap, Trophy } from "lucide-react"
import { CountUp } from "@/components/lightswind/count-up"

const stats = [
  {
    icon: Trophy,
    value: "50+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    value: "40+",
    label: "Happy Clients",
  },
  {
    icon: Zap,
    value: "5+",
    label: "Years Experience",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center p-6 hover:bg-background rounded-lg transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center">
                  <CountUp to={parseInt(stat.value)} separator="," />
                  <span>+</span>
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
