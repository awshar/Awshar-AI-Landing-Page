"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MessageCircle,
  Youtube,
  X,
  Loader2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import awsharLogo from "figma:asset/3e9a73de8150b5520fda5ae01e2158cbd26b5750.png";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] =
    useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] =
    useState(false);
  const [showTermsOfService, setShowTermsOfService] =
    useState(false);
  const [showCookiePolicy, setShowCookiePolicy] =
    useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmittingNewsletter(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        "🎉 Successfully subscribed to our newsletter!",
        {
          duration: 5000,
          description:
            "You'll receive updates on new features and insights.",
        },
      );
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("Oops! Something went wrong.", {
        description:
          "Please try again or contact us at hello@awshar.in",
      });
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <div className="mb-6">
                <img
                  src={awsharLogo}
                  alt="Awshar AI"
                  className="h-16 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unlock the hidden secrets in your
                customers&apos; conversations! Turn social media
                noise into profitable insights that your
                competitors are missing. Get real-time
                intelligence that transforms how you understand
                your market - all powered by cutting-edge AI!
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      scrollToSection("how-it-works")
                    }
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <Dialog
                    open={showPrivacyPolicy}
                    onOpenChange={setShowPrivacyPolicy}
                  >
                    <DialogTrigger asChild>
                      <button className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                        Privacy Policy
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] p-0">
                      <DialogHeader className="p-6 pb-2">
                        <DialogTitle className="text-xl">
                          Privacy Policy
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-600">
                          Last updated on Aug, 2025
                        </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="max-h-[60vh] px-6 pb-6">
                        <div className="space-y-6 text-sm leading-relaxed">
                          <p>
                            Delishia Analytics LLP (operating as
                            Awshar AI), and its affiliated
                            entities ("Awshar AI") are dedicated
                            to ethical practices and prioritize
                            the protection of Your Personal
                            Information. With a foundation built
                            on integrity, client focus, and
                            care, data privacy is embedded in
                            Our business, shaping how We make
                            decisions, develop products, and
                            drive innovation, with an unwavering
                            commitment to privacy and respect.
                          </p>

                          <p>
                            This Privacy Policy ("Policy") aims
                            to clearly outline the types of
                            Personal Information We collect, how
                            We gather it, and the ways We use
                            this information when You interact
                            with Our Website or engage with the
                            Awshar AI team. Our Services are
                            designed exclusively for corporate
                            clients, rather than personal,
                            family, or household use. Therefore,
                            all Personal Information is treated
                            as data related to individuals
                            acting on behalf of their
                            businesses. This Policy also
                            explains the potential outcomes if
                            consent is withdrawn or withheld,
                            ensuring that users understand their
                            rights.
                          </p>

                          <p>
                            We encourage regular review of this
                            Policy and welcome inquiries or
                            concerns at hello@awshar.in.
                          </p>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              1. Scope of this Policy and Awshar
                              AI's Role
                            </h3>
                            <p>
                              This document details how We
                              handle Your personal data upon
                              interaction with Awshar AI,
                              including engagements with Our
                              team or use of Our Services and
                              Website. It applies to personal
                              data collected during
                              interactions, whether through
                              Website use, service inquiries,
                              purchases, registrations, or
                              logins. On Our Website, Awshar AI
                              serves as the data controller,
                              managing the processing of Your
                              personal data.
                            </p>
                            <p className="mt-2">
                              This Policy does not apply to data
                              processed on behalf of Awshar AI's
                              clients, where clients are the
                              data controllers, and their
                              privacy policies govern the
                              processing of data within Our
                              Services or through public sources
                              via Our Services. Details on
                              Awshar AI's role as a service
                              provider and processor are
                              outlined in the 'Awshar AI's Role
                              as a Service Provider and
                              Processor' section.
                            </p>
                            <p className="mt-2">
                              Moreover, this Policy does not
                              cover data processing when
                              navigating to external sites via
                              Our Website. External sites have
                              their own terms and privacy
                              policies, which govern their data
                              handling practices. Awshar AI is
                              not responsible for the practices
                              of these third-party sites.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              2. Use of YouTube API Services
                            </h3>
                            <p>
                              Our Services integrate with
                              YouTube API Services. By using our
                              Services, you agree to be bound by
                              the YouTube Terms of Service and
                              Google Privacy Policy.
                            </p>
                            <p className="mt-2">
                              Upon request for data removal,
                              users can revoke the API Client's
                              access to their data via the
                              Google security settings page:
                              Google Security Settings.
                            </p>
                            <p className="mt-2 font-medium">
                              Linking Your YouTube Account
                            </p>
                            <p>
                              Linking your YouTube account to
                              our Social Media Management
                              Solution involves using YouTube's
                              API connection. You can revoke
                              access to this data through the
                              same Google security settings
                              page.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              3. Google User Data Access and Use
                            </h3>
                            <p>
                              Our application accesses certain
                              Google user data through Google
                              APIs to provide our
                              email-ticketing services.
                              Specifically, we may access:
                            </p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                              <li>
                                <strong>Gmail Data:</strong>{" "}
                                Email messages, metadata
                                (sender, recipient, subject,
                                timestamps), labels, and thread
                                information to convert emails
                                into support tickets and enable
                                response management.
                              </li>
                              <li>
                                <strong>
                                  Profile Information:
                                </strong>{" "}
                                Your primary Google Account
                                email address and basic profile
                                information for account
                                identification and service
                                personalization.
                              </li>
                              <li>
                                <strong>
                                  Contact Information:
                                </strong>{" "}
                                Your Google contacts (read-only)
                                to assist with email address
                                autocomplete when responding to
                                tickets.
                              </li>
                            </ul>
                            <p className="mt-2">
                              We do not use this data for any
                              purpose beyond providing our core
                              ticketing and customer support
                              services, nor do we share it with
                              third parties except as required
                              to provide our services or as
                              outlined in this privacy policy.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              4. Compliance with Google's
                              Limited Use Policy
                            </h3>
                            <p>
                              Awshar AI's use and transfer of
                              information received from Google
                              APIs will adhere to the Google API
                              Services User Data Policy,
                              including the Limited Use
                              requirements.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              5. Our Services
                            </h3>
                            <p>
                              By using our services, you agree
                              to:
                            </p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                              <li>
                                Use the services strictly for
                                business and professional
                                purposes.
                              </li>
                              <li>
                                Be at least 18 years old or
                                legally able to enter into a
                                binding agreement.
                              </li>
                              <li>
                                Comply with all applicable laws
                                and terms in this Agreement.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              6. Data Collection Practices
                            </h3>
                            <p>We collect information:</p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                              <li>
                                Directly from your interactions
                                with our website or team.
                              </li>
                              <li>
                                Automatically through cookies,
                                analytics tools, and device
                                tracking.
                              </li>
                              <li>
                                From third-party sources, such
                                as social media interactions and
                                publicly available data.
                              </li>
                            </ul>
                            <p className="mt-2 font-medium">
                              Cookies and Tracking
                            </p>
                            <p>We use cookies for:</p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                              <li>Necessary site functions.</li>
                              <li>Enhanced usability.</li>
                              <li>
                                Analytics and performance
                                optimization.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              7. Data Use and Protection
                            </h3>
                            <p>Your data may be used to:</p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                              <li>
                                Provide and improve our
                                services.
                              </li>
                              <li>
                                Communicate updates and
                                promotions.
                              </li>
                              <li>
                                Analyze usage patterns for
                                better performance.
                              </li>
                            </ul>
                            <p className="mt-2">
                              We use SSL encryption, secure
                              storage, and strict access control
                              to protect your data.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              8. Data Sharing
                            </h3>
                            <p>
                              We do not sell your personal
                              information. Data may be shared
                              only with:
                            </p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                              <li>
                                Trusted service providers bound
                                by confidentiality agreements.
                              </li>
                              <li>
                                Legal authorities when required
                                by law.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              9. Your Privacy Rights
                            </h3>
                            <p>
                              You have the right to access,
                              update, or delete your personal
                              information. You can request these
                              actions by contacting
                              hello@awshar.in.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              10. Data Privacy for Minors
                            </h3>
                            <p>
                              Our website and services are not
                              intended for individuals under 18
                              years old.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              11. Awshar AI's Role as a Service
                              Provider and Processor
                            </h3>
                            <p>
                              As a processor, we handle data
                              only as instructed by our clients
                              and in line with signed
                              agreements.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              12. Disclaimers and Liability
                            </h3>
                            <p>
                              Our services are provided "as is,"
                              and we disclaim liability for
                              indirect damages.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              13. Governing Law
                            </h3>
                            <p>
                              This Policy is governed by the
                              laws of India, with disputes
                              resolved via arbitration in New
                              Delhi, India, under the
                              Arbitration and Conciliation Act,
                              1996.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              14. Contact Us
                            </h3>
                            <p>
                              For privacy concerns, you can
                              reach us at:
                            </p>
                            <div className="mt-2 space-y-1">
                              <p>
                                <strong>
                                  Delishia Analytics LLP (Awshar
                                  AI)
                                </strong>
                              </p>
                              <p>
                                C202, Naveen Place, Najafgarh,
                                New Delhi 110072
                              </p>
                              <p>📞 Mobile: +91-9319312955</p>
                              <p>
                                👤 Contact Person: Mr. Umesh
                                Kumar
                              </p>
                              <p>📧 Email: hello@awshar.in</p>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </li>
                <li>
                  <Dialog
                    open={showTermsOfService}
                    onOpenChange={setShowTermsOfService}
                  >
                    <DialogTrigger asChild>
                      <button className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                        Terms of Service
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] p-0">
                      <DialogHeader className="p-6 pb-2">
                        <DialogTitle className="text-xl">
                          Terms of Service
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-600">
                          Last Updated: Aug 2025
                        </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="max-h-[60vh] px-6 pb-6">
                        <div className="space-y-6 text-sm leading-relaxed">
                          <p>
                            These Terms of Service ("Terms")
                            regulate the access and utilization
                            of the services provided by Delishia
                            Analytics LLP (operating as Awshar
                            AI, "We", "Us", or "Our"),
                            encompassing the website,
                            applications, application plug-ins,
                            and other services offered by Us
                            (collectively referred to as the
                            "Service").
                          </p>

                          <p>
                            Individuals or entities using the
                            Service or creating an account
                            ("Account") and their Authorized
                            Users are collectively denoted as
                            "Customers," while those visiting
                            the "Website" (accessible at
                            https://www.awshar.in) are referred
                            to as "Site Visitors." In these
                            Terms, both Customers and Site
                            Visitors are addressed as "You" and
                            "Your" as applicable.
                          </p>

                          <p>
                            These Terms are in addition to, and
                            do not nullify, any other agreement
                            between You and Us or any other
                            applicable terms and conditions
                            found on the Service. If You are a
                            paid Customer ("Paid Customer") and
                            You and/or Your organization are
                            bound by a Master Service Agreement
                            ("MSA") with Us, then these Terms
                            will apply only to use of the
                            Service to the extent such use is
                            not already governed by the MSA.
                          </p>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              1. Acceptance of Terms
                            </h3>
                            <p>
                              By using the Website or Service,
                              You agree to comply with these
                              Terms, Our Privacy Policy, and Our
                              Cookie Policy. Your use implies
                              acceptance of these Terms; refrain
                              from using the Service if You
                              disagree.
                            </p>
                            <p className="mt-2">
                              We reserve the right, at Our
                              discretion, to modify or
                              discontinue the Service or these
                              Terms, with or without notice. The
                              latest version will always be
                              posted on the Service, so check
                              periodically for changes.
                              Continued use of the Service after
                              changes constitutes acceptance of
                              the updated Terms.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              2. About Awshar AI
                            </h3>
                            <p>
                              Awshar AI specializes in providing
                              Software as a Service (SaaS) and
                              offers advanced technology
                              solutions tailored for digital
                              intelligence, customer engagement,
                              brand monitoring, analytics, and
                              AI-powered insights. Our platform
                              leverages Artificial Intelligence
                              (AI), Big Data, and Automation to
                              deliver real-time, actionable
                              intelligence.
                            </p>
                            <p className="mt-2">
                              You acknowledge that the services
                              We offer may be updated or
                              modified from time to time without
                              prior notice.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              3. Definitions
                            </h3>
                            <p>
                              For the purposes of these Terms:
                            </p>
                            <div className="mt-2 space-y-2">
                              <p>
                                <strong>Authorized User</strong>{" "}
                                – Any individual or entity who
                                has subscribed to Awshar AI's
                                services or is employed/engaged
                                by the Paid Customer (including
                                agency partners, agents, channel
                                partners) and has been
                                authorized to access and use the
                                Awshar AI platform.
                              </p>
                              <p>
                                <strong>Company</strong> –
                                Delishia Analytics LLP,
                                operating as Awshar AI, C202,
                                Naveen Place, Najafgarh, New
                                Delhi 110072.
                              </p>
                              <p>
                                <strong>
                                  Third-party Social Media
                                  Service
                                </strong>{" "}
                                – Content and services provided
                                by external parties accessible
                                through the Service, including
                                platforms like Facebook,
                                YouTube, Twitter, Instagram,
                                customer review sites, and news
                                portals.
                              </p>
                              <p>
                                <strong>
                                  Interactive Areas
                                </strong>{" "}
                                – Designated sections of the
                                Website where Customers can
                                engage (e.g., comments, forums).
                              </p>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              4. Eligibility
                            </h3>
                            <p>
                              By using the Service, You confirm
                              that You are at least 18 years old
                              and have the legal capacity to
                              enter into a binding agreement. If
                              You represent an organization, You
                              warrant that You have authority to
                              bind that entity.
                            </p>
                            <p className="mt-2">
                              You may not access the Service if
                              You are Our direct competitor
                              without Our prior written consent.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              5. Account Registration
                            </h3>
                            <p>
                              When creating an account, You must
                              provide accurate, up-to-date
                              information and maintain the
                              security of Your login
                              credentials. You are responsible
                              for all activity under Your
                              account.
                            </p>
                            <p className="mt-2">
                              We may suspend or terminate Your
                              account if we detect misuse or a
                              violation of these Terms.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              6. Free Trials
                            </h3>
                            <p>
                              We may offer free trials for
                              specific features for a limited
                              time. At the end of the trial
                              period, certain features may no
                              longer be accessible unless a paid
                              subscription is purchased.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              7. Fees & No Refunds
                            </h3>
                            <p>
                              Certain features may require
                              payment. You agree to pay all
                              applicable fees and taxes. All
                              payments are non-refundable.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              8. Intellectual Property
                            </h3>
                            <p>
                              All content, trademarks, logos,
                              and software associated with the
                              Service are the exclusive property
                              of Awshar AI or its licensors.
                              Unauthorized reproduction,
                              modification, or distribution is
                              prohibited.
                            </p>
                            <p className="mt-2">
                              You retain ownership of Your
                              customer content but grant Us a
                              license to use it solely for
                              providing the Service.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              9. Confidentiality
                            </h3>
                            <p>
                              Each party agrees to protect the
                              other's confidential information
                              with at least the same degree of
                              care as its own, and not to
                              disclose it except as required to
                              provide the Service or by law.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              10. Cookies & Data Collection
                            </h3>
                            <p>
                              We use cookies and similar
                              technologies for functionality,
                              analytics, and personalization. By
                              using the Service, You consent to
                              Our cookie usage as outlined in
                              Our Privacy Policy.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              11. Security
                            </h3>
                            <p>
                              We employ industry-standard
                              security measures to protect Your
                              data but cannot guarantee complete
                              security due to the nature of the
                              internet.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              12. Responsibilities
                            </h3>
                            <p className="font-medium">
                              Our Responsibilities:
                            </p>
                            <ul className="list-disc list-inside space-y-1 mt-1">
                              <li>
                                Provide the purchased Service
                                with reasonable care and skill.
                              </li>
                              <li>
                                Schedule downtime only when
                                necessary, with prior notice
                                when possible.
                              </li>
                            </ul>
                            <p className="font-medium mt-3">
                              Your Responsibilities:
                            </p>
                            <ul className="list-disc list-inside space-y-1 mt-1">
                              <li>
                                Use the Service only for lawful
                                purposes.
                              </li>
                              <li>
                                Keep Your login credentials
                                secure.
                              </li>
                              <li>
                                Ensure any data You provide is
                                accurate and lawful.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              13. Prohibited Activities
                            </h3>
                            <p>You must not:</p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                              <li>
                                Use the Service for unlawful
                                purposes.
                              </li>
                              <li>
                                Infringe intellectual property
                                rights.
                              </li>
                              <li>
                                Upload harmful, offensive, or
                                malicious content.
                              </li>
                              <li>
                                Attempt to gain unauthorized
                                access to the Service.
                              </li>
                              <li>
                                Reverse engineer or tamper with
                                the Service.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              14. Privacy
                            </h3>
                            <p>
                              Your personal data is collected,
                              used, and shared as outlined in
                              Our Privacy Policy.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              15. Customer Data
                            </h3>
                            <p>
                              You are responsible for all
                              content and data submitted through
                              Your account. You must ensure that
                              You have all rights and
                              permissions to provide this data
                              to Us.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              16. Termination
                            </h3>
                            <p>
                              We may suspend or terminate Your
                              account if You breach these Terms.
                              Upon termination, Your right to
                              use the Service will immediately
                              cease.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              17. Third-Party Content
                            </h3>
                            <p>
                              We may provide links to
                              third-party services. We are not
                              responsible for their content or
                              practices.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              18. Warranties & Disclaimers
                            </h3>
                            <p>
                              The Service is provided "as is"
                              without warranties of any kind. We
                              do not guarantee uninterrupted
                              availability or error-free
                              operation.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              19. Indemnification
                            </h3>
                            <p>
                              You agree to indemnify and hold Us
                              harmless from any claims, damages,
                              or losses arising from Your use of
                              the Service or breach of these
                              Terms.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              20. Limitation of Liability
                            </h3>
                            <p>
                              Our total liability to You will
                              not exceed the total fees paid by
                              You in the last six (6) months
                              prior to the claim.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              21. Governing Law & Jurisdiction
                            </h3>
                            <p>
                              These Terms are governed by the
                              laws of India. Disputes will be
                              subject to the exclusive
                              jurisdiction of the courts in New
                              Delhi, India.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              22. Contact Us
                            </h3>
                            <p>
                              For questions about these Terms,
                              contact:
                            </p>
                            <div className="mt-2 space-y-1">
                              <p>
                                <strong>
                                  Delishia Analytics LLP (Awshar
                                  AI)
                                </strong>
                              </p>
                              <p>
                                📍 C202, Naveen Place,
                                Najafgarh, New Delhi 110072
                              </p>
                              <p>📧 Email: hello@awshar.in</p>
                              <p>📞 Mobile: +91-9319312955</p>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </li>
                <li>
                  <Dialog
                    open={showCookiePolicy}
                    onOpenChange={setShowCookiePolicy}
                  >
                    <DialogTrigger asChild>
                      <button className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                        Cookie Policy
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] p-0">
                      <DialogHeader className="p-6 pb-2">
                        <DialogTitle className="text-xl">
                          Cookie Policy
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-600">
                          Last Updated: Aug 2025
                        </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="max-h-[60vh] px-6 pb-6">
                        <div className="space-y-6 text-sm leading-relaxed">
                          <p>
                            This Cookie Policy explains how
                            Delishia Analytics LLP (operating as
                            Awshar AI, "We", "Us", or "Our")
                            uses cookies and similar
                            technologies on our website
                            https://www.awshar.in and any other
                            online services we operate.
                          </p>

                          <p>
                            We use cookies to make our website
                            function properly, enhance user
                            experience, provide analytics, and
                            deliver personalized content and
                            advertising.
                          </p>

                          <p>
                            By continuing to use our website,
                            you consent to the use of cookies in
                            accordance with this policy. You can
                            manage your preferences at any time
                            as outlined below.
                          </p>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              1. What Are Cookies?
                            </h3>
                            <p>
                              Cookies are small text files
                              placed on your computer or mobile
                              device when you visit a website.
                              They store certain information
                              about your browsing activity,
                              device, and preferences, which can
                              be accessed either during your
                              visit (session cookies) or for
                              future visits (persistent
                              cookies).
                            </p>
                            <p className="mt-2">
                              We also use similar tracking
                              technologies, such as pixels,
                              tags, scripts, and local storage.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              2. Types of Cookies We Use
                            </h3>
                            <p className="mb-3">
                              We use the following categories of
                              cookies:
                            </p>

                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium text-sm mb-1">
                                  a. Strictly Necessary Cookies
                                </h4>
                                <p>
                                  These cookies are essential
                                  for the operation of our
                                  website. They enable you to
                                  navigate and use core features
                                  like secure areas, form
                                  submissions, and account
                                  login.
                                </p>
                                <p className="mt-1 text-gray-600">
                                  <strong>Examples:</strong>{" "}
                                  Session management cookies,
                                  security authentication
                                  cookies.
                                </p>
                              </div>

                              <div>
                                <h4 className="font-medium text-sm mb-1">
                                  b. Functional Cookies
                                </h4>
                                <p>
                                  These cookies allow the
                                  website to remember your
                                  preferences and provide
                                  enhanced, personalized
                                  features, such as remembering
                                  your language selection or
                                  region.
                                </p>
                                <p className="mt-1 text-gray-600">
                                  <strong>Examples:</strong>{" "}
                                  Saving login details,
                                  customizing dashboard layouts.
                                </p>
                              </div>

                              <div>
                                <h4 className="font-medium text-sm mb-1">
                                  c. Analytics and Performance
                                  Cookies
                                </h4>
                                <p>
                                  These cookies help us
                                  understand how visitors
                                  interact with our website by
                                  collecting information about
                                  traffic sources, pages
                                  visited, and user behavior
                                  patterns.
                                </p>
                                <p className="mt-1 text-gray-600">
                                  <strong>Examples:</strong>{" "}
                                  Google Analytics cookies.
                                </p>
                              </div>

                              <div>
                                <h4 className="font-medium text-sm mb-1">
                                  d. Targeting and Advertising
                                  Cookies
                                </h4>
                                <p>
                                  These cookies track your
                                  browsing habits and may be
                                  used to deliver relevant
                                  advertisements. They are also
                                  used to limit the number of
                                  times you see an ad and
                                  measure its effectiveness.
                                </p>
                                <p className="mt-1 text-gray-600">
                                  <strong>Examples:</strong>{" "}
                                  Social media tracking pixels
                                  (Facebook Pixel, LinkedIn
                                  Insight Tag).
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              3. Third-Party Cookies
                            </h3>
                            <p>
                              We may allow third-party service
                              providers to set cookies through
                              our website for analytics,
                              advertising, and social media
                              integration.
                            </p>
                            <p className="mt-2">
                              These include, but are not limited
                              to:
                            </p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                              <li>
                                <strong>
                                  Google Analytics
                                </strong>{" "}
                                – For website analytics.
                              </li>
                              <li>
                                <strong>Facebook Pixel</strong>{" "}
                                – For targeted advertising.
                              </li>
                              <li>
                                <strong>
                                  LinkedIn Insight Tag
                                </strong>{" "}
                                – For business and B2B
                                marketing.
                              </li>
                            </ul>
                            <p className="mt-2">
                              We do not control these cookies,
                              and you should review the
                              respective third-party privacy and
                              cookie policies for more details.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              4. How We Use Cookies
                            </h3>
                            <p>We use cookies to:</p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                              <li>
                                Ensure our website works
                                efficiently.
                              </li>
                              <li>
                                Enhance and personalize your
                                user experience.
                              </li>
                              <li>
                                Analyze site performance and
                                usage trends.
                              </li>
                              <li>
                                Deliver targeted content and
                                ads.
                              </li>
                              <li>
                                Improve our products and
                                services based on user behavior.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              5. Managing and Disabling Cookies
                            </h3>
                            <p className="mb-2">
                              You have the right to decide
                              whether to accept or reject
                              cookies.
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                              <li>
                                <strong>
                                  Browser Settings:
                                </strong>{" "}
                                You can adjust your browser
                                settings to block or delete
                                cookies.
                              </li>
                              <li>
                                <strong>Cookie Banner:</strong>{" "}
                                On your first visit, our cookie
                                banner allows you to accept or
                                customize your preferences.
                              </li>
                              <li>
                                <strong>Opt-Out Tools:</strong>{" "}
                                You may opt out of third-party
                                tracking through tools like
                                Google Ads Settings or Your
                                Online Choices.
                              </li>
                            </ul>
                            <p className="mt-2 text-gray-600">
                              <strong>Note:</strong> Disabling
                              certain cookies may affect the
                              functionality of our website.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              6. Changes to This Policy
                            </h3>
                            <p>
                              We may update this Cookie Policy
                              from time to time to reflect
                              changes in technology, law, or our
                              business practices. Updated
                              policies will be posted on this
                              page with a new "Last Updated"
                              date.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-base mb-2">
                              7. Contact Us
                            </h3>
                            <p>
                              For questions or concerns about
                              this Cookie Policy, contact:
                            </p>
                            <div className="mt-2 space-y-1">
                              <p>
                                <strong>
                                  Delishia Analytics LLP (Awshar
                                  AI)
                                </strong>
                              </p>
                              <p>
                                📍 C202, Naveen Place,
                                Najafgarh, New Delhi 110072
                              </p>
                              <p>📧 Email: hello@awshar.in</p>
                              <p>📞 Mobile: +91-9319312955</p>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Instagram className="w-4 h-4 mr-3 text-gray-400" />
                  <a
                    href="https://www.instagram.com/awshar.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    DM us at Awshar.in
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <MessageCircle className="w-4 h-4 mr-3 text-gray-400" />
                  <a
                    href="https://wa.me/919319312955"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    WA us on 9319312955
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <X className="w-4 h-4 mr-3 text-gray-400" />
                  <a
                    href="https://x.com/AwsharInX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Follow us @Awshar.in
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Linkedin className="w-4 h-4 mr-3 text-gray-400" />
                  <a
                    href="http://linkedin.com/company/awshar-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Follow us on LinkedIn
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" />
                  <a
                    href="mailto:hello@awshar.in"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Email us at hello@awshar.in
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Youtube className="w-4 h-4 mr-3 text-gray-400" />
                  <a
                    href="https://www.youtube.com/@AwsharAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Check us out on Awshar.in
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Stay Updated */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">
                Stay Updated
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Get the latest insights and product updates
                delivered to your inbox.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="space-y-3"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmittingNewsletter}
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-sm"
                >
                  {isSubmittingNewsletter ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Awshar AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}