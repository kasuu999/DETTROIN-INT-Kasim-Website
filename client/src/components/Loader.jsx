import React from 'react'

const Loader = ({ label = 'Loading...', fullScreen = false }) => {
  const containerClass = fullScreen
    ? 'min-h-[50vh] flex flex-col items-center justify-center'
    : 'flex flex-col items-center justify-center py-10'

  return (
    <div className={containerClass} role="status" aria-live="polite">
      <div className="h-10 w-10 rounded-full border-4 border-navy-100 border-t-gold animate-spin" />
      <p className="mt-3 text-sm text-navy-400 font-medium">{label}</p>
    </div>
  )
}

export default Loader