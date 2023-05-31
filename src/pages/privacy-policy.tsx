import { type NextPage } from "next";

const PrivacyPolicy: NextPage = () => {
  return (
    <main className="container mx-auto mb-20 mt-12 md:mt-32">
      <div className="mx-4 flex flex-col gap-6 text-left">
        <h1>Privacy Policy</h1>
        <p>Last Updated: [Last Updated Date]</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to logo-generator.maoriwebdev.com. This policy describes how
          we collect, use, and handle your information when you use our
          services.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          When you register for our service, we collect the information you
          provide us, such as your Google credentials. When you use our
          services, we also collect information about how you interact with our
          services.
        </p>

        <h2>3. Use of Information</h2>
        <p>
          We use this information to provide and improve our services, for
          example, to generate logos as per your request.
        </p>

        <h2>4. Sharing of Information</h2>
        <p>
          We do not share your personal information with third parties without
          your consent, except to comply with the law or to protect the rights,
          property, or safety of us, our users, or others.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We take the security of your data very seriously and implement
          reasonable and appropriate security measures to protect it.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by updating the "last updated" date of this Privacy
          Policy.
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
