import { FC, HtmlHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighten",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6lg",
        sm: "text-2xl md:text-3xl lg:text-4lg",
        lg: "text-5xl md:text-6xl lg:text-7lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);
interface LargeHeadingProps
  extends HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

Paragraph.displayName = "Paragraph"; //debugging purposes

export default Paragraph;
