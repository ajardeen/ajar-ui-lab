import { QrCode, Sparkle } from "lucide-react"
import { Hyperlink } from "./components/ajar-ui/hyperlink"

export function App() {
  return (
    <div className="flex min-h-svh bg-background p-6 text-foreground">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <Hyperlink
          startIcon={<QrCode className="text-amber-500" />}
          endIcon={<Sparkle className="text-amber-500" />}
          href="https://ajardeen.netlify.app/"
         
          variant={"pill"}
          className=""
        >
          https://ajardeen.netlify.app/
        </Hyperlink>

        {/* Uses the fallback standard layout configuration outline token */}
        <Hyperlink
          startIcon={<QrCode className="text-blue-500" />}
          href="#"
          variant={"outline"}
        >
          ajardeen
        </Hyperlink>
      </div>
    </div>
  )
}

export default App
