import { ComponentProps, ReactNode, useState } from "react";
import { Switch as AriaSwitch } from "react-aria-components";

function Switch({
  children,
  ...props
}: { children: ReactNode } & ComponentProps<typeof AriaSwitch>) {
  return (
    <AriaSwitch
      {...props}
      className="group inline-flex touch-none items-center"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <span className="mr-4 h-6 w-9 cursor-pointer rounded-full border-2 border-transparent bg-zinc-600 ring-offset-2 ring-offset-zinc-900 transition duration-200 group-data-[selected]:bg-green-500 group-data-[focus-visible]:ring-2">
        <span className="block h-5 w-5 origin-right rounded-full bg-white shadow transition-all duration-200 group-data-[selected]:group-data-[pressed]:ml-2 group-data-[selected]:ml-3 group-data-[pressed]:w-6" />
      </span>
      <span>{children}</span>
    </AriaSwitch>
  );
}

// Usage
export default function Demo() {
    let [airplaneMode, setAirplaneMode] = useState(false);
  
    return (
      <div>
        <Switch isSelected={airplaneMode} onChange={setAirplaneMode}>
          Airplane Mode
        </Switch>
      </div>
    );
  }
  