import React from 'react'
import { CalendarDays } from 'lucide-react'

const formatDate = (dateString) => {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return dateString
  }
}

const NoticeCard = ({ notice }) => {
  const { title, description, date } = notice

  return (
    <div className="card flex flex-col sm:flex-row gap-4 sm:items-start">
      <div className="flex sm:flex-col items-center sm:items-center justify-center bg-navy text-white rounded-xl px-4 py-3 shrink-0 w-fit">
        <CalendarDays className="h-4 w-4 text-gold mb-1 hidden sm:block" />
        <span className="text-sm font-semibold whitespace-nowrap">{formatDate(date)}</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-navy mb-1">{title}</h3>
        <p className="text-navy-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default NoticeCard