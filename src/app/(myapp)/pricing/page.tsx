'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Check, Bitcoin, EclipseIcon as Ethereum } from 'lucide-react'

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Pro Trader',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Real-time market data',
        'Advanced charting tools',
        'Portfolio tracking',
        'Email alerts',
        '24/7 support',
      ],
    },
    {
      name: 'Master Trader',
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        'All Pro Trader features',
        'AI-powered trading signals',
        'Automated trading bots',
        'Risk management tools',
        'Priority 24/7 support',
      ],
    },
  ]

  return (
    <div className='flex justify-center w-[65vw] md:ml-4 mx-auto'>
    <div className="rounded-3xl h-[90vh] w-screen mx-auto bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Bitcoin className="w-8 h-8 text-yellow-500" />
            <Ethereum className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-extrabold text-green-500">CryptoTrade Pricing</h1>
          </motion.div>
          <p className="mt-4 text-xl text-gray-300">
            Choose the perfect plan for your trading journey
          </p>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-4">
          <Label htmlFor="pricing-toggle" className={isYearly ? 'text-gray-400' : 'text-white'}>Monthly</Label>
          <Switch
            id="pricing-toggle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <Label htmlFor="pricing-toggle" className={isYearly ? 'text-white' : 'text-gray-400'}>Yearly</Label>
          {isYearly && (
            <span className="ml-2 bg-green-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Save 20%
            </span>
          )}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">{plan.name}</CardTitle>
                  <CardDescription className="text-center text-gray-400">
                    For {plan.name === 'Pro Trader' ? 'serious' : 'professional'} traders
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center">
                    <span className="text-5xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                        <span className="ml-3">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-black">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

