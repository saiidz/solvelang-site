import SubscribeButton from "@/components/SubscribeButton";

export default function PricingPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold">SolveLang Pro</h1>
        <p className="mt-4 text-lg text-gray-600">
          Get access to premium workflow tools, future hosted features, and early releases.
        </p>

        <div className="mx-auto mt-10 max-w-md rounded-2xl border p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">$19/month</h2>
          <p className="mt-3 text-gray-600">
            Simple monthly subscription with Stripe Checkout.
          </p>
          <div className="mt-6">
            <SubscribeButton />
          </div>
        </div>
      </div>
    </main>
  );
}
