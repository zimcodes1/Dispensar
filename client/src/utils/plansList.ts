

export const plans = [
    {
        name: 'Free',
        monthlyPrice: 0,
        annualPrice: 0,
        description: 'Perfect for getting started',
        features: [
            'Up to 100 inventory items',
            'Basic billing & receipts',
            'Single user account',
            'Email support',
            'Mobile responsive',
            'Basic reports'
        ],
        ctaText: 'Get Started Free',
        ctaLink: '/signup'
    },
    {
        name: 'Standard',
        monthlyPrice: 29,
        annualPrice: 290,
        description: 'For growing pharmacies',
        features: [
            'Unlimited inventory items',
            'Advanced billing & invoicing',
            'Up to 5 user accounts',
            'E-prescription integration',
            'Automated reorder alerts',
            'Expiration tracking',
            'Priority email support',
            'Advanced analytics & reports',
            'Barcode scanning',
            'Multi-device access'
        ],
        ctaText: 'Start Free Trial',
        ctaLink: '/signup',
        isPopular: true
    },
    {
        name: 'Enterprise',
        monthlyPrice: 99,
        annualPrice: 990,
        description: 'For pharmacy chains',
        features: [
            'Everything in Standard',
            'Unlimited user accounts',
            'Multi-store management',
            'Custom integrations',
            'Dedicated account manager',
            'Phone & priority support',
            'Custom onboarding & training',
            'Advanced compliance tools',
            'API access',
            'Custom reports',
            'SLA guarantee'
        ],
        ctaText: 'Contact Sales',
        ctaLink: '/contact'
    }
]


export const planTableEnteries = [
                  {
                    feature: "Inventory Items",
                    free: "100",
                    standard: "Unlimited",
                    enterprise: "Unlimited",
                  },
                  {
                    feature: "User Accounts",
                    free: "1",
                    standard: "5",
                    enterprise: "Unlimited",
                  },
                  {
                    feature: "Billing & Receipts",
                    free: "✓",
                    standard: "✓",
                    enterprise: "✓",
                  },
                  {
                    feature: "E-Prescription Integration",
                    free: "—",
                    standard: "✓",
                    enterprise: "✓",
                  },
                  {
                    feature: "Barcode Scanning",
                    free: "—",
                    standard: "✓",
                    enterprise: "✓",
                  },
                  {
                    feature: "Automated Alerts",
                    free: "—",
                    standard: "✓",
                    enterprise: "✓",
                  },
                  {
                    feature: "Advanced Reports",
                    free: "—",
                    standard: "✓",
                    enterprise: "✓",
                  },
                  {
                    feature: "Multi-Store Management",
                    free: "—",
                    standard: "—",
                    enterprise: "✓",
                  },
                  {
                    feature: "API Access",
                    free: "—",
                    standard: "—",
                    enterprise: "✓",
                  },
                  {
                    feature: "Dedicated Support",
                    free: "—",
                    standard: "—",
                    enterprise: "✓",
                  },
                  {
                    feature: "Custom Integrations",
                    free: "—",
                    standard: "—",
                    enterprise: "✓",
                  },
                ]