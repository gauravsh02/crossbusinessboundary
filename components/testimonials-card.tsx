import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
// import { BellRing, Check } from "lucide-react";
// import { CardDescription, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Switch } from "@/components/ui/switch";

const data = 
  {
    image: "indofast.png",
    title: "INDOFAST",
    description: "Mr. Manish helped our brand to reach Next Level of business from district to state and state to National. INDOFAST is search engine of India like Google, yellow page etc.",
  };


type CardProps = React.ComponentProps<typeof Card>

export function TestimonialsCard({ className, ...props }: CardProps) {
  const imageSrc = "/"+`${data.image}`
  return (
    <Card className={cn("w-[380px] my-2 text-center", className)} {...props}>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        {/* <CardDescription>{data.description}</CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="w-full flex grid justify-center items-center items-center justify-items-center rounded-md border p-4">
          <Image src={imageSrc} alt="Testimonial Logo" className="bg-white" width={120} height={60} />
          <div className="py-2">
            {data.description}
          </div>
        </div>
      </CardContent>
      {/* <CardFooter>
        <Button className="w-full">
          <Check /> Mark all as read
        </Button>
      </CardFooter> */}
    </Card>
  )
}
