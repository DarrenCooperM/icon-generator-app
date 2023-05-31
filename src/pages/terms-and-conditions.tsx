import { type NextPage } from "next";

const TermsAndConditionsPage: NextPage = () => {
  return (
    <>
      <main className="container mx-auto mb-20 mt-12 md:mt-32">
        <div className="mx-4 flex flex-col gap-6 text-left">
          <h1>Terms and Conditions</h1>
          <p>Last Updated: 31/05/2023</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to logo-generator.maoriwebdev.com, a Next.js application
            that generates logos using an AI from OpenAI. These Terms and
            Conditions govern your use of our service, and by using our service,
            you agree to these terms.
          </p>

          <h2>2. Account Registration</h2>
          <p>
            To use our service, you must register an account using your Google
            credentials. You are responsible for keeping your login information
            secure.
          </p>

          <h2>3. OpenAI Use</h2>
          <p>
            Our service generates logos using OpenAI. By using our service, you
            agree to the terms and conditions of OpenAI.
          </p>

          <h2>4. Payments</h2>
          <p>
            We use Stripe for payment processing. By making a payment, you agree
            to their Terms and Conditions and Privacy Policy.
          </p>

          <h2>5. Changes to These Terms</h2>
          <p>
            We reserve the right to change these Terms and Conditions at any
            time. We will notify you of any changes by updating the "last
            updated" date of these Terms and Conditions.
          </p>
        </div>
      </main>
    </>
  );
};

export default TermsAndConditionsPage;
