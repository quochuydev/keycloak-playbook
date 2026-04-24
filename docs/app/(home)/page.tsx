import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 gap-4 py-24">
      <h1 className="text-3xl font-bold">Keycloak Playbook</h1>
      <p className="text-fd-muted-foreground">
        Practical guide for integrating Keycloak as the IAM platform for our product.
      </p>
      <div>
        <Link href="/docs" className="font-medium underline">
          Open the docs →
        </Link>
      </div>
    </div>
  );
}
