import React from 'react';
import './Settings.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-wrapper">
      <h2 className="terms-title">Terms and Conditions</h2>
      <div className="terms-content">
        <h3>1. Introduction</h3>
        <p>Welcome to VisionFit! These are the terms and conditions governing your use of our website and services...</p>

        <h3>2. Acceptance of Terms</h3>
        <p>By accessing or using the VisionFit services, you agree to be bound by these Terms...</p>

        <h3>3. Privacy Policy</h3>
        <p>Your privacy is important to us. Our privacy policy outlines how we collect and use your personal information...</p>

        <h3>4. User Responsibilities</h3>
        <p>You are responsible for your account and must ensure that your use of our services adheres to these terms...</p>

        <h3>5. Limitation of Liability</h3>
        <p>We are not liable for any damages arising out of your use of the service. Our maximum liability will not exceed the amount you've paid for the service...</p>

        <h3>6. Changes to Terms</h3>
        <p>We reserve the right to modify these terms at any time. All changes will be posted on this page...</p>

        <h3>7. Premium Services</h3>
        <p>
          VisionFit offers Premium services with added benefits. By purchasing a Premium subscription, you agree to the following terms:
        </p>
        <ul>
          <li><strong>Subscription Fee:</strong> The Premium service is available for a monthly or yearly fee as specified on our website.</li>
          <li><strong>Automatic Renewal:</strong> Premium subscriptions are automatically renewed unless canceled by the user before the renewal date.</li>
          <li><strong>Cancellation:</strong> You can cancel your Premium subscription at any time from your account settings. Cancellations will take effect at the end of the current billing cycle.</li>
          <li><strong>Benefits:</strong> Premium users get access to exclusive content, additional features, and an ad-free experience. The full list of benefits is available on our website.</li>
          <li><strong>No Refunds:</strong> Once a payment has been made for a Premium subscription, it is non-refundable.</li>
        </ul>

        <h3>8. Contact Us</h3>
        <p>If you have any questions about these Terms and Conditions, or your Premium subscription, please contact us at support@visionfit.com.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
