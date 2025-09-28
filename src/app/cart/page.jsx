import React from 'react'
import { getMayToken } from '@/lib/mayToken';

const cart = async() => {

await getMayToken();

  return (
	<div>cart</div>
  )
}

export default cart