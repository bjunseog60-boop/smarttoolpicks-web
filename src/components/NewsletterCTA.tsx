export default function NewsletterCTA() {
  return (
    <div className="border border-gray-100 rounded-xl p-8 text-center bg-white">
      <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">The Weekly Tool Brief</h3>
      <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
        SaaS reviews, software deals, and productivity tips delivered every Thursday.
      </p>
      <div className="max-w-md mx-auto">
        <p className="text-sm text-blue-500 font-medium">Coming soon</p>
        <p className="text-xs text-gray-400 mt-2">Subscribe feature launching shortly.</p>
      </div>
      <p className="text-[11px] text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
