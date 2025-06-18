import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to intro page
    navigate('/intro')
  }, [navigate])

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p>{t('HomePage.34p628ac')}</p>
      </div>
    </div>
  )
}

export default HomePage
