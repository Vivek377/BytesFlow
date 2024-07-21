/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LJ09U0X1Vur
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="size-6" />
          <span className="sr-only">AI Image Generator</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className=" pt-12 md:pt-24 lg:pt-32 ml-40">
          <div className="container space-y-10 xl:space-y-16">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unleash Your Creativity with AI-Generated Images
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Easily create stunning, unique images with our powerful AI
                  image generation service. Bring your ideas to life with just a
                  few clicks.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Generate Images
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="    py-12 md:py-24 lg:py-32 ml-32">
          <div className="container space-y-12 px-4 md:px-6 ml-20">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Our Sample Images
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the amazing images our AI has generated.
                  Endless possibilities await you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Sample Image"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Sample Image"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Sample Image"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Sample Image"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Sample Image"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Sample Image"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Sample Image"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Sample Image"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 ml-40">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm ml-44">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Image Generation
            </Link>
            <Link href="#" prefetch={false}>
              Text-to-Image
            </Link>
            <Link href="#" prefetch={false}>
              Image Editing
            </Link>
            <Link href="#" prefetch={false}>
              Image Upscaling
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" prefetch={false}>
              Community
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
