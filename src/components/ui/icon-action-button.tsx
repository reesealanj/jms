import { Button } from "@/components/ui/button";
import { BookSVG, CloseSVG, PencilSVG } from "@/components/svg";
import Link from "next/link";

type IconActionButtonVariants = "edit" | "details" | "delete";

export function IconActionButton({
  variant,
  href,
}: {
  variant: IconActionButtonVariants;
  href?: string;
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
      icon: <CloseSVG />,
    },
  };

  return (
    <Link href={href ?? "/"}>
      <Button className={variantsConfig[variant].classes} variant="outline">
        {variantsConfig[variant].icon}
      </Button>
    </Link>
  );
}
