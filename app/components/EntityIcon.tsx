import React from 'react'
import { FaFire } from "react-icons/fa";
import { PiFarm } from "react-icons/pi";
import { GiBrain } from "react-icons/gi";
import { HiDatabase } from "react-icons/hi";

const DEFAULT_SIZE = '1.5rem'

const EntityIcon = ({entity, size}: {entity: string; size?: string}) => {
  if (entity === 'cluster_plotter') return <FaFire color='red' size={size || DEFAULT_SIZE} />
  if (entity === 'cluster_cache') return <HiDatabase color='blue' size={size || DEFAULT_SIZE} />
  if (entity === 'cluster_controller') return <GiBrain color='black' size={size || DEFAULT_SIZE} />
  if (entity === 'cluster_farmer') return <PiFarm color='green' size={size || DEFAULT_SIZE} />
}

export default EntityIcon