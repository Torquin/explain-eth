import React, { useState } from 'react'
import { useBlockchainContext } from '../contexts/BlockchainContext'
import TransactionModal from '../components/TransactionModal'
import TransactionHistoryOverlay from '../components/TransactionHistoryOverlay'
import Navigation from '../components/Navigation'
import UnderConstructionBanner from '../components/UnderConstructionBanner'
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const Apps2Page: React.FC = () => {
  const { t } = useTranslation();
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)

  const {
    ethereumState,
    rollupState,
    transactionHistory,
    modalState,
    currentPendingTransaction,
    closeModal
  } = useBlockchainContext()

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        
        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          
          {/* Apps2 Section */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-white mb-8">{t('Apps2Page.daabm15q')}</h1>

            <UnderConstructionBanner />

            <p>
              {t('Apps2Page.kwu9h3c3')}
            </p>

            <p>
              {t('Apps2Page.vqe06pdd')}
            </p>

            <p>
              {t('Apps2Page.u5g8j7qj')}
            </p>

            <p>
              {t('Apps2Page.m0o2a5tk')}
            </p>

            <ol>
              <li>{t('Apps2Page.cjtczuqk')}</li>
              <li>{t('Apps2Page.emq6yw9l')}</li>
              <li>{t('Apps2Page.u4njx859')}</li>
            </ol>

          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-8">{t('Apps2Page.9s9owvh2')}</h2>

            <p>
              {t('Apps2Page.7e44t3nr')} 
            </p>

            <p>
              {t('Apps2Page.c6a4neai')} 
            </p>

            <p>
              {t('Apps2Page.d1w0hqfc')}
            </p>

            <p>
              <Trans i18nKey="Apps2Page.c3ybpklc" components={{ em: <em></em> }} />
            </p>

          </section>


        </article>

        {/* Navigation */}
        <Navigation />

      </div>

      {/* Transaction Modal */}
      {modalState.isOpen && (
        <TransactionModal
          isOpen={modalState.isOpen}
          type={modalState.type}
          message={modalState.message}
          onClose={closeModal}
          pendingTransaction={currentPendingTransaction}
        />
      )}

      {/* Transaction History Overlay */}
      <TransactionHistoryOverlay
        ethereumTransactions={transactionHistory.filter(tx => tx.chain === 'ethereum')}
        rollupTransactions={transactionHistory.filter(tx => tx.chain === 'rollup')}
        ethereumPendingCount={ethereumState.pendingTransactions}
        rollupPendingCount={rollupState.pendingTransactions}
        isOpen={isHistoryOpen}
        onToggle={() => setIsHistoryOpen(!isHistoryOpen)}
        hideRollupTab={true}
      />
    </div>
  )
}

export default Apps2Page
