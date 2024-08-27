"use client"

import { useState } from "react"
import { CircleCheck, HardDrive, MessageCircleCode } from "lucide-react"

import AnimatedTabs from "@/components/build-ui/animated-tabs"
import Slider from "@/components/build-ui/elastic-slider"
import { Button } from "@/registry/default/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"
import { Textarea } from "@/registry/default/ui/textarea"

export default function IndexPage() {
  const [TWO_POPOVER_MARGIN_LEFT, setTWO_POPOVER_MARGIN_LEFT] = useState(0)
  const [TWO_POPOVER_DISPLAY, setTWO_POPOVER_DISPLAY] = useState(false)

  return (
    <div className="container relative">
      <h1>Two-Step Popover</h1>
      <span>
        Experimenting how a two-step popover can be implemented and getting a
        feeling of the transition. Not quite there yet but hey, all of this is
        experimental.
      </span>
      <AnimatedTabs />
      <Slider />
      <div className="mt-4 flex h-[500px] w-full items-center justify-center rounded-md border">
        <Popover>
          <PopoverTrigger asChild>
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground">
              <HardDrive className="h-4 w-4 text-muted-foreground hover:text-primary" />
            </span>
          </PopoverTrigger>
          <PopoverContent className="flex w-[250px] space-x-2 overflow-hidden border-none bg-primary-foreground p-0">
            <div
              style={{
                marginLeft: `-${TWO_POPOVER_MARGIN_LEFT}px`,
              }}
              className="min-w-full rounded-md border p-2"
            >
              <div
                onClick={() => {
                  setTWO_POPOVER_DISPLAY(true)
                  setTWO_POPOVER_MARGIN_LEFT(257.5)
                }}
                className="flex items-center rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-primary"
              >
                <div className="flex flex-1 items-center space-x-2">
                  <MessageCircleCode className="h-4 w-4" />
                  <span className="text-sm text-primary ">Add Comment</span>
                </div>
                <span className="flex items-center text-xs text-muted-foreground">
                  Reply Thread
                </span>
              </div>
              <div
                onClick={() => {
                  setTWO_POPOVER_DISPLAY(true)
                  setTWO_POPOVER_MARGIN_LEFT(515)
                }}
                className="flex items-center rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-primary"
              >
                <div className="flex flex-1 items-center space-x-2">
                  <CircleCheck className="h-4 w-4" />
                  <span className="text-sm text-primary">Approve Changes</span>
                </div>
                <span className="flex items-center text-xs text-muted-foreground">
                  Send Review
                </span>
              </div>
            </div>
            <div className="min-w-full rounded-md p-2">
              <div className="flex flex-col space-y-2">
                <div className="flex">
                  <span className="flex-1 text-sm text-primary">
                    Approve Changes
                  </span>
                  <span className="flex items-center rounded-sm bg-muted p-1 text-xs text-muted-foreground">
                    @ajju...
                  </span>
                </div>
                <div className="flex flex-col space-y-1 rounded-md bg-primary-foreground p-2">
                  <span className="flex-1 text-xs text-primary">
                    Feat: New Title Added
                  </span>
                  <span className="flex-1 text-xs text-muted-foreground">
                    Sumon is a new designer.
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => {
                      setTWO_POPOVER_MARGIN_LEFT(0)
                      setTWO_POPOVER_DISPLAY(!TWO_POPOVER_DISPLAY)
                    }}
                    className="h-8 w-full"
                    variant="default"
                  >
                    Back
                  </Button>
                  <Button className="h-8 w-full" variant="outline">
                    Approve
                  </Button>
                </div>
              </div>
            </div>
            <div className="min-w-full rounded-md p-2">
              <div className="flex flex-col space-y-2">
                <div className="flex">
                  <span className="flex-1 text-sm text-primary">
                    Add Comment
                  </span>
                  <span className="flex items-center rounded-sm bg-muted p-1 text-xs text-muted-foreground">
                    Create Thread
                  </span>
                </div>
                <Textarea placeholder="Type your comment here." />
                <div className="flex space-x-2">
                  <Button
                    onClick={() => {
                      setTWO_POPOVER_MARGIN_LEFT(0)
                      setTWO_POPOVER_DISPLAY(!TWO_POPOVER_DISPLAY)
                    }}
                    className="h-8 w-full"
                    variant="default"
                  >
                    Back
                  </Button>
                  <Button className="h-8 w-full" variant="outline">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
