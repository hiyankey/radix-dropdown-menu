"use client";
import {
  Arrow,
  CheckboxItem,
  Content,
  Item,
  ItemIndicator,
  Label,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
} from "@radix-ui/react-dropdown-menu";
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
  const { dark, toggleDark } = useTheme();
  const [isBookmarkChecked, setIsBookmarkChecked] = useState(false);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");
  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        aria-label="Toggle mode"
        className="absolute top-4 left-4"
        onClick={toggleDark}
        type="button"
      >
        {dark ? <SunIcon /> : <MoonIcon />}
      </button>
      <Root>
        <Trigger asChild>
          <button
            className="inline-flex size-8 items-center justify-center rounded-full border border-gray-6 bg-gray-3"
            type="button"
          >
            <HamburgerMenuIcon />
          </button>
        </Trigger>
        <Content
          className="min-w-55 rounded-6 bg-gray-3 p-1 text-14 shadow-border will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          <Item className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
            New Tab <div className="ml-auto pl-5">⌘+T</div>
          </Item>
          <Item className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
            New Window <div className="ml-auto pl-5">⇧+⌘+N</div>
          </Item>
          <Item
            className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3"
            disabled
          >
            New Private Window
          </Item>
          <Sub>
            <SubTrigger className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
              More Tools{" "}
              <div className="ml-auto">
                <ChevronRightIcon />
              </div>
            </SubTrigger>
            <SubContent
              className="min-w-55 rounded-6 bg-gray-3 p-1 shadow-border"
              sideOffset={5}
            >
              <Item className="group relative flex h-6 select-none items-center rounded-[3px] pr-2 pl-6 text-violet11 leading-none outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
                Save Page As… <div className="ml-auto pl-5">⌘+S</div>
              </Item>
              <Item className="relative flex h-6 select-none items-center rounded-[3px] pr-2 pl-6 pl-6text-violet11 leading-none outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
                Create Shortcut…
              </Item>
              <Item className="relative flex h-6 select-none items-center rounded-[3px] pr-2 pl-6 text-violet11 leading-none outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
                Name Window…
              </Item>
              <Separator className="m-2 h-px bg-gray-6" />
              <Item className="relative flex h-6 select-none items-center rounded-[3px] pr-2 pl-6 text-violet11 leading-none outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3">
                Developer Tools
              </Item>
            </SubContent>
          </Sub>
          <Separator className="m-1 h-px bg-gray-6" />
          <CheckboxItem
            checked={isBookmarkChecked}
            className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3"
            onCheckedChange={setIsBookmarkChecked}
          >
            <ItemIndicator className="absolute left-0 inline-flex w-4 items-center justify-center">
              <CheckIcon />
            </ItemIndicator>
            Show Bookmarks <div className="ml-auto pl-5">⌘+B</div>
          </CheckboxItem>
          <CheckboxItem
            checked={urlsChecked}
            className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3"
            onCheckedChange={setUrlsChecked}
          >
            <ItemIndicator className="absolute left-0 inline-flex w-4 items-center justify-center">
              <CheckIcon />
            </ItemIndicator>
            Show Full URLs<div className="ml-auto pl-5">⇧+⌘+N</div>
          </CheckboxItem>
          <Separator className="m-1 h-px bg-gray-6" />
          <Label className="pl-4 text-12">People</Label>
          <RadioGroup onValueChange={setPerson} value={person}>
            <RadioItem
              className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3"
              value="pedro"
            >
              <ItemIndicator className="absolute left-0 inline-flex w-4 items-center justify-center">
                <DotFilledIcon />
              </ItemIndicator>
              Pedro
            </RadioItem>
            <RadioItem
              className="flex h-6 items-center rounded-4 px-2 pl-4 outline-none data-highlighted:bg-orange dark:data-highlighted:bg-gray-a3"
              value="colm"
            >
              <ItemIndicator className="absolute left-0 inline-flex w-4 items-center justify-center">
                <DotFilledIcon />
              </ItemIndicator>
              Colm
            </RadioItem>
          </RadioGroup>
          <Arrow className="fill-gray-3" />
        </Content>
      </Root>
    </div>
  );
}
