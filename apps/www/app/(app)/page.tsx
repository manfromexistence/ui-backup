"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
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

const ButtonContainer = () => {
  const [isClicked, setIsClicked] = useState(false)

  const containerVariants = {
    initial: { height: "40px" }, // Set initial height
    clicked: {
      height: "80px", // Adjust the height to match the back button
      transition: {
        type: "spring",
        stiffness: 200, // Adjust stiffness for bounce effect
        damping: 10,
      },
    },
    nextButtonClicked: {
      marginLeft: "-80px", // Adjust the height to match the back button
      transition: {
        type: "spring",
        stiffness: 200, // Adjust stiffness for bounce effect
        damping: 10,
      },
    },
  }

  const backButtonVisibility = {
    initial: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "block" },
  }

  return (
    <motion.div
      className="my-10 flex h-auto w-[100px] space-x-3 overflow-hidden rounded-md border p-3"
      variants={containerVariants}
      initial="initial"
      animate={isClicked ? "clicked" : "initial"}
    >
      <motion.button
        className="h-10 rounded-md bg-blue-500 px-4 py-2 text-white"
        // initial="initial"
        animate="nextButtonClicked"
        onClick={() => setIsClicked(!isClicked)}
      >
        Next
      </motion.button>
      <motion.button
        className="h-24 rounded-md bg-blue-500 px-4 py-2 text-white"
        variants={backButtonVisibility}
        initial="initial"
        animate={isClicked ? "visible" : "initial"}
        onClick={() => setIsClicked(!isClicked)}
      >
        Back
      </motion.button>
    </motion.div>
  )
}
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
      <ButtonContainer />
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
