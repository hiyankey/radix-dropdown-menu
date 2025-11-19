import { useCallback, useEffect, useMemo } from "react";

export type EventType = "keydown" | "keyup";

export type Config = {
  separator?: string;
  orSeparator?: string;
  preventDefault?: boolean;
  eventType?: EventType;
};

export const defaultConfig: Config = {
  separator: "+",
  orSeparator: "|",
  preventDefault: false,
  eventType: "keydown",
};

export const specialKeys = {
  CTRL: "CTRL",
  SHIFT: "SHIFT",
  ALT: "ALT",
  META: "META",
};

export const extractRegularKeys = (string: string, config: Config): string[] =>
  string
    .replace(/ /g, "")
    .split(config.separator as string)
    .filter((o) => !Object.values(specialKeys).includes(o));

const useKeyboardShortcut = (
  shortcut: string,
  callback: (e: KeyboardEvent) => void,
  config?: Config
) => {
  const innerConfig = useMemo(
    () => ({ ...defaultConfig, ...(config || {}) }),
    [config]
  );

  const handler = useCallback(
    (event: KeyboardEvent) => {
      const options = shortcut
        .replace(/ /g, "")
        .toUpperCase()
        .split(innerConfig.orSeparator as string);

      const match = options.find((option) => {
        const combination = option.split(innerConfig.separator as string);
        const requireCtrl = combination.includes(specialKeys.CTRL);
        const requireShift = combination.includes(specialKeys.SHIFT);
        const requireAlt = combination.includes(specialKeys.ALT);
        const requireMeta = combination.includes(specialKeys.META);

        const regularKeys = extractRegularKeys(option, innerConfig);

        return (
          regularKeys.includes(event.key.toUpperCase()) &&
          requireCtrl === event.ctrlKey &&
          requireShift === event.shiftKey &&
          requireAlt === event.altKey &&
          requireMeta === event.metaKey
        );
      });

      if (!match) {
        return;
      }

      if (innerConfig.preventDefault) {
        event.preventDefault();
      }

      callback(event);
    },
    [callback, innerConfig, shortcut]
  );

  // Add event listeners
  useEffect(() => {
    document.addEventListener(innerConfig.eventType as EventType, handler);
    return () =>
      document.removeEventListener(innerConfig.eventType as EventType, handler);
  }, [innerConfig.eventType, handler]);
};

export default useKeyboardShortcut;
