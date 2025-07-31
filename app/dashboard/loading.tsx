import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-96 mb-8" />

          <Card className="mb-8">
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-16 w-full" />
            </CardContent>
          </Card>

          <div className="grid grid-cols-12 gap-4 mb-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="col-span-6 md:col-span-3">
                <CardContent className="p-4">
                  <Skeleton className="h-8 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>

          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    </div>
  )
}
