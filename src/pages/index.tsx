import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className="text-4xl font-bold text-center">Welcome to Attunive</h1>
      </section>
    </DefaultLayout>
  );
}
