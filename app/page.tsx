"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import useTheme from "./hooks/useTheme";

export default function Home() {
  const { dark } = useTheme();
  const [isBookmarkChecked, setIsBookmarkChecked] = useState(false);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");
  return (
    <div className="flex min-h-screen items-center justify-center">
      <span className="absolute top-4 left-4">
        {dark ? <SunIcon /> : <MoonIcon />}
      </span>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="inline-flex size-8 items-center justify-center rounded-full border border-gray-6 bg-gray-3"
            type="button"
          >
            <HamburgerMenuIcon />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          className="min-w-55 rounded-6 bg-gray-3 p-1 text-14 shadow-border"
          sideOffset={5}
        >
          <DropdownMenu.Item className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
            New Tab <div className="ml-auto pl-5">⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
            New Window <div className="ml-auto pl-5">⇧+⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3"
            disabled
          >
            New Private Window
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
              More Tools{" "}
              <div className="ml-auto">
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent
              className="min-w-55 rounded-6 bg-gray-3 p-1 shadow-border"
              sideOffset={5}
            >
              <DropdownMenu.Item className="group relative flex h-6 select-none items-center rounded-[3px] pr-2 pl-6 text-violet11 leading-none outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
                Save Page As… <div className="ml-auto pl-5">⌘+S</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="relative flex h-6 select-none items-center rounded-[3px] pr-2 pl-6 pl-6text-violet11 leading-none outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
                Create Shortcut…
              </DropdownMenu.Item>
              <DropdownMenu.Item className="relative flex h-6 select-none items-center rounded-[3px] pr-2 pl-6 text-violet11 leading-none outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
                Name Window…
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="m-2 h-px bg-gray-6" />
              <DropdownMenu.Item className="relative flex h-6 select-none items-center rounded-[3px] pr-2 pl-6 text-violet11 leading-none outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
                Developer Tools
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
          <DropdownMenu.Separator className="m-1 h-px bg-gray-6" />
          <DropdownMenu.CheckboxItem
            checked={isBookmarkChecked}
            className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3"
            onCheckedChange={setIsBookmarkChecked}
          >
            <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-4 items-center justify-center">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks <div className="ml-auto pl-5">⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={urlsChecked}
            className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3"
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-4 items-center justify-center">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs<div className="ml-auto pl-5">⇧+⌘+N</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.Separator className="m-1 h-px bg-gray-6" />
          <DropdownMenu.Label className="pl-4 text-12">
            People
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup onValueChange={setPerson} value={person}>
            <DropdownMenu.RadioItem
              className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3"
              value="pedro"
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-4 items-center justify-center">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Pedro
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3"
              value="colm"
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-4 items-center justify-center">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Colm
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Arrow className="fill-gray-3" />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
