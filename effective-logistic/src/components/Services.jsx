import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      // ... existing code ...
    </motion.div>
  )
}

export default Services 