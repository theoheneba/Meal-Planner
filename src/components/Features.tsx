import React from 'react';
import { Utensils, Heart, Clock, Target, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    name: 'Personalized Meal Plans',
    description: 'Get custom meal plans based on your preferences and dietary needs.',
    icon: Utensils,
  },
  {
    name: 'Nutritional Balance',
    description: 'Every meal plan is nutritionally balanced for optimal health.',
    icon: Heart,
  },
  {
    name: 'Time-Saving',
    description: 'Save hours on meal planning and grocery shopping.',
    icon: Clock,
  },
  {
    name: 'Goal Tracking',
    description: 'Track your progress towards your fitness and health goals.',
    icon: Target,
  },
  {
    name: 'Dietary Restrictions',
    description: 'Accommodates allergies and dietary preferences.',
    icon: ShieldCheck,
  },
  {
    name: 'Smart Recommendations',
    description: 'AI-powered suggestions that adapt to your tastes.',
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for healthy eating
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive meal planning platform helps you achieve your health goals with ease.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}