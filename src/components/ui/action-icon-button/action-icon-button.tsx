import { Button } from "@/components/ui/button";
import {
  BookSVG,
  CloseSVG,
  MagnifyingGlassSVG,
  PencilSVG,
} from "@/components/svg";
import Link from "next/link";
import { CreateSVG } from "@/components/svg/create";
import { TrashSVG } from "@/components/svg/trash";

type IconActionButtonVariants =
  | "edit"
  | "details"
  | "delete"
  | "microscope"
  | "create";

type IconActionButtonTypes = "link" | "custom";

export function IconActionButton({
  variant,
  type,
  href,
  onClick,
}: {
  variant: IconActionButtonVariants;
  type: IconActionButtonTypes;
  href?: string;
  onClick?: () => void;
}) {
  const variantsConfig: Record<
    IconActionButtonVariants,
    { classes: string; icon: React.ReactElement }
  > = {
    edit: {
      classes: "bg-yellow-500 text-white",
      icon: <PencilSVG />,
    },
    details: {
      classes: "bg-blue-500 text-white",
      icon: <BookSVG />,
    },
    delete: {
      classes: "bg-red-500 text-white",
      icon: <TrashSVG />,
    },
    microscope: {
      classes: "bg-blue-500 text-white",
      icon: <MagnifyingGlassSVG />,
    },
    create: {
      classes: "bg-green-500 text-white",
      icon: <CreateSVG />,
    },
  };

  if (type === "link") {
    return (
      <Link href={href ?? "/"}>
        <Button className={variantsConfig[variant].classes} variant="outline">
          {variantsConfig[variant].icon}
        </Button>
      </Link>
    );
  } else {
    const handler =
      onClick ??
      function handleClick() {
        console.log(
          'ActionIconButton clicked with type "custom", but no onClick was supplied'
        );
      };

    return (
      <Button
        className={variantsConfig[variant].classes}
        variant="outline"
        onClick={() => handler()}
      >
        {variantsConfig[variant].icon}
      </Button>
    );
  }
}
