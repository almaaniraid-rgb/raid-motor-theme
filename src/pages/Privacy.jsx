import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Privacy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Search queries and search history (if enabled in settings)',
        'Device information and browser type',
        'IP address and general location data',
        'Usage statistics and interaction data',
        'Cookies and similar tracking technologies'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our search services',
        'To personalize your search experience',
        'To analyze usage patterns and optimize performance',
        'To prevent fraud and abuse',
        'To comply with legal obligations'
      ]
    },
    {
      title: 'Data Storage and Security',
      content: [
        'Search history is stored locally in your browser',
        'We use industry-standard encryption for data transmission',
        'Our servers are protected by enterprise-grade security',
        'Regular security audits and vulnerability assessments',
        'Compliance with GDPR, CCPA, and other privacy regulations'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Access your personal data at any time',
        'Request deletion of your search history',
        'Opt out of analytics and tracking',
        'Export your data in a portable format',
        'Withdraw consent for data processing'
      ]
    },
    {
      title: 'Third-Party Services',
      content: [
        'We aggregate results from multiple search engines',
        'Third-party services may have their own privacy policies',
        'We do not sell your personal information to third parties',
        'Analytics services help us improve our product',
        'All third-party integrations are carefully vetted'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'Essential cookies for website functionality',
        'Preference cookies to remember your settings',
        'Analytics cookies to understand usage patterns',
        'You can manage cookies in your browser settings',
        'Opt-out options available in Settings page'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="gradient-bg py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 bg-white/20">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90">
            Last updated: November 15, 2025
          </p>
        </motion.div>
      </div>

      <div className="bg-bg-light dark:bg-bg-dark py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card mb-8"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              At RAID MOTOR, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our search service. Please read
              this policy carefully. If you do not agree with the terms of this privacy policy, please do
              not access the service.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h2 className="text-2xl font-bold mb-4 gradient-text">
                  {index + 1}. {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="card mt-8"
          >
            <h2 className="text-2xl font-bold mb-4 gradient-text">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>
                <strong className="text-gray-900 dark:text-white">Email:</strong>{' '}
                privacy@raidmotor.com
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Address:</strong>{' '}
                123 Tech Street, San Francisco, CA 94105
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="card mt-8 bg-primary/10 border-primary"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Updates to This Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the "Last updated" date. You are
              advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
              Policy are effective when they are posted on this page.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
