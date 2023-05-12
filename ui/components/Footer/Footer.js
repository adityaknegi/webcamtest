import React from 'react'
import Link from 'next/link'
import Container from '@/atoms/Container'

export default function Footer({ className }) {
	return (
		<footer className={`text-gray-900 text-sm overflow-hidden mb-10 ${className}`}>
			<Container type='type0' className='px-4 md:px-0'>
				<div className="font-Nunito font-normal text-sm text-monochromatic pt-6 text-center">
					Designed and developed with ❤  @2023
				</div>
			</Container>
		</footer>
	)
}
