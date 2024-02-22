
import type { Metadata } from 'next'
import React from 'react'

export default function AboutPage() {
  return (
      <div className='text-7xl'>AboutPage</div>
  )
}


export const metadata: Metadata = {
  title: 'SEO title',
  description: 'SEO description',
  keywords: ['about', 'information','Hugo Vera'],
}