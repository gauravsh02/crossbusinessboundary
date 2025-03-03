import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image";

export function YoutubeModal({ youtubeId }: { youtubeId: string }) {
  const src = `https://www.youtube.com/embed/${youtubeId}?autoplay=0&controls=0&rel=1`;
  const imgSrc = `/${youtubeId}.jpg`;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image src={imgSrc} alt="" width={360} height={202} layout="responsive" className="cursor-pointer shadow-[5px_5px_25px_-4px_rgba(0,_0,_0,_0.8)]" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[610px] [&>button:last-child]:hidden" >
        <DialogHeader className="hidden">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 hidden">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter className="hidden">
          <Button type="submit">Save changes</Button>
        </DialogFooter>

        <iframe src={src} allowFullScreen width={560} height={315}/>

      </DialogContent>
    </Dialog>
  )
}